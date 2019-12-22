import * as BabelTypes from "@babel/types";
import { Visitor, NodePath, VisitNode, Binding, Node } from "@babel/traverse";
import {
  BlockStatement,
  MemberExpression,
  Function,
  VariableDeclaration,
  Expression
} from "@babel/types";

export interface Babel {
  types: typeof BabelTypes;
}

interface Plugin {
  visitor: Visitor;
}

interface identifierVisitorProto {
  identName: string;
  recursionCounter: number;
  types: Babel["types"];
}

const resolveNodeValue = (types: Babel["types"]) => (
  node?: Node | null
): Expression => {
  if (types.isAssignmentPattern(node)) {
    if (types.isVariableDeclaration(node.right)) {
      return resolveNodeValue(types)(node.right);
    } else if (types.isLiteral(node.right)) {
      return types.toExpression(node.right);
    }
  } else if (types.isVariableDeclarator(node)) {
    return resolveNodeValue(types)(node.init);
  } else if (types.isLiteral(node)) {
    return node;
  }

  return types.valueToNode(undefined);
};

const getBindingInitializer = (types: Babel["types"]) => (binding: Binding) => {
  if (types.isAssignmentPattern(binding.path.node)) {
    return binding.path.node.right;
  }
};

const createLoopParams = (types: Babel["types"]) => (binding: Binding) => {
  return types.assignmentPattern(
    binding.identifier,
    resolveNodeValue(types)(binding.path.node)
  );
};

const createLoopIdentifiers = (types: Babel["types"]) => (binding: Binding) =>
  binding.identifier;

const functionTransformVisitor: Visitor<identifierVisitorProto> = {
  Function: {
    exit(path: NodePath<Function>) {
      const functionBindings = new WeakSet();
      const functionBody = path.get("body") as NodePath<BlockStatement>;

      const setBindingsVisitor: Visitor = {
        Identifier: identPath => {
          const binding = identPath.scope.getBinding(
            (identPath.node as any).name
          );

          if (binding) {
            functionBindings.add(binding);
          }
        }
      };

      const loopVisitor: Visitor = {
        Loop: loopPath => {
          const references: Binding[] = [];
          const test = (loopPath.get("test") as any).node;
          const loopBody = (loopPath.get("body") as any).node.body;
          const recursionName = `${this.identName}_recursion${this
            .recursionCounter++}`;

          let loopInit: any = null;

          if (this.types.isForStatement(loopPath.node)) {
            loopPath.node.update &&
              loopBody.push(
                this.types.expressionStatement(loopPath.node.update)
              );

            loopInit = loopPath.node.init;

            if (loopInit) {
              functionBody.node.body.unshift(loopPath.node.init as any);
            }
          }

          loopPath.traverse({
            Identifier: identPath => {
              const binding = identPath.scope.getBinding(identPath.node.name);
              if (!binding) return;

              const parentBlock = binding.scope.path.findParent(x =>
                x.isBlockStatement()
              );
              const isParentParam = path.node.params.includes(
                binding.path.node as any
              );
              const isLoopInit = loopInit?.declarations.includes(
                binding.path.node
              );
              const isInFunctionBody = functionBody.node.body.includes(
                binding.path.findParent(x => x.isVariableDeclaration())
                  ?.node as any
              );

              if (
                functionBindings.has(binding) &&
                !references.includes(binding) &&
                (isParentParam ||
                  parentBlock === path ||
                  isLoopInit ||
                  isInFunctionBody)
              ) {
                references.push(binding);
                const parentDeclaration: any = binding.path.findParent(
                  this.types.isVariableDeclaration
                )?.node;
                if (parentDeclaration && parentDeclaration.kind) {
                  parentDeclaration.kind = "let";
                }
              }
            }
          });

          const recursionParams = references.map(createLoopParams(this.types));

          const recursionIdentifiers: any[] = references.map(
            createLoopIdentifiers(this.types)
          );

          const recursion = this.types.callExpression(
            this.types.identifier(recursionName),
            recursionIdentifiers
          );

          const recursionTest = this.types.ifStatement(
            test,
            this.types.blockStatement([
              ...loopBody,
              this.types.returnStatement(recursion)
            ])
          );

          const recursionFinal = this.types.returnStatement(
            this.types.arrayExpression(recursionIdentifiers)
          );

          loopPath.traverse({
            BreakStatement: breakPath => {
              breakPath.replaceWith(recursionFinal);
            },
            ContinueStatement: continuePath => {
              continuePath.replaceWith(this.types.returnStatement(recursion));
            }
          });

          // This is the loop body converted to a recursive method
          const convertedLoop = this.types.functionDeclaration(
            this.types.identifier(recursionName),
            [...recursionParams],
            this.types.blockStatement([recursionTest, recursionFinal]),
            false,
            false
          );

          if (!this.types.isFunctionDeclaration(path.node)) {
            path
              .findParent(x => x.isVariableDeclaration())
              .insertBefore(convertedLoop);
          } else {
            path.insertBefore(convertedLoop);
          }

          loopPath.replaceWith(
            this.types.assignmentExpression(
              "=",
              this.types.arrayPattern(recursionIdentifiers),
              recursion
            )
          );
        }
      };

      functionBody?.traverse(setBindingsVisitor);
      functionBody?.traverse(loopVisitor);
    }
  }
};

const identifierVisitor: Visitor<identifierVisitorProto> = {
  FunctionDeclaration(path, state) {
    const { node: name } = path.get("id.name") as any;

    if (name === this.identName) {
      path.parentPath.traverse(functionTransformVisitor, this);
      path.stop();
    }
  },
  VariableDeclaration(path, state) {
    const isName = (path.node.declarations as any[]).some(
      declaration => declaration.id.name === this.identName
    );

    if (isName) {
      path.traverse(functionTransformVisitor, this);
      path.stop();
    }
  }
};

export default function recursify({ types }: Babel): Plugin {
  return {
    visitor: {
      AssignmentExpression(path, state) {
        const memberExpression = path.node.left as MemberExpression;
        const isRecurseIdentifier = types.isIdentifier(
          memberExpression.property,
          { name: "recurse" }
        );
        const isRecurseSymbol = types.isIdentifier(path.node.right, {
          name: "Symbol"
        });

        if (!isRecurseIdentifier || !isRecurseSymbol) return;
        const expressionStatement = path.findParent(node =>
          node.isExpressionStatement()
        );

        if (expressionStatement) {
          expressionStatement.parentPath.traverse(identifierVisitor, {
            types,
            identName: (memberExpression.object as any).name,
            recursionCounter: 0
          });
        }
        path.remove();
      }
    }
  };
}
