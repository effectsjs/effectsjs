this["webpackChunklib"]([0],{

/***/ "../../babel/packages/babel-parser/lib/index.js":
/*!**************************************************************************************!*\
  !*** /home/runner/work/effectsjs/effectsjs/babel/packages/babel-parser/lib/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2;}}Object.defineProperty(exports,'__esModule',{value:true});const beforeExpr=true;const startsExpr=true;const isLoop=true;const isAssign=true;const prefix=true;const postfix=true;class TokenType{constructor(label,conf={}){this.label=label;this.keyword=conf.keyword;this.beforeExpr=!!conf.beforeExpr;this.startsExpr=!!conf.startsExpr;this.rightAssociative=!!conf.rightAssociative;this.isLoop=!!conf.isLoop;this.isAssign=!!conf.isAssign;this.prefix=!!conf.prefix;this.postfix=!!conf.postfix;this.binop=conf.binop!=null?conf.binop:null;this.updateContext=null;}}const keywords=new Map();function createKeyword(name,options={}){options.keyword=name;const token=new TokenType(name,options);keywords.set(name,token);return token;}function createBinop(name,binop){return new TokenType(name,{beforeExpr,binop});}const types={num:new TokenType("num",{startsExpr}),bigint:new TokenType("bigint",{startsExpr}),regexp:new TokenType("regexp",{startsExpr}),string:new TokenType("string",{startsExpr}),name:new TokenType("name",{startsExpr}),eof:new TokenType("eof"),bracketL:new TokenType("[",{beforeExpr,startsExpr}),bracketR:new TokenType("]"),braceL:new TokenType("{",{beforeExpr,startsExpr}),braceBarL:new TokenType("{|",{beforeExpr,startsExpr}),braceR:new TokenType("}"),braceBarR:new TokenType("|}"),parenL:new TokenType("(",{beforeExpr,startsExpr}),parenR:new TokenType(")"),comma:new TokenType(",",{beforeExpr}),semi:new TokenType(";",{beforeExpr}),colon:new TokenType(":",{beforeExpr}),doubleColon:new TokenType("::",{beforeExpr}),dot:new TokenType("."),question:new TokenType("?",{beforeExpr}),questionDot:new TokenType("?."),arrow:new TokenType("=>",{beforeExpr}),template:new TokenType("template"),ellipsis:new TokenType("...",{beforeExpr}),backQuote:new TokenType("`",{startsExpr}),dollarBraceL:new TokenType("${",{beforeExpr,startsExpr}),at:new TokenType("@"),hash:new TokenType("#",{startsExpr}),interpreterDirective:new TokenType("#!..."),eq:new TokenType("=",{beforeExpr,isAssign}),assign:new TokenType("_=",{beforeExpr,isAssign}),incDec:new TokenType("++/--",{prefix,postfix,startsExpr}),bang:new TokenType("!",{beforeExpr,prefix,startsExpr}),tilde:new TokenType("~",{beforeExpr,prefix,startsExpr}),pipeline:createBinop("|>",0),nullishCoalescing:createBinop("??",1),logicalOR:createBinop("||",2),logicalAND:createBinop("&&",3),bitwiseOR:createBinop("|",4),bitwiseXOR:createBinop("^",5),bitwiseAND:createBinop("&",6),equality:createBinop("==/!=/===/!==",7),relational:createBinop("</>/<=/>=",8),bitShift:createBinop("<</>>/>>>",9),plusMin:new TokenType("+/-",{beforeExpr,binop:10,prefix,startsExpr}),modulo:new TokenType("%",{beforeExpr,binop:11,startsExpr}),star:createBinop("*",11),slash:createBinop("/",11),exponent:new TokenType("**",{beforeExpr,binop:12,rightAssociative:true}),_break:createKeyword("break"),_case:createKeyword("case",{beforeExpr}),_catch:createKeyword("catch"),_continue:createKeyword("continue"),_debugger:createKeyword("debugger"),_default:createKeyword("default",{beforeExpr}),_do:createKeyword("do",{isLoop,beforeExpr}),_else:createKeyword("else",{beforeExpr}),_finally:createKeyword("finally"),_for:createKeyword("for",{isLoop}),_function:createKeyword("function",{startsExpr}),_if:createKeyword("if"),_return:createKeyword("return",{beforeExpr}),_switch:createKeyword("switch"),_throw:createKeyword("throw",{beforeExpr,prefix,startsExpr}),_try:createKeyword("try"),_var:createKeyword("var"),_const:createKeyword("const"),_while:createKeyword("while",{isLoop}),_with:createKeyword("with"),_new:createKeyword("new",{beforeExpr,startsExpr}),_this:createKeyword("this",{startsExpr}),_super:createKeyword("super",{startsExpr}),_class:createKeyword("class",{startsExpr}),_extends:createKeyword("extends",{beforeExpr}),_export:createKeyword("export"),_import:createKeyword("import",{startsExpr}),_null:createKeyword("null",{startsExpr}),_true:createKeyword("true",{startsExpr}),_false:createKeyword("false",{startsExpr}),_in:createKeyword("in",{beforeExpr,binop:8}),_instanceof:createKeyword("instanceof",{beforeExpr,binop:8}),_typeof:createKeyword("typeof",{beforeExpr,prefix,startsExpr}),_void:createKeyword("void",{beforeExpr,prefix,startsExpr}),_delete:createKeyword("delete",{beforeExpr,prefix,startsExpr}),perform:createKeyword("perform",{prefix,startsExpr,beforeExpr}),handle:createKeyword("handle",{prefix,startsExpr,beforeExpr}),recall:createKeyword("recall",{prefix,startsExpr,beforeExpr})};const SCOPE_OTHER=0b0000000000,SCOPE_PROGRAM=0b0000000001,SCOPE_FUNCTION=0b0000000010,SCOPE_ASYNC=0b0000000100,SCOPE_GENERATOR=0b0000001000,SCOPE_ARROW=0b0000010000,SCOPE_SIMPLE_CATCH=0b0000100000,SCOPE_SUPER=0b0001000000,SCOPE_DIRECT_SUPER=0b0010000000,SCOPE_CLASS=0b0100000000,SCOPE_TS_MODULE=0b1000000000,SCOPE_VAR=SCOPE_PROGRAM|SCOPE_FUNCTION|SCOPE_TS_MODULE;function functionFlags(isAsync,isGenerator){return SCOPE_FUNCTION|(isAsync?SCOPE_ASYNC:0)|(isGenerator?SCOPE_GENERATOR:0);}const BIND_KIND_VALUE=0b00000000001,BIND_KIND_TYPE=0b00000000010,BIND_SCOPE_VAR=0b00000000100,BIND_SCOPE_LEXICAL=0b00000001000,BIND_SCOPE_FUNCTION=0b00000010000,BIND_FLAGS_NONE=0b00001000000,BIND_FLAGS_CLASS=0b00010000000,BIND_FLAGS_TS_ENUM=0b00100000000,BIND_FLAGS_TS_CONST_ENUM=0b01000000000,BIND_FLAGS_TS_EXPORT_ONLY=0b10000000000;const BIND_CLASS=BIND_KIND_VALUE|BIND_KIND_TYPE|BIND_SCOPE_LEXICAL|BIND_FLAGS_CLASS,BIND_LEXICAL=BIND_KIND_VALUE|0|BIND_SCOPE_LEXICAL|0,BIND_VAR=BIND_KIND_VALUE|0|BIND_SCOPE_VAR|0,BIND_FUNCTION=BIND_KIND_VALUE|0|BIND_SCOPE_FUNCTION|0,BIND_TS_INTERFACE=0|BIND_KIND_TYPE|0|BIND_FLAGS_CLASS,BIND_TS_TYPE=0|BIND_KIND_TYPE|0|0,BIND_TS_ENUM=BIND_KIND_VALUE|BIND_KIND_TYPE|BIND_SCOPE_LEXICAL|BIND_FLAGS_TS_ENUM,BIND_TS_AMBIENT=0|0|0|BIND_FLAGS_TS_EXPORT_ONLY,BIND_NONE=0|0|0|BIND_FLAGS_NONE,BIND_OUTSIDE=BIND_KIND_VALUE|0|0|BIND_FLAGS_NONE,BIND_TS_CONST_ENUM=BIND_TS_ENUM|BIND_FLAGS_TS_CONST_ENUM,BIND_TS_NAMESPACE=0|0|0|BIND_FLAGS_TS_EXPORT_ONLY;function isSimpleProperty(node){return node!=null&&node.type==="Property"&&node.kind==="init"&&node.method===false;}var estree=superClass=>class extends superClass{estreeParseRegExpLiteral({pattern,flags}){let regex=null;try{regex=new RegExp(pattern,flags);}catch(e){}const node=this.estreeParseLiteral(regex);node.regex={pattern,flags};return node;}estreeParseBigIntLiteral(value){const bigInt=typeof BigInt!=="undefined"?BigInt(value):null;const node=this.estreeParseLiteral(bigInt);node.bigint=String(node.value||value);return node;}estreeParseLiteral(value){return this.parseLiteral(value,"Literal");}directiveToStmt(directive){const directiveLiteral=directive.value;const stmt=this.startNodeAt(directive.start,directive.loc.start);const expression=this.startNodeAt(directiveLiteral.start,directiveLiteral.loc.start);expression.value=directiveLiteral.value;expression.raw=directiveLiteral.extra.raw;stmt.expression=this.finishNodeAt(expression,"Literal",directiveLiteral.end,directiveLiteral.loc.end);stmt.directive=directiveLiteral.extra.raw.slice(1,-1);return this.finishNodeAt(stmt,"ExpressionStatement",directive.end,directive.loc.end);}initFunction(node,isAsync){super.initFunction(node,isAsync);node.expression=false;}checkDeclaration(node){if(isSimpleProperty(node)){this.checkDeclaration(node.value);}else{super.checkDeclaration(node);}}checkGetterSetterParams(method){const prop=method;const paramCount=prop.kind==="get"?0:1;const start=prop.start;if(prop.value.params.length!==paramCount){if(prop.kind==="get"){this.raise(start,"getter must not have any formal parameters");}else{this.raise(start,"setter must have exactly one formal parameter");}}else if(prop.kind==="set"&&prop.value.params[0].type==="RestElement"){this.raise(start,"setter function argument must not be a rest parameter");}}checkLVal(expr,bindingType=BIND_NONE,checkClashes,contextDescription,disallowLetBinding){switch(expr.type){case"ObjectPattern":expr.properties.forEach(prop=>{this.checkLVal(prop.type==="Property"?prop.value:prop,bindingType,checkClashes,"object destructuring pattern",disallowLetBinding);});break;default:super.checkLVal(expr,bindingType,checkClashes,contextDescription,disallowLetBinding);}}checkDuplicatedProto(prop,protoRef){if(prop.type==="SpreadElement"||prop.computed||prop.method||prop.shorthand){return;}const key=prop.key;const name=key.type==="Identifier"?key.name:String(key.value);if(name==="__proto__"&&prop.kind==="init"){if(protoRef.used&&!protoRef.start){protoRef.start=key.start;}protoRef.used=true;}}isStrictBody(node){const isBlockStatement=node.body.type==="BlockStatement";if(isBlockStatement&&node.body.body.length>0){for(let _i=0,_node$body$body=node.body.body;_i<_node$body$body.length;_i++){const directive=_node$body$body[_i];if(directive.type==="ExpressionStatement"&&directive.expression.type==="Literal"){if(directive.expression.value==="use strict")return true;}else{break;}}}return false;}isValidDirective(stmt){return stmt.type==="ExpressionStatement"&&stmt.expression.type==="Literal"&&typeof stmt.expression.value==="string"&&(!stmt.expression.extra||!stmt.expression.extra.parenthesized);}stmtToDirective(stmt){const directive=super.stmtToDirective(stmt);const value=stmt.expression.value;directive.value.value=value;return directive;}parseBlockBody(node,allowDirectives,topLevel,end){super.parseBlockBody(node,allowDirectives,topLevel,end);const directiveStatements=node.directives.map(d=>this.directiveToStmt(d));node.body=directiveStatements.concat(node.body);delete node.directives;}pushClassMethod(classBody,method,isGenerator,isAsync,isConstructor,allowsDirectSuper){this.parseMethod(method,isGenerator,isAsync,isConstructor,allowsDirectSuper,"ClassMethod",true);if(method.typeParameters){method.value.typeParameters=method.typeParameters;delete method.typeParameters;}classBody.body.push(method);}parseExprAtom(refShorthandDefaultPos){switch(this.state.type){case types.num:case types.string:return this.estreeParseLiteral(this.state.value);case types.regexp:return this.estreeParseRegExpLiteral(this.state.value);case types.bigint:return this.estreeParseBigIntLiteral(this.state.value);case types._null:return this.estreeParseLiteral(null);case types._true:return this.estreeParseLiteral(true);case types._false:return this.estreeParseLiteral(false);default:return super.parseExprAtom(refShorthandDefaultPos);}}parseLiteral(value,type,startPos,startLoc){const node=super.parseLiteral(value,type,startPos,startLoc);node.raw=node.extra.raw;delete node.extra;return node;}parseFunctionBody(node,allowExpression,isMethod=false){super.parseFunctionBody(node,allowExpression,isMethod);node.expression=node.body.type!=="BlockStatement";}parseMethod(node,isGenerator,isAsync,isConstructor,allowDirectSuper,type,inClassScope=false){let funcNode=this.startNode();funcNode.kind=node.kind;funcNode=super.parseMethod(funcNode,isGenerator,isAsync,isConstructor,allowDirectSuper,type,inClassScope);funcNode.type="FunctionExpression";delete funcNode.kind;node.value=funcNode;type=type==="ClassMethod"?"MethodDefinition":type;return this.finishNode(node,type);}parseObjectMethod(prop,isGenerator,isAsync,isPattern,containsEsc){const node=super.parseObjectMethod(prop,isGenerator,isAsync,isPattern,containsEsc);if(node){node.type="Property";if(node.kind==="method")node.kind="init";node.shorthand=false;}return node;}parseObjectProperty(prop,startPos,startLoc,isPattern,refShorthandDefaultPos){const node=super.parseObjectProperty(prop,startPos,startLoc,isPattern,refShorthandDefaultPos);if(node){node.kind="init";node.type="Property";}return node;}toAssignable(node,isBinding,contextDescription){if(isSimpleProperty(node)){this.toAssignable(node.value,isBinding,contextDescription);return node;}return super.toAssignable(node,isBinding,contextDescription);}toAssignableObjectExpressionProp(prop,isBinding,isLast){if(prop.kind==="get"||prop.kind==="set"){throw this.raise(prop.key.start,"Object pattern can't contain getter or setter");}else if(prop.method){throw this.raise(prop.key.start,"Object pattern can't contain methods");}else{super.toAssignableObjectExpressionProp(prop,isBinding,isLast);}}finishCallExpression(node,optional){super.finishCallExpression(node,optional);if(node.callee.type==="Import"){node.type="ImportExpression";node.source=node.arguments[0];delete node.arguments;delete node.callee;}return node;}toReferencedListDeep(exprList,isParenthesizedExpr){if(!exprList){return;}super.toReferencedListDeep(exprList,isParenthesizedExpr);}};const lineBreak=/\r\n?|[\n\u2028\u2029]/;const lineBreakG=new RegExp(lineBreak.source,"g");function isNewLine(code){switch(code){case 10:case 13:case 8232:case 8233:return true;default:return false;}}const skipWhiteSpace=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;function isWhitespace(code){switch(code){case 0x0009:case 0x000b:case 0x000c:case 32:case 160:case 5760:case 0x2000:case 0x2001:case 0x2002:case 0x2003:case 0x2004:case 0x2005:case 0x2006:case 0x2007:case 0x2008:case 0x2009:case 0x200a:case 0x202f:case 0x205f:case 0x3000:case 0xfeff:return true;default:return false;}}class TokContext{constructor(token,isExpr,preserveSpace,override){this.token=token;this.isExpr=!!isExpr;this.preserveSpace=!!preserveSpace;this.override=override;}}const types$1={braceStatement:new TokContext("{",false),braceExpression:new TokContext("{",true),templateQuasi:new TokContext("${",false),parenStatement:new TokContext("(",false),parenExpression:new TokContext("(",true),template:new TokContext("`",true,true,p=>p.readTmplToken()),functionExpression:new TokContext("function",true),functionStatement:new TokContext("function",false)};types.parenR.updateContext=types.braceR.updateContext=function(){if(this.state.context.length===1){this.state.exprAllowed=true;return;}let out=this.state.context.pop();if(out===types$1.braceStatement&&this.curContext().token==="function"){out=this.state.context.pop();}this.state.exprAllowed=!out.isExpr;};types.name.updateContext=function(prevType){let allowed=false;if(prevType!==types.dot){if(this.state.value==="of"&&!this.state.exprAllowed||this.state.value==="yield"&&this.scope.inGenerator){allowed=true;}}this.state.exprAllowed=allowed;if(this.state.isIterator){this.state.isIterator=false;}};types.braceL.updateContext=function(prevType){this.state.context.push(this.braceIsBlock(prevType)?types$1.braceStatement:types$1.braceExpression);this.state.exprAllowed=true;};types.dollarBraceL.updateContext=function(){this.state.context.push(types$1.templateQuasi);this.state.exprAllowed=true;};types.parenL.updateContext=function(prevType){const statementParens=prevType===types._if||prevType===types._for||prevType===types._with||prevType===types._while;this.state.context.push(statementParens?types$1.parenStatement:types$1.parenExpression);this.state.exprAllowed=true;};types.incDec.updateContext=function(){};types._function.updateContext=types._class.updateContext=function(prevType){if(prevType.beforeExpr&&prevType!==types.semi&&prevType!==types._else&&!(prevType===types._return&&lineBreak.test(this.input.slice(this.state.lastTokEnd,this.state.start)))&&!((prevType===types.colon||prevType===types.braceL)&&this.curContext()===types$1.b_stat)){this.state.context.push(types$1.functionExpression);}else{this.state.context.push(types$1.functionStatement);}this.state.exprAllowed=false;};types.backQuote.updateContext=function(){if(this.curContext()===types$1.template){this.state.context.pop();}else{this.state.context.push(types$1.template);}this.state.exprAllowed=false;};const reservedWords={strict:["implements","interface","let","package","private","protected","public","static","yield"],strictBind:["eval","arguments"]};const reservedWordsStrictSet=new Set(reservedWords.strict);const reservedWordsStrictBindSet=new Set(reservedWords.strictBind);const isReservedWord=(word,inModule)=>{return inModule&&word==="await"||word==="enum";};function isStrictReservedWord(word,inModule){return isReservedWord(word,inModule)||reservedWordsStrictSet.has(word);}function isStrictBindOnlyReservedWord(word){return reservedWordsStrictBindSet.has(word);}function isStrictBindReservedWord(word,inModule){return isStrictReservedWord(word,inModule)||isStrictBindOnlyReservedWord(word);}function isKeyword(word){return keywords.has(word);}const keywordRelationalOperator=/^in(stanceof)?$/;let nonASCIIidentifierStartChars="\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08bd\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fef\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7c6\ua7f7-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab67\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";let nonASCIIidentifierChars="\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08d3-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1df9\u1dfb-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";const nonASCIIidentifierStart=new RegExp("["+nonASCIIidentifierStartChars+"]");const nonASCIIidentifier=new RegExp("["+nonASCIIidentifierStartChars+nonASCIIidentifierChars+"]");nonASCIIidentifierStartChars=nonASCIIidentifierChars=null;const astralIdentifierStartCodes=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,477,28,11,0,9,21,155,22,13,52,76,44,33,24,27,35,30,0,12,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,0,33,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,0,161,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,270,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,754,9486,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42710,42,4148,12,221,3,5761,15,7472,3104,541];const astralIdentifierCodes=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,525,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,4,9,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,232,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,19723,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,792487,239];function isInAstralSet(code,set){let pos=0x10000;for(let i=0,length=set.length;i<length;i+=2){pos+=set[i];if(pos>code)return false;pos+=set[i+1];if(pos>=code)return true;}return false;}function isIdentifierStart(code){if(code<65)return code===36;if(code<=90)return true;if(code<97)return code===95;if(code<=122)return true;if(code<=0xffff){return code>=0xaa&&nonASCIIidentifierStart.test(String.fromCharCode(code));}return isInAstralSet(code,astralIdentifierStartCodes);}function isIteratorStart(current,next){return current===64&&next===64;}function isIdentifierChar(code){if(code<48)return code===36;if(code<58)return true;if(code<65)return false;if(code<=90)return true;if(code<97)return code===95;if(code<=122)return true;if(code<=0xffff){return code>=0xaa&&nonASCIIidentifier.test(String.fromCharCode(code));}return isInAstralSet(code,astralIdentifierStartCodes)||isInAstralSet(code,astralIdentifierCodes);}const reservedTypes=new Set(["_","any","bool","boolean","empty","extends","false","interface","mixed","null","number","static","string","true","typeof","void"]);function isEsModuleType(bodyElement){return bodyElement.type==="DeclareExportAllDeclaration"||bodyElement.type==="DeclareExportDeclaration"&&(!bodyElement.declaration||bodyElement.declaration.type!=="TypeAlias"&&bodyElement.declaration.type!=="InterfaceDeclaration");}function hasTypeImportKind(node){return node.importKind==="type"||node.importKind==="typeof";}function isMaybeDefaultImport(state){return(state.type===types.name||!!state.type.keyword)&&state.value!=="from";}const exportSuggestions={const:"declare export var",let:"declare export var",type:"export type",interface:"export interface"};function partition(list,test){const list1=[];const list2=[];for(let i=0;i<list.length;i++){(test(list[i],i,list)?list1:list2).push(list[i]);}return[list1,list2];}const FLOW_PRAGMA_REGEX=/\*?\s*@((?:no)?flow)\b/;var flow=superClass=>class extends superClass{constructor(options,input){super(options,input);this.flowPragma=undefined;}shouldParseTypes(){return this.getPluginOption("flow","all")||this.flowPragma==="flow";}shouldParseEnums(){return!!this.getPluginOption("flow","enums");}finishToken(type,val){if(type!==types.string&&type!==types.semi&&type!==types.interpreterDirective){if(this.flowPragma===undefined){this.flowPragma=null;}}return super.finishToken(type,val);}addComment(comment){if(this.flowPragma===undefined){const matches=FLOW_PRAGMA_REGEX.exec(comment.value);if(!matches);else if(matches[1]==="flow"){this.flowPragma="flow";}else if(matches[1]==="noflow"){this.flowPragma="noflow";}else{throw new Error("Unexpected flow pragma");}}return super.addComment(comment);}flowParseTypeInitialiser(tok){const oldInType=this.state.inType;this.state.inType=true;this.expect(tok||types.colon);const type=this.flowParseType();this.state.inType=oldInType;return type;}flowParsePredicate(){const node=this.startNode();const moduloLoc=this.state.startLoc;const moduloPos=this.state.start;this.expect(types.modulo);const checksLoc=this.state.startLoc;this.expectContextual("checks");if(moduloLoc.line!==checksLoc.line||moduloLoc.column!==checksLoc.column-1){this.raise(moduloPos,"Spaces between ´%´ and ´checks´ are not allowed here.");}if(this.eat(types.parenL)){node.value=this.parseExpression();this.expect(types.parenR);return this.finishNode(node,"DeclaredPredicate");}else{return this.finishNode(node,"InferredPredicate");}}flowParseTypeAndPredicateInitialiser(){const oldInType=this.state.inType;this.state.inType=true;this.expect(types.colon);let type=null;let predicate=null;if(this.match(types.modulo)){this.state.inType=oldInType;predicate=this.flowParsePredicate();}else{type=this.flowParseType();this.state.inType=oldInType;if(this.match(types.modulo)){predicate=this.flowParsePredicate();}}return[type,predicate];}flowParseDeclareClass(node){this.next();this.flowParseInterfaceish(node,true);return this.finishNode(node,"DeclareClass");}flowParseDeclareFunction(node){this.next();const id=node.id=this.parseIdentifier();const typeNode=this.startNode();const typeContainer=this.startNode();if(this.isRelational("<")){typeNode.typeParameters=this.flowParseTypeParameterDeclaration();}else{typeNode.typeParameters=null;}this.expect(types.parenL);const tmp=this.flowParseFunctionTypeParams();typeNode.params=tmp.params;typeNode.rest=tmp.rest;this.expect(types.parenR);[typeNode.returnType,node.predicate]=this.flowParseTypeAndPredicateInitialiser();typeContainer.typeAnnotation=this.finishNode(typeNode,"FunctionTypeAnnotation");id.typeAnnotation=this.finishNode(typeContainer,"TypeAnnotation");this.resetEndLocation(id);this.semicolon();return this.finishNode(node,"DeclareFunction");}flowParseDeclare(node,insideModule){if(this.match(types._class)){return this.flowParseDeclareClass(node);}else if(this.match(types._function)){return this.flowParseDeclareFunction(node);}else if(this.match(types._var)){return this.flowParseDeclareVariable(node);}else if(this.eatContextual("module")){if(this.match(types.dot)){return this.flowParseDeclareModuleExports(node);}else{if(insideModule){this.raise(this.state.lastTokStart,"`declare module` cannot be used inside another `declare module`");}return this.flowParseDeclareModule(node);}}else if(this.isContextual("type")){return this.flowParseDeclareTypeAlias(node);}else if(this.isContextual("opaque")){return this.flowParseDeclareOpaqueType(node);}else if(this.isContextual("interface")){return this.flowParseDeclareInterface(node);}else if(this.match(types._export)){return this.flowParseDeclareExportDeclaration(node,insideModule);}else{throw this.unexpected();}}flowParseDeclareVariable(node){this.next();node.id=this.flowParseTypeAnnotatableIdentifier(true);this.scope.declareName(node.id.name,BIND_VAR,node.id.start);this.semicolon();return this.finishNode(node,"DeclareVariable");}flowParseDeclareModule(node){this.scope.enter(SCOPE_OTHER);if(this.match(types.string)){node.id=this.parseExprAtom();}else{node.id=this.parseIdentifier();}const bodyNode=node.body=this.startNode();const body=bodyNode.body=[];this.expect(types.braceL);while(!this.match(types.braceR)){let bodyNode=this.startNode();if(this.match(types._import)){this.next();if(!this.isContextual("type")&&!this.match(types._typeof)){this.raise(this.state.lastTokStart,"Imports within a `declare module` body must always be `import type` or `import typeof`");}this.parseImport(bodyNode);}else{this.expectContextual("declare","Only declares and type imports are allowed inside declare module");bodyNode=this.flowParseDeclare(bodyNode,true);}body.push(bodyNode);}this.scope.exit();this.expect(types.braceR);this.finishNode(bodyNode,"BlockStatement");let kind=null;let hasModuleExport=false;const errorMessage="Found both `declare module.exports` and `declare export` in the same module. "+"Modules can only have 1 since they are either an ES module or they are a CommonJS module";body.forEach(bodyElement=>{if(isEsModuleType(bodyElement)){if(kind==="CommonJS"){this.raise(bodyElement.start,errorMessage);}kind="ES";}else if(bodyElement.type==="DeclareModuleExports"){if(hasModuleExport){this.raise(bodyElement.start,"Duplicate `declare module.exports` statement");}if(kind==="ES")this.raise(bodyElement.start,errorMessage);kind="CommonJS";hasModuleExport=true;}});node.kind=kind||"CommonJS";return this.finishNode(node,"DeclareModule");}flowParseDeclareExportDeclaration(node,insideModule){this.expect(types._export);if(this.eat(types._default)){if(this.match(types._function)||this.match(types._class)){node.declaration=this.flowParseDeclare(this.startNode());}else{node.declaration=this.flowParseType();this.semicolon();}node.default=true;return this.finishNode(node,"DeclareExportDeclaration");}else{if(this.match(types._const)||this.isLet()||(this.isContextual("type")||this.isContextual("interface"))&&!insideModule){const label=this.state.value;const suggestion=exportSuggestions[label];this.unexpected(this.state.start,`\`declare export ${label}\` is not supported. Use \`${suggestion}\` instead`);}if(this.match(types._var)||this.match(types._function)||this.match(types._class)||this.isContextual("opaque")){node.declaration=this.flowParseDeclare(this.startNode());node.default=false;return this.finishNode(node,"DeclareExportDeclaration");}else if(this.match(types.star)||this.match(types.braceL)||this.isContextual("interface")||this.isContextual("type")||this.isContextual("opaque")){node=this.parseExport(node);if(node.type==="ExportNamedDeclaration"){node.type="ExportDeclaration";node.default=false;delete node.exportKind;}node.type="Declare"+node.type;return node;}}throw this.unexpected();}flowParseDeclareModuleExports(node){this.next();this.expectContextual("exports");node.typeAnnotation=this.flowParseTypeAnnotation();this.semicolon();return this.finishNode(node,"DeclareModuleExports");}flowParseDeclareTypeAlias(node){this.next();this.flowParseTypeAlias(node);node.type="DeclareTypeAlias";return node;}flowParseDeclareOpaqueType(node){this.next();this.flowParseOpaqueType(node,true);node.type="DeclareOpaqueType";return node;}flowParseDeclareInterface(node){this.next();this.flowParseInterfaceish(node);return this.finishNode(node,"DeclareInterface");}flowParseInterfaceish(node,isClass=false){node.id=this.flowParseRestrictedIdentifier(!isClass,true);this.scope.declareName(node.id.name,isClass?BIND_FUNCTION:BIND_LEXICAL,node.id.start);if(this.isRelational("<")){node.typeParameters=this.flowParseTypeParameterDeclaration();}else{node.typeParameters=null;}node.extends=[];node.implements=[];node.mixins=[];if(this.eat(types._extends)){do{node.extends.push(this.flowParseInterfaceExtends());}while(!isClass&&this.eat(types.comma));}if(this.isContextual("mixins")){this.next();do{node.mixins.push(this.flowParseInterfaceExtends());}while(this.eat(types.comma));}if(this.isContextual("implements")){this.next();do{node.implements.push(this.flowParseInterfaceExtends());}while(this.eat(types.comma));}node.body=this.flowParseObjectType({allowStatic:isClass,allowExact:false,allowSpread:false,allowProto:isClass,allowInexact:false});}flowParseInterfaceExtends(){const node=this.startNode();node.id=this.flowParseQualifiedTypeIdentifier();if(this.isRelational("<")){node.typeParameters=this.flowParseTypeParameterInstantiation();}else{node.typeParameters=null;}return this.finishNode(node,"InterfaceExtends");}flowParseInterface(node){this.flowParseInterfaceish(node);return this.finishNode(node,"InterfaceDeclaration");}checkNotUnderscore(word){if(word==="_"){this.raise(this.state.start,"`_` is only allowed as a type argument to call or new");}}checkReservedType(word,startLoc,declaration){if(!reservedTypes.has(word))return;if(declaration){this.raise(startLoc,`Cannot overwrite reserved type ${word}`);return;}this.raise(startLoc,`Unexpected reserved type ${word}`);}flowParseRestrictedIdentifier(liberal,declaration){this.checkReservedType(this.state.value,this.state.start,declaration);return this.parseIdentifier(liberal);}flowParseTypeAlias(node){node.id=this.flowParseRestrictedIdentifier(false,true);this.scope.declareName(node.id.name,BIND_LEXICAL,node.id.start);if(this.isRelational("<")){node.typeParameters=this.flowParseTypeParameterDeclaration();}else{node.typeParameters=null;}node.right=this.flowParseTypeInitialiser(types.eq);this.semicolon();return this.finishNode(node,"TypeAlias");}flowParseOpaqueType(node,declare){this.expectContextual("type");node.id=this.flowParseRestrictedIdentifier(true,true);this.scope.declareName(node.id.name,BIND_LEXICAL,node.id.start);if(this.isRelational("<")){node.typeParameters=this.flowParseTypeParameterDeclaration();}else{node.typeParameters=null;}node.supertype=null;if(this.match(types.colon)){node.supertype=this.flowParseTypeInitialiser(types.colon);}node.impltype=null;if(!declare){node.impltype=this.flowParseTypeInitialiser(types.eq);}this.semicolon();return this.finishNode(node,"OpaqueType");}flowParseTypeParameter(requireDefault=false){const nodeStart=this.state.start;const node=this.startNode();const variance=this.flowParseVariance();const ident=this.flowParseTypeAnnotatableIdentifier();node.name=ident.name;node.variance=variance;node.bound=ident.typeAnnotation;if(this.match(types.eq)){this.eat(types.eq);node.default=this.flowParseType();}else{if(requireDefault){this.raise(nodeStart,"Type parameter declaration needs a default, since a preceding type parameter declaration has a default.");}}return this.finishNode(node,"TypeParameter");}flowParseTypeParameterDeclaration(){const oldInType=this.state.inType;const node=this.startNode();node.params=[];this.state.inType=true;if(this.isRelational("<")||this.match(types.jsxTagStart)){this.next();}else{this.unexpected();}let defaultRequired=false;do{const typeParameter=this.flowParseTypeParameter(defaultRequired);node.params.push(typeParameter);if(typeParameter.default){defaultRequired=true;}if(!this.isRelational(">")){this.expect(types.comma);}}while(!this.isRelational(">"));this.expectRelational(">");this.state.inType=oldInType;return this.finishNode(node,"TypeParameterDeclaration");}flowParseTypeParameterInstantiation(){const node=this.startNode();const oldInType=this.state.inType;node.params=[];this.state.inType=true;this.expectRelational("<");const oldNoAnonFunctionType=this.state.noAnonFunctionType;this.state.noAnonFunctionType=false;while(!this.isRelational(">")){node.params.push(this.flowParseType());if(!this.isRelational(">")){this.expect(types.comma);}}this.state.noAnonFunctionType=oldNoAnonFunctionType;this.expectRelational(">");this.state.inType=oldInType;return this.finishNode(node,"TypeParameterInstantiation");}flowParseTypeParameterInstantiationCallOrNew(){const node=this.startNode();const oldInType=this.state.inType;node.params=[];this.state.inType=true;this.expectRelational("<");while(!this.isRelational(">")){node.params.push(this.flowParseTypeOrImplicitInstantiation());if(!this.isRelational(">")){this.expect(types.comma);}}this.expectRelational(">");this.state.inType=oldInType;return this.finishNode(node,"TypeParameterInstantiation");}flowParseInterfaceType(){const node=this.startNode();this.expectContextual("interface");node.extends=[];if(this.eat(types._extends)){do{node.extends.push(this.flowParseInterfaceExtends());}while(this.eat(types.comma));}node.body=this.flowParseObjectType({allowStatic:false,allowExact:false,allowSpread:false,allowProto:false,allowInexact:false});return this.finishNode(node,"InterfaceTypeAnnotation");}flowParseObjectPropertyKey(){return this.match(types.num)||this.match(types.string)?this.parseExprAtom():this.parseIdentifier(true);}flowParseObjectTypeIndexer(node,isStatic,variance){node.static=isStatic;if(this.lookahead().type===types.colon){node.id=this.flowParseObjectPropertyKey();node.key=this.flowParseTypeInitialiser();}else{node.id=null;node.key=this.flowParseType();}this.expect(types.bracketR);node.value=this.flowParseTypeInitialiser();node.variance=variance;return this.finishNode(node,"ObjectTypeIndexer");}flowParseObjectTypeInternalSlot(node,isStatic){node.static=isStatic;node.id=this.flowParseObjectPropertyKey();this.expect(types.bracketR);this.expect(types.bracketR);if(this.isRelational("<")||this.match(types.parenL)){node.method=true;node.optional=false;node.value=this.flowParseObjectTypeMethodish(this.startNodeAt(node.start,node.loc.start));}else{node.method=false;if(this.eat(types.question)){node.optional=true;}node.value=this.flowParseTypeInitialiser();}return this.finishNode(node,"ObjectTypeInternalSlot");}flowParseObjectTypeMethodish(node){node.params=[];node.rest=null;node.typeParameters=null;if(this.isRelational("<")){node.typeParameters=this.flowParseTypeParameterDeclaration();}this.expect(types.parenL);while(!this.match(types.parenR)&&!this.match(types.ellipsis)){node.params.push(this.flowParseFunctionTypeParam());if(!this.match(types.parenR)){this.expect(types.comma);}}if(this.eat(types.ellipsis)){node.rest=this.flowParseFunctionTypeParam();}this.expect(types.parenR);node.returnType=this.flowParseTypeInitialiser();return this.finishNode(node,"FunctionTypeAnnotation");}flowParseObjectTypeCallProperty(node,isStatic){const valueNode=this.startNode();node.static=isStatic;node.value=this.flowParseObjectTypeMethodish(valueNode);return this.finishNode(node,"ObjectTypeCallProperty");}flowParseObjectType({allowStatic,allowExact,allowSpread,allowProto,allowInexact}){const oldInType=this.state.inType;this.state.inType=true;const nodeStart=this.startNode();nodeStart.callProperties=[];nodeStart.properties=[];nodeStart.indexers=[];nodeStart.internalSlots=[];let endDelim;let exact;let inexact=false;if(allowExact&&this.match(types.braceBarL)){this.expect(types.braceBarL);endDelim=types.braceBarR;exact=true;}else{this.expect(types.braceL);endDelim=types.braceR;exact=false;}nodeStart.exact=exact;while(!this.match(endDelim)){let isStatic=false;let protoStart=null;let inexactStart=null;const node=this.startNode();if(allowProto&&this.isContextual("proto")){const lookahead=this.lookahead();if(lookahead.type!==types.colon&&lookahead.type!==types.question){this.next();protoStart=this.state.start;allowStatic=false;}}if(allowStatic&&this.isContextual("static")){const lookahead=this.lookahead();if(lookahead.type!==types.colon&&lookahead.type!==types.question){this.next();isStatic=true;}}const variance=this.flowParseVariance();if(this.eat(types.bracketL)){if(protoStart!=null){this.unexpected(protoStart);}if(this.eat(types.bracketL)){if(variance){this.unexpected(variance.start);}nodeStart.internalSlots.push(this.flowParseObjectTypeInternalSlot(node,isStatic));}else{nodeStart.indexers.push(this.flowParseObjectTypeIndexer(node,isStatic,variance));}}else if(this.match(types.parenL)||this.isRelational("<")){if(protoStart!=null){this.unexpected(protoStart);}if(variance){this.unexpected(variance.start);}nodeStart.callProperties.push(this.flowParseObjectTypeCallProperty(node,isStatic));}else{let kind="init";if(this.isContextual("get")||this.isContextual("set")){const lookahead=this.lookahead();if(lookahead.type===types.name||lookahead.type===types.string||lookahead.type===types.num){kind=this.state.value;this.next();}}const propOrInexact=this.flowParseObjectTypeProperty(node,isStatic,protoStart,variance,kind,allowSpread,allowInexact!=null?allowInexact:!exact);if(propOrInexact===null){inexact=true;inexactStart=this.state.lastTokStart;}else{nodeStart.properties.push(propOrInexact);}}this.flowObjectTypeSemicolon();if(inexactStart&&!this.match(types.braceR)&&!this.match(types.braceBarR)){this.raise(inexactStart,"Explicit inexact syntax must appear at the end of an inexact object");}}this.expect(endDelim);if(allowSpread){nodeStart.inexact=inexact;}const out=this.finishNode(nodeStart,"ObjectTypeAnnotation");this.state.inType=oldInType;return out;}flowParseObjectTypeProperty(node,isStatic,protoStart,variance,kind,allowSpread,allowInexact){if(this.eat(types.ellipsis)){const isInexactToken=this.match(types.comma)||this.match(types.semi)||this.match(types.braceR)||this.match(types.braceBarR);if(isInexactToken){if(!allowSpread){this.raise(this.state.lastTokStart,"Explicit inexact syntax cannot appear in class or interface definitions");}else if(!allowInexact){this.raise(this.state.lastTokStart,"Explicit inexact syntax cannot appear inside an explicit exact object type");}if(variance){this.raise(variance.start,"Explicit inexact syntax cannot have variance");}return null;}if(!allowSpread){this.raise(this.state.lastTokStart,"Spread operator cannot appear in class or interface definitions");}if(protoStart!=null){this.unexpected(protoStart);}if(variance){this.raise(variance.start,"Spread properties cannot have variance");}node.argument=this.flowParseType();return this.finishNode(node,"ObjectTypeSpreadProperty");}else{node.key=this.flowParseObjectPropertyKey();node.static=isStatic;node.proto=protoStart!=null;node.kind=kind;let optional=false;if(this.isRelational("<")||this.match(types.parenL)){node.method=true;if(protoStart!=null){this.unexpected(protoStart);}if(variance){this.unexpected(variance.start);}node.value=this.flowParseObjectTypeMethodish(this.startNodeAt(node.start,node.loc.start));if(kind==="get"||kind==="set"){this.flowCheckGetterSetterParams(node);}}else{if(kind!=="init")this.unexpected();node.method=false;if(this.eat(types.question)){optional=true;}node.value=this.flowParseTypeInitialiser();node.variance=variance;}node.optional=optional;return this.finishNode(node,"ObjectTypeProperty");}}flowCheckGetterSetterParams(property){const paramCount=property.kind==="get"?0:1;const start=property.start;const length=property.value.params.length+(property.value.rest?1:0);if(length!==paramCount){if(property.kind==="get"){this.raise(start,"getter must not have any formal parameters");}else{this.raise(start,"setter must have exactly one formal parameter");}}if(property.kind==="set"&&property.value.rest){this.raise(start,"setter function argument must not be a rest parameter");}}flowObjectTypeSemicolon(){if(!this.eat(types.semi)&&!this.eat(types.comma)&&!this.match(types.braceR)&&!this.match(types.braceBarR)){this.unexpected();}}flowParseQualifiedTypeIdentifier(startPos,startLoc,id){startPos=startPos||this.state.start;startLoc=startLoc||this.state.startLoc;let node=id||this.flowParseRestrictedIdentifier(true);while(this.eat(types.dot)){const node2=this.startNodeAt(startPos,startLoc);node2.qualification=node;node2.id=this.flowParseRestrictedIdentifier(true);node=this.finishNode(node2,"QualifiedTypeIdentifier");}return node;}flowParseGenericType(startPos,startLoc,id){const node=this.startNodeAt(startPos,startLoc);node.typeParameters=null;node.id=this.flowParseQualifiedTypeIdentifier(startPos,startLoc,id);if(this.isRelational("<")){node.typeParameters=this.flowParseTypeParameterInstantiation();}return this.finishNode(node,"GenericTypeAnnotation");}flowParseTypeofType(){const node=this.startNode();this.expect(types._typeof);node.argument=this.flowParsePrimaryType();return this.finishNode(node,"TypeofTypeAnnotation");}flowParseTupleType(){const node=this.startNode();node.types=[];this.expect(types.bracketL);while(this.state.pos<this.length&&!this.match(types.bracketR)){node.types.push(this.flowParseType());if(this.match(types.bracketR))break;this.expect(types.comma);}this.expect(types.bracketR);return this.finishNode(node,"TupleTypeAnnotation");}flowParseFunctionTypeParam(){let name=null;let optional=false;let typeAnnotation=null;const node=this.startNode();const lh=this.lookahead();if(lh.type===types.colon||lh.type===types.question){name=this.parseIdentifier();if(this.eat(types.question)){optional=true;}typeAnnotation=this.flowParseTypeInitialiser();}else{typeAnnotation=this.flowParseType();}node.name=name;node.optional=optional;node.typeAnnotation=typeAnnotation;return this.finishNode(node,"FunctionTypeParam");}reinterpretTypeAsFunctionTypeParam(type){const node=this.startNodeAt(type.start,type.loc.start);node.name=null;node.optional=false;node.typeAnnotation=type;return this.finishNode(node,"FunctionTypeParam");}flowParseFunctionTypeParams(params=[]){let rest=null;while(!this.match(types.parenR)&&!this.match(types.ellipsis)){params.push(this.flowParseFunctionTypeParam());if(!this.match(types.parenR)){this.expect(types.comma);}}if(this.eat(types.ellipsis)){rest=this.flowParseFunctionTypeParam();}return{params,rest};}flowIdentToTypeAnnotation(startPos,startLoc,node,id){switch(id.name){case"any":return this.finishNode(node,"AnyTypeAnnotation");case"bool":case"boolean":return this.finishNode(node,"BooleanTypeAnnotation");case"mixed":return this.finishNode(node,"MixedTypeAnnotation");case"empty":return this.finishNode(node,"EmptyTypeAnnotation");case"number":return this.finishNode(node,"NumberTypeAnnotation");case"string":return this.finishNode(node,"StringTypeAnnotation");default:this.checkNotUnderscore(id.name);return this.flowParseGenericType(startPos,startLoc,id);}}flowParsePrimaryType(){const startPos=this.state.start;const startLoc=this.state.startLoc;const node=this.startNode();let tmp;let type;let isGroupedType=false;const oldNoAnonFunctionType=this.state.noAnonFunctionType;switch(this.state.type){case types.name:if(this.isContextual("interface")){return this.flowParseInterfaceType();}return this.flowIdentToTypeAnnotation(startPos,startLoc,node,this.parseIdentifier());case types.braceL:return this.flowParseObjectType({allowStatic:false,allowExact:false,allowSpread:true,allowProto:false,allowInexact:true});case types.braceBarL:return this.flowParseObjectType({allowStatic:false,allowExact:true,allowSpread:true,allowProto:false,allowInexact:false});case types.bracketL:this.state.noAnonFunctionType=false;type=this.flowParseTupleType();this.state.noAnonFunctionType=oldNoAnonFunctionType;return type;case types.relational:if(this.state.value==="<"){node.typeParameters=this.flowParseTypeParameterDeclaration();this.expect(types.parenL);tmp=this.flowParseFunctionTypeParams();node.params=tmp.params;node.rest=tmp.rest;this.expect(types.parenR);this.expect(types.arrow);node.returnType=this.flowParseType();return this.finishNode(node,"FunctionTypeAnnotation");}break;case types.parenL:this.next();if(!this.match(types.parenR)&&!this.match(types.ellipsis)){if(this.match(types.name)){const token=this.lookahead().type;isGroupedType=token!==types.question&&token!==types.colon;}else{isGroupedType=true;}}if(isGroupedType){this.state.noAnonFunctionType=false;type=this.flowParseType();this.state.noAnonFunctionType=oldNoAnonFunctionType;if(this.state.noAnonFunctionType||!(this.match(types.comma)||this.match(types.parenR)&&this.lookahead().type===types.arrow)){this.expect(types.parenR);return type;}else{this.eat(types.comma);}}if(type){tmp=this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(type)]);}else{tmp=this.flowParseFunctionTypeParams();}node.params=tmp.params;node.rest=tmp.rest;this.expect(types.parenR);this.expect(types.arrow);node.returnType=this.flowParseType();node.typeParameters=null;return this.finishNode(node,"FunctionTypeAnnotation");case types.string:return this.parseLiteral(this.state.value,"StringLiteralTypeAnnotation");case types._true:case types._false:node.value=this.match(types._true);this.next();return this.finishNode(node,"BooleanLiteralTypeAnnotation");case types.plusMin:if(this.state.value==="-"){this.next();if(this.match(types.num)){return this.parseLiteral(-this.state.value,"NumberLiteralTypeAnnotation",node.start,node.loc.start);}if(this.match(types.bigint)){return this.parseLiteral(-this.state.value,"BigIntLiteralTypeAnnotation",node.start,node.loc.start);}throw this.raise(this.state.start,`Unexpected token, expected "number" or "bigint"`);}this.unexpected();case types.num:return this.parseLiteral(this.state.value,"NumberLiteralTypeAnnotation");case types.bigint:return this.parseLiteral(this.state.value,"BigIntLiteralTypeAnnotation");case types._void:this.next();return this.finishNode(node,"VoidTypeAnnotation");case types._null:this.next();return this.finishNode(node,"NullLiteralTypeAnnotation");case types._this:this.next();return this.finishNode(node,"ThisTypeAnnotation");case types.star:this.next();return this.finishNode(node,"ExistsTypeAnnotation");default:if(this.state.type.keyword==="typeof"){return this.flowParseTypeofType();}else if(this.state.type.keyword){const label=this.state.type.label;this.next();return super.createIdentifier(node,label);}}throw this.unexpected();}flowParsePostfixType(){const startPos=this.state.start,startLoc=this.state.startLoc;let type=this.flowParsePrimaryType();while(this.match(types.bracketL)&&!this.canInsertSemicolon()){const node=this.startNodeAt(startPos,startLoc);node.elementType=type;this.expect(types.bracketL);this.expect(types.bracketR);type=this.finishNode(node,"ArrayTypeAnnotation");}return type;}flowParsePrefixType(){const node=this.startNode();if(this.eat(types.question)){node.typeAnnotation=this.flowParsePrefixType();return this.finishNode(node,"NullableTypeAnnotation");}else{return this.flowParsePostfixType();}}flowParseAnonFunctionWithoutParens(){const param=this.flowParsePrefixType();if(!this.state.noAnonFunctionType&&this.eat(types.arrow)){const node=this.startNodeAt(param.start,param.loc.start);node.params=[this.reinterpretTypeAsFunctionTypeParam(param)];node.rest=null;node.returnType=this.flowParseType();node.typeParameters=null;return this.finishNode(node,"FunctionTypeAnnotation");}return param;}flowParseIntersectionType(){const node=this.startNode();this.eat(types.bitwiseAND);const type=this.flowParseAnonFunctionWithoutParens();node.types=[type];while(this.eat(types.bitwiseAND)){node.types.push(this.flowParseAnonFunctionWithoutParens());}return node.types.length===1?type:this.finishNode(node,"IntersectionTypeAnnotation");}flowParseUnionType(){const node=this.startNode();this.eat(types.bitwiseOR);const type=this.flowParseIntersectionType();node.types=[type];while(this.eat(types.bitwiseOR)){node.types.push(this.flowParseIntersectionType());}return node.types.length===1?type:this.finishNode(node,"UnionTypeAnnotation");}flowParseType(){const oldInType=this.state.inType;this.state.inType=true;const type=this.flowParseUnionType();this.state.inType=oldInType;this.state.exprAllowed=this.state.exprAllowed||this.state.noAnonFunctionType;return type;}flowParseTypeOrImplicitInstantiation(){if(this.state.type===types.name&&this.state.value==="_"){const startPos=this.state.start;const startLoc=this.state.startLoc;const node=this.parseIdentifier();return this.flowParseGenericType(startPos,startLoc,node);}else{return this.flowParseType();}}flowParseTypeAnnotation(){const node=this.startNode();node.typeAnnotation=this.flowParseTypeInitialiser();return this.finishNode(node,"TypeAnnotation");}flowParseTypeAnnotatableIdentifier(allowPrimitiveOverride){const ident=allowPrimitiveOverride?this.parseIdentifier():this.flowParseRestrictedIdentifier();if(this.match(types.colon)){ident.typeAnnotation=this.flowParseTypeAnnotation();this.resetEndLocation(ident);}return ident;}typeCastToParameter(node){node.expression.typeAnnotation=node.typeAnnotation;this.resetEndLocation(node.expression,node.typeAnnotation.end,node.typeAnnotation.loc.end);return node.expression;}flowParseVariance(){let variance=null;if(this.match(types.plusMin)){variance=this.startNode();if(this.state.value==="+"){variance.kind="plus";}else{variance.kind="minus";}this.next();this.finishNode(variance,"Variance");}return variance;}parseFunctionBody(node,allowExpressionBody,isMethod=false){if(allowExpressionBody){return this.forwardNoArrowParamsConversionAt(node,()=>super.parseFunctionBody(node,true,isMethod));}return super.parseFunctionBody(node,false,isMethod);}parseFunctionBodyAndFinish(node,type,isMethod=false){if(this.match(types.colon)){const typeNode=this.startNode();[typeNode.typeAnnotation,node.predicate]=this.flowParseTypeAndPredicateInitialiser();node.returnType=typeNode.typeAnnotation?this.finishNode(typeNode,"TypeAnnotation"):null;}super.parseFunctionBodyAndFinish(node,type,isMethod);}parseStatement(context,topLevel){if(this.state.strict&&this.match(types.name)&&this.state.value==="interface"){const node=this.startNode();this.next();return this.flowParseInterface(node);}else if(this.shouldParseEnums()&&this.isContextual("enum")){const node=this.startNode();this.next();return this.flowParseEnumDeclaration(node);}else{const stmt=super.parseStatement(context,topLevel);if(this.flowPragma===undefined&&!this.isValidDirective(stmt)){this.flowPragma=null;}return stmt;}}parseExpressionStatement(node,expr){if(expr.type==="Identifier"){if(expr.name==="declare"){if(this.match(types._class)||this.match(types.name)||this.match(types._function)||this.match(types._var)||this.match(types._export)){return this.flowParseDeclare(node);}}else if(this.match(types.name)){if(expr.name==="interface"){return this.flowParseInterface(node);}else if(expr.name==="type"){return this.flowParseTypeAlias(node);}else if(expr.name==="opaque"){return this.flowParseOpaqueType(node,false);}}}return super.parseExpressionStatement(node,expr);}shouldParseExportDeclaration(){return this.isContextual("type")||this.isContextual("interface")||this.isContextual("opaque")||this.shouldParseEnums()&&this.isContextual("enum")||super.shouldParseExportDeclaration();}isExportDefaultSpecifier(){if(this.match(types.name)&&(this.state.value==="type"||this.state.value==="interface"||this.state.value==="opaque"||this.shouldParseEnums()&&this.state.value==="enum")){return false;}return super.isExportDefaultSpecifier();}parseExportDefaultExpression(){if(this.shouldParseEnums()&&this.isContextual("enum")){const node=this.startNode();this.next();return this.flowParseEnumDeclaration(node);}return super.parseExportDefaultExpression();}parseConditional(expr,noIn,startPos,startLoc,refNeedsArrowPos){if(!this.match(types.question))return expr;if(refNeedsArrowPos){const result=this.tryParse(()=>super.parseConditional(expr,noIn,startPos,startLoc));if(!result.node){refNeedsArrowPos.start=result.error.pos||this.state.start;return expr;}if(result.error)this.state=result.failState;return result.node;}this.expect(types.question);const state=this.state.clone();const originalNoArrowAt=this.state.noArrowAt;const node=this.startNodeAt(startPos,startLoc);let{consequent,failed}=this.tryParseConditionalConsequent();let[valid,invalid]=this.getArrowLikeExpressions(consequent);if(failed||invalid.length>0){const noArrowAt=_toConsumableArray(originalNoArrowAt);if(invalid.length>0){this.state=state;this.state.noArrowAt=noArrowAt;for(let i=0;i<invalid.length;i++){noArrowAt.push(invalid[i].start);}({consequent,failed}=this.tryParseConditionalConsequent());[valid,invalid]=this.getArrowLikeExpressions(consequent);}if(failed&&valid.length>1){this.raise(state.start,"Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.");}if(failed&&valid.length===1){this.state=state;this.state.noArrowAt=noArrowAt.concat(valid[0].start);({consequent,failed}=this.tryParseConditionalConsequent());}}this.getArrowLikeExpressions(consequent,true);this.state.noArrowAt=originalNoArrowAt;this.expect(types.colon);node.test=expr;node.consequent=consequent;node.alternate=this.forwardNoArrowParamsConversionAt(node,()=>this.parseMaybeAssign(noIn,undefined,undefined,undefined));return this.finishNode(node,"ConditionalExpression");}tryParseConditionalConsequent(){this.state.noArrowParamsConversionAt.push(this.state.start);const consequent=this.parseMaybeAssign();const failed=!this.match(types.colon);this.state.noArrowParamsConversionAt.pop();return{consequent,failed};}getArrowLikeExpressions(node,disallowInvalid){const stack=[node];const arrows=[];while(stack.length!==0){const node=stack.pop();if(node.type==="ArrowFunctionExpression"){if(node.typeParameters||!node.returnType){this.finishArrowValidation(node);}else{arrows.push(node);}stack.push(node.body);}else if(node.type==="ConditionalExpression"){stack.push(node.consequent);stack.push(node.alternate);}}if(disallowInvalid){arrows.forEach(node=>this.finishArrowValidation(node));return[arrows,[]];}return partition(arrows,node=>node.params.every(param=>this.isAssignable(param,true)));}finishArrowValidation(node){var _node$extra;this.toAssignableList(node.params,true,"arrow function parameters",(_node$extra=node.extra)==null?void 0:_node$extra.trailingComma);this.scope.enter(functionFlags(false,false)|SCOPE_ARROW);super.checkParams(node,false,true);this.scope.exit();}forwardNoArrowParamsConversionAt(node,parse){let result;if(this.state.noArrowParamsConversionAt.indexOf(node.start)!==-1){this.state.noArrowParamsConversionAt.push(this.state.start);result=parse();this.state.noArrowParamsConversionAt.pop();}else{result=parse();}return result;}parseParenItem(node,startPos,startLoc){node=super.parseParenItem(node,startPos,startLoc);if(this.eat(types.question)){node.optional=true;this.resetEndLocation(node);}if(this.match(types.colon)){const typeCastNode=this.startNodeAt(startPos,startLoc);typeCastNode.expression=node;typeCastNode.typeAnnotation=this.flowParseTypeAnnotation();return this.finishNode(typeCastNode,"TypeCastExpression");}return node;}assertModuleNodeAllowed(node){if(node.type==="ImportDeclaration"&&(node.importKind==="type"||node.importKind==="typeof")||node.type==="ExportNamedDeclaration"&&node.exportKind==="type"||node.type==="ExportAllDeclaration"&&node.exportKind==="type"){return;}super.assertModuleNodeAllowed(node);}parseExport(node){const decl=super.parseExport(node);if(decl.type==="ExportNamedDeclaration"||decl.type==="ExportAllDeclaration"){decl.exportKind=decl.exportKind||"value";}return decl;}parseExportDeclaration(node){if(this.isContextual("type")){node.exportKind="type";const declarationNode=this.startNode();this.next();if(this.match(types.braceL)){node.specifiers=this.parseExportSpecifiers();this.parseExportFrom(node);return null;}else{return this.flowParseTypeAlias(declarationNode);}}else if(this.isContextual("opaque")){node.exportKind="type";const declarationNode=this.startNode();this.next();return this.flowParseOpaqueType(declarationNode,false);}else if(this.isContextual("interface")){node.exportKind="type";const declarationNode=this.startNode();this.next();return this.flowParseInterface(declarationNode);}else if(this.shouldParseEnums()&&this.isContextual("enum")){node.exportKind="value";const declarationNode=this.startNode();this.next();return this.flowParseEnumDeclaration(declarationNode);}else{return super.parseExportDeclaration(node);}}eatExportStar(node){if(super.eatExportStar.apply(this,arguments))return true;if(this.isContextual("type")&&this.lookahead().type===types.star){node.exportKind="type";this.next();this.next();return true;}return false;}maybeParseExportNamespaceSpecifier(node){const pos=this.state.start;const hasNamespace=super.maybeParseExportNamespaceSpecifier(node);if(hasNamespace&&node.exportKind==="type"){this.unexpected(pos);}return hasNamespace;}parseClassId(node,isStatement,optionalId){super.parseClassId(node,isStatement,optionalId);if(this.isRelational("<")){node.typeParameters=this.flowParseTypeParameterDeclaration();}}getTokenFromCode(code){const next=this.input.charCodeAt(this.state.pos+1);if(code===123&&next===124){return this.finishOp(types.braceBarL,2);}else if(this.state.inType&&(code===62||code===60)){return this.finishOp(types.relational,1);}else if(isIteratorStart(code,next)){this.state.isIterator=true;return super.readWord();}else{return super.getTokenFromCode(code);}}isAssignable(node,isBinding){switch(node.type){case"Identifier":case"ObjectPattern":case"ArrayPattern":case"AssignmentPattern":return true;case"ObjectExpression":{const last=node.properties.length-1;return node.properties.every((prop,i)=>{return prop.type!=="ObjectMethod"&&(i===last||prop.type==="SpreadElement")&&this.isAssignable(prop);});}case"ObjectProperty":return this.isAssignable(node.value);case"SpreadElement":return this.isAssignable(node.argument);case"ArrayExpression":return node.elements.every(element=>this.isAssignable(element));case"AssignmentExpression":return node.operator==="=";case"ParenthesizedExpression":case"TypeCastExpression":return this.isAssignable(node.expression);case"MemberExpression":case"OptionalMemberExpression":return!isBinding;default:return false;}}toAssignable(node,isBinding,contextDescription){if(node.type==="TypeCastExpression"){return super.toAssignable(this.typeCastToParameter(node),isBinding,contextDescription);}else{return super.toAssignable(node,isBinding,contextDescription);}}toAssignableList(exprList,isBinding,contextDescription,trailingCommaPos){for(let i=0;i<exprList.length;i++){const expr=exprList[i];if(expr&&expr.type==="TypeCastExpression"){exprList[i]=this.typeCastToParameter(expr);}}return super.toAssignableList(exprList,isBinding,contextDescription,trailingCommaPos);}toReferencedList(exprList,isParenthesizedExpr){for(let i=0;i<exprList.length;i++){const expr=exprList[i];if(expr&&expr.type==="TypeCastExpression"&&(!expr.extra||!expr.extra.parenthesized)&&(exprList.length>1||!isParenthesizedExpr)){this.raise(expr.typeAnnotation.start,"The type cast expression is expected to be wrapped with parenthesis");}}return exprList;}checkLVal(expr,bindingType=BIND_NONE,checkClashes,contextDescription){if(expr.type!=="TypeCastExpression"){return super.checkLVal(expr,bindingType,checkClashes,contextDescription);}}parseClassProperty(node){if(this.match(types.colon)){node.typeAnnotation=this.flowParseTypeAnnotation();}return super.parseClassProperty(node);}parseClassPrivateProperty(node){if(this.match(types.colon)){node.typeAnnotation=this.flowParseTypeAnnotation();}return super.parseClassPrivateProperty(node);}isClassMethod(){return this.isRelational("<")||super.isClassMethod();}isClassProperty(){return this.match(types.colon)||super.isClassProperty();}isNonstaticConstructor(method){return!this.match(types.colon)&&super.isNonstaticConstructor(method);}pushClassMethod(classBody,method,isGenerator,isAsync,isConstructor,allowsDirectSuper){if(method.variance){this.unexpected(method.variance.start);}delete method.variance;if(this.isRelational("<")){method.typeParameters=this.flowParseTypeParameterDeclaration();}super.pushClassMethod(classBody,method,isGenerator,isAsync,isConstructor,allowsDirectSuper);}pushClassPrivateMethod(classBody,method,isGenerator,isAsync){if(method.variance){this.unexpected(method.variance.start);}delete method.variance;if(this.isRelational("<")){method.typeParameters=this.flowParseTypeParameterDeclaration();}super.pushClassPrivateMethod(classBody,method,isGenerator,isAsync);}parseClassSuper(node){super.parseClassSuper(node);if(node.superClass&&this.isRelational("<")){node.superTypeParameters=this.flowParseTypeParameterInstantiation();}if(this.isContextual("implements")){this.next();const implemented=node.implements=[];do{const node=this.startNode();node.id=this.flowParseRestrictedIdentifier(true);if(this.isRelational("<")){node.typeParameters=this.flowParseTypeParameterInstantiation();}else{node.typeParameters=null;}implemented.push(this.finishNode(node,"ClassImplements"));}while(this.eat(types.comma));}}parsePropertyName(node){const variance=this.flowParseVariance();const key=super.parsePropertyName(node);node.variance=variance;return key;}parseObjPropValue(prop,startPos,startLoc,isGenerator,isAsync,isPattern,refShorthandDefaultPos,containsEsc){if(prop.variance){this.unexpected(prop.variance.start);}delete prop.variance;let typeParameters;if(this.isRelational("<")){typeParameters=this.flowParseTypeParameterDeclaration();if(!this.match(types.parenL))this.unexpected();}super.parseObjPropValue(prop,startPos,startLoc,isGenerator,isAsync,isPattern,refShorthandDefaultPos,containsEsc);if(typeParameters){(prop.value||prop).typeParameters=typeParameters;}}parseAssignableListItemTypes(param){if(this.eat(types.question)){if(param.type!=="Identifier"){this.raise(param.start,"A binding pattern parameter cannot be optional in an implementation signature.");}param.optional=true;}if(this.match(types.colon)){param.typeAnnotation=this.flowParseTypeAnnotation();}this.resetEndLocation(param);return param;}parseMaybeDefault(startPos,startLoc,left){const node=super.parseMaybeDefault(startPos,startLoc,left);if(node.type==="AssignmentPattern"&&node.typeAnnotation&&node.right.start<node.typeAnnotation.start){this.raise(node.typeAnnotation.start,"Type annotations must come before default assignments, "+"e.g. instead of `age = 25: number` use `age: number = 25`");}return node;}shouldParseDefaultImport(node){if(!hasTypeImportKind(node)){return super.shouldParseDefaultImport(node);}return isMaybeDefaultImport(this.state);}parseImportSpecifierLocal(node,specifier,type,contextDescription){specifier.local=hasTypeImportKind(node)?this.flowParseRestrictedIdentifier(true,true):this.parseIdentifier();this.checkLVal(specifier.local,BIND_LEXICAL,undefined,contextDescription);node.specifiers.push(this.finishNode(specifier,type));}maybeParseDefaultImportSpecifier(node){node.importKind="value";let kind=null;if(this.match(types._typeof)){kind="typeof";}else if(this.isContextual("type")){kind="type";}if(kind){const lh=this.lookahead();if(kind==="type"&&lh.type===types.star){this.unexpected(lh.start);}if(isMaybeDefaultImport(lh)||lh.type===types.braceL||lh.type===types.star){this.next();node.importKind=kind;}}return super.maybeParseDefaultImportSpecifier(node);}parseImportSpecifier(node){const specifier=this.startNode();const firstIdentLoc=this.state.start;const firstIdent=this.parseIdentifier(true);let specifierTypeKind=null;if(firstIdent.name==="type"){specifierTypeKind="type";}else if(firstIdent.name==="typeof"){specifierTypeKind="typeof";}let isBinding=false;if(this.isContextual("as")&&!this.isLookaheadContextual("as")){const as_ident=this.parseIdentifier(true);if(specifierTypeKind!==null&&!this.match(types.name)&&!this.state.type.keyword){specifier.imported=as_ident;specifier.importKind=specifierTypeKind;specifier.local=as_ident.__clone();}else{specifier.imported=firstIdent;specifier.importKind=null;specifier.local=this.parseIdentifier();}}else if(specifierTypeKind!==null&&(this.match(types.name)||this.state.type.keyword)){specifier.imported=this.parseIdentifier(true);specifier.importKind=specifierTypeKind;if(this.eatContextual("as")){specifier.local=this.parseIdentifier();}else{isBinding=true;specifier.local=specifier.imported.__clone();}}else{isBinding=true;specifier.imported=firstIdent;specifier.importKind=null;specifier.local=specifier.imported.__clone();}const nodeIsTypeImport=hasTypeImportKind(node);const specifierIsTypeImport=hasTypeImportKind(specifier);if(nodeIsTypeImport&&specifierIsTypeImport){this.raise(firstIdentLoc,"The `type` and `typeof` keywords on named imports can only be used on regular "+"`import` statements. It cannot be used with `import type` or `import typeof` statements");}if(nodeIsTypeImport||specifierIsTypeImport){this.checkReservedType(specifier.local.name,specifier.local.start,true);}if(isBinding&&!nodeIsTypeImport&&!specifierIsTypeImport){this.checkReservedWord(specifier.local.name,specifier.start,true,true);}this.checkLVal(specifier.local,BIND_LEXICAL,undefined,"import specifier");node.specifiers.push(this.finishNode(specifier,"ImportSpecifier"));}parseFunctionParams(node,allowModifiers){const kind=node.kind;if(kind!=="get"&&kind!=="set"&&this.isRelational("<")){node.typeParameters=this.flowParseTypeParameterDeclaration();}super.parseFunctionParams(node,allowModifiers);}parseVarId(decl,kind){super.parseVarId(decl,kind);if(this.match(types.colon)){decl.id.typeAnnotation=this.flowParseTypeAnnotation();this.resetEndLocation(decl.id);}}parseAsyncArrowFromCallExpression(node,call){if(this.match(types.colon)){const oldNoAnonFunctionType=this.state.noAnonFunctionType;this.state.noAnonFunctionType=true;node.returnType=this.flowParseTypeAnnotation();this.state.noAnonFunctionType=oldNoAnonFunctionType;}return super.parseAsyncArrowFromCallExpression(node,call);}shouldParseAsyncArrow(){return this.match(types.colon)||super.shouldParseAsyncArrow();}parseMaybeAssign(noIn,refShorthandDefaultPos,afterLeftParse,refNeedsArrowPos){let state=null;let jsx;if(this.hasPlugin("jsx")&&(this.match(types.jsxTagStart)||this.isRelational("<"))){state=this.state.clone();jsx=this.tryParse(()=>super.parseMaybeAssign(noIn,refShorthandDefaultPos,afterLeftParse,refNeedsArrowPos),state);if(!jsx.error)return jsx.node;const{context}=this.state;if(context[context.length-1]===types$1.j_oTag){context.length-=2;}else if(context[context.length-1]===types$1.j_expr){context.length-=1;}}if(jsx&&jsx.error||this.isRelational("<")){state=state||this.state.clone();let typeParameters;const arrow=this.tryParse(()=>{typeParameters=this.flowParseTypeParameterDeclaration();const arrowExpression=this.forwardNoArrowParamsConversionAt(typeParameters,()=>super.parseMaybeAssign(noIn,refShorthandDefaultPos,afterLeftParse,refNeedsArrowPos));arrowExpression.typeParameters=typeParameters;this.resetStartLocationFromNode(arrowExpression,typeParameters);return arrowExpression;},state);const arrowExpression=arrow.node&&arrow.node.type==="ArrowFunctionExpression"?arrow.node:null;if(!arrow.error&&arrowExpression)return arrowExpression;if(jsx&&jsx.node){this.state=jsx.failState;return jsx.node;}if(arrowExpression){this.state=arrow.failState;return arrowExpression;}if(jsx&&jsx.thrown)throw jsx.error;if(arrow.thrown)throw arrow.error;throw this.raise(typeParameters.start,"Expected an arrow function after this type parameter declaration");}return super.parseMaybeAssign(noIn,refShorthandDefaultPos,afterLeftParse,refNeedsArrowPos);}parseArrow(node){if(this.match(types.colon)){const result=this.tryParse(()=>{const oldNoAnonFunctionType=this.state.noAnonFunctionType;this.state.noAnonFunctionType=true;const typeNode=this.startNode();[typeNode.typeAnnotation,node.predicate]=this.flowParseTypeAndPredicateInitialiser();this.state.noAnonFunctionType=oldNoAnonFunctionType;if(this.canInsertSemicolon())this.unexpected();if(!this.match(types.arrow))this.unexpected();return typeNode;});if(result.thrown)return null;if(result.error)this.state=result.failState;node.returnType=result.node.typeAnnotation?this.finishNode(result.node,"TypeAnnotation"):null;}return super.parseArrow(node);}shouldParseArrow(){return this.match(types.colon)||super.shouldParseArrow();}setArrowFunctionParameters(node,params){if(this.state.noArrowParamsConversionAt.indexOf(node.start)!==-1){node.params=params;}else{super.setArrowFunctionParameters(node,params);}}checkParams(node,allowDuplicates,isArrowFunction){if(isArrowFunction&&this.state.noArrowParamsConversionAt.indexOf(node.start)!==-1){return;}return super.checkParams.apply(this,arguments);}parseParenAndDistinguishExpression(canBeArrow){return super.parseParenAndDistinguishExpression(canBeArrow&&this.state.noArrowAt.indexOf(this.state.start)===-1);}parseSubscripts(base,startPos,startLoc,noCalls){if(base.type==="Identifier"&&base.name==="async"&&this.state.noArrowAt.indexOf(startPos)!==-1){this.next();const node=this.startNodeAt(startPos,startLoc);node.callee=base;node.arguments=this.parseCallExpressionArguments(types.parenR,false);base=this.finishNode(node,"CallExpression");}else if(base.type==="Identifier"&&base.name==="async"&&this.isRelational("<")){const state=this.state.clone();const arrow=this.tryParse(abort=>this.parseAsyncArrowWithTypeParameters(startPos,startLoc)||abort(),state);if(!arrow.error&&!arrow.aborted)return arrow.node;const result=this.tryParse(()=>super.parseSubscripts(base,startPos,startLoc,noCalls),state);if(result.node&&!result.error)return result.node;if(arrow.node){this.state=arrow.failState;return arrow.node;}if(result.node){this.state=result.failState;return result.node;}throw arrow.error||result.error;}return super.parseSubscripts(base,startPos,startLoc,noCalls);}parseSubscript(base,startPos,startLoc,noCalls,subscriptState){if(this.match(types.questionDot)&&this.isLookaheadRelational("<")){this.expectPlugin("optionalChaining");subscriptState.optionalChainMember=true;if(noCalls){subscriptState.stop=true;return base;}this.next();const node=this.startNodeAt(startPos,startLoc);node.callee=base;node.typeArguments=this.flowParseTypeParameterInstantiation();this.expect(types.parenL);node.arguments=this.parseCallExpressionArguments(types.parenR,false);node.optional=true;return this.finishCallExpression(node,true);}else if(!noCalls&&this.shouldParseTypes()&&this.isRelational("<")){const node=this.startNodeAt(startPos,startLoc);node.callee=base;const result=this.tryParse(()=>{node.typeArguments=this.flowParseTypeParameterInstantiationCallOrNew();this.expect(types.parenL);node.arguments=this.parseCallExpressionArguments(types.parenR,false);if(subscriptState.optionalChainMember)node.optional=false;return this.finishCallExpression(node,subscriptState.optionalChainMember);});if(result.node){if(result.error)this.state=result.failState;return result.node;}}return super.parseSubscript(base,startPos,startLoc,noCalls,subscriptState);}parseNewArguments(node){let targs=null;if(this.shouldParseTypes()&&this.isRelational("<")){targs=this.tryParse(()=>this.flowParseTypeParameterInstantiationCallOrNew()).node;}node.typeArguments=targs;super.parseNewArguments(node);}parseAsyncArrowWithTypeParameters(startPos,startLoc){const node=this.startNodeAt(startPos,startLoc);this.parseFunctionParams(node);if(!this.parseArrow(node))return;return this.parseArrowExpression(node,undefined,true);}readToken_mult_modulo(code){const next=this.input.charCodeAt(this.state.pos+1);if(code===42&&next===47&&this.state.hasFlowComment){this.state.hasFlowComment=false;this.state.pos+=2;this.nextToken();return;}super.readToken_mult_modulo(code);}readToken_pipe_amp(code){const next=this.input.charCodeAt(this.state.pos+1);if(code===124&&next===125){this.finishOp(types.braceBarR,2);return;}super.readToken_pipe_amp(code);}parseTopLevel(file,program){const fileNode=super.parseTopLevel(file,program);if(this.state.hasFlowComment){this.raise(this.state.pos,"Unterminated flow-comment");}return fileNode;}skipBlockComment(){if(this.hasPlugin("flowComments")&&this.skipFlowComment()){if(this.state.hasFlowComment){this.unexpected(null,"Cannot have a flow comment inside another flow comment");}this.hasFlowCommentCompletion();this.state.pos+=this.skipFlowComment();this.state.hasFlowComment=true;return;}if(this.state.hasFlowComment){const end=this.input.indexOf("*-/",this.state.pos+=2);if(end===-1){throw this.raise(this.state.pos-2,"Unterminated comment");}this.state.pos=end+3;return;}super.skipBlockComment();}skipFlowComment(){const{pos}=this.state;let shiftToFirstNonWhiteSpace=2;while([32,9].includes(this.input.charCodeAt(pos+shiftToFirstNonWhiteSpace))){shiftToFirstNonWhiteSpace++;}const ch2=this.input.charCodeAt(shiftToFirstNonWhiteSpace+pos);const ch3=this.input.charCodeAt(shiftToFirstNonWhiteSpace+pos+1);if(ch2===58&&ch3===58){return shiftToFirstNonWhiteSpace+2;}if(this.input.slice(shiftToFirstNonWhiteSpace+pos,shiftToFirstNonWhiteSpace+pos+12)==="flow-include"){return shiftToFirstNonWhiteSpace+12;}if(ch2===58&&ch3!==58){return shiftToFirstNonWhiteSpace;}return false;}hasFlowCommentCompletion(){const end=this.input.indexOf("*/",this.state.pos);if(end===-1){throw this.raise(this.state.pos,"Unterminated comment");}}flowEnumErrorBooleanMemberNotInitialized(pos,{enumName,memberName}){this.raise(pos,`Boolean enum members need to be initialized. Use either \`${memberName} = true,\` `+`or \`${memberName} = false,\` in enum \`${enumName}\`.`);}flowEnumErrorInvalidMemberName(pos,{enumName,memberName}){const suggestion=memberName[0].toUpperCase()+memberName.slice(1);this.raise(pos,`Enum member names cannot start with lowercase 'a' through 'z'. Instead of using `+`\`${memberName}\`, consider using \`${suggestion}\`, in enum \`${enumName}\`.`);}flowEnumErrorDuplicateMemberName(pos,{enumName,memberName}){this.raise(pos,`Enum member names need to be unique, but the name \`${memberName}\` has already been used `+`before in enum \`${enumName}\`.`);}flowEnumErrorInconsistentMemberValues(pos,{enumName}){this.raise(pos,`Enum \`${enumName}\` has inconsistent member initializers. Either use no initializers, or `+`consistently use literals (either booleans, numbers, or strings) for all member initializers.`);}flowEnumErrorInvalidExplicitType(pos,{enumName,suppliedType}){const suggestion=`Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in `+`enum \`${enumName}\`.`;const message=suppliedType===null?`Supplied enum type is not valid. ${suggestion}`:`Enum type \`${suppliedType}\` is not valid. ${suggestion}`;return this.raise(pos,message);}flowEnumErrorInvalidMemberInitializer(pos,{enumName,explicitType,memberName}){let message=null;switch(explicitType){case"boolean":case"number":case"string":message=`Enum \`${enumName}\` has type \`${explicitType}\`, so the initializer of `+`\`${memberName}\` needs to be a ${explicitType} literal.`;break;case"symbol":message=`Symbol enum members cannot be initialized. Use \`${memberName},\` in `+`enum \`${enumName}\`.`;break;default:message=`The enum member initializer for \`${memberName}\` needs to be a literal (either `+`a boolean, number, or string) in enum \`${enumName}\`.`;}return this.raise(pos,message);}flowEnumErrorNumberMemberNotInitialized(pos,{enumName,memberName}){this.raise(pos,`Number enum members need to be initialized, e.g. \`${memberName} = 1\` in enum \`${enumName}\`.`);}flowEnumErrorStringMemberInconsistentlyInitailized(pos,{enumName}){this.raise(pos,`String enum members need to consistently either all use initializers, or use no initializers, `+`in enum \`${enumName}\`.`);}flowEnumMemberInit(){const startPos=this.state.start;const endOfInit=()=>this.match(types.comma)||this.match(types.braceR);switch(this.state.type){case types.num:{const literal=this.parseLiteral(this.state.value,"NumericLiteral");if(endOfInit()){return{type:"number",pos:literal.start,value:literal};}return{type:"invalid",pos:startPos};}case types.string:{const literal=this.parseLiteral(this.state.value,"StringLiteral");if(endOfInit()){return{type:"string",pos:literal.start,value:literal};}return{type:"invalid",pos:startPos};}case types._true:case types._false:{const literal=this.parseBooleanLiteral();if(endOfInit()){return{type:"boolean",pos:literal.start,value:literal};}return{type:"invalid",pos:startPos};}default:return{type:"invalid",pos:startPos};}}flowEnumMemberRaw(){const pos=this.state.start;const id=this.parseIdentifier(true);const init=this.eat(types.eq)?this.flowEnumMemberInit():{type:"none",pos};return{id,init};}flowEnumCheckExplicitTypeMismatch(pos,context,expectedType){const{explicitType}=context;if(explicitType===null){return;}if(explicitType!==expectedType){this.flowEnumErrorInvalidMemberInitializer(pos,context);}}flowEnumMembers({enumName,explicitType}){const seenNames=new Set();const members={booleanMembers:[],numberMembers:[],stringMembers:[],defaultedMembers:[]};while(!this.match(types.braceR)){const memberNode=this.startNode();const{id,init}=this.flowEnumMemberRaw();const memberName=id.name;if(memberName===""){continue;}if(/^[a-z]/.test(memberName)){this.flowEnumErrorInvalidMemberName(id.start,{enumName,memberName});}if(seenNames.has(memberName)){this.flowEnumErrorDuplicateMemberName(id.start,{enumName,memberName});}seenNames.add(memberName);const context={enumName,explicitType,memberName};memberNode.id=id;switch(init.type){case"boolean":{this.flowEnumCheckExplicitTypeMismatch(init.pos,context,"boolean");memberNode.init=init.value;members.booleanMembers.push(this.finishNode(memberNode,"EnumBooleanMember"));break;}case"number":{this.flowEnumCheckExplicitTypeMismatch(init.pos,context,"number");memberNode.init=init.value;members.numberMembers.push(this.finishNode(memberNode,"EnumNumberMember"));break;}case"string":{this.flowEnumCheckExplicitTypeMismatch(init.pos,context,"string");memberNode.init=init.value;members.stringMembers.push(this.finishNode(memberNode,"EnumStringMember"));break;}case"invalid":{throw this.flowEnumErrorInvalidMemberInitializer(init.pos,context);}case"none":{switch(explicitType){case"boolean":this.flowEnumErrorBooleanMemberNotInitialized(init.pos,context);break;case"number":this.flowEnumErrorNumberMemberNotInitialized(init.pos,context);break;default:members.defaultedMembers.push(this.finishNode(memberNode,"EnumDefaultedMember"));}}}if(!this.match(types.braceR)){this.expect(types.comma);}}return members;}flowEnumStringMembers(initializedMembers,defaultedMembers,{enumName}){if(initializedMembers.length===0){return defaultedMembers;}else if(defaultedMembers.length===0){return initializedMembers;}else if(defaultedMembers.length>initializedMembers.length){for(let _i=0;_i<initializedMembers.length;_i++){const member=initializedMembers[_i];this.flowEnumErrorStringMemberInconsistentlyInitailized(member.start,{enumName});}return defaultedMembers;}else{for(let _i2=0;_i2<defaultedMembers.length;_i2++){const member=defaultedMembers[_i2];this.flowEnumErrorStringMemberInconsistentlyInitailized(member.start,{enumName});}return initializedMembers;}}flowEnumParseExplicitType({enumName}){if(this.eatContextual("of")){if(!this.match(types.name)){throw this.flowEnumErrorInvalidExplicitType(this.state.start,{enumName,suppliedType:null});}const{value}=this.state;this.next();if(value!=="boolean"&&value!=="number"&&value!=="string"&&value!=="symbol"){this.flowEnumErrorInvalidExplicitType(this.state.start,{enumName,suppliedType:value});}return value;}return null;}flowEnumBody(node,{enumName,nameLoc}){const explicitType=this.flowEnumParseExplicitType({enumName});this.expect(types.braceL);const members=this.flowEnumMembers({enumName,explicitType});switch(explicitType){case"boolean":node.explicitType=true;node.members=members.booleanMembers;this.expect(types.braceR);return this.finishNode(node,"EnumBooleanBody");case"number":node.explicitType=true;node.members=members.numberMembers;this.expect(types.braceR);return this.finishNode(node,"EnumNumberBody");case"string":node.explicitType=true;node.members=this.flowEnumStringMembers(members.stringMembers,members.defaultedMembers,{enumName});this.expect(types.braceR);return this.finishNode(node,"EnumStringBody");case"symbol":node.members=members.defaultedMembers;this.expect(types.braceR);return this.finishNode(node,"EnumSymbolBody");default:{const empty=()=>{node.members=[];this.expect(types.braceR);return this.finishNode(node,"EnumStringBody");};node.explicitType=false;const boolsLen=members.booleanMembers.length;const numsLen=members.numberMembers.length;const strsLen=members.stringMembers.length;const defaultedLen=members.defaultedMembers.length;if(!boolsLen&&!numsLen&&!strsLen&&!defaultedLen){return empty();}else if(!boolsLen&&!numsLen){node.members=this.flowEnumStringMembers(members.stringMembers,members.defaultedMembers,{enumName});this.expect(types.braceR);return this.finishNode(node,"EnumStringBody");}else if(!numsLen&&!strsLen&&boolsLen>=defaultedLen){for(let _i3=0,_members$defaultedMem=members.defaultedMembers;_i3<_members$defaultedMem.length;_i3++){const member=_members$defaultedMem[_i3];this.flowEnumErrorBooleanMemberNotInitialized(member.start,{enumName,memberName:member.id.name});}node.members=members.booleanMembers;this.expect(types.braceR);return this.finishNode(node,"EnumBooleanBody");}else if(!boolsLen&&!strsLen&&numsLen>=defaultedLen){for(let _i4=0,_members$defaultedMem2=members.defaultedMembers;_i4<_members$defaultedMem2.length;_i4++){const member=_members$defaultedMem2[_i4];this.flowEnumErrorNumberMemberNotInitialized(member.start,{enumName,memberName:member.id.name});}node.members=members.numberMembers;this.expect(types.braceR);return this.finishNode(node,"EnumNumberBody");}else{this.flowEnumErrorInconsistentMemberValues(nameLoc,{enumName});return empty();}}}}flowParseEnumDeclaration(node){const id=this.parseIdentifier();node.id=id;node.body=this.flowEnumBody(this.startNode(),{enumName:id.name,nameLoc:id.start});return this.finishNode(node,"EnumDeclaration");}};const entities={quot:"\u0022",amp:"&",apos:"\u0027",lt:"<",gt:">",nbsp:"\u00A0",iexcl:"\u00A1",cent:"\u00A2",pound:"\u00A3",curren:"\u00A4",yen:"\u00A5",brvbar:"\u00A6",sect:"\u00A7",uml:"\u00A8",copy:"\u00A9",ordf:"\u00AA",laquo:"\u00AB",not:"\u00AC",shy:"\u00AD",reg:"\u00AE",macr:"\u00AF",deg:"\u00B0",plusmn:"\u00B1",sup2:"\u00B2",sup3:"\u00B3",acute:"\u00B4",micro:"\u00B5",para:"\u00B6",middot:"\u00B7",cedil:"\u00B8",sup1:"\u00B9",ordm:"\u00BA",raquo:"\u00BB",frac14:"\u00BC",frac12:"\u00BD",frac34:"\u00BE",iquest:"\u00BF",Agrave:"\u00C0",Aacute:"\u00C1",Acirc:"\u00C2",Atilde:"\u00C3",Auml:"\u00C4",Aring:"\u00C5",AElig:"\u00C6",Ccedil:"\u00C7",Egrave:"\u00C8",Eacute:"\u00C9",Ecirc:"\u00CA",Euml:"\u00CB",Igrave:"\u00CC",Iacute:"\u00CD",Icirc:"\u00CE",Iuml:"\u00CF",ETH:"\u00D0",Ntilde:"\u00D1",Ograve:"\u00D2",Oacute:"\u00D3",Ocirc:"\u00D4",Otilde:"\u00D5",Ouml:"\u00D6",times:"\u00D7",Oslash:"\u00D8",Ugrave:"\u00D9",Uacute:"\u00DA",Ucirc:"\u00DB",Uuml:"\u00DC",Yacute:"\u00DD",THORN:"\u00DE",szlig:"\u00DF",agrave:"\u00E0",aacute:"\u00E1",acirc:"\u00E2",atilde:"\u00E3",auml:"\u00E4",aring:"\u00E5",aelig:"\u00E6",ccedil:"\u00E7",egrave:"\u00E8",eacute:"\u00E9",ecirc:"\u00EA",euml:"\u00EB",igrave:"\u00EC",iacute:"\u00ED",icirc:"\u00EE",iuml:"\u00EF",eth:"\u00F0",ntilde:"\u00F1",ograve:"\u00F2",oacute:"\u00F3",ocirc:"\u00F4",otilde:"\u00F5",ouml:"\u00F6",divide:"\u00F7",oslash:"\u00F8",ugrave:"\u00F9",uacute:"\u00FA",ucirc:"\u00FB",uuml:"\u00FC",yacute:"\u00FD",thorn:"\u00FE",yuml:"\u00FF",OElig:"\u0152",oelig:"\u0153",Scaron:"\u0160",scaron:"\u0161",Yuml:"\u0178",fnof:"\u0192",circ:"\u02C6",tilde:"\u02DC",Alpha:"\u0391",Beta:"\u0392",Gamma:"\u0393",Delta:"\u0394",Epsilon:"\u0395",Zeta:"\u0396",Eta:"\u0397",Theta:"\u0398",Iota:"\u0399",Kappa:"\u039A",Lambda:"\u039B",Mu:"\u039C",Nu:"\u039D",Xi:"\u039E",Omicron:"\u039F",Pi:"\u03A0",Rho:"\u03A1",Sigma:"\u03A3",Tau:"\u03A4",Upsilon:"\u03A5",Phi:"\u03A6",Chi:"\u03A7",Psi:"\u03A8",Omega:"\u03A9",alpha:"\u03B1",beta:"\u03B2",gamma:"\u03B3",delta:"\u03B4",epsilon:"\u03B5",zeta:"\u03B6",eta:"\u03B7",theta:"\u03B8",iota:"\u03B9",kappa:"\u03BA",lambda:"\u03BB",mu:"\u03BC",nu:"\u03BD",xi:"\u03BE",omicron:"\u03BF",pi:"\u03C0",rho:"\u03C1",sigmaf:"\u03C2",sigma:"\u03C3",tau:"\u03C4",upsilon:"\u03C5",phi:"\u03C6",chi:"\u03C7",psi:"\u03C8",omega:"\u03C9",thetasym:"\u03D1",upsih:"\u03D2",piv:"\u03D6",ensp:"\u2002",emsp:"\u2003",thinsp:"\u2009",zwnj:"\u200C",zwj:"\u200D",lrm:"\u200E",rlm:"\u200F",ndash:"\u2013",mdash:"\u2014",lsquo:"\u2018",rsquo:"\u2019",sbquo:"\u201A",ldquo:"\u201C",rdquo:"\u201D",bdquo:"\u201E",dagger:"\u2020",Dagger:"\u2021",bull:"\u2022",hellip:"\u2026",permil:"\u2030",prime:"\u2032",Prime:"\u2033",lsaquo:"\u2039",rsaquo:"\u203A",oline:"\u203E",frasl:"\u2044",euro:"\u20AC",image:"\u2111",weierp:"\u2118",real:"\u211C",trade:"\u2122",alefsym:"\u2135",larr:"\u2190",uarr:"\u2191",rarr:"\u2192",darr:"\u2193",harr:"\u2194",crarr:"\u21B5",lArr:"\u21D0",uArr:"\u21D1",rArr:"\u21D2",dArr:"\u21D3",hArr:"\u21D4",forall:"\u2200",part:"\u2202",exist:"\u2203",empty:"\u2205",nabla:"\u2207",isin:"\u2208",notin:"\u2209",ni:"\u220B",prod:"\u220F",sum:"\u2211",minus:"\u2212",lowast:"\u2217",radic:"\u221A",prop:"\u221D",infin:"\u221E",ang:"\u2220",and:"\u2227",or:"\u2228",cap:"\u2229",cup:"\u222A",int:"\u222B",there4:"\u2234",sim:"\u223C",cong:"\u2245",asymp:"\u2248",ne:"\u2260",equiv:"\u2261",le:"\u2264",ge:"\u2265",sub:"\u2282",sup:"\u2283",nsub:"\u2284",sube:"\u2286",supe:"\u2287",oplus:"\u2295",otimes:"\u2297",perp:"\u22A5",sdot:"\u22C5",lceil:"\u2308",rceil:"\u2309",lfloor:"\u230A",rfloor:"\u230B",lang:"\u2329",rang:"\u232A",loz:"\u25CA",spades:"\u2660",clubs:"\u2663",hearts:"\u2665",diams:"\u2666"};const HEX_NUMBER=/^[\da-fA-F]+$/;const DECIMAL_NUMBER=/^\d+$/;types$1.j_oTag=new TokContext("<tag",false);types$1.j_cTag=new TokContext("</tag",false);types$1.j_expr=new TokContext("<tag>...</tag>",true,true);types.jsxName=new TokenType("jsxName");types.jsxText=new TokenType("jsxText",{beforeExpr:true});types.jsxTagStart=new TokenType("jsxTagStart",{startsExpr:true});types.jsxTagEnd=new TokenType("jsxTagEnd");types.jsxTagStart.updateContext=function(){this.state.context.push(types$1.j_expr);this.state.context.push(types$1.j_oTag);this.state.exprAllowed=false;};types.jsxTagEnd.updateContext=function(prevType){const out=this.state.context.pop();if(out===types$1.j_oTag&&prevType===types.slash||out===types$1.j_cTag){this.state.context.pop();this.state.exprAllowed=this.curContext()===types$1.j_expr;}else{this.state.exprAllowed=true;}};function isFragment(object){return object?object.type==="JSXOpeningFragment"||object.type==="JSXClosingFragment":false;}function getQualifiedJSXName(object){if(object.type==="JSXIdentifier"){return object.name;}if(object.type==="JSXNamespacedName"){return object.namespace.name+":"+object.name.name;}if(object.type==="JSXMemberExpression"){return getQualifiedJSXName(object.object)+"."+getQualifiedJSXName(object.property);}throw new Error("Node had unexpected type: "+object.type);}var jsx=superClass=>class extends superClass{jsxReadToken(){let out="";let chunkStart=this.state.pos;for(;;){if(this.state.pos>=this.length){throw this.raise(this.state.start,"Unterminated JSX contents");}const ch=this.input.charCodeAt(this.state.pos);switch(ch){case 60:case 123:if(this.state.pos===this.state.start){if(ch===60&&this.state.exprAllowed){++this.state.pos;return this.finishToken(types.jsxTagStart);}return super.getTokenFromCode(ch);}out+=this.input.slice(chunkStart,this.state.pos);return this.finishToken(types.jsxText,out);case 38:out+=this.input.slice(chunkStart,this.state.pos);out+=this.jsxReadEntity();chunkStart=this.state.pos;break;default:if(isNewLine(ch)){out+=this.input.slice(chunkStart,this.state.pos);out+=this.jsxReadNewLine(true);chunkStart=this.state.pos;}else{++this.state.pos;}}}}jsxReadNewLine(normalizeCRLF){const ch=this.input.charCodeAt(this.state.pos);let out;++this.state.pos;if(ch===13&&this.input.charCodeAt(this.state.pos)===10){++this.state.pos;out=normalizeCRLF?"\n":"\r\n";}else{out=String.fromCharCode(ch);}++this.state.curLine;this.state.lineStart=this.state.pos;return out;}jsxReadString(quote){let out="";let chunkStart=++this.state.pos;for(;;){if(this.state.pos>=this.length){throw this.raise(this.state.start,"Unterminated string constant");}const ch=this.input.charCodeAt(this.state.pos);if(ch===quote)break;if(ch===38){out+=this.input.slice(chunkStart,this.state.pos);out+=this.jsxReadEntity();chunkStart=this.state.pos;}else if(isNewLine(ch)){out+=this.input.slice(chunkStart,this.state.pos);out+=this.jsxReadNewLine(false);chunkStart=this.state.pos;}else{++this.state.pos;}}out+=this.input.slice(chunkStart,this.state.pos++);return this.finishToken(types.string,out);}jsxReadEntity(){let str="";let count=0;let entity;let ch=this.input[this.state.pos];const startPos=++this.state.pos;while(this.state.pos<this.length&&count++<10){ch=this.input[this.state.pos++];if(ch===";"){if(str[0]==="#"){if(str[1]==="x"){str=str.substr(2);if(HEX_NUMBER.test(str)){entity=String.fromCodePoint(parseInt(str,16));}}else{str=str.substr(1);if(DECIMAL_NUMBER.test(str)){entity=String.fromCodePoint(parseInt(str,10));}}}else{entity=entities[str];}break;}str+=ch;}if(!entity){this.state.pos=startPos;return"&";}return entity;}jsxReadWord(){let ch;const start=this.state.pos;do{ch=this.input.charCodeAt(++this.state.pos);}while(isIdentifierChar(ch)||ch===45);return this.finishToken(types.jsxName,this.input.slice(start,this.state.pos));}jsxParseIdentifier(){const node=this.startNode();if(this.match(types.jsxName)){node.name=this.state.value;}else if(this.state.type.keyword){node.name=this.state.type.keyword;}else{this.unexpected();}this.next();return this.finishNode(node,"JSXIdentifier");}jsxParseNamespacedName(){const startPos=this.state.start;const startLoc=this.state.startLoc;const name=this.jsxParseIdentifier();if(!this.eat(types.colon))return name;const node=this.startNodeAt(startPos,startLoc);node.namespace=name;node.name=this.jsxParseIdentifier();return this.finishNode(node,"JSXNamespacedName");}jsxParseElementName(){const startPos=this.state.start;const startLoc=this.state.startLoc;let node=this.jsxParseNamespacedName();if(node.type==="JSXNamespacedName"){return node;}while(this.eat(types.dot)){const newNode=this.startNodeAt(startPos,startLoc);newNode.object=node;newNode.property=this.jsxParseIdentifier();node=this.finishNode(newNode,"JSXMemberExpression");}return node;}jsxParseAttributeValue(){let node;switch(this.state.type){case types.braceL:node=this.startNode();this.next();node=this.jsxParseExpressionContainer(node);if(node.expression.type==="JSXEmptyExpression"){this.raise(node.start,"JSX attributes must only be assigned a non-empty expression");}return node;case types.jsxTagStart:case types.string:return this.parseExprAtom();default:throw this.raise(this.state.start,"JSX value should be either an expression or a quoted JSX text");}}jsxParseEmptyExpression(){const node=this.startNodeAt(this.state.lastTokEnd,this.state.lastTokEndLoc);return this.finishNodeAt(node,"JSXEmptyExpression",this.state.start,this.state.startLoc);}jsxParseSpreadChild(node){this.next();node.expression=this.parseExpression();this.expect(types.braceR);return this.finishNode(node,"JSXSpreadChild");}jsxParseExpressionContainer(node){if(this.match(types.braceR)){node.expression=this.jsxParseEmptyExpression();}else{node.expression=this.parseExpression();}this.expect(types.braceR);return this.finishNode(node,"JSXExpressionContainer");}jsxParseAttribute(){const node=this.startNode();if(this.eat(types.braceL)){this.expect(types.ellipsis);node.argument=this.parseMaybeAssign();this.expect(types.braceR);return this.finishNode(node,"JSXSpreadAttribute");}node.name=this.jsxParseNamespacedName();node.value=this.eat(types.eq)?this.jsxParseAttributeValue():null;return this.finishNode(node,"JSXAttribute");}jsxParseOpeningElementAt(startPos,startLoc){const node=this.startNodeAt(startPos,startLoc);if(this.match(types.jsxTagEnd)){this.expect(types.jsxTagEnd);return this.finishNode(node,"JSXOpeningFragment");}node.name=this.jsxParseElementName();return this.jsxParseOpeningElementAfterName(node);}jsxParseOpeningElementAfterName(node){const attributes=[];while(!this.match(types.slash)&&!this.match(types.jsxTagEnd)){attributes.push(this.jsxParseAttribute());}node.attributes=attributes;node.selfClosing=this.eat(types.slash);this.expect(types.jsxTagEnd);return this.finishNode(node,"JSXOpeningElement");}jsxParseClosingElementAt(startPos,startLoc){const node=this.startNodeAt(startPos,startLoc);if(this.match(types.jsxTagEnd)){this.expect(types.jsxTagEnd);return this.finishNode(node,"JSXClosingFragment");}node.name=this.jsxParseElementName();this.expect(types.jsxTagEnd);return this.finishNode(node,"JSXClosingElement");}jsxParseElementAt(startPos,startLoc){const node=this.startNodeAt(startPos,startLoc);const children=[];const openingElement=this.jsxParseOpeningElementAt(startPos,startLoc);let closingElement=null;if(!openingElement.selfClosing){contents:for(;;){switch(this.state.type){case types.jsxTagStart:startPos=this.state.start;startLoc=this.state.startLoc;this.next();if(this.eat(types.slash)){closingElement=this.jsxParseClosingElementAt(startPos,startLoc);break contents;}children.push(this.jsxParseElementAt(startPos,startLoc));break;case types.jsxText:children.push(this.parseExprAtom());break;case types.braceL:{const node=this.startNode();this.next();if(this.match(types.ellipsis)){children.push(this.jsxParseSpreadChild(node));}else{children.push(this.jsxParseExpressionContainer(node));}break;}default:throw this.unexpected();}}if(isFragment(openingElement)&&!isFragment(closingElement)){this.raise(closingElement.start,"Expected corresponding JSX closing tag for <>");}else if(!isFragment(openingElement)&&isFragment(closingElement)){this.raise(closingElement.start,"Expected corresponding JSX closing tag for <"+getQualifiedJSXName(openingElement.name)+">");}else if(!isFragment(openingElement)&&!isFragment(closingElement)){if(getQualifiedJSXName(closingElement.name)!==getQualifiedJSXName(openingElement.name)){this.raise(closingElement.start,"Expected corresponding JSX closing tag for <"+getQualifiedJSXName(openingElement.name)+">");}}}if(isFragment(openingElement)){node.openingFragment=openingElement;node.closingFragment=closingElement;}else{node.openingElement=openingElement;node.closingElement=closingElement;}node.children=children;if(this.isRelational("<")){throw this.raise(this.state.start,"Adjacent JSX elements must be wrapped in an enclosing tag. "+"Did you want a JSX fragment <>...</>?");}return isFragment(openingElement)?this.finishNode(node,"JSXFragment"):this.finishNode(node,"JSXElement");}jsxParseElement(){const startPos=this.state.start;const startLoc=this.state.startLoc;this.next();return this.jsxParseElementAt(startPos,startLoc);}parseExprAtom(refShortHandDefaultPos){if(this.match(types.jsxText)){return this.parseLiteral(this.state.value,"JSXText");}else if(this.match(types.jsxTagStart)){return this.jsxParseElement();}else if(this.isRelational("<")&&this.input.charCodeAt(this.state.pos)!==33){this.finishToken(types.jsxTagStart);return this.jsxParseElement();}else{return super.parseExprAtom(refShortHandDefaultPos);}}getTokenFromCode(code){if(this.state.inPropertyName)return super.getTokenFromCode(code);const context=this.curContext();if(context===types$1.j_expr){return this.jsxReadToken();}if(context===types$1.j_oTag||context===types$1.j_cTag){if(isIdentifierStart(code)){return this.jsxReadWord();}if(code===62){++this.state.pos;return this.finishToken(types.jsxTagEnd);}if((code===34||code===39)&&context===types$1.j_oTag){return this.jsxReadString(code);}}if(code===60&&this.state.exprAllowed&&this.input.charCodeAt(this.state.pos+1)!==33){++this.state.pos;return this.finishToken(types.jsxTagStart);}return super.getTokenFromCode(code);}updateContext(prevType){if(this.match(types.braceL)){const curContext=this.curContext();if(curContext===types$1.j_oTag){this.state.context.push(types$1.braceExpression);}else if(curContext===types$1.j_expr){this.state.context.push(types$1.templateQuasi);}else{super.updateContext(prevType);}this.state.exprAllowed=true;}else if(this.match(types.slash)&&prevType===types.jsxTagStart){this.state.context.length-=2;this.state.context.push(types$1.j_cTag);this.state.exprAllowed=false;}else{return super.updateContext(prevType);}}};class Scope{constructor(flags){this.var=[];this.lexical=[];this.functions=[];this.flags=flags;}}class ScopeHandler{constructor(raise,inModule){this.scopeStack=[];this.undefinedExports=new Map();this.raise=raise;this.inModule=inModule;}get inFunction(){return(this.currentVarScope().flags&SCOPE_FUNCTION)>0;}get inGenerator(){return(this.currentVarScope().flags&SCOPE_GENERATOR)>0;}get inAsync(){return(this.currentVarScope().flags&SCOPE_ASYNC)>0;}get allowSuper(){return(this.currentThisScope().flags&SCOPE_SUPER)>0;}get allowDirectSuper(){return(this.currentThisScope().flags&SCOPE_DIRECT_SUPER)>0;}get inClass(){return(this.currentThisScope().flags&SCOPE_CLASS)>0;}get inNonArrowFunction(){return(this.currentThisScope().flags&SCOPE_FUNCTION)>0;}get treatFunctionsAsVar(){return this.treatFunctionsAsVarInScope(this.currentScope());}createScope(flags){return new Scope(flags);}enter(flags){this.scopeStack.push(this.createScope(flags));}exit(){this.scopeStack.pop();}treatFunctionsAsVarInScope(scope){return!!(scope.flags&SCOPE_FUNCTION||!this.inModule&&scope.flags&SCOPE_PROGRAM);}declareName(name,bindingType,pos){let scope=this.currentScope();if(bindingType&BIND_SCOPE_LEXICAL||bindingType&BIND_SCOPE_FUNCTION){this.checkRedeclarationInScope(scope,name,bindingType,pos);if(bindingType&BIND_SCOPE_FUNCTION){scope.functions.push(name);}else{scope.lexical.push(name);}if(bindingType&BIND_SCOPE_LEXICAL){this.maybeExportDefined(scope,name);}}else if(bindingType&BIND_SCOPE_VAR){for(let i=this.scopeStack.length-1;i>=0;--i){scope=this.scopeStack[i];this.checkRedeclarationInScope(scope,name,bindingType,pos);scope.var.push(name);this.maybeExportDefined(scope,name);if(scope.flags&SCOPE_VAR)break;}}if(this.inModule&&scope.flags&SCOPE_PROGRAM){this.undefinedExports.delete(name);}}maybeExportDefined(scope,name){if(this.inModule&&scope.flags&SCOPE_PROGRAM){this.undefinedExports.delete(name);}}checkRedeclarationInScope(scope,name,bindingType,pos){if(this.isRedeclaredInScope(scope,name,bindingType)){this.raise(pos,`Identifier '${name}' has already been declared`);}}isRedeclaredInScope(scope,name,bindingType){if(!(bindingType&BIND_KIND_VALUE))return false;if(bindingType&BIND_SCOPE_LEXICAL){return scope.lexical.indexOf(name)>-1||scope.functions.indexOf(name)>-1||scope.var.indexOf(name)>-1;}if(bindingType&BIND_SCOPE_FUNCTION){return scope.lexical.indexOf(name)>-1||!this.treatFunctionsAsVarInScope(scope)&&scope.var.indexOf(name)>-1;}return scope.lexical.indexOf(name)>-1&&!(scope.flags&SCOPE_SIMPLE_CATCH&&scope.lexical[0]===name)||!this.treatFunctionsAsVarInScope(scope)&&scope.functions.indexOf(name)>-1;}checkLocalExport(id){if(this.scopeStack[0].lexical.indexOf(id.name)===-1&&this.scopeStack[0].var.indexOf(id.name)===-1&&this.scopeStack[0].functions.indexOf(id.name)===-1){this.undefinedExports.set(id.name,id.start);}}currentScope(){return this.scopeStack[this.scopeStack.length-1];}currentVarScope(){for(let i=this.scopeStack.length-1;;i--){const scope=this.scopeStack[i];if(scope.flags&SCOPE_VAR){return scope;}}}currentThisScope(){for(let i=this.scopeStack.length-1;;i--){const scope=this.scopeStack[i];if((scope.flags&SCOPE_VAR||scope.flags&SCOPE_CLASS)&&!(scope.flags&SCOPE_ARROW)){return scope;}}}}class TypeScriptScope extends Scope{constructor(...args){super(...args);this.types=[];this.enums=[];this.constEnums=[];this.classes=[];this.exportOnlyBindings=[];}}class TypeScriptScopeHandler extends ScopeHandler{createScope(flags){return new TypeScriptScope(flags);}declareName(name,bindingType,pos){const scope=this.currentScope();if(bindingType&BIND_FLAGS_TS_EXPORT_ONLY){this.maybeExportDefined(scope,name);scope.exportOnlyBindings.push(name);return;}super.declareName.apply(this,arguments);if(bindingType&BIND_KIND_TYPE){if(!(bindingType&BIND_KIND_VALUE)){this.checkRedeclarationInScope(scope,name,bindingType,pos);this.maybeExportDefined(scope,name);}scope.types.push(name);}if(bindingType&BIND_FLAGS_TS_ENUM)scope.enums.push(name);if(bindingType&BIND_FLAGS_TS_CONST_ENUM)scope.constEnums.push(name);if(bindingType&BIND_FLAGS_CLASS)scope.classes.push(name);}isRedeclaredInScope(scope,name,bindingType){if(scope.enums.indexOf(name)>-1){if(bindingType&BIND_FLAGS_TS_ENUM){const isConst=!!(bindingType&BIND_FLAGS_TS_CONST_ENUM);const wasConst=scope.constEnums.indexOf(name)>-1;return isConst!==wasConst;}return true;}if(bindingType&BIND_FLAGS_CLASS&&scope.classes.indexOf(name)>-1){if(scope.lexical.indexOf(name)>-1){return!!(bindingType&BIND_KIND_VALUE);}else{return false;}}if(bindingType&BIND_KIND_TYPE&&scope.types.indexOf(name)>-1){return true;}return super.isRedeclaredInScope.apply(this,arguments);}checkLocalExport(id){if(this.scopeStack[0].types.indexOf(id.name)===-1&&this.scopeStack[0].exportOnlyBindings.indexOf(id.name)===-1){super.checkLocalExport(id);}}}function nonNull(x){if(x==null){throw new Error(`Unexpected ${x} value.`);}return x;}function assert(x){if(!x){throw new Error("Assert fail");}}function keywordTypeFromName(value){switch(value){case"any":return"TSAnyKeyword";case"boolean":return"TSBooleanKeyword";case"bigint":return"TSBigIntKeyword";case"never":return"TSNeverKeyword";case"number":return"TSNumberKeyword";case"object":return"TSObjectKeyword";case"string":return"TSStringKeyword";case"symbol":return"TSSymbolKeyword";case"undefined":return"TSUndefinedKeyword";case"unknown":return"TSUnknownKeyword";default:return undefined;}}var typescript=superClass=>class extends superClass{getScopeHandler(){return TypeScriptScopeHandler;}tsIsIdentifier(){return this.match(types.name);}tsNextTokenCanFollowModifier(){this.next();return!this.hasPrecedingLineBreak()&&!this.match(types.parenL)&&!this.match(types.parenR)&&!this.match(types.colon)&&!this.match(types.eq)&&!this.match(types.question)&&!this.match(types.bang);}tsParseModifier(allowedModifiers){if(!this.match(types.name)){return undefined;}const modifier=this.state.value;if(allowedModifiers.indexOf(modifier)!==-1&&this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))){return modifier;}return undefined;}tsParseModifiers(allowedModifiers){const modifiers=Object.create(null);while(true){const startPos=this.state.start;const modifier=this.tsParseModifier(allowedModifiers);if(!modifier)break;if(Object.hasOwnProperty.call(modifiers,modifier)){this.raise(startPos,`Duplicate modifier: '${modifier}'`);}modifiers[modifier]=true;}return modifiers;}tsIsListTerminator(kind){switch(kind){case"EnumMembers":case"TypeMembers":return this.match(types.braceR);case"HeritageClauseElement":return this.match(types.braceL);case"TupleElementTypes":return this.match(types.bracketR);case"TypeParametersOrArguments":return this.isRelational(">");}throw new Error("Unreachable");}tsParseList(kind,parseElement){const result=[];while(!this.tsIsListTerminator(kind)){result.push(parseElement());}return result;}tsParseDelimitedList(kind,parseElement){return nonNull(this.tsParseDelimitedListWorker(kind,parseElement,true));}tsParseDelimitedListWorker(kind,parseElement,expectSuccess){const result=[];while(true){if(this.tsIsListTerminator(kind)){break;}const element=parseElement();if(element==null){return undefined;}result.push(element);if(this.eat(types.comma)){continue;}if(this.tsIsListTerminator(kind)){break;}if(expectSuccess){this.expect(types.comma);}return undefined;}return result;}tsParseBracketedList(kind,parseElement,bracket,skipFirstToken){if(!skipFirstToken){if(bracket){this.expect(types.bracketL);}else{this.expectRelational("<");}}const result=this.tsParseDelimitedList(kind,parseElement);if(bracket){this.expect(types.bracketR);}else{this.expectRelational(">");}return result;}tsParseImportType(){const node=this.startNode();this.expect(types._import);this.expect(types.parenL);if(!this.match(types.string)){this.raise(this.state.start,"Argument in a type import must be a string literal");}node.argument=this.parseExprAtom();this.expect(types.parenR);if(this.eat(types.dot)){node.qualifier=this.tsParseEntityName(true);}if(this.isRelational("<")){node.typeParameters=this.tsParseTypeArguments();}return this.finishNode(node,"TSImportType");}tsParseEntityName(allowReservedWords){let entity=this.parseIdentifier();while(this.eat(types.dot)){const node=this.startNodeAtNode(entity);node.left=entity;node.right=this.parseIdentifier(allowReservedWords);entity=this.finishNode(node,"TSQualifiedName");}return entity;}tsParseTypeReference(){const node=this.startNode();node.typeName=this.tsParseEntityName(false);if(!this.hasPrecedingLineBreak()&&this.isRelational("<")){node.typeParameters=this.tsParseTypeArguments();}return this.finishNode(node,"TSTypeReference");}tsParseThisTypePredicate(lhs){this.next();const node=this.startNodeAtNode(lhs);node.parameterName=lhs;node.typeAnnotation=this.tsParseTypeAnnotation(false);return this.finishNode(node,"TSTypePredicate");}tsParseThisTypeNode(){const node=this.startNode();this.next();return this.finishNode(node,"TSThisType");}tsParseTypeQuery(){const node=this.startNode();this.expect(types._typeof);if(this.match(types._import)){node.exprName=this.tsParseImportType();}else{node.exprName=this.tsParseEntityName(true);}return this.finishNode(node,"TSTypeQuery");}tsParseTypeParameter(){const node=this.startNode();node.name=this.parseIdentifierName(node.start);node.constraint=this.tsEatThenParseType(types._extends);node.default=this.tsEatThenParseType(types.eq);return this.finishNode(node,"TSTypeParameter");}tsTryParseTypeParameters(){if(this.isRelational("<")){return this.tsParseTypeParameters();}}tsParseTypeParameters(){const node=this.startNode();if(this.isRelational("<")||this.match(types.jsxTagStart)){this.next();}else{this.unexpected();}node.params=this.tsParseBracketedList("TypeParametersOrArguments",this.tsParseTypeParameter.bind(this),false,true);return this.finishNode(node,"TSTypeParameterDeclaration");}tsTryNextParseConstantContext(){if(this.lookahead().type===types._const){this.next();return this.tsParseTypeReference();}return null;}tsFillSignature(returnToken,signature){const returnTokenRequired=returnToken===types.arrow;signature.typeParameters=this.tsTryParseTypeParameters();this.expect(types.parenL);signature.parameters=this.tsParseBindingListForSignature();if(returnTokenRequired){signature.typeAnnotation=this.tsParseTypeOrTypePredicateAnnotation(returnToken);}else if(this.match(returnToken)){signature.typeAnnotation=this.tsParseTypeOrTypePredicateAnnotation(returnToken);}}tsParseBindingListForSignature(){return this.parseBindingList(types.parenR,41).map(pattern=>{if(pattern.type!=="Identifier"&&pattern.type!=="RestElement"&&pattern.type!=="ObjectPattern"&&pattern.type!=="ArrayPattern"){this.raise(pattern.start,"Name in a signature must be an Identifier, ObjectPattern or ArrayPattern,"+`instead got ${pattern.type}`);}return pattern;});}tsParseTypeMemberSemicolon(){if(!this.eat(types.comma)){this.semicolon();}}tsParseSignatureMember(kind,node){this.tsFillSignature(types.colon,node);this.tsParseTypeMemberSemicolon();return this.finishNode(node,kind);}tsIsUnambiguouslyIndexSignature(){this.next();return this.eat(types.name)&&this.match(types.colon);}tsTryParseIndexSignature(node){if(!(this.match(types.bracketL)&&this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this)))){return undefined;}this.expect(types.bracketL);const id=this.parseIdentifier();id.typeAnnotation=this.tsParseTypeAnnotation();this.resetEndLocation(id);this.expect(types.bracketR);node.parameters=[id];const type=this.tsTryParseTypeAnnotation();if(type)node.typeAnnotation=type;this.tsParseTypeMemberSemicolon();return this.finishNode(node,"TSIndexSignature");}tsParsePropertyOrMethodSignature(node,readonly){if(this.eat(types.question))node.optional=true;const nodeAny=node;if(!readonly&&(this.match(types.parenL)||this.isRelational("<"))){const method=nodeAny;this.tsFillSignature(types.colon,method);this.tsParseTypeMemberSemicolon();return this.finishNode(method,"TSMethodSignature");}else{const property=nodeAny;if(readonly)property.readonly=true;const type=this.tsTryParseTypeAnnotation();if(type)property.typeAnnotation=type;this.tsParseTypeMemberSemicolon();return this.finishNode(property,"TSPropertySignature");}}tsParseTypeMember(){const node=this.startNode();if(this.match(types.parenL)||this.isRelational("<")){return this.tsParseSignatureMember("TSCallSignatureDeclaration",node);}if(this.match(types._new)){const id=this.startNode();this.next();if(this.match(types.parenL)||this.isRelational("<")){return this.tsParseSignatureMember("TSConstructSignatureDeclaration",node);}else{node.key=this.createIdentifier(id,"new");return this.tsParsePropertyOrMethodSignature(node,false);}}const readonly=!!this.tsParseModifier(["readonly"]);const idx=this.tsTryParseIndexSignature(node);if(idx){if(readonly)node.readonly=true;return idx;}this.parsePropertyName(node);return this.tsParsePropertyOrMethodSignature(node,readonly);}tsParseTypeLiteral(){const node=this.startNode();node.members=this.tsParseObjectTypeMembers();return this.finishNode(node,"TSTypeLiteral");}tsParseObjectTypeMembers(){this.expect(types.braceL);const members=this.tsParseList("TypeMembers",this.tsParseTypeMember.bind(this));this.expect(types.braceR);return members;}tsIsStartOfMappedType(){this.next();if(this.eat(types.plusMin)){return this.isContextual("readonly");}if(this.isContextual("readonly")){this.next();}if(!this.match(types.bracketL)){return false;}this.next();if(!this.tsIsIdentifier()){return false;}this.next();return this.match(types._in);}tsParseMappedTypeParameter(){const node=this.startNode();node.name=this.parseIdentifierName(node.start);node.constraint=this.tsExpectThenParseType(types._in);return this.finishNode(node,"TSTypeParameter");}tsParseMappedType(){const node=this.startNode();this.expect(types.braceL);if(this.match(types.plusMin)){node.readonly=this.state.value;this.next();this.expectContextual("readonly");}else if(this.eatContextual("readonly")){node.readonly=true;}this.expect(types.bracketL);node.typeParameter=this.tsParseMappedTypeParameter();this.expect(types.bracketR);if(this.match(types.plusMin)){node.optional=this.state.value;this.next();this.expect(types.question);}else if(this.eat(types.question)){node.optional=true;}node.typeAnnotation=this.tsTryParseType();this.semicolon();this.expect(types.braceR);return this.finishNode(node,"TSMappedType");}tsParseTupleType(){const node=this.startNode();node.elementTypes=this.tsParseBracketedList("TupleElementTypes",this.tsParseTupleElementType.bind(this),true,false);let seenOptionalElement=false;node.elementTypes.forEach(elementNode=>{if(elementNode.type==="TSOptionalType"){seenOptionalElement=true;}else if(seenOptionalElement&&elementNode.type!=="TSRestType"){this.raise(elementNode.start,"A required element cannot follow an optional element.");}});return this.finishNode(node,"TSTupleType");}tsParseTupleElementType(){if(this.match(types.ellipsis)){const restNode=this.startNode();this.next();restNode.typeAnnotation=this.tsParseType();if(this.match(types.comma)&&this.lookaheadCharCode()!==93){this.raiseRestNotLast(this.state.start);}return this.finishNode(restNode,"TSRestType");}const type=this.tsParseType();if(this.eat(types.question)){const optionalTypeNode=this.startNodeAtNode(type);optionalTypeNode.typeAnnotation=type;return this.finishNode(optionalTypeNode,"TSOptionalType");}return type;}tsParseParenthesizedType(){const node=this.startNode();this.expect(types.parenL);node.typeAnnotation=this.tsParseType();this.expect(types.parenR);return this.finishNode(node,"TSParenthesizedType");}tsParseFunctionOrConstructorType(type){const node=this.startNode();if(type==="TSConstructorType"){this.expect(types._new);}this.tsFillSignature(types.arrow,node);return this.finishNode(node,type);}tsParseLiteralTypeNode(){const node=this.startNode();node.literal=(()=>{switch(this.state.type){case types.num:case types.string:case types._true:case types._false:return this.parseExprAtom();default:throw this.unexpected();}})();return this.finishNode(node,"TSLiteralType");}tsParseTemplateLiteralType(){const node=this.startNode();const templateNode=this.parseTemplate(false);if(templateNode.expressions.length>0){this.raise(templateNode.expressions[0].start,"Template literal types cannot have any substitution");}node.literal=templateNode;return this.finishNode(node,"TSLiteralType");}tsParseThisTypeOrThisTypePredicate(){const thisKeyword=this.tsParseThisTypeNode();if(this.isContextual("is")&&!this.hasPrecedingLineBreak()){return this.tsParseThisTypePredicate(thisKeyword);}else{return thisKeyword;}}tsParseNonArrayType(){switch(this.state.type){case types.name:case types._void:case types._null:{const type=this.match(types._void)?"TSVoidKeyword":this.match(types._null)?"TSNullKeyword":keywordTypeFromName(this.state.value);if(type!==undefined&&this.lookaheadCharCode()!==46){const node=this.startNode();this.next();return this.finishNode(node,type);}return this.tsParseTypeReference();}case types.string:case types.num:case types._true:case types._false:return this.tsParseLiteralTypeNode();case types.plusMin:if(this.state.value==="-"){const node=this.startNode();if(this.lookahead().type!==types.num){throw this.unexpected();}node.literal=this.parseMaybeUnary();return this.finishNode(node,"TSLiteralType");}break;case types._this:return this.tsParseThisTypeOrThisTypePredicate();case types._typeof:return this.tsParseTypeQuery();case types._import:return this.tsParseImportType();case types.braceL:return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this))?this.tsParseMappedType():this.tsParseTypeLiteral();case types.bracketL:return this.tsParseTupleType();case types.parenL:return this.tsParseParenthesizedType();case types.backQuote:return this.tsParseTemplateLiteralType();}throw this.unexpected();}tsParseArrayTypeOrHigher(){let type=this.tsParseNonArrayType();while(!this.hasPrecedingLineBreak()&&this.eat(types.bracketL)){if(this.match(types.bracketR)){const node=this.startNodeAtNode(type);node.elementType=type;this.expect(types.bracketR);type=this.finishNode(node,"TSArrayType");}else{const node=this.startNodeAtNode(type);node.objectType=type;node.indexType=this.tsParseType();this.expect(types.bracketR);type=this.finishNode(node,"TSIndexedAccessType");}}return type;}tsParseTypeOperator(operator){const node=this.startNode();this.expectContextual(operator);node.operator=operator;node.typeAnnotation=this.tsParseTypeOperatorOrHigher();if(operator==="readonly"){this.tsCheckTypeAnnotationForReadOnly(node);}return this.finishNode(node,"TSTypeOperator");}tsCheckTypeAnnotationForReadOnly(node){switch(node.typeAnnotation.type){case"TSTupleType":case"TSArrayType":return;default:this.raise(node.start,"'readonly' type modifier is only permitted on array and tuple literal types.");}}tsParseInferType(){const node=this.startNode();this.expectContextual("infer");const typeParameter=this.startNode();typeParameter.name=this.parseIdentifierName(typeParameter.start);node.typeParameter=this.finishNode(typeParameter,"TSTypeParameter");return this.finishNode(node,"TSInferType");}tsParseTypeOperatorOrHigher(){const operator=["keyof","unique","readonly"].find(kw=>this.isContextual(kw));return operator?this.tsParseTypeOperator(operator):this.isContextual("infer")?this.tsParseInferType():this.tsParseArrayTypeOrHigher();}tsParseUnionOrIntersectionType(kind,parseConstituentType,operator){this.eat(operator);let type=parseConstituentType();if(this.match(operator)){const types=[type];while(this.eat(operator)){types.push(parseConstituentType());}const node=this.startNodeAtNode(type);node.types=types;type=this.finishNode(node,kind);}return type;}tsParseIntersectionTypeOrHigher(){return this.tsParseUnionOrIntersectionType("TSIntersectionType",this.tsParseTypeOperatorOrHigher.bind(this),types.bitwiseAND);}tsParseUnionTypeOrHigher(){return this.tsParseUnionOrIntersectionType("TSUnionType",this.tsParseIntersectionTypeOrHigher.bind(this),types.bitwiseOR);}tsIsStartOfFunctionType(){if(this.isRelational("<")){return true;}return this.match(types.parenL)&&this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));}tsSkipParameterStart(){if(this.match(types.name)||this.match(types._this)){this.next();return true;}if(this.match(types.braceL)){let braceStackCounter=1;this.next();while(braceStackCounter>0){if(this.match(types.braceL)){++braceStackCounter;}else if(this.match(types.braceR)){--braceStackCounter;}this.next();}return true;}if(this.match(types.bracketL)){let braceStackCounter=1;this.next();while(braceStackCounter>0){if(this.match(types.bracketL)){++braceStackCounter;}else if(this.match(types.bracketR)){--braceStackCounter;}this.next();}return true;}return false;}tsIsUnambiguouslyStartOfFunctionType(){this.next();if(this.match(types.parenR)||this.match(types.ellipsis)){return true;}if(this.tsSkipParameterStart()){if(this.match(types.colon)||this.match(types.comma)||this.match(types.question)||this.match(types.eq)){return true;}if(this.match(types.parenR)){this.next();if(this.match(types.arrow)){return true;}}}return false;}tsParseTypeOrTypePredicateAnnotation(returnToken){return this.tsInType(()=>{const t=this.startNode();this.expect(returnToken);const asserts=this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));if(asserts&&this.match(types._this)){let thisTypePredicate=this.tsParseThisTypeOrThisTypePredicate();if(thisTypePredicate.type==="TSThisType"){const node=this.startNodeAtNode(t);node.parameterName=thisTypePredicate;node.asserts=true;thisTypePredicate=this.finishNode(node,"TSTypePredicate");}else{thisTypePredicate.asserts=true;}t.typeAnnotation=thisTypePredicate;return this.finishNode(t,"TSTypeAnnotation");}const typePredicateVariable=this.tsIsIdentifier()&&this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));if(!typePredicateVariable){if(!asserts){return this.tsParseTypeAnnotation(false,t);}const node=this.startNodeAtNode(t);node.parameterName=this.parseIdentifier();node.asserts=asserts;t.typeAnnotation=this.finishNode(node,"TSTypePredicate");return this.finishNode(t,"TSTypeAnnotation");}const type=this.tsParseTypeAnnotation(false);const node=this.startNodeAtNode(t);node.parameterName=typePredicateVariable;node.typeAnnotation=type;node.asserts=asserts;t.typeAnnotation=this.finishNode(node,"TSTypePredicate");return this.finishNode(t,"TSTypeAnnotation");});}tsTryParseTypeOrTypePredicateAnnotation(){return this.match(types.colon)?this.tsParseTypeOrTypePredicateAnnotation(types.colon):undefined;}tsTryParseTypeAnnotation(){return this.match(types.colon)?this.tsParseTypeAnnotation():undefined;}tsTryParseType(){return this.tsEatThenParseType(types.colon);}tsParseTypePredicatePrefix(){const id=this.parseIdentifier();if(this.isContextual("is")&&!this.hasPrecedingLineBreak()){this.next();return id;}}tsParseTypePredicateAsserts(){if(!this.match(types.name)||this.state.value!=="asserts"||this.hasPrecedingLineBreak()){return false;}const containsEsc=this.state.containsEsc;this.next();if(!this.match(types.name)&&!this.match(types._this)){return false;}if(containsEsc){this.raise(this.state.lastTokStart,"Escape sequence in keyword asserts");}return true;}tsParseTypeAnnotation(eatColon=true,t=this.startNode()){this.tsInType(()=>{if(eatColon)this.expect(types.colon);t.typeAnnotation=this.tsParseType();});return this.finishNode(t,"TSTypeAnnotation");}tsParseType(){assert(this.state.inType);const type=this.tsParseNonConditionalType();if(this.hasPrecedingLineBreak()||!this.eat(types._extends)){return type;}const node=this.startNodeAtNode(type);node.checkType=type;node.extendsType=this.tsParseNonConditionalType();this.expect(types.question);node.trueType=this.tsParseType();this.expect(types.colon);node.falseType=this.tsParseType();return this.finishNode(node,"TSConditionalType");}tsParseNonConditionalType(){if(this.tsIsStartOfFunctionType()){return this.tsParseFunctionOrConstructorType("TSFunctionType");}if(this.match(types._new)){return this.tsParseFunctionOrConstructorType("TSConstructorType");}return this.tsParseUnionTypeOrHigher();}tsParseTypeAssertion(){const node=this.startNode();const _const=this.tsTryNextParseConstantContext();node.typeAnnotation=_const||this.tsNextThenParseType();this.expectRelational(">");node.expression=this.parseMaybeUnary();return this.finishNode(node,"TSTypeAssertion");}tsParseHeritageClause(descriptor){const originalStart=this.state.start;const delimitedList=this.tsParseDelimitedList("HeritageClauseElement",this.tsParseExpressionWithTypeArguments.bind(this));if(!delimitedList.length){this.raise(originalStart,`'${descriptor}' list cannot be empty.`);}return delimitedList;}tsParseExpressionWithTypeArguments(){const node=this.startNode();node.expression=this.tsParseEntityName(false);if(this.isRelational("<")){node.typeParameters=this.tsParseTypeArguments();}return this.finishNode(node,"TSExpressionWithTypeArguments");}tsParseInterfaceDeclaration(node){node.id=this.parseIdentifier();this.checkLVal(node.id,BIND_TS_INTERFACE,undefined,"typescript interface declaration");node.typeParameters=this.tsTryParseTypeParameters();if(this.eat(types._extends)){node.extends=this.tsParseHeritageClause("extends");}const body=this.startNode();body.body=this.tsInType(this.tsParseObjectTypeMembers.bind(this));node.body=this.finishNode(body,"TSInterfaceBody");return this.finishNode(node,"TSInterfaceDeclaration");}tsParseTypeAliasDeclaration(node){node.id=this.parseIdentifier();this.checkLVal(node.id,BIND_TS_TYPE,undefined,"typescript type alias");node.typeParameters=this.tsTryParseTypeParameters();node.typeAnnotation=this.tsExpectThenParseType(types.eq);this.semicolon();return this.finishNode(node,"TSTypeAliasDeclaration");}tsInNoContext(cb){const oldContext=this.state.context;this.state.context=[oldContext[0]];try{return cb();}finally{this.state.context=oldContext;}}tsInType(cb){const oldInType=this.state.inType;this.state.inType=true;try{return cb();}finally{this.state.inType=oldInType;}}tsEatThenParseType(token){return!this.match(token)?undefined:this.tsNextThenParseType();}tsExpectThenParseType(token){return this.tsDoThenParseType(()=>this.expect(token));}tsNextThenParseType(){return this.tsDoThenParseType(()=>this.next());}tsDoThenParseType(cb){return this.tsInType(()=>{cb();return this.tsParseType();});}tsParseEnumMember(){const node=this.startNode();node.id=this.match(types.string)?this.parseExprAtom():this.parseIdentifier(true);if(this.eat(types.eq)){node.initializer=this.parseMaybeAssign();}return this.finishNode(node,"TSEnumMember");}tsParseEnumDeclaration(node,isConst){if(isConst)node.const=true;node.id=this.parseIdentifier();this.checkLVal(node.id,isConst?BIND_TS_CONST_ENUM:BIND_TS_ENUM,undefined,"typescript enum declaration");this.expect(types.braceL);node.members=this.tsParseDelimitedList("EnumMembers",this.tsParseEnumMember.bind(this));this.expect(types.braceR);return this.finishNode(node,"TSEnumDeclaration");}tsParseModuleBlock(){const node=this.startNode();this.scope.enter(SCOPE_OTHER);this.expect(types.braceL);this.parseBlockOrModuleBlockBody(node.body=[],undefined,true,types.braceR);this.scope.exit();return this.finishNode(node,"TSModuleBlock");}tsParseModuleOrNamespaceDeclaration(node,nested=false){node.id=this.parseIdentifier();if(!nested){this.checkLVal(node.id,BIND_TS_NAMESPACE,null,"module or namespace declaration");}if(this.eat(types.dot)){const inner=this.startNode();this.tsParseModuleOrNamespaceDeclaration(inner,true);node.body=inner;}else{this.scope.enter(SCOPE_TS_MODULE);node.body=this.tsParseModuleBlock();this.scope.exit();}return this.finishNode(node,"TSModuleDeclaration");}tsParseAmbientExternalModuleDeclaration(node){if(this.isContextual("global")){node.global=true;node.id=this.parseIdentifier();}else if(this.match(types.string)){node.id=this.parseExprAtom();}else{this.unexpected();}if(this.match(types.braceL)){this.scope.enter(SCOPE_TS_MODULE);node.body=this.tsParseModuleBlock();this.scope.exit();}else{this.semicolon();}return this.finishNode(node,"TSModuleDeclaration");}tsParseImportEqualsDeclaration(node,isExport){node.isExport=isExport||false;node.id=this.parseIdentifier();this.checkLVal(node.id,BIND_LEXICAL,undefined,"import equals declaration");this.expect(types.eq);node.moduleReference=this.tsParseModuleReference();this.semicolon();return this.finishNode(node,"TSImportEqualsDeclaration");}tsIsExternalModuleReference(){return this.isContextual("require")&&this.lookaheadCharCode()===40;}tsParseModuleReference(){return this.tsIsExternalModuleReference()?this.tsParseExternalModuleReference():this.tsParseEntityName(false);}tsParseExternalModuleReference(){const node=this.startNode();this.expectContextual("require");this.expect(types.parenL);if(!this.match(types.string)){throw this.unexpected();}node.expression=this.parseExprAtom();this.expect(types.parenR);return this.finishNode(node,"TSExternalModuleReference");}tsLookAhead(f){const state=this.state.clone();const res=f();this.state=state;return res;}tsTryParseAndCatch(f){const result=this.tryParse(abort=>f()||abort());if(result.aborted||!result.node)return undefined;if(result.error)this.state=result.failState;return result.node;}tsTryParse(f){const state=this.state.clone();const result=f();if(result!==undefined&&result!==false){return result;}else{this.state=state;return undefined;}}tsTryParseDeclare(nany){if(this.isLineTerminator()){return;}let starttype=this.state.type;let kind;if(this.isContextual("let")){starttype=types._var;kind="let";}switch(starttype){case types._function:return this.parseFunctionStatement(nany,false,true);case types._class:nany.declare=true;return this.parseClass(nany,true,false);case types._const:if(this.match(types._const)&&this.isLookaheadContextual("enum")){this.expect(types._const);this.expectContextual("enum");return this.tsParseEnumDeclaration(nany,true);}case types._var:kind=kind||this.state.value;return this.parseVarStatement(nany,kind);case types.name:{const value=this.state.value;if(value==="global"){return this.tsParseAmbientExternalModuleDeclaration(nany);}else{return this.tsParseDeclaration(nany,value,true);}}}}tsTryParseExportDeclaration(){return this.tsParseDeclaration(this.startNode(),this.state.value,true);}tsParseExpressionStatement(node,expr){switch(expr.name){case"declare":{const declaration=this.tsTryParseDeclare(node);if(declaration){declaration.declare=true;return declaration;}break;}case"global":if(this.match(types.braceL)){this.scope.enter(SCOPE_TS_MODULE);const mod=node;mod.global=true;mod.id=expr;mod.body=this.tsParseModuleBlock();this.scope.exit();return this.finishNode(mod,"TSModuleDeclaration");}break;default:return this.tsParseDeclaration(node,expr.name,false);}}tsParseDeclaration(node,value,next){switch(value){case"abstract":if(this.tsCheckLineTerminatorAndMatch(types._class,next)){const cls=node;cls.abstract=true;if(next){this.next();if(!this.match(types._class)){this.unexpected(null,types._class);}}return this.parseClass(cls,true,false);}break;case"enum":if(next||this.match(types.name)){if(next)this.next();return this.tsParseEnumDeclaration(node,false);}break;case"interface":if(this.tsCheckLineTerminatorAndMatch(types.name,next)){if(next)this.next();return this.tsParseInterfaceDeclaration(node);}break;case"module":if(next)this.next();if(this.match(types.string)){return this.tsParseAmbientExternalModuleDeclaration(node);}else if(this.tsCheckLineTerminatorAndMatch(types.name,next)){return this.tsParseModuleOrNamespaceDeclaration(node);}break;case"namespace":if(this.tsCheckLineTerminatorAndMatch(types.name,next)){if(next)this.next();return this.tsParseModuleOrNamespaceDeclaration(node);}break;case"type":if(this.tsCheckLineTerminatorAndMatch(types.name,next)){if(next)this.next();return this.tsParseTypeAliasDeclaration(node);}break;}}tsCheckLineTerminatorAndMatch(tokenType,next){return(next||this.match(tokenType))&&!this.isLineTerminator();}tsTryParseGenericAsyncArrowFunction(startPos,startLoc){if(!this.isRelational("<")){return undefined;}const res=this.tsTryParseAndCatch(()=>{const node=this.startNodeAt(startPos,startLoc);node.typeParameters=this.tsParseTypeParameters();super.parseFunctionParams(node);node.returnType=this.tsTryParseTypeOrTypePredicateAnnotation();this.expect(types.arrow);return node;});if(!res){return undefined;}return this.parseArrowExpression(res,null,true);}tsParseTypeArguments(){const node=this.startNode();node.params=this.tsInType(()=>this.tsInNoContext(()=>{this.expectRelational("<");return this.tsParseDelimitedList("TypeParametersOrArguments",this.tsParseType.bind(this));}));this.state.exprAllowed=false;this.expectRelational(">");return this.finishNode(node,"TSTypeParameterInstantiation");}tsIsDeclarationStart(){if(this.match(types.name)){switch(this.state.value){case"abstract":case"declare":case"enum":case"interface":case"module":case"namespace":case"type":return true;}}return false;}isExportDefaultSpecifier(){if(this.tsIsDeclarationStart())return false;return super.isExportDefaultSpecifier();}parseAssignableListItem(allowModifiers,decorators){const startPos=this.state.start;const startLoc=this.state.startLoc;let accessibility;let readonly=false;if(allowModifiers){accessibility=this.parseAccessModifier();readonly=!!this.tsParseModifier(["readonly"]);}const left=this.parseMaybeDefault();this.parseAssignableListItemTypes(left);const elt=this.parseMaybeDefault(left.start,left.loc.start,left);if(accessibility||readonly){const pp=this.startNodeAt(startPos,startLoc);if(decorators.length){pp.decorators=decorators;}if(accessibility)pp.accessibility=accessibility;if(readonly)pp.readonly=readonly;if(elt.type!=="Identifier"&&elt.type!=="AssignmentPattern"){this.raise(pp.start,"A parameter property may not be declared using a binding pattern.");}pp.parameter=elt;return this.finishNode(pp,"TSParameterProperty");}if(decorators.length){left.decorators=decorators;}return elt;}parseFunctionBodyAndFinish(node,type,isMethod=false){if(this.match(types.colon)){node.returnType=this.tsParseTypeOrTypePredicateAnnotation(types.colon);}const bodilessType=type==="FunctionDeclaration"?"TSDeclareFunction":type==="ClassMethod"?"TSDeclareMethod":undefined;if(bodilessType&&!this.match(types.braceL)&&this.isLineTerminator()){this.finishNode(node,bodilessType);return;}super.parseFunctionBodyAndFinish(node,type,isMethod);}registerFunctionStatementId(node){if(!node.body&&node.id){this.checkLVal(node.id,BIND_TS_AMBIENT,null,"function name");}else{super.registerFunctionStatementId.apply(this,arguments);}}parseSubscript(base,startPos,startLoc,noCalls,state){if(!this.hasPrecedingLineBreak()&&this.match(types.bang)){this.state.exprAllowed=false;this.next();const nonNullExpression=this.startNodeAt(startPos,startLoc);nonNullExpression.expression=base;return this.finishNode(nonNullExpression,"TSNonNullExpression");}if(this.isRelational("<")){const result=this.tsTryParseAndCatch(()=>{if(!noCalls&&this.atPossibleAsync(base)){const asyncArrowFn=this.tsTryParseGenericAsyncArrowFunction(startPos,startLoc);if(asyncArrowFn){return asyncArrowFn;}}const node=this.startNodeAt(startPos,startLoc);node.callee=base;const typeArguments=this.tsParseTypeArguments();if(typeArguments){if(!noCalls&&this.eat(types.parenL)){node.arguments=this.parseCallExpressionArguments(types.parenR,false);node.typeParameters=typeArguments;return this.finishCallExpression(node,state.optionalChainMember);}else if(this.match(types.backQuote)){return this.parseTaggedTemplateExpression(startPos,startLoc,base,state,typeArguments);}}this.unexpected();});if(result)return result;}return super.parseSubscript(base,startPos,startLoc,noCalls,state);}parseNewArguments(node){if(this.isRelational("<")){const typeParameters=this.tsTryParseAndCatch(()=>{const args=this.tsParseTypeArguments();if(!this.match(types.parenL))this.unexpected();return args;});if(typeParameters){node.typeParameters=typeParameters;}}super.parseNewArguments(node);}parseExprOp(left,leftStartPos,leftStartLoc,minPrec,noIn){if(nonNull(types._in.binop)>minPrec&&!this.hasPrecedingLineBreak()&&this.isContextual("as")){const node=this.startNodeAt(leftStartPos,leftStartLoc);node.expression=left;const _const=this.tsTryNextParseConstantContext();if(_const){node.typeAnnotation=_const;}else{node.typeAnnotation=this.tsNextThenParseType();}this.finishNode(node,"TSAsExpression");return this.parseExprOp(node,leftStartPos,leftStartLoc,minPrec,noIn);}return super.parseExprOp(left,leftStartPos,leftStartLoc,minPrec,noIn);}checkReservedWord(word,startLoc,checkKeywords,isBinding){}checkDuplicateExports(){}parseImport(node){if(this.match(types.name)&&this.lookahead().type===types.eq){return this.tsParseImportEqualsDeclaration(node);}return super.parseImport(node);}parseExport(node){if(this.match(types._import)){this.expect(types._import);return this.tsParseImportEqualsDeclaration(node,true);}else if(this.eat(types.eq)){const assign=node;assign.expression=this.parseExpression();this.semicolon();return this.finishNode(assign,"TSExportAssignment");}else if(this.eatContextual("as")){const decl=node;this.expectContextual("namespace");decl.id=this.parseIdentifier();this.semicolon();return this.finishNode(decl,"TSNamespaceExportDeclaration");}else{return super.parseExport(node);}}isAbstractClass(){return this.isContextual("abstract")&&this.lookahead().type===types._class;}parseExportDefaultExpression(){if(this.isAbstractClass()){const cls=this.startNode();this.next();this.parseClass(cls,true,true);cls.abstract=true;return cls;}if(this.state.value==="interface"){const result=this.tsParseDeclaration(this.startNode(),this.state.value,true);if(result)return result;}return super.parseExportDefaultExpression();}parseStatementContent(context,topLevel){if(this.state.type===types._const){const ahead=this.lookahead();if(ahead.type===types.name&&ahead.value==="enum"){const node=this.startNode();this.expect(types._const);this.expectContextual("enum");return this.tsParseEnumDeclaration(node,true);}}return super.parseStatementContent(context,topLevel);}parseAccessModifier(){return this.tsParseModifier(["public","protected","private"]);}parseClassMember(classBody,member,state,constructorAllowsSuper){const accessibility=this.parseAccessModifier();if(accessibility)member.accessibility=accessibility;super.parseClassMember(classBody,member,state,constructorAllowsSuper);}parseClassMemberWithIsStatic(classBody,member,state,isStatic,constructorAllowsSuper){const modifiers=this.tsParseModifiers(["abstract","readonly","declare"]);Object.assign(member,modifiers);const idx=this.tsTryParseIndexSignature(member);if(idx){classBody.body.push(idx);if(modifiers.abstract){this.raise(member.start,"Index signatures cannot have the 'abstract' modifier");}if(isStatic){this.raise(member.start,"Index signatures cannot have the 'static' modifier");}if(member.accessibility){this.raise(member.start,`Index signatures cannot have an accessibility modifier ('${member.accessibility}')`);}return;}super.parseClassMemberWithIsStatic(classBody,member,state,isStatic,constructorAllowsSuper);}parsePostMemberNameModifiers(methodOrProp){const optional=this.eat(types.question);if(optional)methodOrProp.optional=true;if(methodOrProp.readonly&&this.match(types.parenL)){this.raise(methodOrProp.start,"Class methods cannot have the 'readonly' modifier");}if(methodOrProp.declare&&this.match(types.parenL)){this.raise(methodOrProp.start,"Class methods cannot have the 'declare' modifier");}}parseExpressionStatement(node,expr){const decl=expr.type==="Identifier"?this.tsParseExpressionStatement(node,expr):undefined;return decl||super.parseExpressionStatement(node,expr);}shouldParseExportDeclaration(){if(this.tsIsDeclarationStart())return true;return super.shouldParseExportDeclaration();}parseConditional(expr,noIn,startPos,startLoc,refNeedsArrowPos){if(!refNeedsArrowPos||!this.match(types.question)){return super.parseConditional(expr,noIn,startPos,startLoc,refNeedsArrowPos);}const result=this.tryParse(()=>super.parseConditional(expr,noIn,startPos,startLoc));if(!result.node){refNeedsArrowPos.start=result.error.pos||this.state.start;return expr;}if(result.error)this.state=result.failState;return result.node;}parseParenItem(node,startPos,startLoc){node=super.parseParenItem(node,startPos,startLoc);if(this.eat(types.question)){node.optional=true;this.resetEndLocation(node);}if(this.match(types.colon)){const typeCastNode=this.startNodeAt(startPos,startLoc);typeCastNode.expression=node;typeCastNode.typeAnnotation=this.tsParseTypeAnnotation();return this.finishNode(typeCastNode,"TSTypeCastExpression");}return node;}parseExportDeclaration(node){const startPos=this.state.start;const startLoc=this.state.startLoc;const isDeclare=this.eatContextual("declare");let declaration;if(this.match(types.name)){declaration=this.tsTryParseExportDeclaration();}if(!declaration){declaration=super.parseExportDeclaration(node);}if(declaration&&isDeclare){this.resetStartLocation(declaration,startPos,startLoc);declaration.declare=true;}return declaration;}parseClassId(node,isStatement,optionalId){if((!isStatement||optionalId)&&this.isContextual("implements")){return;}super.parseClassId(node,isStatement,optionalId,node.declare?BIND_TS_AMBIENT:BIND_CLASS);const typeParameters=this.tsTryParseTypeParameters();if(typeParameters)node.typeParameters=typeParameters;}parseClassPropertyAnnotation(node){if(!node.optional&&this.eat(types.bang)){node.definite=true;}const type=this.tsTryParseTypeAnnotation();if(type)node.typeAnnotation=type;}parseClassProperty(node){this.parseClassPropertyAnnotation(node);if(node.declare&&this.match(types.equal)){this.raise(this.state.start,"'declare' class fields cannot have an initializer");}return super.parseClassProperty(node);}parseClassPrivateProperty(node){if(node.abstract){this.raise(node.start,"Private elements cannot have the 'abstract' modifier.");}if(node.accessibility){this.raise(node.start,`Private elements cannot have an accessibility modifier ('${node.accessibility}')`);}this.parseClassPropertyAnnotation(node);return super.parseClassPrivateProperty(node);}pushClassMethod(classBody,method,isGenerator,isAsync,isConstructor,allowsDirectSuper){const typeParameters=this.tsTryParseTypeParameters();if(typeParameters)method.typeParameters=typeParameters;super.pushClassMethod(classBody,method,isGenerator,isAsync,isConstructor,allowsDirectSuper);}pushClassPrivateMethod(classBody,method,isGenerator,isAsync){const typeParameters=this.tsTryParseTypeParameters();if(typeParameters)method.typeParameters=typeParameters;super.pushClassPrivateMethod(classBody,method,isGenerator,isAsync);}parseClassSuper(node){super.parseClassSuper(node);if(node.superClass&&this.isRelational("<")){node.superTypeParameters=this.tsParseTypeArguments();}if(this.eatContextual("implements")){node.implements=this.tsParseHeritageClause("implements");}}parseObjPropValue(prop,...args){const typeParameters=this.tsTryParseTypeParameters();if(typeParameters)prop.typeParameters=typeParameters;super.parseObjPropValue.apply(this,[prop].concat(args));}parseFunctionParams(node,allowModifiers){const typeParameters=this.tsTryParseTypeParameters();if(typeParameters)node.typeParameters=typeParameters;super.parseFunctionParams(node,allowModifiers);}parseVarId(decl,kind){super.parseVarId(decl,kind);if(decl.id.type==="Identifier"&&this.eat(types.bang)){decl.definite=true;}const type=this.tsTryParseTypeAnnotation();if(type){decl.id.typeAnnotation=type;this.resetEndLocation(decl.id);}}parseAsyncArrowFromCallExpression(node,call){if(this.match(types.colon)){node.returnType=this.tsParseTypeAnnotation();}return super.parseAsyncArrowFromCallExpression(node,call);}parseMaybeAssign(...args){let state;let jsx;let typeCast;if(this.match(types.jsxTagStart)){state=this.state.clone();jsx=this.tryParse(()=>super.parseMaybeAssign.apply(this,args),state);if(!jsx.error)return jsx.node;const{context}=this.state;if(context[context.length-1]===types$1.j_oTag){context.length-=2;}else if(context[context.length-1]===types$1.j_expr){context.length-=1;}}if(!(jsx&&jsx.error)&&!this.isRelational("<")){return super.parseMaybeAssign.apply(this,args);}let typeParameters;state=state||this.state.clone();const arrow=this.tryParse(abort=>{typeParameters=this.tsParseTypeParameters();const expr=super.parseMaybeAssign.apply(this,args);if(expr.type!=="ArrowFunctionExpression"||expr.extra&&expr.extra.parenthesized){abort();}if(typeParameters&&typeParameters.params.length!==0){this.resetStartLocationFromNode(expr,typeParameters);}expr.typeParameters=typeParameters;return expr;},state);if(!arrow.error&&!arrow.aborted)return arrow.node;if(!jsx){assert(!this.hasPlugin("jsx"));typeCast=this.tryParse(()=>super.parseMaybeAssign.apply(this,args),state);if(!typeCast.error)return typeCast.node;}if(jsx&&jsx.node){this.state=jsx.failState;return jsx.node;}if(arrow.node){this.state=arrow.failState;return arrow.node;}if(typeCast&&typeCast.node){this.state=typeCast.failState;return typeCast.node;}if(jsx&&jsx.thrown)throw jsx.error;if(arrow.thrown)throw arrow.error;if(typeCast&&typeCast.thrown)throw typeCast.error;throw jsx&&jsx.error||arrow.error||typeCast&&typeCast.error;}parseMaybeUnary(refShorthandDefaultPos){if(!this.hasPlugin("jsx")&&this.isRelational("<")){return this.tsParseTypeAssertion();}else{return super.parseMaybeUnary(refShorthandDefaultPos);}}parseArrow(node){if(this.match(types.colon)){const result=this.tryParse(abort=>{const returnType=this.tsParseTypeOrTypePredicateAnnotation(types.colon);if(this.canInsertSemicolon()||!this.match(types.arrow))abort();return returnType;});if(result.aborted)return;if(!result.thrown){if(result.error)this.state=result.failState;node.returnType=result.node;}}return super.parseArrow(node);}parseAssignableListItemTypes(param){if(this.eat(types.question)){if(param.type!=="Identifier"){this.raise(param.start,"A binding pattern parameter cannot be optional in an implementation signature.");}param.optional=true;}const type=this.tsTryParseTypeAnnotation();if(type)param.typeAnnotation=type;this.resetEndLocation(param);return param;}toAssignable(node,isBinding,contextDescription){switch(node.type){case"TSTypeCastExpression":return super.toAssignable(this.typeCastToParameter(node),isBinding,contextDescription);case"TSParameterProperty":return super.toAssignable(node,isBinding,contextDescription);case"TSAsExpression":case"TSNonNullExpression":case"TSTypeAssertion":node.expression=this.toAssignable(node.expression,isBinding,contextDescription);return node;default:return super.toAssignable(node,isBinding,contextDescription);}}checkLVal(expr,bindingType=BIND_NONE,checkClashes,contextDescription){switch(expr.type){case"TSTypeCastExpression":return;case"TSParameterProperty":this.checkLVal(expr.parameter,bindingType,checkClashes,"parameter property");return;case"TSAsExpression":case"TSNonNullExpression":case"TSTypeAssertion":this.checkLVal(expr.expression,bindingType,checkClashes,contextDescription);return;default:super.checkLVal(expr,bindingType,checkClashes,contextDescription);return;}}parseBindingAtom(){switch(this.state.type){case types._this:return this.parseIdentifier(true);default:return super.parseBindingAtom();}}parseMaybeDecoratorArguments(expr){if(this.isRelational("<")){const typeArguments=this.tsParseTypeArguments();if(this.match(types.parenL)){const call=super.parseMaybeDecoratorArguments(expr);call.typeParameters=typeArguments;return call;}this.unexpected(this.state.start,types.parenL);}return super.parseMaybeDecoratorArguments(expr);}isClassMethod(){return this.isRelational("<")||super.isClassMethod();}isClassProperty(){return this.match(types.bang)||this.match(types.colon)||super.isClassProperty();}parseMaybeDefault(...args){const node=super.parseMaybeDefault.apply(this,args);if(node.type==="AssignmentPattern"&&node.typeAnnotation&&node.right.start<node.typeAnnotation.start){this.raise(node.typeAnnotation.start,"Type annotations must come before default assignments, "+"e.g. instead of `age = 25: number` use `age: number = 25`");}return node;}getTokenFromCode(code){if(this.state.inType&&(code===62||code===60)){return this.finishOp(types.relational,1);}else{return super.getTokenFromCode(code);}}toAssignableList(exprList,isBinding){for(let i=0;i<exprList.length;i++){const expr=exprList[i];if(!expr)continue;switch(expr.type){case"TSTypeCastExpression":exprList[i]=this.typeCastToParameter(expr);break;case"TSAsExpression":case"TSTypeAssertion":if(!isBinding){exprList[i]=this.typeCastToParameter(expr);}else{this.raise(expr.start,"Unexpected type cast in parameter position.");}break;}}return super.toAssignableList.apply(this,arguments);}typeCastToParameter(node){node.expression.typeAnnotation=node.typeAnnotation;this.resetEndLocation(node.expression,node.typeAnnotation.end,node.typeAnnotation.loc.end);return node.expression;}toReferencedList(exprList,isInParens){for(let i=0;i<exprList.length;i++){const expr=exprList[i];if(expr&&expr._exprListItem&&expr.type==="TsTypeCastExpression"){this.raise(expr.start,"Did not expect a type annotation here.");}}return exprList;}shouldParseArrow(){return this.match(types.colon)||super.shouldParseArrow();}shouldParseAsyncArrow(){return this.match(types.colon)||super.shouldParseAsyncArrow();}canHaveLeadingDecorator(){return super.canHaveLeadingDecorator()||this.isAbstractClass();}jsxParseOpeningElementAfterName(node){if(this.isRelational("<")){const typeArguments=this.tsTryParseAndCatch(()=>this.tsParseTypeArguments());if(typeArguments)node.typeParameters=typeArguments;}return super.jsxParseOpeningElementAfterName(node);}getGetterSetterExpectedParamCount(method){const baseCount=super.getGetterSetterExpectedParamCount(method);const firstParam=method.params[0];const hasContextParam=firstParam&&firstParam.type==="Identifier"&&firstParam.name==="this";return hasContextParam?baseCount+1:baseCount;}};types.placeholder=new TokenType("%%",{startsExpr:true});var placeholders=superClass=>class extends superClass{parsePlaceholder(expectedNode){if(this.match(types.placeholder)){const node=this.startNode();this.next();this.assertNoSpace("Unexpected space in placeholder.");node.name=super.parseIdentifier(true);this.assertNoSpace("Unexpected space in placeholder.");this.expect(types.placeholder);return this.finishPlaceholder(node,expectedNode);}}finishPlaceholder(node,expectedNode){const isFinished=!!(node.expectedNode&&node.type==="Placeholder");node.expectedNode=expectedNode;return isFinished?node:this.finishNode(node,"Placeholder");}getTokenFromCode(code){if(code===37&&this.input.charCodeAt(this.state.pos+1)===37){return this.finishOp(types.placeholder,2);}return super.getTokenFromCode.apply(this,arguments);}parseExprAtom(){return this.parsePlaceholder("Expression")||super.parseExprAtom.apply(this,arguments);}parseIdentifier(){return this.parsePlaceholder("Identifier")||super.parseIdentifier.apply(this,arguments);}checkReservedWord(word){if(word!==undefined)super.checkReservedWord.apply(this,arguments);}parseBindingAtom(){return this.parsePlaceholder("Pattern")||super.parseBindingAtom.apply(this,arguments);}checkLVal(expr){if(expr.type!=="Placeholder")super.checkLVal.apply(this,arguments);}toAssignable(node){if(node&&node.type==="Placeholder"&&node.expectedNode==="Expression"){node.expectedNode="Pattern";return node;}return super.toAssignable.apply(this,arguments);}verifyBreakContinue(node){if(node.label&&node.label.type==="Placeholder")return;super.verifyBreakContinue.apply(this,arguments);}parseExpressionStatement(node,expr){if(expr.type!=="Placeholder"||expr.extra&&expr.extra.parenthesized){return super.parseExpressionStatement.apply(this,arguments);}if(this.match(types.colon)){const stmt=node;stmt.label=this.finishPlaceholder(expr,"Identifier");this.next();stmt.body=this.parseStatement("label");return this.finishNode(stmt,"LabeledStatement");}this.semicolon();node.name=expr.name;return this.finishPlaceholder(node,"Statement");}parseBlock(){return this.parsePlaceholder("BlockStatement")||super.parseBlock.apply(this,arguments);}parseFunctionId(){return this.parsePlaceholder("Identifier")||super.parseFunctionId.apply(this,arguments);}parseClass(node,isStatement,optionalId){const type=isStatement?"ClassDeclaration":"ClassExpression";this.next();this.takeDecorators(node);const placeholder=this.parsePlaceholder("Identifier");if(placeholder){if(this.match(types._extends)||this.match(types.placeholder)||this.match(types.braceL)){node.id=placeholder;}else if(optionalId||!isStatement){node.id=null;node.body=this.finishPlaceholder(placeholder,"ClassBody");return this.finishNode(node,type);}else{this.unexpected(null,"A class name is required");}}else{this.parseClassId(node,isStatement,optionalId);}this.parseClassSuper(node);node.body=this.parsePlaceholder("ClassBody")||this.parseClassBody(!!node.superClass);return this.finishNode(node,type);}parseExport(node){const placeholder=this.parsePlaceholder("Identifier");if(!placeholder)return super.parseExport.apply(this,arguments);if(!this.isContextual("from")&&!this.match(types.comma)){node.specifiers=[];node.source=null;node.declaration=this.finishPlaceholder(placeholder,"Declaration");return this.finishNode(node,"ExportNamedDeclaration");}this.expectPlugin("exportDefaultFrom");const specifier=this.startNode();specifier.exported=placeholder;node.specifiers=[this.finishNode(specifier,"ExportDefaultSpecifier")];return super.parseExport(node);}maybeParseExportDefaultSpecifier(node){if(node.specifiers&&node.specifiers.length>0){return true;}return super.maybeParseExportDefaultSpecifier.apply(this,arguments);}checkExport(node){const{specifiers}=node;if(specifiers&&specifiers.length){node.specifiers=specifiers.filter(node=>node.exported.type==="Placeholder");}super.checkExport(node);node.specifiers=specifiers;}parseImport(node){const placeholder=this.parsePlaceholder("Identifier");if(!placeholder)return super.parseImport.apply(this,arguments);node.specifiers=[];if(!this.isContextual("from")&&!this.match(types.comma)){node.source=this.finishPlaceholder(placeholder,"StringLiteral");this.semicolon();return this.finishNode(node,"ImportDeclaration");}const specifier=this.startNodeAtNode(placeholder);specifier.local=placeholder;this.finishNode(specifier,"ImportDefaultSpecifier");node.specifiers.push(specifier);if(this.eat(types.comma)){const hasStarImport=this.maybeParseStarImportSpecifier(node);if(!hasStarImport)this.parseNamedImportSpecifiers(node);}this.expectContextual("from");node.source=this.parseImportSource();this.semicolon();return this.finishNode(node,"ImportDeclaration");}parseImportSource(){return this.parsePlaceholder("StringLiteral")||super.parseImportSource.apply(this,arguments);}};var v8intrinsic=superClass=>class extends superClass{parseV8Intrinsic(){if(this.match(types.modulo)){const v8IntrinsicStart=this.state.start;const node=this.startNode();this.eat(types.modulo);if(this.match(types.name)){const name=this.parseIdentifierName(this.state.start);const identifier=this.createIdentifier(node,name);identifier.type="V8IntrinsicIdentifier";if(this.match(types.parenL)){return identifier;}}this.unexpected(v8IntrinsicStart);}}parseExprAtom(){return this.parseV8Intrinsic()||super.parseExprAtom.apply(this,arguments);}};function hasPlugin(plugins,name){return plugins.some(plugin=>{if(Array.isArray(plugin)){return plugin[0]===name;}else{return plugin===name;}});}function getPluginOption(plugins,name,option){const plugin=plugins.find(plugin=>{if(Array.isArray(plugin)){return plugin[0]===name;}else{return plugin===name;}});if(plugin&&Array.isArray(plugin)){return plugin[1][option];}return null;}const PIPELINE_PROPOSALS=["minimal","smart","fsharp"];function validatePlugins(plugins){if(hasPlugin(plugins,"decorators")){if(hasPlugin(plugins,"decorators-legacy")){throw new Error("Cannot use the decorators and decorators-legacy plugin together");}const decoratorsBeforeExport=getPluginOption(plugins,"decorators","decoratorsBeforeExport");if(decoratorsBeforeExport==null){throw new Error("The 'decorators' plugin requires a 'decoratorsBeforeExport' option,"+" whose value must be a boolean. If you are migrating from"+" Babylon/Babel 6 or want to use the old decorators proposal, you"+" should use the 'decorators-legacy' plugin instead of 'decorators'.");}else if(typeof decoratorsBeforeExport!=="boolean"){throw new Error("'decoratorsBeforeExport' must be a boolean.");}}if(hasPlugin(plugins,"flow")&&hasPlugin(plugins,"typescript")){throw new Error("Cannot combine flow and typescript plugins.");}if(hasPlugin(plugins,"placeholders")&&hasPlugin(plugins,"v8intrinsic")){throw new Error("Cannot combine placeholders and v8intrinsic plugins.");}if(hasPlugin(plugins,"pipelineOperator")&&!PIPELINE_PROPOSALS.includes(getPluginOption(plugins,"pipelineOperator","proposal"))){throw new Error("'pipelineOperator' requires 'proposal' option whose value should be one of: "+PIPELINE_PROPOSALS.map(p=>`'${p}'`).join(", "));}}const mixinPlugins={estree,jsx,flow,typescript,v8intrinsic,placeholders};const mixinPluginNames=Object.keys(mixinPlugins);const defaultOptions={sourceType:"script",sourceFilename:undefined,startLine:1,allowAwaitOutsideFunction:false,allowReturnOutsideFunction:false,allowImportExportEverywhere:false,allowSuperOutsideMethod:false,allowUndeclaredExports:false,plugins:[],strictMode:null,ranges:false,tokens:false,createParenthesizedExpressions:false,errorRecovery:false};function getOptions(opts){const options={};for(let _i=0,_Object$keys=Object.keys(defaultOptions);_i<_Object$keys.length;_i++){const key=_Object$keys[_i];options[key]=opts&&opts[key]!=null?opts[key]:defaultOptions[key];}return options;}class Position{constructor(line,col){this.line=line;this.column=col;}}class SourceLocation{constructor(start,end){this.start=start;this.end=end;}}function getLineInfo(input,offset){let line=1;let lineStart=0;let match;lineBreakG.lastIndex=0;while((match=lineBreakG.exec(input))&&match.index<offset){line++;lineStart=lineBreakG.lastIndex;}return new Position(line,offset-lineStart);}class BaseParser{constructor(){this.sawUnambiguousESM=false;this.ambiguousScriptDifferentAst=false;}hasPlugin(name){return this.plugins.has(name);}getPluginOption(plugin,name){if(this.hasPlugin(plugin))return this.plugins.get(plugin)[name];}}function last(stack){return stack[stack.length-1];}class CommentsParser extends BaseParser{addComment(comment){if(this.filename)comment.loc.filename=this.filename;this.state.trailingComments.push(comment);this.state.leadingComments.push(comment);}adjustCommentsAfterTrailingComma(node,elements,takeAllComments){if(this.state.leadingComments.length===0){return;}let lastElement=null;let i=elements.length;while(lastElement===null&&i>0){lastElement=elements[--i];}if(lastElement===null){return;}for(let j=0;j<this.state.leadingComments.length;j++){if(this.state.leadingComments[j].end<this.state.commentPreviousNode.end){this.state.leadingComments.splice(j,1);j--;}}const newTrailingComments=[];for(let i=0;i<this.state.leadingComments.length;i++){const leadingComment=this.state.leadingComments[i];if(leadingComment.end<node.end){newTrailingComments.push(leadingComment);if(!takeAllComments){this.state.leadingComments.splice(i,1);i--;}}else{if(node.trailingComments===undefined){node.trailingComments=[];}node.trailingComments.push(leadingComment);}}if(takeAllComments)this.state.leadingComments=[];if(newTrailingComments.length>0){lastElement.trailingComments=newTrailingComments;}else if(lastElement.trailingComments!==undefined){lastElement.trailingComments=[];}}processComment(node){if(node.type==="Program"&&node.body.length>0)return;const stack=this.state.commentStack;let firstChild,lastChild,trailingComments,i,j;if(this.state.trailingComments.length>0){if(this.state.trailingComments[0].start>=node.end){trailingComments=this.state.trailingComments;this.state.trailingComments=[];}else{this.state.trailingComments.length=0;}}else if(stack.length>0){const lastInStack=last(stack);if(lastInStack.trailingComments&&lastInStack.trailingComments[0].start>=node.end){trailingComments=lastInStack.trailingComments;delete lastInStack.trailingComments;}}if(stack.length>0&&last(stack).start>=node.start){firstChild=stack.pop();}while(stack.length>0&&last(stack).start>=node.start){lastChild=stack.pop();}if(!lastChild&&firstChild)lastChild=firstChild;if(firstChild){switch(node.type){case"ObjectExpression":this.adjustCommentsAfterTrailingComma(node,node.properties);break;case"ObjectPattern":this.adjustCommentsAfterTrailingComma(node,node.properties,true);break;case"CallExpression":this.adjustCommentsAfterTrailingComma(node,node.arguments);break;case"ArrayExpression":this.adjustCommentsAfterTrailingComma(node,node.elements);break;case"ArrayPattern":this.adjustCommentsAfterTrailingComma(node,node.elements,true);break;}}else if(this.state.commentPreviousNode&&(this.state.commentPreviousNode.type==="ImportSpecifier"&&node.type!=="ImportSpecifier"||this.state.commentPreviousNode.type==="ExportSpecifier"&&node.type!=="ExportSpecifier")){this.adjustCommentsAfterTrailingComma(node,[this.state.commentPreviousNode],true);}if(lastChild){if(lastChild.leadingComments){if(lastChild!==node&&lastChild.leadingComments.length>0&&last(lastChild.leadingComments).end<=node.start){node.leadingComments=lastChild.leadingComments;delete lastChild.leadingComments;}else{for(i=lastChild.leadingComments.length-2;i>=0;--i){if(lastChild.leadingComments[i].end<=node.start){node.leadingComments=lastChild.leadingComments.splice(0,i+1);break;}}}}}else if(this.state.leadingComments.length>0){if(last(this.state.leadingComments).end<=node.start){if(this.state.commentPreviousNode){for(j=0;j<this.state.leadingComments.length;j++){if(this.state.leadingComments[j].end<this.state.commentPreviousNode.end){this.state.leadingComments.splice(j,1);j--;}}}if(this.state.leadingComments.length>0){node.leadingComments=this.state.leadingComments;this.state.leadingComments=[];}}else{for(i=0;i<this.state.leadingComments.length;i++){if(this.state.leadingComments[i].end>node.start){break;}}const leadingComments=this.state.leadingComments.slice(0,i);if(leadingComments.length){node.leadingComments=leadingComments;}trailingComments=this.state.leadingComments.slice(i);if(trailingComments.length===0){trailingComments=null;}}}this.state.commentPreviousNode=node;if(trailingComments){if(trailingComments.length&&trailingComments[0].start>=node.start&&last(trailingComments).end<=node.end){node.innerComments=trailingComments;}else{node.trailingComments=trailingComments;}}stack.push(node);}}class LocationParser extends CommentsParser{getLocationForPosition(pos){let loc;if(pos===this.state.start)loc=this.state.startLoc;else if(pos===this.state.lastTokStart)loc=this.state.lastTokStartLoc;else if(pos===this.state.end)loc=this.state.endLoc;else if(pos===this.state.lastTokEnd)loc=this.state.lastTokEndLoc;else loc=getLineInfo(this.input,pos);return loc;}raise(pos,message,{missingPluginNames,code}={}){const loc=this.getLocationForPosition(pos);message+=` (${loc.line}:${loc.column})`;const err=new SyntaxError(message);err.pos=pos;err.loc=loc;if(missingPluginNames){err.missingPlugin=missingPluginNames;}if(code!==undefined){err.code=code;}if(this.options.errorRecovery){if(!this.isLookahead)this.state.errors.push(err);return err;}else{throw err;}}}class State{constructor(){this.errors=[];this.potentialArrowAt=-1;this.noArrowAt=[];this.noArrowParamsConversionAt=[];this.inParameters=false;this.maybeInArrowParameters=false;this.inPipeline=false;this.inType=false;this.noAnonFunctionType=false;this.inPropertyName=false;this.inClassProperty=false;this.hasFlowComment=false;this.isIterator=false;this.topicContext={maxNumOfResolvableTopics:0,maxTopicIndex:null};this.soloAwait=false;this.inFSharpPipelineDirectBody=false;this.classLevel=0;this.labels=[];this.decoratorStack=[[]];this.yieldPos=-1;this.awaitPos=-1;this.tokens=[];this.comments=[];this.trailingComments=[];this.leadingComments=[];this.commentStack=[];this.commentPreviousNode=null;this.pos=0;this.lineStart=0;this.type=types.eof;this.value=null;this.start=0;this.end=0;this.lastTokEndLoc=null;this.lastTokStartLoc=null;this.lastTokStart=0;this.lastTokEnd=0;this.context=[types$1.braceStatement];this.exprAllowed=true;this.containsEsc=false;this.containsOctal=false;this.octalPosition=null;this.exportedIdentifiers=[];this.invalidTemplateEscapePosition=null;}init(options){this.strict=options.strictMode===false?false:options.sourceType==="module";this.curLine=options.startLine;this.startLoc=this.endLoc=this.curPosition();}curPosition(){return new Position(this.curLine,this.pos-this.lineStart);}clone(skipArrays){const state=new State();const keys=Object.keys(this);for(let i=0,length=keys.length;i<length;i++){const key=keys[i];let val=this[key];if(!skipArrays&&Array.isArray(val)){val=val.slice();}state[key]=val;}return state;}}var _isDigit=function isDigit(code){return code>=48&&code<=57;};const VALID_REGEX_FLAGS=new Set(["g","m","s","i","y","u"]);const forbiddenNumericSeparatorSiblings={decBinOct:[46,66,69,79,95,98,101,111],hex:[46,88,95,120]};const allowedNumericSeparatorSiblings={};allowedNumericSeparatorSiblings.bin=[48,49];allowedNumericSeparatorSiblings.oct=[].concat(_toConsumableArray(allowedNumericSeparatorSiblings.bin),[50,51,52,53,54,55]);allowedNumericSeparatorSiblings.dec=[].concat(_toConsumableArray(allowedNumericSeparatorSiblings.oct),[56,57]);allowedNumericSeparatorSiblings.hex=[].concat(_toConsumableArray(allowedNumericSeparatorSiblings.dec),[65,66,67,68,69,70,97,98,99,100,101,102]);class Token{constructor(state){this.type=state.type;this.value=state.value;this.start=state.start;this.end=state.end;this.loc=new SourceLocation(state.startLoc,state.endLoc);}}class Tokenizer extends LocationParser{constructor(options,input){super();this.state=new State();this.state.init(options);this.input=input;this.length=input.length;this.isLookahead=false;}next(){if(!this.isLookahead){this.checkKeywordEscapes();if(this.options.tokens){this.state.tokens.push(new Token(this.state));}}this.state.lastTokEnd=this.state.end;this.state.lastTokStart=this.state.start;this.state.lastTokEndLoc=this.state.endLoc;this.state.lastTokStartLoc=this.state.startLoc;this.nextToken();}eat(type){if(this.match(type)){this.next();return true;}else{return false;}}match(type){return this.state.type===type;}lookahead(){const old=this.state;this.state=old.clone(true);this.isLookahead=true;this.next();this.isLookahead=false;const curr=this.state;this.state=old;return curr;}nextTokenStart(){const thisTokEnd=this.state.pos;skipWhiteSpace.lastIndex=thisTokEnd;const skip=skipWhiteSpace.exec(this.input);return thisTokEnd+skip[0].length;}lookaheadCharCode(){return this.input.charCodeAt(this.nextTokenStart());}setStrict(strict){this.state.strict=strict;if(!this.match(types.num)&&!this.match(types.string))return;this.state.pos=this.state.start;while(this.state.pos<this.state.lineStart){this.state.lineStart=this.input.lastIndexOf("\n",this.state.lineStart-2)+1;--this.state.curLine;}this.nextToken();}curContext(){return this.state.context[this.state.context.length-1];}nextToken(){const curContext=this.curContext();if(!curContext||!curContext.preserveSpace)this.skipSpace();this.state.containsOctal=false;this.state.octalPosition=null;this.state.start=this.state.pos;this.state.startLoc=this.state.curPosition();if(this.state.pos>=this.length){this.finishToken(types.eof);return;}if(curContext.override){curContext.override(this);}else{this.getTokenFromCode(this.input.codePointAt(this.state.pos));}}pushComment(block,text,start,end,startLoc,endLoc){const comment={type:block?"CommentBlock":"CommentLine",value:text,start:start,end:end,loc:new SourceLocation(startLoc,endLoc)};if(this.options.tokens)this.state.tokens.push(comment);this.state.comments.push(comment);this.addComment(comment);}skipBlockComment(){const startLoc=this.state.curPosition();const start=this.state.pos;const end=this.input.indexOf("*/",this.state.pos+2);if(end===-1)throw this.raise(start,"Unterminated comment");this.state.pos=end+2;lineBreakG.lastIndex=start;let match;while((match=lineBreakG.exec(this.input))&&match.index<this.state.pos){++this.state.curLine;this.state.lineStart=match.index+match[0].length;}if(this.isLookahead)return;this.pushComment(true,this.input.slice(start+2,end),start,this.state.pos,startLoc,this.state.curPosition());}skipLineComment(startSkip){const start=this.state.pos;const startLoc=this.state.curPosition();let ch=this.input.charCodeAt(this.state.pos+=startSkip);if(this.state.pos<this.length){while(!isNewLine(ch)&&++this.state.pos<this.length){ch=this.input.charCodeAt(this.state.pos);}}if(this.isLookahead)return;this.pushComment(false,this.input.slice(start+startSkip,this.state.pos),start,this.state.pos,startLoc,this.state.curPosition());}skipSpace(){loop:while(this.state.pos<this.length){const ch=this.input.charCodeAt(this.state.pos);switch(ch){case 32:case 160:case 9:++this.state.pos;break;case 13:if(this.input.charCodeAt(this.state.pos+1)===10){++this.state.pos;}case 10:case 8232:case 8233:++this.state.pos;++this.state.curLine;this.state.lineStart=this.state.pos;break;case 47:switch(this.input.charCodeAt(this.state.pos+1)){case 42:this.skipBlockComment();break;case 47:this.skipLineComment(2);break;default:break loop;}break;default:if(isWhitespace(ch)){++this.state.pos;}else{break loop;}}}}finishToken(type,val){this.state.end=this.state.pos;this.state.endLoc=this.state.curPosition();const prevType=this.state.type;this.state.type=type;this.state.value=val;if(!this.isLookahead)this.updateContext(prevType);}readToken_numberSign(){if(this.state.pos===0&&this.readToken_interpreter()){return;}const nextPos=this.state.pos+1;const next=this.input.charCodeAt(nextPos);if(next>=48&&next<=57){throw this.raise(this.state.pos,"Unexpected digit after hash token");}if((this.hasPlugin("classPrivateProperties")||this.hasPlugin("classPrivateMethods"))&&this.state.classLevel>0){++this.state.pos;this.finishToken(types.hash);return;}else if(this.getPluginOption("pipelineOperator","proposal")==="smart"){this.finishOp(types.hash,1);}else{throw this.raise(this.state.pos,"Unexpected character '#'");}}readToken_dot(){const next=this.input.charCodeAt(this.state.pos+1);if(next>=48&&next<=57){this.readNumber(true);return;}if(next===46&&this.input.charCodeAt(this.state.pos+2)===46){this.state.pos+=3;this.finishToken(types.ellipsis);}else{++this.state.pos;this.finishToken(types.dot);}}readToken_slash(){if(this.state.exprAllowed&&!this.state.inType){++this.state.pos;this.readRegexp();return;}const next=this.input.charCodeAt(this.state.pos+1);if(next===61){this.finishOp(types.assign,2);}else{this.finishOp(types.slash,1);}}readToken_interpreter(){if(this.state.pos!==0||this.length<2)return false;const start=this.state.pos;this.state.pos+=1;let ch=this.input.charCodeAt(this.state.pos);if(ch!==33)return false;while(!isNewLine(ch)&&++this.state.pos<this.length){ch=this.input.charCodeAt(this.state.pos);}const value=this.input.slice(start+2,this.state.pos);this.finishToken(types.interpreterDirective,value);return true;}readToken_mult_modulo(code){let type=code===42?types.star:types.modulo;let width=1;let next=this.input.charCodeAt(this.state.pos+1);const exprAllowed=this.state.exprAllowed;if(code===42&&next===42){width++;next=this.input.charCodeAt(this.state.pos+2);type=types.exponent;}if(next===61&&!exprAllowed){width++;type=types.assign;}this.finishOp(type,width);}readToken_pipe_amp(code){const next=this.input.charCodeAt(this.state.pos+1);if(next===code){if(this.input.charCodeAt(this.state.pos+2)===61){this.finishOp(types.assign,3);}else{this.finishOp(code===124?types.logicalOR:types.logicalAND,2);}return;}if(code===124){if(next===62){this.finishOp(types.pipeline,2);return;}}if(next===61){this.finishOp(types.assign,2);return;}this.finishOp(code===124?types.bitwiseOR:types.bitwiseAND,1);}readToken_caret(){const next=this.input.charCodeAt(this.state.pos+1);if(next===61){this.finishOp(types.assign,2);}else{this.finishOp(types.bitwiseXOR,1);}}readToken_plus_min(code){const next=this.input.charCodeAt(this.state.pos+1);if(next===code){if(next===45&&!this.inModule&&this.input.charCodeAt(this.state.pos+2)===62&&(this.state.lastTokEnd===0||lineBreak.test(this.input.slice(this.state.lastTokEnd,this.state.pos)))){this.skipLineComment(3);this.skipSpace();this.nextToken();return;}this.finishOp(types.incDec,2);return;}if(next===61){this.finishOp(types.assign,2);}else{this.finishOp(types.plusMin,1);}}readToken_lt_gt(code){const next=this.input.charCodeAt(this.state.pos+1);let size=1;if(next===code){size=code===62&&this.input.charCodeAt(this.state.pos+2)===62?3:2;if(this.input.charCodeAt(this.state.pos+size)===61){this.finishOp(types.assign,size+1);return;}this.finishOp(types.bitShift,size);return;}if(next===33&&code===60&&!this.inModule&&this.input.charCodeAt(this.state.pos+2)===45&&this.input.charCodeAt(this.state.pos+3)===45){this.skipLineComment(4);this.skipSpace();this.nextToken();return;}if(next===61){size=2;}this.finishOp(types.relational,size);}readToken_eq_excl(code){const next=this.input.charCodeAt(this.state.pos+1);if(next===61){this.finishOp(types.equality,this.input.charCodeAt(this.state.pos+2)===61?3:2);return;}if(code===61&&next===62){this.state.pos+=2;this.finishToken(types.arrow);return;}this.finishOp(code===61?types.eq:types.bang,1);}readToken_question(){const next=this.input.charCodeAt(this.state.pos+1);const next2=this.input.charCodeAt(this.state.pos+2);if(next===63&&!this.state.inType){if(next2===61){this.finishOp(types.assign,3);}else{this.finishOp(types.nullishCoalescing,2);}}else if(next===46&&!(next2>=48&&next2<=57)){this.state.pos+=2;this.finishToken(types.questionDot);}else{++this.state.pos;this.finishToken(types.question);}}getTokenFromCode(code){switch(code){case 46:this.readToken_dot();return;case 40:++this.state.pos;this.finishToken(types.parenL);return;case 41:++this.state.pos;this.finishToken(types.parenR);return;case 59:++this.state.pos;this.finishToken(types.semi);return;case 44:++this.state.pos;this.finishToken(types.comma);return;case 91:++this.state.pos;this.finishToken(types.bracketL);return;case 93:++this.state.pos;this.finishToken(types.bracketR);return;case 123:++this.state.pos;this.finishToken(types.braceL);return;case 125:++this.state.pos;this.finishToken(types.braceR);return;case 58:if(this.hasPlugin("functionBind")&&this.input.charCodeAt(this.state.pos+1)===58){this.finishOp(types.doubleColon,2);}else{++this.state.pos;this.finishToken(types.colon);}return;case 63:this.readToken_question();return;case 96:++this.state.pos;this.finishToken(types.backQuote);return;case 48:{const next=this.input.charCodeAt(this.state.pos+1);if(next===120||next===88){this.readRadixNumber(16);return;}if(next===111||next===79){this.readRadixNumber(8);return;}if(next===98||next===66){this.readRadixNumber(2);return;}}case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:this.readNumber(false);return;case 34:case 39:this.readString(code);return;case 47:this.readToken_slash();return;case 37:case 42:this.readToken_mult_modulo(code);return;case 124:case 38:this.readToken_pipe_amp(code);return;case 94:this.readToken_caret();return;case 43:case 45:this.readToken_plus_min(code);return;case 60:case 62:this.readToken_lt_gt(code);return;case 61:case 33:this.readToken_eq_excl(code);return;case 126:this.finishOp(types.tilde,1);return;case 64:++this.state.pos;this.finishToken(types.at);return;case 35:this.readToken_numberSign();return;case 92:this.readWord();return;default:if(isIdentifierStart(code)){this.readWord();return;}}throw this.raise(this.state.pos,`Unexpected character '${String.fromCodePoint(code)}'`);}finishOp(type,size){const str=this.input.slice(this.state.pos,this.state.pos+size);this.state.pos+=size;this.finishToken(type,str);}readRegexp(){const start=this.state.pos;let escaped,inClass;for(;;){if(this.state.pos>=this.length){throw this.raise(start,"Unterminated regular expression");}const ch=this.input.charAt(this.state.pos);if(lineBreak.test(ch)){throw this.raise(start,"Unterminated regular expression");}if(escaped){escaped=false;}else{if(ch==="["){inClass=true;}else if(ch==="]"&&inClass){inClass=false;}else if(ch==="/"&&!inClass){break;}escaped=ch==="\\";}++this.state.pos;}const content=this.input.slice(start,this.state.pos);++this.state.pos;let mods="";while(this.state.pos<this.length){const char=this.input[this.state.pos];const charCode=this.input.codePointAt(this.state.pos);if(VALID_REGEX_FLAGS.has(char)){if(mods.indexOf(char)>-1){this.raise(this.state.pos+1,"Duplicate regular expression flag");}}else if(isIdentifierChar(charCode)||charCode===92){this.raise(this.state.pos+1,"Invalid regular expression flag");}else{break;}++this.state.pos;mods+=char;}this.finishToken(types.regexp,{pattern:content,flags:mods});}readInt(radix,len,forceLen,allowNumSeparator=true){const start=this.state.pos;const forbiddenSiblings=radix===16?forbiddenNumericSeparatorSiblings.hex:forbiddenNumericSeparatorSiblings.decBinOct;const allowedSiblings=radix===16?allowedNumericSeparatorSiblings.hex:radix===10?allowedNumericSeparatorSiblings.dec:radix===8?allowedNumericSeparatorSiblings.oct:allowedNumericSeparatorSiblings.bin;let invalid=false;let total=0;for(let i=0,e=len==null?Infinity:len;i<e;++i){const code=this.input.charCodeAt(this.state.pos);let val;if(this.hasPlugin("numericSeparator")){if(code===95){const prev=this.input.charCodeAt(this.state.pos-1);const next=this.input.charCodeAt(this.state.pos+1);if(allowedSiblings.indexOf(next)===-1){this.raise(this.state.pos,"A numeric separator is only allowed between two digits");}else if(forbiddenSiblings.indexOf(prev)>-1||forbiddenSiblings.indexOf(next)>-1||Number.isNaN(next)){this.raise(this.state.pos,"A numeric separator is only allowed between two digits");}if(!allowNumSeparator){this.raise(this.state.pos,"Numeric separators are not allowed inside unicode escape sequences or hex escape sequences");}++this.state.pos;continue;}}if(code>=97){val=code-97+10;}else if(code>=65){val=code-65+10;}else if(_isDigit(code)){val=code-48;}else{val=Infinity;}if(val>=radix){if(this.options.errorRecovery&&val<=9){val=0;this.raise(this.state.start+i+2,"Expected number in radix "+radix);}else if(forceLen){val=0;invalid=true;}else{break;}}++this.state.pos;total=total*radix+val;}if(this.state.pos===start||len!=null&&this.state.pos-start!==len||invalid){return null;}return total;}readRadixNumber(radix){const start=this.state.pos;let isBigInt=false;this.state.pos+=2;const val=this.readInt(radix);if(val==null){this.raise(this.state.start+2,"Expected number in radix "+radix);}if(this.hasPlugin("bigInt")){if(this.input.charCodeAt(this.state.pos)===110){++this.state.pos;isBigInt=true;}}if(isIdentifierStart(this.input.codePointAt(this.state.pos))){throw this.raise(this.state.pos,"Identifier directly after number");}if(isBigInt){const str=this.input.slice(start,this.state.pos).replace(/[_n]/g,"");this.finishToken(types.bigint,str);return;}this.finishToken(types.num,val);}readNumber(startsWithDot){const start=this.state.pos;let isFloat=false;let isBigInt=false;let isNonOctalDecimalInt=false;if(!startsWithDot&&this.readInt(10)===null){this.raise(start,"Invalid number");}let octal=this.state.pos-start>=2&&this.input.charCodeAt(start)===48;if(octal){if(this.state.strict){this.raise(start,"Legacy octal literals are not allowed in strict mode");}if(/[89]/.test(this.input.slice(start,this.state.pos))){octal=false;isNonOctalDecimalInt=true;}}let next=this.input.charCodeAt(this.state.pos);if(next===46&&!octal){++this.state.pos;this.readInt(10);isFloat=true;next=this.input.charCodeAt(this.state.pos);}if((next===69||next===101)&&!octal){next=this.input.charCodeAt(++this.state.pos);if(next===43||next===45){++this.state.pos;}if(this.readInt(10)===null)this.raise(start,"Invalid number");isFloat=true;next=this.input.charCodeAt(this.state.pos);}if(this.hasPlugin("numericSeparator")&&(octal||isNonOctalDecimalInt)){const underscorePos=this.input.slice(start,this.state.pos).indexOf("_");if(underscorePos>0){this.raise(underscorePos+start,"Numeric separator can not be used after leading 0");}}if(this.hasPlugin("bigInt")){if(next===110){if(isFloat||octal||isNonOctalDecimalInt){this.raise(start,"Invalid BigIntLiteral");}++this.state.pos;isBigInt=true;}}if(isIdentifierStart(this.input.codePointAt(this.state.pos))){throw this.raise(this.state.pos,"Identifier directly after number");}const str=this.input.slice(start,this.state.pos).replace(/[_n]/g,"");if(isBigInt){this.finishToken(types.bigint,str);return;}const val=octal?parseInt(str,8):parseFloat(str);this.finishToken(types.num,val);}readCodePoint(throwOnInvalid){const ch=this.input.charCodeAt(this.state.pos);let code;if(ch===123){const codePos=++this.state.pos;code=this.readHexChar(this.input.indexOf("}",this.state.pos)-this.state.pos,true,throwOnInvalid);++this.state.pos;if(code===null){--this.state.invalidTemplateEscapePosition;}else if(code>0x10ffff){if(throwOnInvalid){this.raise(codePos,"Code point out of bounds");}else{this.state.invalidTemplateEscapePosition=codePos-2;return null;}}}else{code=this.readHexChar(4,false,throwOnInvalid);}return code;}readString(quote){let out="",chunkStart=++this.state.pos;for(;;){if(this.state.pos>=this.length){throw this.raise(this.state.start,"Unterminated string constant");}const ch=this.input.charCodeAt(this.state.pos);if(ch===quote)break;if(ch===92){out+=this.input.slice(chunkStart,this.state.pos);out+=this.readEscapedChar(false);chunkStart=this.state.pos;}else if(ch===8232||ch===8233){++this.state.pos;++this.state.curLine;}else if(isNewLine(ch)){throw this.raise(this.state.start,"Unterminated string constant");}else{++this.state.pos;}}out+=this.input.slice(chunkStart,this.state.pos++);this.finishToken(types.string,out);}readTmplToken(){let out="",chunkStart=this.state.pos,containsInvalid=false;for(;;){if(this.state.pos>=this.length){throw this.raise(this.state.start,"Unterminated template");}const ch=this.input.charCodeAt(this.state.pos);if(ch===96||ch===36&&this.input.charCodeAt(this.state.pos+1)===123){if(this.state.pos===this.state.start&&this.match(types.template)){if(ch===36){this.state.pos+=2;this.finishToken(types.dollarBraceL);return;}else{++this.state.pos;this.finishToken(types.backQuote);return;}}out+=this.input.slice(chunkStart,this.state.pos);this.finishToken(types.template,containsInvalid?null:out);return;}if(ch===92){out+=this.input.slice(chunkStart,this.state.pos);const escaped=this.readEscapedChar(true);if(escaped===null){containsInvalid=true;}else{out+=escaped;}chunkStart=this.state.pos;}else if(isNewLine(ch)){out+=this.input.slice(chunkStart,this.state.pos);++this.state.pos;switch(ch){case 13:if(this.input.charCodeAt(this.state.pos)===10){++this.state.pos;}case 10:out+="\n";break;default:out+=String.fromCharCode(ch);break;}++this.state.curLine;this.state.lineStart=this.state.pos;chunkStart=this.state.pos;}else{++this.state.pos;}}}readEscapedChar(inTemplate){const throwOnInvalid=!inTemplate;const ch=this.input.charCodeAt(++this.state.pos);++this.state.pos;switch(ch){case 110:return"\n";case 114:return"\r";case 120:{const code=this.readHexChar(2,false,throwOnInvalid);return code===null?null:String.fromCharCode(code);}case 117:{const code=this.readCodePoint(throwOnInvalid);return code===null?null:String.fromCodePoint(code);}case 116:return"\t";case 98:return"\b";case 118:return"\u000b";case 102:return"\f";case 13:if(this.input.charCodeAt(this.state.pos)===10){++this.state.pos;}case 10:this.state.lineStart=this.state.pos;++this.state.curLine;case 8232:case 8233:return"";case 56:case 57:if(inTemplate){const codePos=this.state.pos-1;this.state.invalidTemplateEscapePosition=codePos;return null;}default:if(ch>=48&&ch<=55){const codePos=this.state.pos-1;let octalStr=this.input.substr(this.state.pos-1,3).match(/^[0-7]+/)[0];let octal=parseInt(octalStr,8);if(octal>255){octalStr=octalStr.slice(0,-1);octal=parseInt(octalStr,8);}this.state.pos+=octalStr.length-1;const next=this.input.charCodeAt(this.state.pos);if(octalStr!=="0"||next===56||next===57){if(inTemplate){this.state.invalidTemplateEscapePosition=codePos;return null;}else if(this.state.strict){this.raise(codePos,"Octal literal in strict mode");}else if(!this.state.containsOctal){this.state.containsOctal=true;this.state.octalPosition=codePos;}}return String.fromCharCode(octal);}return String.fromCharCode(ch);}}readHexChar(len,forceLen,throwOnInvalid){const codePos=this.state.pos;const n=this.readInt(16,len,forceLen,false);if(n===null){if(throwOnInvalid){this.raise(codePos,"Bad character escape sequence");}else{this.state.pos=codePos-1;this.state.invalidTemplateEscapePosition=codePos-1;}}return n;}readWord1(){let word="";this.state.containsEsc=false;const start=this.state.pos;let chunkStart=this.state.pos;while(this.state.pos<this.length){const ch=this.input.codePointAt(this.state.pos);if(isIdentifierChar(ch)){this.state.pos+=ch<=0xffff?1:2;}else if(this.state.isIterator&&ch===64){++this.state.pos;}else if(ch===92){this.state.containsEsc=true;word+=this.input.slice(chunkStart,this.state.pos);const escStart=this.state.pos;const identifierCheck=this.state.pos===start?isIdentifierStart:isIdentifierChar;if(this.input.charCodeAt(++this.state.pos)!==117){this.raise(this.state.pos,"Expecting Unicode escape sequence \\uXXXX");continue;}++this.state.pos;const esc=this.readCodePoint(true);if(esc!==null){if(!identifierCheck(esc)){this.raise(escStart,"Invalid Unicode escape");}word+=String.fromCodePoint(esc);}chunkStart=this.state.pos;}else{break;}}return word+this.input.slice(chunkStart,this.state.pos);}isIterator(word){return word==="@@iterator"||word==="@@asyncIterator";}readWord(){const word=this.readWord1();const type=keywords.get(word)||types.name;if(this.state.isIterator&&(!this.isIterator(word)||!this.state.inType)){this.raise(this.state.pos,`Invalid identifier ${word}`);}this.finishToken(type,word);}checkKeywordEscapes(){const kw=this.state.type.keyword;if(kw&&this.state.containsEsc){this.raise(this.state.start,`Escape sequence in keyword ${kw}`);}}braceIsBlock(prevType){const parent=this.curContext();if(parent===types$1.functionExpression||parent===types$1.functionStatement){return true;}if(prevType===types.colon&&(parent===types$1.braceStatement||parent===types$1.braceExpression)){return!parent.isExpr;}if(prevType===types._return||prevType===types.name&&this.state.exprAllowed){return lineBreak.test(this.input.slice(this.state.lastTokEnd,this.state.start));}if(prevType===types._else||prevType===types.semi||prevType===types.eof||prevType===types.parenR||prevType===types.arrow){return true;}if(prevType===types.braceL){return parent===types$1.braceStatement;}if(prevType===types._var||prevType===types._const||prevType===types.name){return false;}if(prevType===types.relational){return true;}return!this.state.exprAllowed;}updateContext(prevType){const type=this.state.type;let update;if(type.keyword&&(prevType===types.dot||prevType===types.questionDot)){this.state.exprAllowed=false;}else if(update=type.updateContext){update.call(this,prevType);}else{this.state.exprAllowed=type.beforeExpr;}}}const literal=/^('|")((?:\\?.)*?)\1/;class UtilParser extends Tokenizer{addExtra(node,key,val){if(!node)return;const extra=node.extra=node.extra||{};extra[key]=val;}isRelational(op){return this.match(types.relational)&&this.state.value===op;}isLookaheadRelational(op){const next=this.nextTokenStart();if(this.input.charAt(next)===op){if(next+1===this.input.length){return true;}const afterNext=this.input.charCodeAt(next+1);return afterNext!==op.charCodeAt(0)&&afterNext!==61;}return false;}expectRelational(op){if(this.isRelational(op)){this.next();}else{this.unexpected(null,types.relational);}}eatRelational(op){if(this.isRelational(op)){this.next();return true;}return false;}isContextual(name){return this.match(types.name)&&this.state.value===name&&!this.state.containsEsc;}isUnparsedContextual(nameStart,name){const nameEnd=nameStart+name.length;return this.input.slice(nameStart,nameEnd)===name&&(nameEnd===this.input.length||!isIdentifierChar(this.input.charCodeAt(nameEnd)));}isLookaheadContextual(name){const next=this.nextTokenStart();return this.isUnparsedContextual(next,name);}eatContextual(name){return this.isContextual(name)&&this.eat(types.name);}expectContextual(name,message){if(!this.eatContextual(name))this.unexpected(null,message);}canInsertSemicolon(){return this.match(types.eof)||this.match(types.braceR)||this.hasPrecedingLineBreak();}hasPrecedingLineBreak(){return lineBreak.test(this.input.slice(this.state.lastTokEnd,this.state.start));}isLineTerminator(){return this.eat(types.semi)||this.canInsertSemicolon();}semicolon(){if(!this.isLineTerminator())this.unexpected(null,types.semi);}expect(type,pos){this.eat(type)||this.unexpected(pos,type);}assertNoSpace(message="Unexpected space."){if(this.state.start>this.state.lastTokEnd){this.raise(this.state.lastTokEnd,message);}}unexpected(pos,messageOrType="Unexpected token"){if(typeof messageOrType!=="string"){messageOrType=`Unexpected token, expected "${messageOrType.label}"`;}throw this.raise(pos!=null?pos:this.state.start,messageOrType);}expectPlugin(name,pos){if(!this.hasPlugin(name)){throw this.raise(pos!=null?pos:this.state.start,`This experimental syntax requires enabling the parser plugin: '${name}'`,{missingPluginNames:[name]});}return true;}expectOnePlugin(names,pos){if(!names.some(n=>this.hasPlugin(n))){throw this.raise(pos!=null?pos:this.state.start,`This experimental syntax requires enabling one of the following parser plugin(s): '${names.join(", ")}'`,{missingPluginNames:names});}}checkYieldAwaitInDefaultParams(){if(this.state.yieldPos!==-1&&(this.state.awaitPos===-1||this.state.yieldPos<this.state.awaitPos)){this.raise(this.state.yieldPos,"Yield cannot be used as name inside a generator function");}if(this.state.awaitPos!==-1){this.raise(this.state.awaitPos,"Await cannot be used as name inside an async function");}}strictDirective(start){for(;;){skipWhiteSpace.lastIndex=start;start+=skipWhiteSpace.exec(this.input)[0].length;const match=literal.exec(this.input.slice(start));if(!match)break;if(match[2]==="use strict")return true;start+=match[0].length;skipWhiteSpace.lastIndex=start;start+=skipWhiteSpace.exec(this.input)[0].length;if(this.input[start]===";"){start++;}}return false;}tryParse(fn,oldState=this.state.clone()){const abortSignal={node:null};try{const node=fn((node=null)=>{abortSignal.node=node;throw abortSignal;});if(this.state.errors.length>oldState.errors.length){const failState=this.state;this.state=oldState;return{node,error:failState.errors[oldState.errors.length],thrown:false,aborted:false,failState};}return{node,error:null,thrown:false,aborted:false,failState:null};}catch(error){const failState=this.state;this.state=oldState;if(error instanceof SyntaxError){return{node:null,error,thrown:true,aborted:false,failState};}if(error===abortSignal){return{node:abortSignal.node,error:null,thrown:false,aborted:true,failState};}throw error;}}}class Node{constructor(parser,pos,loc){this.type="";this.start=pos;this.end=0;this.loc=new SourceLocation(loc);if(parser&&parser.options.ranges)this.range=[pos,0];if(parser&&parser.filename)this.loc.filename=parser.filename;}__clone(){const newNode=new Node();const keys=Object.keys(this);for(let i=0,length=keys.length;i<length;i++){const key=keys[i];if(key!=="leadingComments"&&key!=="trailingComments"&&key!=="innerComments"){newNode[key]=this[key];}}return newNode;}}class NodeUtils extends UtilParser{startNode(){return new Node(this,this.state.start,this.state.startLoc);}startNodeAt(pos,loc){return new Node(this,pos,loc);}startNodeAtNode(type){return this.startNodeAt(type.start,type.loc.start);}finishNode(node,type){return this.finishNodeAt(node,type,this.state.lastTokEnd,this.state.lastTokEndLoc);}finishNodeAt(node,type,pos,loc){if(node.end>0){throw new Error("Do not call finishNode*() twice on the same node."+" Instead use resetEndLocation() or change type directly.");}node.type=type;node.end=pos;node.loc.end=loc;if(this.options.ranges)node.range[1]=pos;this.processComment(node);return node;}resetStartLocation(node,start,startLoc){node.start=start;node.loc.start=startLoc;if(this.options.ranges)node.range[0]=start;}resetEndLocation(node,end=this.state.lastTokEnd,endLoc=this.state.lastTokEndLoc){node.end=end;node.loc.end=endLoc;if(this.options.ranges)node.range[1]=end;}resetStartLocationFromNode(node,locationNode){this.resetStartLocation(node,locationNode.start,locationNode.loc.start);}}const unwrapParenthesizedExpression=node=>{return node.type==="ParenthesizedExpression"?unwrapParenthesizedExpression(node.expression):node;};class LValParser extends NodeUtils{toAssignable(node,isBinding,contextDescription){var _node$extra3;if(node){var _node$extra;if(this.options.createParenthesizedExpressions&&node.type==="ParenthesizedExpression"||((_node$extra=node.extra)==null?void 0:_node$extra.parenthesized)){const parenthesized=unwrapParenthesizedExpression(node);if(parenthesized.type!=="Identifier"&&parenthesized.type!=="MemberExpression"){this.raise(node.start,"Invalid parenthesized assignment pattern");}}switch(node.type){case"Identifier":case"ObjectPattern":case"ArrayPattern":case"AssignmentPattern":break;case"ObjectExpression":node.type="ObjectPattern";for(let i=0,length=node.properties.length,last=length-1;i<length;i++){var _node$extra2;const prop=node.properties[i];const isLast=i===last;this.toAssignableObjectExpressionProp(prop,isBinding,isLast);if(isLast&&prop.type==="RestElement"&&((_node$extra2=node.extra)==null?void 0:_node$extra2.trailingComma)){this.raiseRestNotLast(node.extra.trailingComma);}}break;case"ObjectProperty":this.toAssignable(node.value,isBinding,contextDescription);break;case"SpreadElement":{this.checkToRestConversion(node);node.type="RestElement";const arg=node.argument;this.toAssignable(arg,isBinding,contextDescription);break;}case"ArrayExpression":node.type="ArrayPattern";this.toAssignableList(node.elements,isBinding,contextDescription,(_node$extra3=node.extra)==null?void 0:_node$extra3.trailingComma);break;case"AssignmentExpression":if(node.operator!=="="){this.raise(node.left.end,"Only '=' operator can be used for specifying default value.");}node.type="AssignmentPattern";delete node.operator;this.toAssignable(node.left,isBinding,contextDescription);break;case"ParenthesizedExpression":node.expression=this.toAssignable(node.expression,isBinding,contextDescription);break;}}return node;}toAssignableObjectExpressionProp(prop,isBinding,isLast){if(prop.type==="ObjectMethod"){const error=prop.kind==="get"||prop.kind==="set"?"Object pattern can't contain getter or setter":"Object pattern can't contain methods";this.raise(prop.key.start,error);}else if(prop.type==="SpreadElement"&&!isLast){this.raiseRestNotLast(prop.start);}else{this.toAssignable(prop,isBinding,"object destructuring pattern");}}toAssignableList(exprList,isBinding,contextDescription,trailingCommaPos){let end=exprList.length;if(end){const last=exprList[end-1];if(last&&last.type==="RestElement"){--end;}else if(last&&last.type==="SpreadElement"){last.type="RestElement";const arg=last.argument;this.toAssignable(arg,isBinding,contextDescription);if(arg.type!=="Identifier"&&arg.type!=="MemberExpression"&&arg.type!=="ArrayPattern"&&arg.type!=="ObjectPattern"){this.unexpected(arg.start);}if(trailingCommaPos){this.raiseTrailingCommaAfterRest(trailingCommaPos);}--end;}}for(let i=0;i<end;i++){const elt=exprList[i];if(elt){this.toAssignable(elt,isBinding,contextDescription);if(elt.type==="RestElement"){this.raiseRestNotLast(elt.start);}}}return exprList;}toReferencedList(exprList,isParenthesizedExpr){return exprList;}toReferencedListDeep(exprList,isParenthesizedExpr){this.toReferencedList(exprList,isParenthesizedExpr);for(let _i=0;_i<exprList.length;_i++){const expr=exprList[_i];if(expr&&expr.type==="ArrayExpression"){this.toReferencedListDeep(expr.elements);}}}parseSpread(refShorthandDefaultPos,refNeedsArrowPos){const node=this.startNode();this.next();node.argument=this.parseMaybeAssign(false,refShorthandDefaultPos,undefined,refNeedsArrowPos);return this.finishNode(node,"SpreadElement");}parseRestBinding(){const node=this.startNode();this.next();node.argument=this.parseBindingAtom();return this.finishNode(node,"RestElement");}parseBindingAtom(){switch(this.state.type){case types.bracketL:{const node=this.startNode();this.next();node.elements=this.parseBindingList(types.bracketR,93,true);return this.finishNode(node,"ArrayPattern");}case types.braceL:return this.parseObj(true);}return this.parseIdentifier();}parseBindingList(close,closeCharCode,allowEmpty,allowModifiers){const elts=[];let first=true;while(!this.eat(close)){if(first){first=false;}else{this.expect(types.comma);}if(allowEmpty&&this.match(types.comma)){elts.push(null);}else if(this.eat(close)){break;}else if(this.match(types.ellipsis)){elts.push(this.parseAssignableListItemTypes(this.parseRestBinding()));this.checkCommaAfterRest(closeCharCode);this.expect(close);break;}else{const decorators=[];if(this.match(types.at)&&this.hasPlugin("decorators")){this.raise(this.state.start,"Stage 2 decorators cannot be used to decorate parameters");}while(this.match(types.at)){decorators.push(this.parseDecorator());}elts.push(this.parseAssignableListItem(allowModifiers,decorators));}}return elts;}parseAssignableListItem(allowModifiers,decorators){const left=this.parseMaybeDefault();this.parseAssignableListItemTypes(left);const elt=this.parseMaybeDefault(left.start,left.loc.start,left);if(decorators.length){left.decorators=decorators;}return elt;}parseAssignableListItemTypes(param){return param;}parseMaybeDefault(startPos,startLoc,left){startLoc=startLoc||this.state.startLoc;startPos=startPos||this.state.start;left=left||this.parseBindingAtom();if(!this.eat(types.eq))return left;const node=this.startNodeAt(startPos,startLoc);node.left=left;node.right=this.parseMaybeAssign();return this.finishNode(node,"AssignmentPattern");}checkLVal(expr,bindingType=BIND_NONE,checkClashes,contextDescription,disallowLetBinding,strictModeChanged=false){switch(expr.type){case"Identifier":if(this.state.strict&&(strictModeChanged?isStrictBindReservedWord(expr.name,this.inModule):isStrictBindOnlyReservedWord(expr.name))){this.raise(expr.start,`${bindingType===BIND_NONE?"Assigning to":"Binding"} '${expr.name}' in strict mode`);}if(checkClashes){const key=`_${expr.name}`;if(checkClashes[key]){this.raise(expr.start,"Argument name clash");}else{checkClashes[key]=true;}}if(disallowLetBinding&&expr.name==="let"){this.raise(expr.start,"'let' is not allowed to be used as a name in 'let' or 'const' declarations.");}if(!(bindingType&BIND_NONE)){this.scope.declareName(expr.name,bindingType,expr.start);}break;case"MemberExpression":if(bindingType!==BIND_NONE){this.raise(expr.start,"Binding member expression");}break;case"ObjectPattern":for(let _i2=0,_expr$properties=expr.properties;_i2<_expr$properties.length;_i2++){let prop=_expr$properties[_i2];if(prop.type==="ObjectProperty")prop=prop.value;else if(prop.type==="ObjectMethod")continue;this.checkLVal(prop,bindingType,checkClashes,"object destructuring pattern",disallowLetBinding);}break;case"ArrayPattern":for(let _i3=0,_expr$elements=expr.elements;_i3<_expr$elements.length;_i3++){const elem=_expr$elements[_i3];if(elem){this.checkLVal(elem,bindingType,checkClashes,"array destructuring pattern",disallowLetBinding);}}break;case"AssignmentPattern":this.checkLVal(expr.left,bindingType,checkClashes,"assignment pattern");break;case"RestElement":this.checkLVal(expr.argument,bindingType,checkClashes,"rest element");break;case"ParenthesizedExpression":this.checkLVal(expr.expression,bindingType,checkClashes,"parenthesized expression");break;default:{const message=(bindingType===BIND_NONE?"Invalid":"Binding invalid")+" left-hand side"+(contextDescription?" in "+contextDescription:"expression");this.raise(expr.start,message);}}}checkToRestConversion(node){if(node.argument.type!=="Identifier"&&node.argument.type!=="MemberExpression"){this.raise(node.argument.start,"Invalid rest operator's argument");}}checkCommaAfterRest(close){if(this.match(types.comma)){if(this.lookaheadCharCode()===close){this.raiseTrailingCommaAfterRest(this.state.start);}else{this.raiseRestNotLast(this.state.start);}}}raiseRestNotLast(pos){throw this.raise(pos,`Rest element must be last element`);}raiseTrailingCommaAfterRest(pos){this.raise(pos,`Unexpected trailing comma after rest element`);}}class ExpressionParser extends LValParser{checkDuplicatedProto(prop,protoRef){if(prop.type==="SpreadElement"||prop.computed||prop.kind||prop.shorthand){return;}const key=prop.key;const name=key.type==="Identifier"?key.name:String(key.value);if(name==="__proto__"){if(protoRef.used&&!protoRef.start){protoRef.start=key.start;}protoRef.used=true;}}getExpression(){this.scope.enter(SCOPE_PROGRAM);this.nextToken();const expr=this.parseExpression();if(!this.match(types.eof)){this.unexpected();}expr.comments=this.state.comments;expr.errors=this.state.errors;return expr;}parseExpression(noIn,refShorthandDefaultPos){const startPos=this.state.start;const startLoc=this.state.startLoc;const expr=this.parseMaybeAssign(noIn,refShorthandDefaultPos);if(this.match(types.comma)){const node=this.startNodeAt(startPos,startLoc);node.expressions=[expr];while(this.eat(types.comma)){node.expressions.push(this.parseMaybeAssign(noIn,refShorthandDefaultPos));}this.toReferencedList(node.expressions);return this.finishNode(node,"SequenceExpression");}return expr;}parseMaybeAssign(noIn,refShorthandDefaultPos,afterLeftParse,refNeedsArrowPos){const startPos=this.state.start;const startLoc=this.state.startLoc;if(this.isContextual("yield")){if(this.scope.inGenerator){let left=this.parseYield(noIn);if(afterLeftParse){left=afterLeftParse.call(this,left,startPos,startLoc);}return left;}else{this.state.exprAllowed=false;}}let failOnShorthandAssign;if(refShorthandDefaultPos){failOnShorthandAssign=false;}else{refShorthandDefaultPos={start:0};failOnShorthandAssign=true;}if(this.match(types.parenL)||this.match(types.name)){this.state.potentialArrowAt=this.state.start;}let left=this.parseMaybeConditional(noIn,refShorthandDefaultPos,refNeedsArrowPos);if(afterLeftParse){left=afterLeftParse.call(this,left,startPos,startLoc);}if(this.state.type.isAssign){const node=this.startNodeAt(startPos,startLoc);const operator=this.state.value;node.operator=operator;if(operator==="??="){this.expectPlugin("nullishCoalescingOperator");this.expectPlugin("logicalAssignment");}if(operator==="||="||operator==="&&="){this.expectPlugin("logicalAssignment");}node.left=this.match(types.eq)?this.toAssignable(left,undefined,"assignment expression"):left;if(refShorthandDefaultPos.start>=node.left.start){refShorthandDefaultPos.start=0;}this.checkLVal(left,undefined,undefined,"assignment expression");this.next();node.right=this.parseMaybeAssign(noIn);return this.finishNode(node,"AssignmentExpression");}else if(failOnShorthandAssign&&refShorthandDefaultPos.start){this.unexpected(refShorthandDefaultPos.start);}return left;}parseMaybeConditional(noIn,refShorthandDefaultPos,refNeedsArrowPos){const startPos=this.state.start;const startLoc=this.state.startLoc;const potentialArrowAt=this.state.potentialArrowAt;const expr=this.parseExprOps(noIn,refShorthandDefaultPos);if(expr.type==="ArrowFunctionExpression"&&expr.start===potentialArrowAt){return expr;}if(refShorthandDefaultPos&&refShorthandDefaultPos.start)return expr;return this.parseConditional(expr,noIn,startPos,startLoc,refNeedsArrowPos);}parseConditional(expr,noIn,startPos,startLoc,refNeedsArrowPos){if(this.eat(types.question)){const node=this.startNodeAt(startPos,startLoc);node.test=expr;node.consequent=this.parseMaybeAssign();this.expect(types.colon);node.alternate=this.parseMaybeAssign(noIn);return this.finishNode(node,"ConditionalExpression");}return expr;}parseExprOps(noIn,refShorthandDefaultPos){const startPos=this.state.start;const startLoc=this.state.startLoc;const potentialArrowAt=this.state.potentialArrowAt;const expr=this.parseMaybeUnary(refShorthandDefaultPos);if(expr.type==="ArrowFunctionExpression"&&expr.start===potentialArrowAt){return expr;}if(refShorthandDefaultPos&&refShorthandDefaultPos.start){return expr;}return this.parseExprOp(expr,startPos,startLoc,-1,noIn);}parseExprOp(left,leftStartPos,leftStartLoc,minPrec,noIn){const prec=this.state.type.binop;if(prec!=null&&(!noIn||!this.match(types._in))){if(prec>minPrec){const operator=this.state.value;if(operator==="|>"&&this.state.inFSharpPipelineDirectBody){return left;}const node=this.startNodeAt(leftStartPos,leftStartLoc);node.left=left;node.operator=operator;if(operator==="**"&&left.type==="UnaryExpression"&&(this.options.createParenthesizedExpressions||!(left.extra&&left.extra.parenthesized))){this.raise(left.argument.start,"Illegal expression. Wrap left hand side or entire exponentiation in parentheses.");}const op=this.state.type;if(op===types.pipeline){this.expectPlugin("pipelineOperator");this.state.inPipeline=true;this.checkPipelineAtInfixOperator(left,leftStartPos);}else if(op===types.nullishCoalescing){this.expectPlugin("nullishCoalescingOperator");}this.next();if(op===types.pipeline&&this.getPluginOption("pipelineOperator","proposal")==="minimal"){if(this.match(types.name)&&this.state.value==="await"&&this.scope.inAsync){throw this.raise(this.state.start,`Unexpected "await" after pipeline body; await must have parentheses in minimal proposal`);}}node.right=this.parseExprOpRightExpr(op,prec,noIn);if(op===types.nullishCoalescing){if(left.type==="LogicalExpression"&&left.operator!=="??"&&!(left.extra&&left.extra.parenthesized)){throw this.raise(left.start,`Nullish coalescing operator(??) requires parens when mixing with logical operators`);}else if(node.right.type==="LogicalExpression"&&node.right.operator!=="??"&&!(node.right.extra&&node.right.extra.parenthesized)){throw this.raise(node.right.start,`Nullish coalescing operator(??) requires parens when mixing with logical operators`);}}this.finishNode(node,op===types.logicalOR||op===types.logicalAND||op===types.nullishCoalescing?"LogicalExpression":"BinaryExpression");return this.parseExprOp(node,leftStartPos,leftStartLoc,minPrec,noIn);}}return left;}parseExprOpRightExpr(op,prec,noIn){const startPos=this.state.start;const startLoc=this.state.startLoc;switch(op){case types.pipeline:switch(this.getPluginOption("pipelineOperator","proposal")){case"smart":return this.withTopicPermittingContext(()=>{return this.parseSmartPipelineBody(this.parseExprOpBaseRightExpr(op,prec,noIn),startPos,startLoc);});case"fsharp":return this.withSoloAwaitPermittingContext(()=>{return this.parseFSharpPipelineBody(prec,noIn);});}default:return this.parseExprOpBaseRightExpr(op,prec,noIn);}}parseExprOpBaseRightExpr(op,prec,noIn){const startPos=this.state.start;const startLoc=this.state.startLoc;return this.parseExprOp(this.parseMaybeUnary(),startPos,startLoc,op.rightAssociative?prec-1:prec,noIn);}parseMaybeUnary(refShorthandDefaultPos){if(this.isContextual("await")&&this.isAwaitAllowed()){return this.parseAwait();}else if(this.state.type.prefix){const node=this.startNode();const update=this.match(types.incDec);node.operator=this.state.value;node.prefix=true;if(node.operator==="throw"){this.expectPlugin("throwExpressions");}this.next();node.argument=this.parseMaybeUnary();if(refShorthandDefaultPos&&refShorthandDefaultPos.start){this.unexpected(refShorthandDefaultPos.start);}if(update){this.checkLVal(node.argument,undefined,undefined,"prefix operation");}else if(this.state.strict&&node.operator==="delete"){const arg=node.argument;if(arg.type==="Identifier"){this.raise(node.start,"Deleting local variable in strict mode");}else if(arg.type==="MemberExpression"&&arg.property.type==="PrivateName"){this.raise(node.start,"Deleting a private field is not allowed");}}return this.finishNode(node,update?"UpdateExpression":"UnaryExpression");}const startPos=this.state.start;const startLoc=this.state.startLoc;let expr=this.parseExprSubscripts(refShorthandDefaultPos);if(refShorthandDefaultPos&&refShorthandDefaultPos.start)return expr;while(this.state.type.postfix&&!this.canInsertSemicolon()){const node=this.startNodeAt(startPos,startLoc);node.operator=this.state.value;node.prefix=false;node.argument=expr;this.checkLVal(expr,undefined,undefined,"postfix operation");this.next();expr=this.finishNode(node,"UpdateExpression");}return expr;}parseExprSubscripts(refShorthandDefaultPos){const startPos=this.state.start;const startLoc=this.state.startLoc;const potentialArrowAt=this.state.potentialArrowAt;const expr=this.parseExprAtom(refShorthandDefaultPos);if(expr.type==="ArrowFunctionExpression"&&expr.start===potentialArrowAt){return expr;}if(refShorthandDefaultPos&&refShorthandDefaultPos.start){return expr;}return this.parseSubscripts(expr,startPos,startLoc);}parseSubscripts(base,startPos,startLoc,noCalls){const state={optionalChainMember:false,maybeAsyncArrow:this.atPossibleAsync(base),stop:false};do{base=this.parseSubscript(base,startPos,startLoc,noCalls,state);state.maybeAsyncArrow=false;}while(!state.stop);return base;}parseSubscript(base,startPos,startLoc,noCalls,state){if(!noCalls&&this.eat(types.doubleColon)){const node=this.startNodeAt(startPos,startLoc);node.object=base;node.callee=this.parseNoCallExpr();state.stop=true;return this.parseSubscripts(this.finishNode(node,"BindExpression"),startPos,startLoc,noCalls);}else if(this.match(types.questionDot)){this.expectPlugin("optionalChaining");state.optionalChainMember=true;if(noCalls&&this.lookaheadCharCode()===40){state.stop=true;return base;}this.next();const node=this.startNodeAt(startPos,startLoc);if(this.eat(types.bracketL)){node.object=base;node.property=this.parseExpression();node.computed=true;node.optional=true;this.expect(types.bracketR);return this.finishNode(node,"OptionalMemberExpression");}else if(this.eat(types.parenL)){node.callee=base;node.arguments=this.parseCallExpressionArguments(types.parenR,false);node.optional=true;return this.finishCallExpression(node,true);}else{node.object=base;node.property=this.parseIdentifier(true);node.computed=false;node.optional=true;return this.finishNode(node,"OptionalMemberExpression");}}else if(this.eat(types.dot)){const node=this.startNodeAt(startPos,startLoc);node.object=base;node.property=this.parseMaybePrivateName();node.computed=false;if(node.property.type==="PrivateName"&&node.object.type==="Super"){this.raise(startPos,"Private fields can't be accessed on super");}if(state.optionalChainMember){node.optional=false;return this.finishNode(node,"OptionalMemberExpression");}return this.finishNode(node,"MemberExpression");}else if(this.eat(types.bracketL)){const node=this.startNodeAt(startPos,startLoc);node.object=base;node.property=this.parseExpression();node.computed=true;this.expect(types.bracketR);if(state.optionalChainMember){node.optional=false;return this.finishNode(node,"OptionalMemberExpression");}return this.finishNode(node,"MemberExpression");}else if(!noCalls&&this.match(types.parenL)){const oldMaybeInArrowParameters=this.state.maybeInArrowParameters;const oldYieldPos=this.state.yieldPos;const oldAwaitPos=this.state.awaitPos;this.state.maybeInArrowParameters=true;this.state.yieldPos=-1;this.state.awaitPos=-1;this.next();let node=this.startNodeAt(startPos,startLoc);node.callee=base;node.arguments=this.parseCallExpressionArguments(types.parenR,state.maybeAsyncArrow,base.type==="Import",base.type!=="Super",node);this.finishCallExpression(node,state.optionalChainMember);if(state.maybeAsyncArrow&&this.shouldParseAsyncArrow()){state.stop=true;node=this.parseAsyncArrowFromCallExpression(this.startNodeAt(startPos,startLoc),node);this.checkYieldAwaitInDefaultParams();this.state.yieldPos=oldYieldPos;this.state.awaitPos=oldAwaitPos;}else{this.toReferencedListDeep(node.arguments);if(oldYieldPos!==-1)this.state.yieldPos=oldYieldPos;if(!this.isAwaitAllowed()&&!oldMaybeInArrowParameters||oldAwaitPos!==-1){this.state.awaitPos=oldAwaitPos;}}this.state.maybeInArrowParameters=oldMaybeInArrowParameters;return node;}else if(this.match(types.backQuote)){return this.parseTaggedTemplateExpression(startPos,startLoc,base,state);}else{state.stop=true;return base;}}parseTaggedTemplateExpression(startPos,startLoc,base,state,typeArguments){const node=this.startNodeAt(startPos,startLoc);node.tag=base;node.quasi=this.parseTemplate(true);if(typeArguments)node.typeParameters=typeArguments;if(state.optionalChainMember){this.raise(startPos,"Tagged Template Literals are not allowed in optionalChain");}return this.finishNode(node,"TaggedTemplateExpression");}atPossibleAsync(base){return base.type==="Identifier"&&base.name==="async"&&this.state.lastTokEnd===base.end&&!this.canInsertSemicolon()&&this.input.slice(base.start,base.end)==="async";}finishCallExpression(node,optional){if(node.callee.type==="Import"){if(node.arguments.length!==1){this.raise(node.start,"import() requires exactly one argument");}else{const importArg=node.arguments[0];if(importArg&&importArg.type==="SpreadElement"){this.raise(importArg.start,"... is not allowed in import()");}}}return this.finishNode(node,optional?"OptionalCallExpression":"CallExpression");}parseCallExpressionArguments(close,possibleAsyncArrow,dynamicImport,allowPlaceholder,nodeForExtra){const elts=[];let innerParenStart;let first=true;const oldInFSharpPipelineDirectBody=this.state.inFSharpPipelineDirectBody;this.state.inFSharpPipelineDirectBody=false;while(!this.eat(close)){if(first){first=false;}else{this.expect(types.comma);if(this.match(close)){if(dynamicImport){this.raise(this.state.lastTokStart,"Trailing comma is disallowed inside import(...) arguments");}if(nodeForExtra){this.addExtra(nodeForExtra,"trailingComma",this.state.lastTokStart);}this.next();break;}}if(this.match(types.parenL)&&!innerParenStart){innerParenStart=this.state.start;}elts.push(this.parseExprListItem(false,possibleAsyncArrow?{start:0}:undefined,possibleAsyncArrow?{start:0}:undefined,allowPlaceholder));}if(possibleAsyncArrow&&innerParenStart&&this.shouldParseAsyncArrow()){this.unexpected();}this.state.inFSharpPipelineDirectBody=oldInFSharpPipelineDirectBody;return elts;}shouldParseAsyncArrow(){return this.match(types.arrow)&&!this.canInsertSemicolon();}parseAsyncArrowFromCallExpression(node,call){var _call$extra;this.expect(types.arrow);this.parseArrowExpression(node,call.arguments,true,(_call$extra=call.extra)==null?void 0:_call$extra.trailingComma);return node;}parseNoCallExpr(){const startPos=this.state.start;const startLoc=this.state.startLoc;return this.parseSubscripts(this.parseExprAtom(),startPos,startLoc,true);}parseExprAtom(refShorthandDefaultPos){if(this.state.type===types.slash)this.readRegexp();const canBeArrow=this.state.potentialArrowAt===this.state.start;let node;switch(this.state.type){case types._super:node=this.startNode();this.next();if(this.match(types.parenL)&&!this.scope.allowDirectSuper&&!this.options.allowSuperOutsideMethod){this.raise(node.start,"super() is only valid inside a class constructor of a subclass. "+"Maybe a typo in the method name ('constructor') or not extending another class?");}else if(!this.scope.allowSuper&&!this.options.allowSuperOutsideMethod){this.raise(node.start,"super is only allowed in object methods and classes");}if(!this.match(types.parenL)&&!this.match(types.bracketL)&&!this.match(types.dot)){this.raise(node.start,"super can only be used with function calls (i.e. super()) or "+"in property accesses (i.e. super.prop or super[prop])");}return this.finishNode(node,"Super");case types._import:node=this.startNode();this.next();if(this.match(types.dot)){return this.parseImportMetaProperty(node);}this.expectPlugin("dynamicImport",node.start);if(!this.match(types.parenL)){this.unexpected(null,types.parenL);}return this.finishNode(node,"Import");case types._this:node=this.startNode();this.next();return this.finishNode(node,"ThisExpression");case types.name:{node=this.startNode();const containsEsc=this.state.containsEsc;const id=this.parseIdentifier();if(!containsEsc&&id.name==="async"&&this.match(types._function)&&!this.canInsertSemicolon()){const last=this.state.context.length-1;if(this.state.context[last]!==types$1.functionStatement){throw new Error("Internal error");}this.state.context[last]=types$1.functionExpression;this.next();return this.parseFunction(node,undefined,true);}else if(canBeArrow&&!containsEsc&&id.name==="async"&&this.match(types.name)&&!this.canInsertSemicolon()){const params=[this.parseIdentifier()];this.expect(types.arrow);this.parseArrowExpression(node,params,true);return node;}if(canBeArrow&&this.match(types.arrow)&&!this.canInsertSemicolon()){this.next();this.parseArrowExpression(node,[id],false);return node;}return id;}case types._do:{this.expectPlugin("doExpressions");const node=this.startNode();this.next();const oldLabels=this.state.labels;this.state.labels=[];node.body=this.parseBlock();this.state.labels=oldLabels;return this.finishNode(node,"DoExpression");}case types.regexp:{const value=this.state.value;node=this.parseLiteral(value.value,"RegExpLiteral");node.pattern=value.pattern;node.flags=value.flags;return node;}case types.num:return this.parseLiteral(this.state.value,"NumericLiteral");case types.bigint:return this.parseLiteral(this.state.value,"BigIntLiteral");case types.string:return this.parseLiteral(this.state.value,"StringLiteral");case types._null:node=this.startNode();this.next();return this.finishNode(node,"NullLiteral");case types._true:case types._false:return this.parseBooleanLiteral();case types.parenL:return this.parseParenAndDistinguishExpression(canBeArrow);case types.bracketL:{const oldInFSharpPipelineDirectBody=this.state.inFSharpPipelineDirectBody;this.state.inFSharpPipelineDirectBody=false;node=this.startNode();this.next();node.elements=this.parseExprList(types.bracketR,true,refShorthandDefaultPos,node);if(!this.state.maybeInArrowParameters){this.toReferencedList(node.elements);}this.state.inFSharpPipelineDirectBody=oldInFSharpPipelineDirectBody;return this.finishNode(node,"ArrayExpression");}case types.braceL:{const oldInFSharpPipelineDirectBody=this.state.inFSharpPipelineDirectBody;this.state.inFSharpPipelineDirectBody=false;const ret=this.parseObj(false,refShorthandDefaultPos);this.state.inFSharpPipelineDirectBody=oldInFSharpPipelineDirectBody;return ret;}case types._function:return this.parseFunctionExpression();case types.at:this.parseDecorators();case types._class:node=this.startNode();this.takeDecorators(node);return this.parseClass(node,false);case types._new:return this.parseNew();case types.backQuote:return this.parseTemplate(false);case types.doubleColon:{node=this.startNode();this.next();node.object=null;const callee=node.callee=this.parseNoCallExpr();if(callee.type==="MemberExpression"){return this.finishNode(node,"BindExpression");}else{throw this.raise(callee.start,"Binding should be performed on object property.");}}case types.hash:{if(this.state.inPipeline){node=this.startNode();if(this.getPluginOption("pipelineOperator","proposal")!=="smart"){this.raise(node.start,"Primary Topic Reference found but pipelineOperator not passed 'smart' for 'proposal' option.");}this.next();if(!this.primaryTopicReferenceIsAllowedInCurrentTopicContext()){this.raise(node.start,`Topic reference was used in a lexical context without topic binding`);}this.registerTopicReference();return this.finishNode(node,"PipelinePrimaryTopicReference");}}default:throw this.unexpected();}}parseBooleanLiteral(){const node=this.startNode();node.value=this.match(types._true);this.next();return this.finishNode(node,"BooleanLiteral");}parseMaybePrivateName(){const isPrivate=this.match(types.hash);if(isPrivate){this.expectOnePlugin(["classPrivateProperties","classPrivateMethods"]);const node=this.startNode();this.next();this.assertNoSpace("Unexpected space between # and identifier");node.id=this.parseIdentifier(true);return this.finishNode(node,"PrivateName");}else{return this.parseIdentifier(true);}}parseFunctionExpression(){const node=this.startNode();let meta=this.startNode();this.next();meta=this.createIdentifier(meta,"function");if(this.scope.inGenerator&&this.eat(types.dot)){return this.parseMetaProperty(node,meta,"sent");}return this.parseFunction(node);}parseMetaProperty(node,meta,propertyName){node.meta=meta;if(meta.name==="function"&&propertyName==="sent"){if(this.isContextual(propertyName)){this.expectPlugin("functionSent");}else if(!this.hasPlugin("functionSent")){this.unexpected();}}const containsEsc=this.state.containsEsc;node.property=this.parseIdentifier(true);if(node.property.name!==propertyName||containsEsc){this.raise(node.property.start,`The only valid meta property for ${meta.name} is ${meta.name}.${propertyName}`);}return this.finishNode(node,"MetaProperty");}parseImportMetaProperty(node){const id=this.createIdentifier(this.startNodeAtNode(node),"import");this.expect(types.dot);if(this.isContextual("meta")){this.expectPlugin("importMeta");if(!this.inModule){this.raise(id.start,`import.meta may appear only with 'sourceType: "module"'`,{code:"BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"});}this.sawUnambiguousESM=true;}else if(!this.hasPlugin("importMeta")){this.raise(id.start,`Dynamic imports require a parameter: import('a.js')`);}return this.parseMetaProperty(node,id,"meta");}parseLiteral(value,type,startPos,startLoc){startPos=startPos||this.state.start;startLoc=startLoc||this.state.startLoc;const node=this.startNodeAt(startPos,startLoc);this.addExtra(node,"rawValue",value);this.addExtra(node,"raw",this.input.slice(startPos,this.state.end));node.value=value;this.next();return this.finishNode(node,type);}parseParenAndDistinguishExpression(canBeArrow){const startPos=this.state.start;const startLoc=this.state.startLoc;let val;this.expect(types.parenL);const oldMaybeInArrowParameters=this.state.maybeInArrowParameters;const oldYieldPos=this.state.yieldPos;const oldAwaitPos=this.state.awaitPos;const oldInFSharpPipelineDirectBody=this.state.inFSharpPipelineDirectBody;this.state.maybeInArrowParameters=true;this.state.yieldPos=-1;this.state.awaitPos=-1;this.state.inFSharpPipelineDirectBody=false;const innerStartPos=this.state.start;const innerStartLoc=this.state.startLoc;const exprList=[];const refShorthandDefaultPos={start:0};const refNeedsArrowPos={start:0};let first=true;let spreadStart;let optionalCommaStart;while(!this.match(types.parenR)){if(first){first=false;}else{this.expect(types.comma,refNeedsArrowPos.start||null);if(this.match(types.parenR)){optionalCommaStart=this.state.start;break;}}if(this.match(types.ellipsis)){const spreadNodeStartPos=this.state.start;const spreadNodeStartLoc=this.state.startLoc;spreadStart=this.state.start;exprList.push(this.parseParenItem(this.parseRestBinding(),spreadNodeStartPos,spreadNodeStartLoc));this.checkCommaAfterRest(41);break;}else{exprList.push(this.parseMaybeAssign(false,refShorthandDefaultPos,this.parseParenItem,refNeedsArrowPos));}}const innerEndPos=this.state.start;const innerEndLoc=this.state.startLoc;this.expect(types.parenR);this.state.maybeInArrowParameters=oldMaybeInArrowParameters;this.state.inFSharpPipelineDirectBody=oldInFSharpPipelineDirectBody;let arrowNode=this.startNodeAt(startPos,startLoc);if(canBeArrow&&this.shouldParseArrow()&&(arrowNode=this.parseArrow(arrowNode))){this.checkYieldAwaitInDefaultParams();this.state.yieldPos=oldYieldPos;this.state.awaitPos=oldAwaitPos;for(let _i=0;_i<exprList.length;_i++){const param=exprList[_i];if(param.extra&&param.extra.parenthesized){this.unexpected(param.extra.parenStart);}}this.parseArrowExpression(arrowNode,exprList,false);return arrowNode;}if(oldYieldPos!==-1)this.state.yieldPos=oldYieldPos;if(oldAwaitPos!==-1)this.state.awaitPos=oldAwaitPos;if(!exprList.length){this.unexpected(this.state.lastTokStart);}if(optionalCommaStart)this.unexpected(optionalCommaStart);if(spreadStart)this.unexpected(spreadStart);if(refShorthandDefaultPos.start){this.unexpected(refShorthandDefaultPos.start);}if(refNeedsArrowPos.start)this.unexpected(refNeedsArrowPos.start);this.toReferencedListDeep(exprList,true);if(exprList.length>1){val=this.startNodeAt(innerStartPos,innerStartLoc);val.expressions=exprList;this.finishNodeAt(val,"SequenceExpression",innerEndPos,innerEndLoc);}else{val=exprList[0];}if(!this.options.createParenthesizedExpressions){this.addExtra(val,"parenthesized",true);this.addExtra(val,"parenStart",startPos);return val;}const parenExpression=this.startNodeAt(startPos,startLoc);parenExpression.expression=val;this.finishNode(parenExpression,"ParenthesizedExpression");return parenExpression;}shouldParseArrow(){return!this.canInsertSemicolon();}parseArrow(node){if(this.eat(types.arrow)){return node;}}parseParenItem(node,startPos,startLoc){return node;}parseNew(){const node=this.startNode();let meta=this.startNode();this.next();meta=this.createIdentifier(meta,"new");if(this.eat(types.dot)){const metaProp=this.parseMetaProperty(node,meta,"target");if(!this.scope.inNonArrowFunction&&!this.state.inClassProperty){let error="new.target can only be used in functions";if(this.hasPlugin("classProperties")){error+=" or class properties";}this.raise(metaProp.start,error);}return metaProp;}node.callee=this.parseNoCallExpr();if(node.callee.type==="Import"){this.raise(node.callee.start,"Cannot use new with import(...)");}else if(node.callee.type==="OptionalMemberExpression"||node.callee.type==="OptionalCallExpression"){this.raise(this.state.lastTokEnd,"constructors in/after an Optional Chain are not allowed");}else if(this.eat(types.questionDot)){this.raise(this.state.start,"constructors in/after an Optional Chain are not allowed");}this.parseNewArguments(node);return this.finishNode(node,"NewExpression");}parseNewArguments(node){if(this.eat(types.parenL)){const args=this.parseExprList(types.parenR);this.toReferencedList(args);node.arguments=args;}else{node.arguments=[];}}parseTemplateElement(isTagged){const elem=this.startNode();if(this.state.value===null){if(!isTagged){this.raise(this.state.invalidTemplateEscapePosition||0,"Invalid escape sequence in template");}else{this.state.invalidTemplateEscapePosition=null;}}elem.value={raw:this.input.slice(this.state.start,this.state.end).replace(/\r\n?/g,"\n"),cooked:this.state.value};this.next();elem.tail=this.match(types.backQuote);return this.finishNode(elem,"TemplateElement");}parseTemplate(isTagged){const node=this.startNode();this.next();node.expressions=[];let curElt=this.parseTemplateElement(isTagged);node.quasis=[curElt];while(!curElt.tail){this.expect(types.dollarBraceL);node.expressions.push(this.parseExpression());this.expect(types.braceR);node.quasis.push(curElt=this.parseTemplateElement(isTagged));}this.next();return this.finishNode(node,"TemplateLiteral");}parseObj(isPattern,refShorthandDefaultPos){const propHash=Object.create(null);let first=true;const node=this.startNode();node.properties=[];this.next();while(!this.eat(types.braceR)){if(first){first=false;}else{this.expect(types.comma);if(this.match(types.braceR)){this.addExtra(node,"trailingComma",this.state.lastTokStart);this.next();break;}}const prop=this.parseObjectMember(isPattern,refShorthandDefaultPos);if(!isPattern)this.checkDuplicatedProto(prop,propHash);if(prop.shorthand){this.addExtra(prop,"shorthand",true);}node.properties.push(prop);}if(!this.match(types.eq)&&propHash.start!==undefined){this.raise(propHash.start,"Redefinition of __proto__ property");}return this.finishNode(node,isPattern?"ObjectPattern":"ObjectExpression");}isAsyncProp(prop){return!prop.computed&&prop.key.type==="Identifier"&&prop.key.name==="async"&&(this.match(types.name)||this.match(types.num)||this.match(types.string)||this.match(types.bracketL)||this.state.type.keyword||this.match(types.star))&&!this.hasPrecedingLineBreak();}parseObjectMember(isPattern,refShorthandDefaultPos){let decorators=[];if(this.match(types.at)){if(this.hasPlugin("decorators")){this.raise(this.state.start,"Stage 2 decorators disallow object literal property decorators");}while(this.match(types.at)){decorators.push(this.parseDecorator());}}const prop=this.startNode();let isGenerator=false;let isAsync=false;let startPos;let startLoc;if(this.match(types.ellipsis)){if(decorators.length)this.unexpected();if(isPattern){this.next();prop.argument=this.parseIdentifier();this.checkCommaAfterRest(125);return this.finishNode(prop,"RestElement");}return this.parseSpread();}if(decorators.length){prop.decorators=decorators;decorators=[];}prop.method=false;if(isPattern||refShorthandDefaultPos){startPos=this.state.start;startLoc=this.state.startLoc;}if(!isPattern){isGenerator=this.eat(types.star);}const containsEsc=this.state.containsEsc;this.parsePropertyName(prop);if(!isPattern&&!containsEsc&&!isGenerator&&this.isAsyncProp(prop)){isAsync=true;isGenerator=this.eat(types.star);this.parsePropertyName(prop);}else{isAsync=false;}this.parseObjPropValue(prop,startPos,startLoc,isGenerator,isAsync,isPattern,refShorthandDefaultPos,containsEsc);return prop;}isGetterOrSetterMethod(prop,isPattern){return!isPattern&&!prop.computed&&prop.key.type==="Identifier"&&(prop.key.name==="get"||prop.key.name==="set")&&(this.match(types.string)||this.match(types.num)||this.match(types.bracketL)||this.match(types.name)||!!this.state.type.keyword);}getGetterSetterExpectedParamCount(method){return method.kind==="get"?0:1;}checkGetterSetterParams(method){const paramCount=this.getGetterSetterExpectedParamCount(method);const start=method.start;if(method.params.length!==paramCount){if(method.kind==="get"){this.raise(start,"getter must not have any formal parameters");}else{this.raise(start,"setter must have exactly one formal parameter");}}if(method.kind==="set"&&method.params[method.params.length-1].type==="RestElement"){this.raise(start,"setter function argument must not be a rest parameter");}}parseObjectMethod(prop,isGenerator,isAsync,isPattern,containsEsc){if(isAsync||isGenerator||this.match(types.parenL)){if(isPattern)this.unexpected();prop.kind="method";prop.method=true;return this.parseMethod(prop,isGenerator,isAsync,false,false,"ObjectMethod");}if(!containsEsc&&this.isGetterOrSetterMethod(prop,isPattern)){if(isGenerator||isAsync)this.unexpected();prop.kind=prop.key.name;this.parsePropertyName(prop);this.parseMethod(prop,false,false,false,false,"ObjectMethod");this.checkGetterSetterParams(prop);return prop;}}parseObjectProperty(prop,startPos,startLoc,isPattern,refShorthandDefaultPos){prop.shorthand=false;if(this.eat(types.colon)){prop.value=isPattern?this.parseMaybeDefault(this.state.start,this.state.startLoc):this.parseMaybeAssign(false,refShorthandDefaultPos);return this.finishNode(prop,"ObjectProperty");}if(!prop.computed&&prop.key.type==="Identifier"){this.checkReservedWord(prop.key.name,prop.key.start,true,true);if(isPattern){prop.value=this.parseMaybeDefault(startPos,startLoc,prop.key.__clone());}else if(this.match(types.eq)&&refShorthandDefaultPos){if(!refShorthandDefaultPos.start){refShorthandDefaultPos.start=this.state.start;}prop.value=this.parseMaybeDefault(startPos,startLoc,prop.key.__clone());}else{prop.value=prop.key.__clone();}prop.shorthand=true;return this.finishNode(prop,"ObjectProperty");}}parseObjPropValue(prop,startPos,startLoc,isGenerator,isAsync,isPattern,refShorthandDefaultPos,containsEsc){const node=this.parseObjectMethod(prop,isGenerator,isAsync,isPattern,containsEsc)||this.parseObjectProperty(prop,startPos,startLoc,isPattern,refShorthandDefaultPos);if(!node)this.unexpected();return node;}parsePropertyName(prop){if(this.eat(types.bracketL)){prop.computed=true;prop.key=this.parseMaybeAssign();this.expect(types.bracketR);}else{const oldInPropertyName=this.state.inPropertyName;this.state.inPropertyName=true;prop.key=this.match(types.num)||this.match(types.string)?this.parseExprAtom():this.parseMaybePrivateName();if(prop.key.type!=="PrivateName"){prop.computed=false;}this.state.inPropertyName=oldInPropertyName;}return prop.key;}initFunction(node,isAsync){node.id=null;node.generator=false;node.async=!!isAsync;}parseMethod(node,isGenerator,isAsync,isConstructor,allowDirectSuper,type,inClassScope=false){const oldYieldPos=this.state.yieldPos;const oldAwaitPos=this.state.awaitPos;this.state.yieldPos=-1;this.state.awaitPos=-1;this.initFunction(node,isAsync);node.generator=!!isGenerator;const allowModifiers=isConstructor;this.scope.enter(functionFlags(isAsync,node.generator)|SCOPE_SUPER|(inClassScope?SCOPE_CLASS:0)|(allowDirectSuper?SCOPE_DIRECT_SUPER:0));this.parseFunctionParams(node,allowModifiers);this.checkYieldAwaitInDefaultParams();this.parseFunctionBodyAndFinish(node,type,true);this.scope.exit();this.state.yieldPos=oldYieldPos;this.state.awaitPos=oldAwaitPos;return node;}parseArrowExpression(node,params,isAsync,trailingCommaPos){this.scope.enter(functionFlags(isAsync,false)|SCOPE_ARROW);this.initFunction(node,isAsync);const oldMaybeInArrowParameters=this.state.maybeInArrowParameters;const oldYieldPos=this.state.yieldPos;const oldAwaitPos=this.state.awaitPos;this.state.maybeInArrowParameters=false;this.state.yieldPos=-1;this.state.awaitPos=-1;if(params)this.setArrowFunctionParameters(node,params,trailingCommaPos);this.parseFunctionBody(node,true);this.scope.exit();this.state.maybeInArrowParameters=oldMaybeInArrowParameters;this.state.yieldPos=oldYieldPos;this.state.awaitPos=oldAwaitPos;return this.finishNode(node,"ArrowFunctionExpression");}setArrowFunctionParameters(node,params,trailingCommaPos){node.params=this.toAssignableList(params,true,"arrow function parameters",trailingCommaPos);}isStrictBody(node){const isBlockStatement=node.body.type==="BlockStatement";if(isBlockStatement&&node.body.directives.length){for(let _i2=0,_node$body$directives=node.body.directives;_i2<_node$body$directives.length;_i2++){const directive=_node$body$directives[_i2];if(directive.value.value==="use strict"){return true;}}}return false;}parseFunctionBodyAndFinish(node,type,isMethod=false){this.parseFunctionBody(node,false,isMethod);this.finishNode(node,type);}parseFunctionBody(node,allowExpression,isMethod=false){const isExpression=allowExpression&&!this.match(types.braceL);const oldStrict=this.state.strict;let useStrict=false;const oldInParameters=this.state.inParameters;this.state.inParameters=false;if(isExpression){node.body=this.parseMaybeAssign();this.checkParams(node,false,allowExpression,false);}else{const nonSimple=!this.isSimpleParamList(node.params);if(!oldStrict||nonSimple){useStrict=this.strictDirective(this.state.end);if(useStrict&&nonSimple){const errorPos=(node.kind==="method"||node.kind==="constructor")&&!!node.key?node.key.end:node.start;this.raise(errorPos,"Illegal 'use strict' directive in function with non-simple parameter list");}}const oldLabels=this.state.labels;this.state.labels=[];if(useStrict)this.state.strict=true;this.checkParams(node,!oldStrict&&!useStrict&&!allowExpression&&!isMethod&&!nonSimple,allowExpression,!oldStrict&&useStrict);node.body=this.parseBlock(true,false);this.state.labels=oldLabels;}this.state.inParameters=oldInParameters;if(this.state.strict&&node.id){this.checkLVal(node.id,BIND_OUTSIDE,undefined,"function name",undefined,!oldStrict&&useStrict);}this.state.strict=oldStrict;}isSimpleParamList(params){for(let i=0,len=params.length;i<len;i++){if(params[i].type!=="Identifier")return false;}return true;}checkParams(node,allowDuplicates,isArrowFunction,strictModeChanged=true){const nameHash=Object.create(null);for(let i=0;i<node.params.length;i++){this.checkLVal(node.params[i],BIND_VAR,allowDuplicates?null:nameHash,"function parameter list",undefined,strictModeChanged);}}parseExprList(close,allowEmpty,refShorthandDefaultPos,nodeForExtra){const elts=[];let first=true;while(!this.eat(close)){if(first){first=false;}else{this.expect(types.comma);if(this.match(close)){if(nodeForExtra){this.addExtra(nodeForExtra,"trailingComma",this.state.lastTokStart);}this.next();break;}}elts.push(this.parseExprListItem(allowEmpty,refShorthandDefaultPos));}return elts;}parseExprListItem(allowEmpty,refShorthandDefaultPos,refNeedsArrowPos,allowPlaceholder){let elt;if(allowEmpty&&this.match(types.comma)){elt=null;}else if(this.match(types.ellipsis)){const spreadNodeStartPos=this.state.start;const spreadNodeStartLoc=this.state.startLoc;elt=this.parseParenItem(this.parseSpread(refShorthandDefaultPos,refNeedsArrowPos),spreadNodeStartPos,spreadNodeStartLoc);}else if(this.match(types.question)){this.expectPlugin("partialApplication");if(!allowPlaceholder){this.raise(this.state.start,"Unexpected argument placeholder");}const node=this.startNode();this.next();elt=this.finishNode(node,"ArgumentPlaceholder");}else{elt=this.parseMaybeAssign(false,refShorthandDefaultPos,this.parseParenItem,refNeedsArrowPos);}return elt;}parseIdentifier(liberal){const node=this.startNode();const name=this.parseIdentifierName(node.start,liberal);return this.createIdentifier(node,name);}createIdentifier(node,name){node.name=name;node.loc.identifierName=name;return this.finishNode(node,"Identifier");}parseIdentifierName(pos,liberal){let name;if(this.match(types.name)){name=this.state.value;}else if(this.state.type.keyword){name=this.state.type.keyword;if((name==="class"||name==="function")&&(this.state.lastTokEnd!==this.state.lastTokStart+1||this.input.charCodeAt(this.state.lastTokStart)!==46)){this.state.context.pop();}}else{throw this.unexpected();}if(liberal){this.state.type=types.name;}else{this.checkReservedWord(name,this.state.start,!!this.state.type.keyword,false);}this.next();return name;}checkReservedWord(word,startLoc,checkKeywords,isBinding){if(this.scope.inGenerator&&word==="yield"){this.raise(startLoc,"Can not use 'yield' as identifier inside a generator");return;}if(word==="await"){if(this.scope.inAsync){this.raise(startLoc,"Can not use 'await' as identifier inside an async function");return;}if(this.state.awaitPos===-1&&(this.state.maybeInArrowParameters||this.isAwaitAllowed())){this.state.awaitPos=this.state.start;}}if(this.scope.inClass&&!this.scope.inNonArrowFunction&&word==="arguments"){this.raise(startLoc,"'arguments' is not allowed in class field initializer");return;}if(checkKeywords&&isKeyword(word)){this.raise(startLoc,`Unexpected keyword '${word}'`);return;}const reservedTest=!this.state.strict?isReservedWord:isBinding?isStrictBindReservedWord:isStrictReservedWord;if(reservedTest(word,this.inModule)){if(!this.scope.inAsync&&word==="await"){this.raise(startLoc,"Can not use keyword 'await' outside an async function");}else{this.raise(startLoc,`Unexpected reserved word '${word}'`);}}}isAwaitAllowed(){if(this.scope.inFunction)return this.scope.inAsync;if(this.options.allowAwaitOutsideFunction)return true;if(this.hasPlugin("topLevelAwait"))return this.inModule;return false;}parseAwait(){const node=this.startNode();this.next();if(this.state.inParameters){this.raise(node.start,"await is not allowed in async function parameters");}else if(this.state.awaitPos===-1){this.state.awaitPos=node.start;}if(this.eat(types.star)){this.raise(node.start,"await* has been removed from the async functions proposal. Use Promise.all() instead.");}if(!this.scope.inFunction&&!this.options.allowAwaitOutsideFunction){if(this.hasPrecedingLineBreak()||this.match(types.plusMin)||this.match(types.parenL)||this.match(types.bracketL)||this.match(types.backQuote)||this.match(types.regexp)||this.match(types.slash)||this.hasPlugin("v8intrinsic")&&this.match(types.modulo)){this.ambiguousScriptDifferentAst=true;}else{this.sawUnambiguousESM=true;}}if(!this.state.soloAwait){node.argument=this.parseMaybeUnary();}return this.finishNode(node,"AwaitExpression");}parseYield(noIn){const node=this.startNode();if(this.state.inParameters){this.raise(node.start,"yield is not allowed in generator parameters");}else if(this.state.yieldPos===-1){this.state.yieldPos=node.start;}this.next();if(this.match(types.semi)||!this.match(types.star)&&!this.state.type.startsExpr||this.hasPrecedingLineBreak()){node.delegate=false;node.argument=null;}else{node.delegate=this.eat(types.star);node.argument=this.parseMaybeAssign(noIn);}return this.finishNode(node,"YieldExpression");}checkPipelineAtInfixOperator(left,leftStartPos){if(this.getPluginOption("pipelineOperator","proposal")==="smart"){if(left.type==="SequenceExpression"){this.raise(leftStartPos,`Pipeline head should not be a comma-separated sequence expression`);}}}parseSmartPipelineBody(childExpression,startPos,startLoc){const pipelineStyle=this.checkSmartPipelineBodyStyle(childExpression);this.checkSmartPipelineBodyEarlyErrors(childExpression,pipelineStyle,startPos);return this.parseSmartPipelineBodyInStyle(childExpression,pipelineStyle,startPos,startLoc);}checkSmartPipelineBodyEarlyErrors(childExpression,pipelineStyle,startPos){if(this.match(types.arrow)){throw this.raise(this.state.start,`Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized`);}else if(pipelineStyle==="PipelineTopicExpression"&&childExpression.type==="SequenceExpression"){this.raise(startPos,`Pipeline body may not be a comma-separated sequence expression`);}}parseSmartPipelineBodyInStyle(childExpression,pipelineStyle,startPos,startLoc){const bodyNode=this.startNodeAt(startPos,startLoc);switch(pipelineStyle){case"PipelineBareFunction":bodyNode.callee=childExpression;break;case"PipelineBareConstructor":bodyNode.callee=childExpression.callee;break;case"PipelineBareAwaitedFunction":bodyNode.callee=childExpression.argument;break;case"PipelineTopicExpression":if(!this.topicReferenceWasUsedInCurrentTopicContext()){this.raise(startPos,`Pipeline is in topic style but does not use topic reference`);}bodyNode.expression=childExpression;break;default:throw new Error(`Internal @babel/parser error: Unknown pipeline style (${pipelineStyle})`);}return this.finishNode(bodyNode,pipelineStyle);}checkSmartPipelineBodyStyle(expression){switch(expression.type){default:return this.isSimpleReference(expression)?"PipelineBareFunction":"PipelineTopicExpression";}}isSimpleReference(expression){switch(expression.type){case"MemberExpression":return!expression.computed&&this.isSimpleReference(expression.object);case"Identifier":return true;default:return false;}}withTopicPermittingContext(callback){const outerContextTopicState=this.state.topicContext;this.state.topicContext={maxNumOfResolvableTopics:1,maxTopicIndex:null};try{return callback();}finally{this.state.topicContext=outerContextTopicState;}}withTopicForbiddingContext(callback){const outerContextTopicState=this.state.topicContext;this.state.topicContext={maxNumOfResolvableTopics:0,maxTopicIndex:null};try{return callback();}finally{this.state.topicContext=outerContextTopicState;}}withSoloAwaitPermittingContext(callback){const outerContextSoloAwaitState=this.state.soloAwait;this.state.soloAwait=true;try{return callback();}finally{this.state.soloAwait=outerContextSoloAwaitState;}}registerTopicReference(){this.state.topicContext.maxTopicIndex=0;}primaryTopicReferenceIsAllowedInCurrentTopicContext(){return this.state.topicContext.maxNumOfResolvableTopics>=1;}topicReferenceWasUsedInCurrentTopicContext(){return this.state.topicContext.maxTopicIndex!=null&&this.state.topicContext.maxTopicIndex>=0;}parseFSharpPipelineBody(prec,noIn){const startPos=this.state.start;const startLoc=this.state.startLoc;this.state.potentialArrowAt=this.state.start;const oldInFSharpPipelineDirectBody=this.state.inFSharpPipelineDirectBody;this.state.inFSharpPipelineDirectBody=true;const ret=this.parseExprOp(this.parseMaybeUnary(),startPos,startLoc,prec,noIn);this.state.inFSharpPipelineDirectBody=oldInFSharpPipelineDirectBody;return ret;}}const loopLabel={kind:"loop"},switchLabel={kind:"switch"};const FUNC_NO_FLAGS=0b000,FUNC_STATEMENT=0b001,FUNC_HANGING_STATEMENT=0b010,FUNC_NULLABLE_ID=0b100;class StatementParser extends ExpressionParser{parseTopLevel(file,program){program.sourceType=this.options.sourceType;program.interpreter=this.parseInterpreterDirective();this.parseBlockBody(program,true,true,types.eof);if(this.inModule&&!this.options.allowUndeclaredExports&&this.scope.undefinedExports.size>0){for(let _i=0,_Array$from=Array.from(this.scope.undefinedExports);_i<_Array$from.length;_i++){const[name]=_Array$from[_i];const pos=this.scope.undefinedExports.get(name);this.raise(pos,`Export '${name}' is not defined`);}}file.program=this.finishNode(program,"Program");file.comments=this.state.comments;if(this.options.tokens)file.tokens=this.state.tokens;return this.finishNode(file,"File");}stmtToDirective(stmt){const expr=stmt.expression;const directiveLiteral=this.startNodeAt(expr.start,expr.loc.start);const directive=this.startNodeAt(stmt.start,stmt.loc.start);const raw=this.input.slice(expr.start,expr.end);const val=directiveLiteral.value=raw.slice(1,-1);this.addExtra(directiveLiteral,"raw",raw);this.addExtra(directiveLiteral,"rawValue",val);directive.value=this.finishNodeAt(directiveLiteral,"DirectiveLiteral",expr.end,expr.loc.end);return this.finishNodeAt(directive,"Directive",stmt.end,stmt.loc.end);}parseInterpreterDirective(){if(!this.match(types.interpreterDirective)){return null;}const node=this.startNode();node.value=this.state.value;this.next();return this.finishNode(node,"InterpreterDirective");}isLet(context){if(!this.isContextual("let")){return false;}const next=this.nextTokenStart();const nextCh=this.input.charCodeAt(next);if(nextCh===91)return true;if(context)return false;if(nextCh===123)return true;if(isIdentifierStart(nextCh)){let pos=next+1;while(isIdentifierChar(this.input.charCodeAt(pos))){++pos;}const ident=this.input.slice(next,pos);if(!keywordRelationalOperator.test(ident))return true;}return false;}parseStatement(context,topLevel){if(this.match(types.at)){this.parseDecorators(true);}return this.parseStatementContent(context,topLevel);}parseStatementContent(context,topLevel){let starttype=this.state.type;const node=this.startNode();let kind;if(this.isLet(context)){starttype=types._var;kind="let";}switch(starttype){case types._break:case types._continue:return this.parseBreakContinueStatement(node,starttype.keyword);case types._debugger:return this.parseDebuggerStatement(node);case types._do:return this.parseDoStatement(node);case types._for:return this.parseForStatement(node);case types._function:if(this.lookaheadCharCode()===46)break;if(context){if(this.state.strict){this.raise(this.state.start,"In strict mode code, functions can only be declared at top level or inside a block");}else if(context!=="if"&&context!=="label"){this.raise(this.state.start,"In non-strict mode code, functions can only be declared at top level, "+"inside a block, or as the body of an if statement");}}return this.parseFunctionStatement(node,false,!context);case types._class:if(context)this.unexpected();return this.parseClass(node,true);case types._if:return this.parseIfStatement(node);case types._return:return this.parseReturnStatement(node);case types._switch:return this.parseSwitchStatement(node);case types._throw:return this.parseThrowStatement(node);case types._try:return this.parseTryStatement(node);case types.handle:if(context!=="try"){this.raise(this.state.start,"Received handle clause without a precedent try");}return this.parseHandleMatcher(node);case types._const:case types._var:kind=kind||this.state.value;if(context&&kind!=="var"){this.raise(this.state.start,"Lexical declaration cannot appear in a single-statement context");}return this.parseVarStatement(node,kind);case types._while:return this.parseWhileStatement(node);case types._with:return this.parseWithStatement(node);case types.braceL:return this.parseBlock();case types.semi:return this.parseEmptyStatement(node);case types._export:case types._import:{const nextTokenCharCode=this.lookaheadCharCode();if(nextTokenCharCode===40||nextTokenCharCode===46){break;}if(!this.options.allowImportExportEverywhere&&!topLevel){this.raise(this.state.start,"'import' and 'export' may only appear at the top level");}this.next();let result;if(starttype===types._import){result=this.parseImport(node);if(result.type==="ImportDeclaration"&&(!result.importKind||result.importKind==="value")){this.sawUnambiguousESM=true;}}else{result=this.parseExport(node);if(result.type==="ExportNamedDeclaration"&&(!result.exportKind||result.exportKind==="value")||result.type==="ExportAllDeclaration"&&(!result.exportKind||result.exportKind==="value")||result.type==="ExportDefaultDeclaration"){this.sawUnambiguousESM=true;}}this.assertModuleNodeAllowed(node);return result;}default:{if(this.isAsyncFunction()){if(context){this.raise(this.state.start,"Async functions can only be declared at the top level or inside a block");}this.next();return this.parseFunctionStatement(node,true,!context);}}}const maybeName=this.state.value;const expr=this.parseExpression();if(starttype===types.name&&expr.type==="Identifier"&&this.eat(types.colon)){return this.parseLabeledStatement(node,maybeName,expr,context);}else{return this.parseExpressionStatement(node,expr);}}assertModuleNodeAllowed(node){if(!this.options.allowImportExportEverywhere&&!this.inModule){this.raise(node.start,`'import' and 'export' may appear only with 'sourceType: "module"'`,{code:"BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"});}}takeDecorators(node){const decorators=this.state.decoratorStack[this.state.decoratorStack.length-1];if(decorators.length){node.decorators=decorators;this.resetStartLocationFromNode(node,decorators[0]);this.state.decoratorStack[this.state.decoratorStack.length-1]=[];}}canHaveLeadingDecorator(){return this.match(types._class);}parseDecorators(allowExport){const currentContextDecorators=this.state.decoratorStack[this.state.decoratorStack.length-1];while(this.match(types.at)){const decorator=this.parseDecorator();currentContextDecorators.push(decorator);}if(this.match(types._export)){if(!allowExport){this.unexpected();}if(this.hasPlugin("decorators")&&!this.getPluginOption("decorators","decoratorsBeforeExport")){this.raise(this.state.start,"Using the export keyword between a decorator and a class is not allowed. "+"Please use `export @dec class` instead.");}}else if(!this.canHaveLeadingDecorator()){throw this.raise(this.state.start,"Leading decorators must be attached to a class declaration");}}parseDecorator(){this.expectOnePlugin(["decorators-legacy","decorators"]);const node=this.startNode();this.next();if(this.hasPlugin("decorators")){this.state.decoratorStack.push([]);const startPos=this.state.start;const startLoc=this.state.startLoc;let expr;if(this.eat(types.parenL)){expr=this.parseExpression();this.expect(types.parenR);}else{expr=this.parseIdentifier(false);while(this.eat(types.dot)){const node=this.startNodeAt(startPos,startLoc);node.object=expr;node.property=this.parseIdentifier(true);node.computed=false;expr=this.finishNode(node,"MemberExpression");}}node.expression=this.parseMaybeDecoratorArguments(expr);this.state.decoratorStack.pop();}else{node.expression=this.parseExprSubscripts();}return this.finishNode(node,"Decorator");}parseMaybeDecoratorArguments(expr){if(this.eat(types.parenL)){const node=this.startNodeAtNode(expr);node.callee=expr;node.arguments=this.parseCallExpressionArguments(types.parenR,false);this.toReferencedList(node.arguments);return this.finishNode(node,"CallExpression");}return expr;}parseBreakContinueStatement(node,keyword){const isBreak=keyword==="break";this.next();if(this.isLineTerminator()){node.label=null;}else{node.label=this.parseIdentifier();this.semicolon();}this.verifyBreakContinue(node,keyword);return this.finishNode(node,isBreak?"BreakStatement":"ContinueStatement");}verifyBreakContinue(node,keyword){const isBreak=keyword==="break";let i;for(i=0;i<this.state.labels.length;++i){const lab=this.state.labels[i];if(node.label==null||lab.name===node.label.name){if(lab.kind!=null&&(isBreak||lab.kind==="loop"))break;if(node.label&&isBreak)break;}}if(i===this.state.labels.length){this.raise(node.start,"Unsyntactic "+keyword);}}parseDebuggerStatement(node){this.next();this.semicolon();return this.finishNode(node,"DebuggerStatement");}parseHeaderExpression(){this.expect(types.parenL);const val=this.parseExpression();this.expect(types.parenR);return val;}parseDoStatement(node){this.next();this.state.labels.push(loopLabel);node.body=this.withTopicForbiddingContext(()=>this.parseStatement("do"));this.state.labels.pop();this.expect(types._while);node.test=this.parseHeaderExpression();this.eat(types.semi);return this.finishNode(node,"DoWhileStatement");}parseForStatement(node){this.next();this.state.labels.push(loopLabel);let awaitAt=-1;if(this.isAwaitAllowed()&&this.eatContextual("await")){awaitAt=this.state.lastTokStart;}this.scope.enter(SCOPE_OTHER);this.expect(types.parenL);if(this.match(types.semi)){if(awaitAt>-1){this.unexpected(awaitAt);}return this.parseFor(node,null);}const isLet=this.isLet();if(this.match(types._var)||this.match(types._const)||isLet){const init=this.startNode();const kind=isLet?"let":this.state.value;this.next();this.parseVar(init,true,kind);this.finishNode(init,"VariableDeclaration");if((this.match(types._in)||this.isContextual("of"))&&init.declarations.length===1){return this.parseForIn(node,init,awaitAt);}if(awaitAt>-1){this.unexpected(awaitAt);}return this.parseFor(node,init);}const refShorthandDefaultPos={start:0};const init=this.parseExpression(true,refShorthandDefaultPos);if(this.match(types._in)||this.isContextual("of")){const description=this.isContextual("of")?"for-of statement":"for-in statement";this.toAssignable(init,undefined,description);this.checkLVal(init,undefined,undefined,description);return this.parseForIn(node,init,awaitAt);}else if(refShorthandDefaultPos.start){this.unexpected(refShorthandDefaultPos.start);}if(awaitAt>-1){this.unexpected(awaitAt);}return this.parseFor(node,init);}parseFunctionStatement(node,isAsync,declarationPosition){this.next();return this.parseFunction(node,FUNC_STATEMENT|(declarationPosition?0:FUNC_HANGING_STATEMENT),isAsync);}parseIfStatement(node){this.next();node.test=this.parseHeaderExpression();node.consequent=this.parseStatement("if");node.alternate=this.eat(types._else)?this.parseStatement("if"):null;return this.finishNode(node,"IfStatement");}parseReturnStatement(node){if(!this.scope.inFunction&&!this.options.allowReturnOutsideFunction){this.raise(this.state.start,"'return' outside of function");}this.next();if(this.isLineTerminator()){node.argument=null;}else{node.argument=this.parseExpression();this.semicolon();}return this.finishNode(node,"ReturnStatement");}parseSwitchStatement(node){this.next();node.discriminant=this.parseHeaderExpression();const cases=node.cases=[];this.expect(types.braceL);this.state.labels.push(switchLabel);this.scope.enter(SCOPE_OTHER);let cur;for(let sawDefault;!this.match(types.braceR);){if(this.match(types._case)||this.match(types._default)){const isCase=this.match(types._case);if(cur)this.finishNode(cur,"SwitchCase");cases.push(cur=this.startNode());cur.consequent=[];this.next();if(isCase){cur.test=this.parseExpression();}else{if(sawDefault){this.raise(this.state.lastTokStart,"Multiple default clauses");}sawDefault=true;cur.test=null;}this.expect(types.colon);}else{if(cur){cur.consequent.push(this.parseStatement(null));}else{this.unexpected();}}}this.scope.exit();if(cur)this.finishNode(cur,"SwitchCase");this.next();this.state.labels.pop();return this.finishNode(node,"SwitchStatement");}parseThrowStatement(node){this.next();if(lineBreak.test(this.input.slice(this.state.lastTokEnd,this.state.start))){this.raise(this.state.lastTokEnd,"Illegal newline after throw");}node.argument=this.parseExpression();this.semicolon();return this.finishNode(node,"ThrowStatement");}parseTryStatement(node){this.next();node.block=this.parseBlock();node.handler=null;const parseCatchHandleClause=()=>{const clause=this.startNode();this.next();if(this.match(types.parenL)){this.expect(types.parenL);clause.param=this.parseBindingAtom();const simple=clause.param.type==="Identifier";this.scope.enter(simple?SCOPE_SIMPLE_CATCH:0);this.checkLVal(clause.param,BIND_LEXICAL,null,"catch clause");this.expect(types.parenR);}else{clause.param=null;this.scope.enter(SCOPE_OTHER);}return clause;};if(this.match(types._catch)){const clause=parseCatchHandleClause();clause.body=this.withTopicForbiddingContext(()=>this.parseBlock(false,false));this.scope.exit();node.handler=this.finishNode(clause,"CatchClause");}else if(this.match(types.handle)){this.parseHandleMatcher(node);}node.finalizer=this.eat(types._finally)?this.parseBlock():null;if(!node.handler&&!node.finalizer){this.raise(node.start,"Missing catch or finally clause");}return this.finishNode(node,"TryStatement");}parseHandleMatcher(node){this.next();const parseHandleClause=()=>{const clause=this.startNode();clause.effectMatcher=this.eat(types._default)?null:this.parseExpression();clause.defaultMatcher=!clause.effectMatcher;if(!this.eat(types._with)){this.raise(node.start,"Missing with Clause for Handler Statement");}if(this.match(types.parenL)){this.expect(types.parenL);clause.param=this.parseBindingAtom();const simple=clause.param.type==="Identifier";this.scope.enter(simple?SCOPE_SIMPLE_CATCH:0);this.checkLVal(clause.param,BIND_LEXICAL,null,"catch clause");this.expect(types.parenR);}else{clause.param=null;this.scope.enter(SCOPE_OTHER);}return clause;};const clause=parseHandleClause();clause.body=this.parseBlock(false,true);clause.alternate=this.match(types.handle)?this.parseStatement("try"):null;this.scope.exit();node.handler=this.finishNode(clause,"HandleClause");return node;}parseVarStatement(node,kind){this.next();this.parseVar(node,false,kind);this.semicolon();return this.finishNode(node,"VariableDeclaration");}parseWhileStatement(node){this.next();node.test=this.parseHeaderExpression();this.state.labels.push(loopLabel);node.body=this.withTopicForbiddingContext(()=>this.parseStatement("while"));this.state.labels.pop();return this.finishNode(node,"WhileStatement");}parseWithStatement(node){if(this.state.strict){this.raise(this.state.start,"'with' in strict mode");}this.next();node.object=this.parseHeaderExpression();node.body=this.withTopicForbiddingContext(()=>this.parseStatement("with"));return this.finishNode(node,"WithStatement");}parseEmptyStatement(node){this.next();return this.finishNode(node,"EmptyStatement");}parseLabeledStatement(node,maybeName,expr,context){for(let _i2=0,_this$state$labels=this.state.labels;_i2<_this$state$labels.length;_i2++){const label=_this$state$labels[_i2];if(label.name===maybeName){this.raise(expr.start,`Label '${maybeName}' is already declared`);}}const kind=this.state.type.isLoop?"loop":this.match(types._switch)?"switch":null;for(let i=this.state.labels.length-1;i>=0;i--){const label=this.state.labels[i];if(label.statementStart===node.start){label.statementStart=this.state.start;label.kind=kind;}else{break;}}this.state.labels.push({name:maybeName,kind:kind,statementStart:this.state.start});node.body=this.parseStatement(context?context.indexOf("label")===-1?context+"label":context:"label");this.state.labels.pop();node.label=expr;return this.finishNode(node,"LabeledStatement");}parseExpressionStatement(node,expr){node.expression=expr;this.semicolon();return this.finishNode(node,"ExpressionStatement");}parseBlock(allowDirectives=false,createNewLexicalScope=true){const node=this.startNode();this.expect(types.braceL);if(createNewLexicalScope){this.scope.enter(SCOPE_OTHER);}this.parseBlockBody(node,allowDirectives,false,types.braceR);if(createNewLexicalScope){this.scope.exit();}return this.finishNode(node,"BlockStatement");}isValidDirective(stmt){return stmt.type==="ExpressionStatement"&&stmt.expression.type==="StringLiteral"&&!stmt.expression.extra.parenthesized;}parseBlockBody(node,allowDirectives,topLevel,end){const body=node.body=[];const directives=node.directives=[];this.parseBlockOrModuleBlockBody(body,allowDirectives?directives:undefined,topLevel,end);}parseBlockOrModuleBlockBody(body,directives,topLevel,end){let parsedNonDirective=false;let oldStrict;let octalPosition;while(!this.eat(end)){if(!parsedNonDirective&&this.state.containsOctal&&!octalPosition){octalPosition=this.state.octalPosition;}const stmt=this.parseStatement(null,topLevel);if(directives&&!parsedNonDirective&&this.isValidDirective(stmt)){const directive=this.stmtToDirective(stmt);directives.push(directive);if(oldStrict===undefined&&directive.value.value==="use strict"){oldStrict=this.state.strict;this.setStrict(true);if(octalPosition){this.raise(octalPosition,"Octal literal in strict mode");}}continue;}parsedNonDirective=true;body.push(stmt);}if(oldStrict===false){this.setStrict(false);}}parseFor(node,init){node.init=init;this.expect(types.semi);node.test=this.match(types.semi)?null:this.parseExpression();this.expect(types.semi);node.update=this.match(types.parenR)?null:this.parseExpression();this.expect(types.parenR);node.body=this.withTopicForbiddingContext(()=>this.parseStatement("for"));this.scope.exit();this.state.labels.pop();return this.finishNode(node,"ForStatement");}parseForIn(node,init,awaitAt){const isForIn=this.match(types._in);this.next();if(isForIn){if(awaitAt>-1)this.unexpected(awaitAt);}else{node.await=awaitAt>-1;}if(init.type==="VariableDeclaration"&&init.declarations[0].init!=null&&(!isForIn||this.state.strict||init.kind!=="var"||init.declarations[0].id.type!=="Identifier")){this.raise(init.start,`${isForIn?"for-in":"for-of"} loop variable declaration may not have an initializer`);}else if(init.type==="AssignmentPattern"){this.raise(init.start,"Invalid left-hand side in for-loop");}node.left=init;node.right=isForIn?this.parseExpression():this.parseMaybeAssign();this.expect(types.parenR);node.body=this.withTopicForbiddingContext(()=>this.parseStatement("for"));this.scope.exit();this.state.labels.pop();return this.finishNode(node,isForIn?"ForInStatement":"ForOfStatement");}parseVar(node,isFor,kind){const declarations=node.declarations=[];const isTypescript=this.hasPlugin("typescript");node.kind=kind;for(;;){const decl=this.startNode();this.parseVarId(decl,kind);if(this.eat(types.eq)){decl.init=this.parseMaybeAssign(isFor);}else{if(kind==="const"&&!(this.match(types._in)||this.isContextual("of"))){if(!isTypescript){this.unexpected();}}else if(decl.id.type!=="Identifier"&&!(isFor&&(this.match(types._in)||this.isContextual("of")))){this.raise(this.state.lastTokEnd,"Complex binding patterns require an initialization value");}decl.init=null;}declarations.push(this.finishNode(decl,"VariableDeclarator"));if(!this.eat(types.comma))break;}return node;}parseVarId(decl,kind){decl.id=this.parseBindingAtom();this.checkLVal(decl.id,kind==="var"?BIND_VAR:BIND_LEXICAL,undefined,"variable declaration",kind!=="var");}parseFunction(node,statement=FUNC_NO_FLAGS,isAsync=false){const isStatement=statement&FUNC_STATEMENT;const isHangingStatement=statement&FUNC_HANGING_STATEMENT;const requireId=!!isStatement&&!(statement&FUNC_NULLABLE_ID);this.initFunction(node,isAsync);if(this.match(types.star)&&isHangingStatement){this.raise(this.state.start,"Generators can only be declared at the top level or inside a block");}node.generator=this.eat(types.star);if(isStatement){node.id=this.parseFunctionId(requireId);}const oldMaybeInArrowParameters=this.state.maybeInArrowParameters;const oldInClassProperty=this.state.inClassProperty;const oldYieldPos=this.state.yieldPos;const oldAwaitPos=this.state.awaitPos;this.state.maybeInArrowParameters=false;this.state.inClassProperty=false;this.state.yieldPos=-1;this.state.awaitPos=-1;this.scope.enter(functionFlags(node.async,node.generator));if(!isStatement){node.id=this.parseFunctionId();}this.parseFunctionParams(node);this.withTopicForbiddingContext(()=>{this.parseFunctionBodyAndFinish(node,isStatement?"FunctionDeclaration":"FunctionExpression");});this.scope.exit();if(isStatement&&!isHangingStatement){this.registerFunctionStatementId(node);}this.state.maybeInArrowParameters=oldMaybeInArrowParameters;this.state.inClassProperty=oldInClassProperty;this.state.yieldPos=oldYieldPos;this.state.awaitPos=oldAwaitPos;return node;}parseFunctionId(requireId){return requireId||this.match(types.name)?this.parseIdentifier():null;}parseFunctionParams(node,allowModifiers){const oldInParameters=this.state.inParameters;this.state.inParameters=true;this.expect(types.parenL);node.params=this.parseBindingList(types.parenR,41,false,allowModifiers);this.state.inParameters=oldInParameters;this.checkYieldAwaitInDefaultParams();}registerFunctionStatementId(node){if(!node.id)return;this.scope.declareName(node.id.name,this.state.strict||node.generator||node.async?this.scope.treatFunctionsAsVar?BIND_VAR:BIND_LEXICAL:BIND_FUNCTION,node.id.start);}parseClass(node,isStatement,optionalId){this.next();this.takeDecorators(node);const oldStrict=this.state.strict;this.state.strict=true;this.parseClassId(node,isStatement,optionalId);this.parseClassSuper(node);node.body=this.parseClassBody(!!node.superClass);this.state.strict=oldStrict;return this.finishNode(node,isStatement?"ClassDeclaration":"ClassExpression");}isClassProperty(){return this.match(types.eq)||this.match(types.semi)||this.match(types.braceR);}isClassMethod(){return this.match(types.parenL);}isNonstaticConstructor(method){return!method.computed&&!method.static&&(method.key.name==="constructor"||method.key.value==="constructor");}parseClassBody(constructorAllowsSuper){this.state.classLevel++;const state={hadConstructor:false};let decorators=[];const classBody=this.startNode();classBody.body=[];this.expect(types.braceL);this.withTopicForbiddingContext(()=>{while(!this.eat(types.braceR)){if(this.eat(types.semi)){if(decorators.length>0){throw this.raise(this.state.lastTokEnd,"Decorators must not be followed by a semicolon");}continue;}if(this.match(types.at)){decorators.push(this.parseDecorator());continue;}const member=this.startNode();if(decorators.length){member.decorators=decorators;this.resetStartLocationFromNode(member,decorators[0]);decorators=[];}this.parseClassMember(classBody,member,state,constructorAllowsSuper);if(member.kind==="constructor"&&member.decorators&&member.decorators.length>0){this.raise(member.start,"Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?");}}});if(decorators.length){throw this.raise(this.state.start,"You have trailing decorators with no method");}this.state.classLevel--;return this.finishNode(classBody,"ClassBody");}parseClassMember(classBody,member,state,constructorAllowsSuper){let isStatic=false;const containsEsc=this.state.containsEsc;if(this.match(types.name)&&this.state.value==="static"){const key=this.parseIdentifier(true);if(this.isClassMethod()){const method=member;method.kind="method";method.computed=false;method.key=key;method.static=false;this.pushClassMethod(classBody,method,false,false,false,false);return;}else if(this.isClassProperty()){const prop=member;prop.computed=false;prop.key=key;prop.static=false;classBody.body.push(this.parseClassProperty(prop));return;}else if(containsEsc){throw this.unexpected();}isStatic=true;}this.parseClassMemberWithIsStatic(classBody,member,state,isStatic,constructorAllowsSuper);}parseClassMemberWithIsStatic(classBody,member,state,isStatic,constructorAllowsSuper){const publicMethod=member;const privateMethod=member;const publicProp=member;const privateProp=member;const method=publicMethod;const publicMember=publicMethod;member.static=isStatic;if(this.eat(types.star)){method.kind="method";this.parseClassPropertyName(method);if(method.key.type==="PrivateName"){this.pushClassPrivateMethod(classBody,privateMethod,true,false);return;}if(this.isNonstaticConstructor(publicMethod)){this.raise(publicMethod.key.start,"Constructor can't be a generator");}this.pushClassMethod(classBody,publicMethod,true,false,false,false);return;}const containsEsc=this.state.containsEsc;const key=this.parseClassPropertyName(member);const isPrivate=key.type==="PrivateName";const isSimple=key.type==="Identifier";const maybeQuestionTokenStart=this.state.start;this.parsePostMemberNameModifiers(publicMember);if(this.isClassMethod()){method.kind="method";if(isPrivate){this.pushClassPrivateMethod(classBody,privateMethod,false,false);return;}const isConstructor=this.isNonstaticConstructor(publicMethod);let allowsDirectSuper=false;if(isConstructor){publicMethod.kind="constructor";if(state.hadConstructor&&!this.hasPlugin("typescript")){this.raise(key.start,"Duplicate constructor in the same class");}state.hadConstructor=true;allowsDirectSuper=constructorAllowsSuper;}this.pushClassMethod(classBody,publicMethod,false,false,isConstructor,allowsDirectSuper);}else if(this.isClassProperty()){if(isPrivate){this.pushClassPrivateProperty(classBody,privateProp);}else{this.pushClassProperty(classBody,publicProp);}}else if(isSimple&&key.name==="async"&&!containsEsc&&!this.isLineTerminator()){const isGenerator=this.eat(types.star);if(publicMember.optional){this.unexpected(maybeQuestionTokenStart);}method.kind="method";this.parseClassPropertyName(method);this.parsePostMemberNameModifiers(publicMember);if(method.key.type==="PrivateName"){this.pushClassPrivateMethod(classBody,privateMethod,isGenerator,true);}else{if(this.isNonstaticConstructor(publicMethod)){this.raise(publicMethod.key.start,"Constructor can't be an async function");}this.pushClassMethod(classBody,publicMethod,isGenerator,true,false,false);}}else if(isSimple&&(key.name==="get"||key.name==="set")&&!containsEsc&&!(this.match(types.star)&&this.isLineTerminator())){method.kind=key.name;this.parseClassPropertyName(publicMethod);if(method.key.type==="PrivateName"){this.pushClassPrivateMethod(classBody,privateMethod,false,false);}else{if(this.isNonstaticConstructor(publicMethod)){this.raise(publicMethod.key.start,"Constructor can't have get/set modifier");}this.pushClassMethod(classBody,publicMethod,false,false,false,false);}this.checkGetterSetterParams(publicMethod);}else if(this.isLineTerminator()){if(isPrivate){this.pushClassPrivateProperty(classBody,privateProp);}else{this.pushClassProperty(classBody,publicProp);}}else{this.unexpected();}}parseClassPropertyName(member){const key=this.parsePropertyName(member);if(!member.computed&&member.static&&(key.name==="prototype"||key.value==="prototype")){this.raise(key.start,"Classes may not have static property named prototype");}if(key.type==="PrivateName"&&key.id.name==="constructor"){this.raise(key.start,"Classes may not have a private field named '#constructor'");}return key;}pushClassProperty(classBody,prop){if(!prop.computed&&(prop.key.name==="constructor"||prop.key.value==="constructor")){this.raise(prop.key.start,"Classes may not have a field named 'constructor'");}classBody.body.push(this.parseClassProperty(prop));}pushClassPrivateProperty(classBody,prop){this.expectPlugin("classPrivateProperties",prop.key.start);classBody.body.push(this.parseClassPrivateProperty(prop));}pushClassMethod(classBody,method,isGenerator,isAsync,isConstructor,allowsDirectSuper){classBody.body.push(this.parseMethod(method,isGenerator,isAsync,isConstructor,allowsDirectSuper,"ClassMethod",true));}pushClassPrivateMethod(classBody,method,isGenerator,isAsync){this.expectPlugin("classPrivateMethods",method.key.start);classBody.body.push(this.parseMethod(method,isGenerator,isAsync,false,false,"ClassPrivateMethod",true));}parsePostMemberNameModifiers(methodOrProp){}parseAccessModifier(){return undefined;}parseClassPrivateProperty(node){this.state.inClassProperty=true;this.scope.enter(SCOPE_CLASS|SCOPE_SUPER);node.value=this.eat(types.eq)?this.parseMaybeAssign():null;this.semicolon();this.state.inClassProperty=false;this.scope.exit();return this.finishNode(node,"ClassPrivateProperty");}parseClassProperty(node){if(!node.typeAnnotation){this.expectPlugin("classProperties");}this.state.inClassProperty=true;this.scope.enter(SCOPE_CLASS|SCOPE_SUPER);if(this.match(types.eq)){this.expectPlugin("classProperties");this.next();node.value=this.parseMaybeAssign();}else{node.value=null;}this.semicolon();this.state.inClassProperty=false;this.scope.exit();return this.finishNode(node,"ClassProperty");}parseClassId(node,isStatement,optionalId,bindingType=BIND_CLASS){if(this.match(types.name)){node.id=this.parseIdentifier();if(isStatement){this.checkLVal(node.id,bindingType,undefined,"class name");}}else{if(optionalId||!isStatement){node.id=null;}else{this.unexpected(null,"A class name is required");}}}parseClassSuper(node){node.superClass=this.eat(types._extends)?this.parseExprSubscripts():null;}parseExport(node){const hasDefault=this.maybeParseExportDefaultSpecifier(node);const parseAfterDefault=!hasDefault||this.eat(types.comma);const hasStar=parseAfterDefault&&this.eatExportStar(node);const hasNamespace=hasStar&&this.maybeParseExportNamespaceSpecifier(node);const parseAfterNamespace=parseAfterDefault&&(!hasNamespace||this.eat(types.comma));const isFromRequired=hasDefault||hasStar;if(hasStar&&!hasNamespace){if(hasDefault)this.unexpected();this.parseExportFrom(node,true);return this.finishNode(node,"ExportAllDeclaration");}const hasSpecifiers=this.maybeParseExportNamedSpecifiers(node);if(hasDefault&&parseAfterDefault&&!hasStar&&!hasSpecifiers||hasNamespace&&parseAfterNamespace&&!hasSpecifiers){throw this.unexpected(null,types.braceL);}let hasDeclaration;if(isFromRequired||hasSpecifiers){hasDeclaration=false;this.parseExportFrom(node,isFromRequired);}else{hasDeclaration=this.maybeParseExportDeclaration(node);}if(isFromRequired||hasSpecifiers||hasDeclaration){this.checkExport(node,true,false,!!node.source);return this.finishNode(node,"ExportNamedDeclaration");}if(this.eat(types._default)){node.declaration=this.parseExportDefaultExpression();this.checkExport(node,true,true);return this.finishNode(node,"ExportDefaultDeclaration");}throw this.unexpected(null,types.braceL);}eatExportStar(node){return this.eat(types.star);}maybeParseExportDefaultSpecifier(node){if(this.isExportDefaultSpecifier()){this.expectPlugin("exportDefaultFrom");const specifier=this.startNode();specifier.exported=this.parseIdentifier(true);node.specifiers=[this.finishNode(specifier,"ExportDefaultSpecifier")];return true;}return false;}maybeParseExportNamespaceSpecifier(node){if(this.isContextual("as")){if(!node.specifiers)node.specifiers=[];const specifier=this.startNodeAt(this.state.lastTokStart,this.state.lastTokStartLoc);this.next();specifier.exported=this.parseIdentifier(true);node.specifiers.push(this.finishNode(specifier,"ExportNamespaceSpecifier"));return true;}return false;}maybeParseExportNamedSpecifiers(node){if(this.match(types.braceL)){var _node$specifiers2;if(!node.specifiers)node.specifiers=[];(_node$specifiers2=node.specifiers).push.apply(_node$specifiers2,_toConsumableArray(this.parseExportSpecifiers()));node.source=null;node.declaration=null;return true;}return false;}maybeParseExportDeclaration(node){if(this.shouldParseExportDeclaration()){if(this.isContextual("async")){const next=this.nextTokenStart();if(!this.isUnparsedContextual(next,"function")){this.unexpected(next,`Unexpected token, expected "function"`);}}node.specifiers=[];node.source=null;node.declaration=this.parseExportDeclaration(node);return true;}return false;}isAsyncFunction(){if(!this.isContextual("async"))return false;const next=this.nextTokenStart();return!lineBreak.test(this.input.slice(this.state.pos,next))&&this.isUnparsedContextual(next,"function");}parseExportDefaultExpression(){const expr=this.startNode();const isAsync=this.isAsyncFunction();if(this.match(types._function)||isAsync){this.next();if(isAsync){this.next();}return this.parseFunction(expr,FUNC_STATEMENT|FUNC_NULLABLE_ID,isAsync);}else if(this.match(types._class)){return this.parseClass(expr,true,true);}else if(this.match(types.at)){if(this.hasPlugin("decorators")&&this.getPluginOption("decorators","decoratorsBeforeExport")){this.raise(this.state.start,"Decorators must be placed *before* the 'export' keyword."+" You can set the 'decoratorsBeforeExport' option to false to use"+" the 'export @decorator class {}' syntax");}this.parseDecorators(false);return this.parseClass(expr,true,true);}else if(this.match(types._const)||this.match(types._var)||this.isLet()){throw this.raise(this.state.start,"Only expressions, functions or classes are allowed as the `default` export.");}else{const res=this.parseMaybeAssign();this.semicolon();return res;}}parseExportDeclaration(node){return this.parseStatement(null);}isExportDefaultSpecifier(){if(this.match(types.name)){return this.state.value!=="async"&&this.state.value!=="let";}if(!this.match(types._default)){return false;}const next=this.nextTokenStart();return this.input.charCodeAt(next)===44||this.isUnparsedContextual(next,"from");}parseExportFrom(node,expect){if(this.eatContextual("from")){node.source=this.parseImportSource();this.checkExport(node);}else{if(expect){this.unexpected();}else{node.source=null;}}this.semicolon();}shouldParseExportDeclaration(){if(this.match(types.at)){this.expectOnePlugin(["decorators","decorators-legacy"]);if(this.hasPlugin("decorators")){if(this.getPluginOption("decorators","decoratorsBeforeExport")){this.unexpected(this.state.start,"Decorators must be placed *before* the 'export' keyword."+" You can set the 'decoratorsBeforeExport' option to false to use"+" the 'export @decorator class {}' syntax");}else{return true;}}}return this.state.type.keyword==="var"||this.state.type.keyword==="const"||this.state.type.keyword==="function"||this.state.type.keyword==="class"||this.isLet()||this.isAsyncFunction();}checkExport(node,checkNames,isDefault,isFrom){if(checkNames){if(isDefault){this.checkDuplicateExports(node,"default");}else if(node.specifiers&&node.specifiers.length){for(let _i3=0,_node$specifiers=node.specifiers;_i3<_node$specifiers.length;_i3++){const specifier=_node$specifiers[_i3];this.checkDuplicateExports(specifier,specifier.exported.name);if(!isFrom&&specifier.local){this.checkReservedWord(specifier.local.name,specifier.local.start,true,false);this.scope.checkLocalExport(specifier.local);}}}else if(node.declaration){if(node.declaration.type==="FunctionDeclaration"||node.declaration.type==="ClassDeclaration"){const id=node.declaration.id;if(!id)throw new Error("Assertion failure");this.checkDuplicateExports(node,id.name);}else if(node.declaration.type==="VariableDeclaration"){for(let _i4=0,_node$declaration$dec=node.declaration.declarations;_i4<_node$declaration$dec.length;_i4++){const declaration=_node$declaration$dec[_i4];this.checkDeclaration(declaration.id);}}}}const currentContextDecorators=this.state.decoratorStack[this.state.decoratorStack.length-1];if(currentContextDecorators.length){const isClass=node.declaration&&(node.declaration.type==="ClassDeclaration"||node.declaration.type==="ClassExpression");if(!node.declaration||!isClass){throw this.raise(node.start,"You can only use decorators on an export when exporting a class");}this.takeDecorators(node.declaration);}}checkDeclaration(node){if(node.type==="Identifier"){this.checkDuplicateExports(node,node.name);}else if(node.type==="ObjectPattern"){for(let _i5=0,_node$properties=node.properties;_i5<_node$properties.length;_i5++){const prop=_node$properties[_i5];this.checkDeclaration(prop);}}else if(node.type==="ArrayPattern"){for(let _i6=0,_node$elements=node.elements;_i6<_node$elements.length;_i6++){const elem=_node$elements[_i6];if(elem){this.checkDeclaration(elem);}}}else if(node.type==="ObjectProperty"){this.checkDeclaration(node.value);}else if(node.type==="RestElement"){this.checkDeclaration(node.argument);}else if(node.type==="AssignmentPattern"){this.checkDeclaration(node.left);}}checkDuplicateExports(node,name){if(this.state.exportedIdentifiers.indexOf(name)>-1){this.raise(node.start,name==="default"?"Only one default export allowed per module.":`\`${name}\` has already been exported. Exported identifiers must be unique.`);}this.state.exportedIdentifiers.push(name);}parseExportSpecifiers(){const nodes=[];let first=true;this.expect(types.braceL);while(!this.eat(types.braceR)){if(first){first=false;}else{this.expect(types.comma);if(this.eat(types.braceR))break;}const node=this.startNode();node.local=this.parseIdentifier(true);node.exported=this.eatContextual("as")?this.parseIdentifier(true):node.local.__clone();nodes.push(this.finishNode(node,"ExportSpecifier"));}return nodes;}parseImport(node){node.specifiers=[];if(!this.match(types.string)){const hasDefault=this.maybeParseDefaultImportSpecifier(node);const parseNext=!hasDefault||this.eat(types.comma);const hasStar=parseNext&&this.maybeParseStarImportSpecifier(node);if(parseNext&&!hasStar)this.parseNamedImportSpecifiers(node);this.expectContextual("from");}node.source=this.parseImportSource();this.semicolon();return this.finishNode(node,"ImportDeclaration");}parseImportSource(){if(!this.match(types.string))this.unexpected();return this.parseExprAtom();}shouldParseDefaultImport(node){return this.match(types.name);}parseImportSpecifierLocal(node,specifier,type,contextDescription){specifier.local=this.parseIdentifier();this.checkLVal(specifier.local,BIND_LEXICAL,undefined,contextDescription);node.specifiers.push(this.finishNode(specifier,type));}maybeParseDefaultImportSpecifier(node){if(this.shouldParseDefaultImport(node)){this.parseImportSpecifierLocal(node,this.startNode(),"ImportDefaultSpecifier","default import specifier");return true;}return false;}maybeParseStarImportSpecifier(node){if(this.match(types.star)){const specifier=this.startNode();this.next();this.expectContextual("as");this.parseImportSpecifierLocal(node,specifier,"ImportNamespaceSpecifier","import namespace specifier");return true;}return false;}parseNamedImportSpecifiers(node){let first=true;this.expect(types.braceL);while(!this.eat(types.braceR)){if(first){first=false;}else{if(this.eat(types.colon)){throw this.raise(this.state.start,"ES2015 named imports do not destructure. "+"Use another statement for destructuring after the import.");}this.expect(types.comma);if(this.eat(types.braceR))break;}this.parseImportSpecifier(node);}}parseImportSpecifier(node){const specifier=this.startNode();specifier.imported=this.parseIdentifier(true);if(this.eatContextual("as")){specifier.local=this.parseIdentifier();}else{this.checkReservedWord(specifier.imported.name,specifier.start,true,true);specifier.local=specifier.imported.__clone();}this.checkLVal(specifier.local,BIND_LEXICAL,undefined,"import specifier");node.specifiers.push(this.finishNode(specifier,"ImportSpecifier"));}}class Parser extends StatementParser{constructor(options,input){options=getOptions(options);super(options,input);const ScopeHandler=this.getScopeHandler();this.options=options;this.inModule=this.options.sourceType==="module";this.scope=new ScopeHandler(this.raise.bind(this),this.inModule);this.plugins=pluginsMap(this.options.plugins);this.filename=options.sourceFilename;}getScopeHandler(){return ScopeHandler;}parse(){this.scope.enter(SCOPE_PROGRAM);const file=this.startNode();const program=this.startNode();this.nextToken();file.errors=null;this.parseTopLevel(file,program);file.errors=this.state.errors;return file;}}function pluginsMap(plugins){const pluginMap=new Map();for(let _i=0;_i<plugins.length;_i++){const plugin=plugins[_i];const[name,options]=Array.isArray(plugin)?plugin:[plugin,{}];if(!pluginMap.has(name))pluginMap.set(name,options||{});}return pluginMap;}function parse(input,options){if(options&&options.sourceType==="unambiguous"){options=Object.assign({},options);try{options.sourceType="module";const parser=getParser(options,input);const ast=parser.parse();if(parser.sawUnambiguousESM){return ast;}if(parser.ambiguousScriptDifferentAst){try{options.sourceType="script";return getParser(options,input).parse();}catch(_unused){}}else{ast.program.sourceType="script";}return ast;}catch(moduleError){try{options.sourceType="script";return getParser(options,input).parse();}catch(_unused2){}throw moduleError;}}else{return getParser(options,input).parse();}}function parseExpression(input,options){const parser=getParser(options,input);if(parser.options.strictMode){parser.state.strict=true;}return parser.getExpression();}function getParser(options,input){let cls=Parser;if(options&&options.plugins){validatePlugins(options.plugins);cls=getParserClass(options.plugins);}return new cls(options,input);}const parserClassCache={};function getParserClass(pluginsFromOptions){const pluginList=mixinPluginNames.filter(name=>hasPlugin(pluginsFromOptions,name));const key=pluginList.join("/");let cls=parserClassCache[key];if(!cls){cls=Parser;for(let _i=0;_i<pluginList.length;_i++){const plugin=pluginList[_i];cls=mixinPlugins[plugin](cls);}parserClassCache[key]=cls;}return cls;}exports.parse=parse;exports.parseExpression=parseExpression;exports.tokTypes=types;

/***/ }),

/***/ "../babel-plugin-effects/lib/effects-directive-visitor.js":
/*!****************************************************************!*\
  !*** ../babel-plugin-effects/lib/effects-directive-visitor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var to_generator_visitor_1=__webpack_require__(/*! ./to-generator-visitor */ "../babel-plugin-effects/lib/to-generator-visitor.js");function createRuntimeRoot(types,continuation){var mainFunctionExpression=types.functionExpression(null,[],types.blockStatement(continuation),true);return types.callExpression(types.identifier("runProgram"),[types.callExpression(mainFunctionExpression,[])]);}var runProgramYieldCallExpressionVisitor={Identifier:function(idPath,_a){var types=_a.types;var _b,_c;if(idPath.node.name==="runProgram"){(_c=(_b=idPath.findParent(types.isCallExpression))===null||_b===void 0?void 0:_b.get("arguments"))===null||_c===void 0?void 0:_c.forEach(function(n){n.traverse(to_generator_visitor_1.yieldCallExpressionVisitor,{types:types,skipChildTraversal:true});});}}};exports.effectsDirectiveVisitor={ExpressionStatement:function(path,_a){var types=_a.types;var _b,_c;var expression=(_b=path.get("expression"))===null||_b===void 0?void 0:_b.node;var parentFunction=path.findParent(types.isFunction);if(types.isStringLiteral(expression)&&expression.value==="use effects"){if(!Array.isArray(path.container)){throw new Error("[ Transform Effects Plugin Error ] - Encountered an unexpected state in the AST: 'Use Effects' directive found, but no continuation can be derived");}var continuationStartKey=Number(path.key)+1;var continuation=path.container.slice(continuationStartKey);// Hacky :(
for(var i=continuationStartKey;i<path.container.length;i+=1){(_c=path.getSibling(i))===null||_c===void 0?void 0:_c.remove();}var runtimeExpression=(parentFunction===null||parentFunction===void 0?void 0:parentFunction.node.async)?types.awaitExpression(createRuntimeRoot(types,continuation)):createRuntimeRoot(types,continuation);path.replaceWith(runtimeExpression);path.traverse(runProgramYieldCallExpressionVisitor,{types:types});}},Directive:function(path,_a){var types=_a.types;var value=path.get("value.value").node;if(value!=="use effects")return;var blockParent=path.findParent(types.isBlockStatement);if(!blockParent||!types.isBlockStatement(blockParent)){throw new Error("[ Transform Effects Plugin Error ] - Encountered an unexpected state in the AST: 'Use Effects' directive found, but no continuation can be derived");}blockParent.node.body=[types.returnStatement(createRuntimeRoot(types,blockParent.node.body))];blockParent.traverse(runProgramYieldCallExpressionVisitor,{types:types});path.remove();}};

/***/ }),

/***/ "../babel-plugin-effects/lib/handler-method-visitor.js":
/*!*************************************************************!*\
  !*** ../babel-plugin-effects/lib/handler-method-visitor.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __spreadArrays=this&&this.__spreadArrays||function(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;for(var r=Array(s),k=0,i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r;};Object.defineProperty(exports,"__esModule",{value:true});var recall_visitor_1=__webpack_require__(/*! ./recall-visitor */ "../babel-plugin-effects/lib/recall-visitor.js");var remove_on_exit_visitor_1=__webpack_require__(/*! ./remove-on-exit-visitor */ "../babel-plugin-effects/lib/remove-on-exit-visitor.js");var isLiteralProp=function(node,types){return types.isLiteral(node)&&!types.isNullLiteral(node)&&!types.isRegExpLiteral(node)&&!types.isTemplateLiteral(node);};var extractMemberPropertyPathName=function(parentPath,types,memberPropertyNode){if(isLiteralProp(memberPropertyNode,types)){return{ident:types.identifier(memberPropertyNode.value),isComputed:false};}else if(types.isIdentifier(memberPropertyNode)){var binding=parentPath.scope.getBinding(memberPropertyNode.name);if(binding&&types.isIdentifier(memberPropertyNode)){return{ident:memberPropertyNode,isComputed:true};}}else if(parentPath.get("defaultMatcher").node){return{ident:types.identifier("__defaultEffectHandler__"),isComputed:true};}throw new Error("[Babel Effects Transform Error] - Failed to construct handler. Could not find a valid definition for handler name");};var createResultContinuation=function(types,consequentBody){return types.variableDeclaration("const",[types.variableDeclarator(types.identifier("result"),types.yieldExpression(types.functionExpression(null,[types.identifier("handler")],types.blockStatement([types.returnStatement(types.newExpression(types.identifier("Promise"),[types.arrowFunctionExpression([types.identifier("res"),types.identifier("rej")],types.blockStatement([types.tryStatement(types.blockStatement(__spreadArrays(consequentBody)),types.catchClause(types.identifier("handlerError"),types.blockStatement([types.expressionStatement(types.callExpression(types.identifier("rej"),[types.identifier("handlerError")]))])),null)]),true)]))]))))]);};var makeHandlerMethod=function(memberPropertyPath,rootPath,types,consequent,handlerParam){var _a=extractMemberPropertyPathName(rootPath,types,memberPropertyPath.node),handlerPropertyName=_a.ident,isComputed=_a.isComputed;// Collect all call expressions located inside of the handler (consequent block)
var callExpressionDeclarations=new Set();consequent.traverse({CallExpression:function(expressionPath){var _a,_b;var binding=expressionPath.scope.getBinding(expressionPath.node.callee.name);var declaration=binding===null||binding===void 0?void 0:binding.path.find(function(x){return types.isVariableDeclaration(x)||types.isFunctionDeclaration(x);});if(declaration){callExpressionDeclarations.add(declaration.node);// Not the most elegant.
((_b=(_a=declaration.parent)===null||_a===void 0?void 0:_a.parent)===null||_b===void 0?void 0:_b.type)==="Program"&&remove_on_exit_visitor_1.markPathForRemoval(declaration);}}});var resultContinuation=createResultContinuation(types,__spreadArrays(Array.from(callExpressionDeclarations),consequent.node.body));var objectMethod=types.objectMethod("method",handlerPropertyName?handlerPropertyName:memberPropertyPath.node,[handlerParam,types.identifier("resume")],types.blockStatement([resultContinuation,types.returnStatement(types.yieldExpression(types.callExpression(types.identifier("resume"),[types.identifier("result")])))]),isComputed);objectMethod.generator=true;return objectMethod;};// Annoying:
// For now, cannot traverse the HandlerClause node like it was a normal AST node
// without further customization of the babel fork.
exports.followHandlerDefinitions=function(handlerPath,handlerObject,types){var handlerBody=handlerPath.get("body");var handlerParam=handlerPath.get("param").node;handlerBody.traverse(recall_visitor_1.recallVisitor,{types:types});handlerObject.properties.push(makeHandlerMethod(handlerPath.get("effectMatcher"),handlerPath,types,handlerPath.get("body"),handlerParam));var alternatePath=handlerPath.node.alternate?handlerPath.get("alternate.handler"):null;if(alternatePath)exports.followHandlerDefinitions(alternatePath,handlerObject,types);};

/***/ }),

/***/ "../babel-plugin-effects/lib/perform-visitor.js":
/*!******************************************************!*\
  !*** ../babel-plugin-effects/lib/perform-visitor.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var traverse_utilities_1=__webpack_require__(/*! ./traverse-utilities */ "../babel-plugin-effects/lib/traverse-utilities.js");/**
 * Visit recall statements and convert them to an interpreted stack frame call.
 */exports.performVisitor={UnaryExpression:function(path,_a){var types=_a.types;// TODO [minor] ignore required because types do not recognize the operator as valid. Fix that.
// @ts-ignore
if(path.node.operator==="perform"){traverse_utilities_1.fixupParentGenerator(path,types);path.replaceWith(types.yieldExpression(types.callExpression(types.identifier("performEffect"),[path.node.argument])));}}};

/***/ }),

/***/ "../babel-plugin-effects/lib/plugin.js":
/*!*********************************************!*\
  !*** ../babel-plugin-effects/lib/plugin.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var effects_directive_visitor_1=__webpack_require__(/*! ./effects-directive-visitor */ "../babel-plugin-effects/lib/effects-directive-visitor.js");var handler_method_visitor_1=__webpack_require__(/*! ./handler-method-visitor */ "../babel-plugin-effects/lib/handler-method-visitor.js");var traverse_utilities_1=__webpack_require__(/*! ./traverse-utilities */ "../babel-plugin-effects/lib/traverse-utilities.js");var remove_on_exit_visitor_1=__webpack_require__(/*! ./remove-on-exit-visitor */ "../babel-plugin-effects/lib/remove-on-exit-visitor.js");var yield_program_expression_visitor_1=__webpack_require__(/*! ./yield-program-expression-visitor */ "../babel-plugin-effects/lib/yield-program-expression-visitor.js");var parser=__webpack_require__(/*! ../../../babel/packages/babel-parser/lib */ "../../babel/packages/babel-parser/lib/index.js");function createHandler(types,path){var handlerObject=types.objectExpression([]);handler_method_visitor_1.followHandlerDefinitions(path,handlerObject,types);return handlerObject;}// This is performs the final inversion:
// Transform a try-statement path and a handler into a `runProgram` call
// TODO [major] - Capture errors into a continuation,
// TODO [major] - Extend grammar to include a final catch clause, which will receive errors into the continuation.
var createWithHandlerInvocation=function(types,path,handler){var mainFunctionExpression=types.functionExpression(null,[],path.node.block,true,true);return types.callExpression(types.identifier("withHandler"),[handler,types.callExpression(mainFunctionExpression,[])]);};function transformEffects(_a){var types=_a.types;return{// Deliver the custom grammar parser to the top-level visitor
parserOverride:function(code,opts){return parser.parse(code,opts);},pre:function(){this.removalNodes=new Set();},post:function(){Array.from(this.removalNodes).forEach(function(x){return x.remove();});},visitor:{Program:{exit:function(path,state){path.traverse(effects_directive_visitor_1.effectsDirectiveVisitor,{types:types});path.traverse({YieldExpression:function(path){traverse_utilities_1.fixupParentGenerator(path,types);}},{types:types});path.traverse({Declaration:function(path){if(path[remove_on_exit_visitor_1.REMOVAL_FIELD]===true){state.removalNodes.add(path);}}},{types:types});}},TryStatement:{enter:function(path){var _a,_b;var handlerBody=path.get("handler.body");var handlerType=(_a=path.node.handler)===null||_a===void 0?void 0:_a.type;// @ts-ignore
if(handlerType!=="HandleClause"||!handlerBody)return;path.get("block").traverse(yield_program_expression_visitor_1.yieldProgramExpressionVisitor,{types:types});var handler=createHandler(types,path.get("handler"));var withHandlerExpression=createWithHandlerInvocation(types,path,handler);traverse_utilities_1.fixupParentGenerator(path,types);var parent=path.findParent(types.isFunction);if((_b=parent===null||parent===void 0?void 0:parent.node)===null||_b===void 0?void 0:_b.generator){path.replaceWith(types.returnStatement(types.yieldExpression(withHandlerExpression)));}else{path.replaceWith(withHandlerExpression);}}},UnaryExpression:function(path){var _a;// TODO [minor] ignore required because types do not recognize the operator as valid. Fix that.
// @ts-ignore
if(path.node.operator==="perform"){path.replaceWith(types.yieldExpression(types.callExpression(types.identifier("performEffect"),[path.node.argument])));traverse_utilities_1.fixupParentGenerator(path,types);}// @ts-ignore
if(path.node.operator==="recall"){var stackResumeExpression=types.callExpression(types.identifier("stackResume"),[types.identifier("handler"),path.node.argument]);var thenExpression=types.callExpression(types.memberExpression(stackResumeExpression,types.identifier("then")),[types.identifier("res")]);var catchExpression=types.callExpression(types.memberExpression(thenExpression,types.identifier("catch")),[types.identifier("rej")]);path.replaceWith(catchExpression);(_a=path.findParent(types.isExpressionStatement))===null||_a===void 0?void 0:_a.replaceWith(types.returnStatement(path.node));}}}};}exports.default=transformEffects;

/***/ }),

/***/ "../babel-plugin-effects/lib/recall-visitor.js":
/*!*****************************************************!*\
  !*** ../babel-plugin-effects/lib/recall-visitor.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});/**
 * Visit recall statements and convert them to an interpreted stack frame call.
 */exports.recallVisitor={UnaryExpression:function(path,_a){var types=_a.types;var _b;// @ts-ignore
if(path.node.operator==="recall"){var stackResumeExpression=types.callExpression(types.identifier("stackResume"),[types.identifier("handler"),path.node.argument]);var thenExpression=types.callExpression(types.memberExpression(stackResumeExpression,types.identifier("then")),[types.identifier("res")]);var catchExpression=types.callExpression(types.memberExpression(thenExpression,types.identifier("catch")),[types.identifier("rej")]);path.replaceWith(catchExpression);(_b=path.findParent(types.isExpressionStatement))===null||_b===void 0?void 0:_b.replaceWith(types.returnStatement(path.node));}}};

/***/ }),

/***/ "../babel-plugin-effects/lib/remove-on-exit-visitor.js":
/*!*************************************************************!*\
  !*** ../babel-plugin-effects/lib/remove-on-exit-visitor.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.REMOVAL_FIELD=Symbol();exports.markPathForRemoval=function(path){return path[exports.REMOVAL_FIELD]=true;};

/***/ }),

/***/ "../babel-plugin-effects/lib/to-generator-visitor.js":
/*!***********************************************************!*\
  !*** ../babel-plugin-effects/lib/to-generator-visitor.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var types_1=__webpack_require__(/*! @babel/types */ "../babel-plugin-effects/node_modules/@babel/types/lib/index.js");var traverse_utilities_1=__webpack_require__(/*! ./traverse-utilities */ "../babel-plugin-effects/lib/traverse-utilities.js");var perform_visitor_1=__webpack_require__(/*! ./perform-visitor */ "../babel-plugin-effects/lib/perform-visitor.js");var effects_common_1=__webpack_require__(/*! effects-common */ "../effects-common/lib/mod.js");var exists=effects_common_1.util.exists;exports.toGeneratorVisitor={Function:function(path,_a){var types=_a.types;if(path.node.async)return;if(types.isArrowFunctionExpression(path.node)){path.replaceWith(traverse_utilities_1.arrowExpressionToGenerator(types,path));}else if(!path.node.generator){path.node.generator=true;}var body=path.get("body");body===null||body===void 0?void 0:body.traverse(exports.yieldCallExpressionVisitor,{types:types});body===null||body===void 0?void 0:body.traverse(exports.callExpressionVisitor,{types:types});body===null||body===void 0?void 0:body.traverse(perform_visitor_1.performVisitor,{types:types});}};exports.callExpressionVisitor={CallExpression:function(path,_a){var types=_a.types;var parentFunction=path.findParent(types.isFunction);var immediateParent=path.parent;if((parentFunction===null||parentFunction===void 0?void 0:parentFunction.node.generator)&&(types.isExpressionStatement(immediateParent)||types.isVariableDeclarator(immediateParent))){var callee=path.get("callee.name").node;var binding=path.scope.getBinding(callee);if(binding&&types.isFunctionDeclaration(binding.path.node)){binding.path.node.generator=true;}else{binding===null||binding===void 0?void 0:binding.path.traverse(exports.toGeneratorVisitor,{types:types});}if(!types.isYieldExpression(path.node)){path.replaceWith(types.yieldExpression(path.node));}}}};exports.isYieldCandidate=function(path,types){var _a;var immediateParent=path.parentPath;if(types.isVariableDeclarator(immediateParent)&&types.isProgram(path.scope.block))return false;if(types.isReturnStatement(immediateParent)||types.isVariableDeclarator(immediateParent)||types.isExpressionStatement(immediateParent)&&types.isBlockStatement((_a=path.parentPath)===null||_a===void 0?void 0:_a.parentPath)){return true;}return false;};exports.toYieldExpression=function(path,types){if(types_1.isProgram(path.parentPath))return;path.replaceWith(types.yieldExpression(path.node));traverse_utilities_1.fixupParentGenerator(path,types);};exports.yieldCallExpressionVisitor={CallExpression:function(path,_a){var types=_a.types,skipChildTraversal=_a.skipChildTraversal;var immediateParent=path.parent;if(types.isYieldExpression(immediateParent))return;exports.toYieldExpression(path,types);if(exists(skipChildTraversal)&&Boolean(skipChildTraversal)){path.skip();}}};

/***/ }),

/***/ "../babel-plugin-effects/lib/traverse-utilities.js":
/*!*********************************************************!*\
  !*** ../babel-plugin-effects/lib/traverse-utilities.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var to_generator_visitor_1=__webpack_require__(/*! ./to-generator-visitor */ "../babel-plugin-effects/lib/to-generator-visitor.js");exports.hasEffectsDirective=function(path){var directives=path.get("body.directives");if(!Array.isArray(directives))return;return directives===null||directives===void 0?void 0:directives.map(function(directive){var _a;return(_a=directive.get("value.value"))===null||_a===void 0?void 0:_a.node;}).includes("use effects");};exports.arrowExpressionToGenerator=function(types,path){// TODO: [major] - More care needs to be taken here:
//  We can't just convert the arrow function over to a generator. We need to preserve the current "this"
//  into "self" and pass it in.
if(!types.isBlockStatement(path.node.body)){path.node.body=types.blockStatement([types.returnStatement(path.node.body)]);}return types.functionExpression(undefined,path.node.params,path.node.body,true,path.node.async);};exports.findDeclaration=function(identifier){var _a;var identName=identifier.get("name").node;if(!identName)return null;var bindingScope=identifier.findParent(function(x){return x.scope.bindings[identName];});return(_a=bindingScope===null||bindingScope===void 0?void 0:bindingScope.scope.bindings[identName])===null||_a===void 0?void 0:_a.path;};// Starting from a child path, find the parent function and convert it to a generator.
// Because we cannot predict what the value of call expressions will be, we must yield them to the stack interpreter.
exports.fixupParentGenerator=function(path,types){var _a,_b,_c,_d,_e,_f;var parentFunctionPath=path.findParent(function(x){return x.isFunction();});if(!parentFunctionPath){// TODO: Think about what needs to be done here... Can we safely just return?
return;}if(exports.hasEffectsDirective(parentFunctionPath))return;if(!((_a=parentFunctionPath===null||parentFunctionPath===void 0?void 0:parentFunctionPath.node)===null||_a===void 0?void 0:_a.generator)){if(types.isArrowFunctionExpression(parentFunctionPath.node)){parentFunctionPath.replaceWith(exports.arrowExpressionToGenerator(types,parentFunctionPath));}else{parentFunctionPath.node.generator=true;}// Yield all internal call expressions
(_b=parentFunctionPath.get("body"))===null||_b===void 0?void 0:_b.traverse(to_generator_visitor_1.yieldCallExpressionVisitor,{types:types});var name_1=types.isFunctionDeclaration(parentFunctionPath.node)?(_c=parentFunctionPath.node.id)===null||_c===void 0?void 0:_c.name:(_e=(_d=parentFunctionPath.parentPath.node)===null||_d===void 0?void 0:_d.id)===null||_e===void 0?void 0:_e.name;if(name_1){var bindingScope=parentFunctionPath.findParent(function(x){return x.scope.hasBinding(name_1);});(_f=bindingScope.scope.getBinding(name_1))===null||_f===void 0?void 0:_f.referencePaths.forEach(function(reference){var expStatementParent=reference.findParent(types.isExpressionStatement)||reference.parentPath;if(!expStatementParent)return;var isYield=types.isYieldExpression(expStatementParent.get("expression"));if(!isYield){var callExpression=reference.findParent(types.isCallExpression);callExpression===null||callExpression===void 0?void 0:callExpression.replaceWith(types.yieldExpression(callExpression.node));}});}}};exports.toMemberExpressionVisitor={Identifier:function(path,_a){var objectIdentifierName=_a.objectIdentifierName,propName=_a.propName,types=_a.types;if(path.node.name===propName){path.replaceWith(types.memberExpression(types.identifier(objectIdentifierName),path.node));path.skip();}}};exports.renameIdentNameVisitor={Identifier:function(path,_a){var newName=_a.newName,oldName=_a.oldName;if(path.node.name===oldName){path.node.name=newName;}}};// Convert a destructured default into
// object.prop = typeof object.prop !== 'undefined' ? object.prop : 'default'
// TODO: Double check the spec to make sure this is BTB (by the books).
exports.createDefaultAssignment=function(objectIdent,objectProp,types){if(types.isRestElement(objectProp)||!types.isAssignmentPattern(objectProp.value)){throw new Error("[Babel Plugin Effects Error]");}return types.expressionStatement(types.assignmentExpression("=",types.memberExpression(objectIdent,objectProp.key),types.conditionalExpression(types.binaryExpression("!==",types.unaryExpression("typeof",types.memberExpression(objectIdent,objectProp.key),true),types.stringLiteral("undefined")),types.memberExpression(objectIdent,objectProp.key),objectProp.value.right)));};exports.collapseObjectPattern=function(handlerParam,types,handlerBodyPath){var identifierName="__e__";var defaultAssignments=[];var objectIdentifier=types.identifier(identifierName);for(var _i=0,_a=handlerParam.properties;_i<_a.length;_i++){var property=_a[_i];if(!types.isRestElement(property)&&types.isAssignmentPattern(property.value)){defaultAssignments.push(exports.createDefaultAssignment(objectIdentifier,property,types));}if(types.isRestElement(property)){handlerBodyPath.traverse(exports.renameIdentNameVisitor,{newName:identifierName,oldName:property.argument.name});}else{handlerBodyPath.traverse(exports.toMemberExpressionVisitor,{objectIdentifierName:objectIdentifier.name,propName:property.key.name,types:types});}}return{identifier:objectIdentifier,defaultAssignments:defaultAssignments};};

/***/ }),

/***/ "../babel-plugin-effects/lib/yield-program-expression-visitor.js":
/*!***********************************************************************!*\
  !*** ../babel-plugin-effects/lib/yield-program-expression-visitor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var to_generator_visitor_1=__webpack_require__(/*! ./to-generator-visitor */ "../babel-plugin-effects/lib/to-generator-visitor.js");var traverse_utilities_1=__webpack_require__(/*! ./traverse-utilities */ "../babel-plugin-effects/lib/traverse-utilities.js");exports.yieldProgramExpressionVisitor={CallExpression:function(path,_a){var types=_a.types;var _b;if(to_generator_visitor_1.isYieldCandidate(path,types)){var callee=path.get("callee");to_generator_visitor_1.toYieldExpression(path,types);(_b=traverse_utilities_1.findDeclaration(callee))===null||_b===void 0?void 0:_b.traverse(exports.yieldProgramExpressionVisitor,{types:types});}}};

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/asserts/assertNode.js":
/*!***********************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/asserts/assertNode.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertNode;

var _isNode = _interopRequireDefault(__webpack_require__(/*! ../validators/isNode */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isNode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function assertNode(node) {
  if (!(0, _isNode.default)(node)) {
    const type = node && node.type || JSON.stringify(node);
    throw new TypeError(`Not a valid node of type "${type}"`);
  }
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/asserts/generated/index.js":
/*!****************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/asserts/generated/index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertArrayExpression = assertArrayExpression;
exports.assertAssignmentExpression = assertAssignmentExpression;
exports.assertBinaryExpression = assertBinaryExpression;
exports.assertInterpreterDirective = assertInterpreterDirective;
exports.assertDirective = assertDirective;
exports.assertDirectiveLiteral = assertDirectiveLiteral;
exports.assertBlockStatement = assertBlockStatement;
exports.assertBreakStatement = assertBreakStatement;
exports.assertCallExpression = assertCallExpression;
exports.assertCatchClause = assertCatchClause;
exports.assertConditionalExpression = assertConditionalExpression;
exports.assertContinueStatement = assertContinueStatement;
exports.assertDebuggerStatement = assertDebuggerStatement;
exports.assertDoWhileStatement = assertDoWhileStatement;
exports.assertEmptyStatement = assertEmptyStatement;
exports.assertExpressionStatement = assertExpressionStatement;
exports.assertFile = assertFile;
exports.assertForInStatement = assertForInStatement;
exports.assertForStatement = assertForStatement;
exports.assertFunctionDeclaration = assertFunctionDeclaration;
exports.assertFunctionExpression = assertFunctionExpression;
exports.assertIdentifier = assertIdentifier;
exports.assertIfStatement = assertIfStatement;
exports.assertLabeledStatement = assertLabeledStatement;
exports.assertStringLiteral = assertStringLiteral;
exports.assertNumericLiteral = assertNumericLiteral;
exports.assertNullLiteral = assertNullLiteral;
exports.assertBooleanLiteral = assertBooleanLiteral;
exports.assertRegExpLiteral = assertRegExpLiteral;
exports.assertLogicalExpression = assertLogicalExpression;
exports.assertMemberExpression = assertMemberExpression;
exports.assertNewExpression = assertNewExpression;
exports.assertProgram = assertProgram;
exports.assertObjectExpression = assertObjectExpression;
exports.assertObjectMethod = assertObjectMethod;
exports.assertObjectProperty = assertObjectProperty;
exports.assertRestElement = assertRestElement;
exports.assertReturnStatement = assertReturnStatement;
exports.assertSequenceExpression = assertSequenceExpression;
exports.assertParenthesizedExpression = assertParenthesizedExpression;
exports.assertSwitchCase = assertSwitchCase;
exports.assertSwitchStatement = assertSwitchStatement;
exports.assertThisExpression = assertThisExpression;
exports.assertThrowStatement = assertThrowStatement;
exports.assertTryStatement = assertTryStatement;
exports.assertUnaryExpression = assertUnaryExpression;
exports.assertUpdateExpression = assertUpdateExpression;
exports.assertVariableDeclaration = assertVariableDeclaration;
exports.assertVariableDeclarator = assertVariableDeclarator;
exports.assertWhileStatement = assertWhileStatement;
exports.assertWithStatement = assertWithStatement;
exports.assertAssignmentPattern = assertAssignmentPattern;
exports.assertArrayPattern = assertArrayPattern;
exports.assertArrowFunctionExpression = assertArrowFunctionExpression;
exports.assertClassBody = assertClassBody;
exports.assertClassExpression = assertClassExpression;
exports.assertClassDeclaration = assertClassDeclaration;
exports.assertExportAllDeclaration = assertExportAllDeclaration;
exports.assertExportDefaultDeclaration = assertExportDefaultDeclaration;
exports.assertExportNamedDeclaration = assertExportNamedDeclaration;
exports.assertExportSpecifier = assertExportSpecifier;
exports.assertForOfStatement = assertForOfStatement;
exports.assertImportDeclaration = assertImportDeclaration;
exports.assertImportDefaultSpecifier = assertImportDefaultSpecifier;
exports.assertImportNamespaceSpecifier = assertImportNamespaceSpecifier;
exports.assertImportSpecifier = assertImportSpecifier;
exports.assertMetaProperty = assertMetaProperty;
exports.assertClassMethod = assertClassMethod;
exports.assertObjectPattern = assertObjectPattern;
exports.assertSpreadElement = assertSpreadElement;
exports.assertSuper = assertSuper;
exports.assertTaggedTemplateExpression = assertTaggedTemplateExpression;
exports.assertTemplateElement = assertTemplateElement;
exports.assertTemplateLiteral = assertTemplateLiteral;
exports.assertYieldExpression = assertYieldExpression;
exports.assertAnyTypeAnnotation = assertAnyTypeAnnotation;
exports.assertArrayTypeAnnotation = assertArrayTypeAnnotation;
exports.assertBooleanTypeAnnotation = assertBooleanTypeAnnotation;
exports.assertBooleanLiteralTypeAnnotation = assertBooleanLiteralTypeAnnotation;
exports.assertNullLiteralTypeAnnotation = assertNullLiteralTypeAnnotation;
exports.assertClassImplements = assertClassImplements;
exports.assertDeclareClass = assertDeclareClass;
exports.assertDeclareFunction = assertDeclareFunction;
exports.assertDeclareInterface = assertDeclareInterface;
exports.assertDeclareModule = assertDeclareModule;
exports.assertDeclareModuleExports = assertDeclareModuleExports;
exports.assertDeclareTypeAlias = assertDeclareTypeAlias;
exports.assertDeclareOpaqueType = assertDeclareOpaqueType;
exports.assertDeclareVariable = assertDeclareVariable;
exports.assertDeclareExportDeclaration = assertDeclareExportDeclaration;
exports.assertDeclareExportAllDeclaration = assertDeclareExportAllDeclaration;
exports.assertDeclaredPredicate = assertDeclaredPredicate;
exports.assertExistsTypeAnnotation = assertExistsTypeAnnotation;
exports.assertFunctionTypeAnnotation = assertFunctionTypeAnnotation;
exports.assertFunctionTypeParam = assertFunctionTypeParam;
exports.assertGenericTypeAnnotation = assertGenericTypeAnnotation;
exports.assertInferredPredicate = assertInferredPredicate;
exports.assertInterfaceExtends = assertInterfaceExtends;
exports.assertInterfaceDeclaration = assertInterfaceDeclaration;
exports.assertInterfaceTypeAnnotation = assertInterfaceTypeAnnotation;
exports.assertIntersectionTypeAnnotation = assertIntersectionTypeAnnotation;
exports.assertMixedTypeAnnotation = assertMixedTypeAnnotation;
exports.assertEmptyTypeAnnotation = assertEmptyTypeAnnotation;
exports.assertNullableTypeAnnotation = assertNullableTypeAnnotation;
exports.assertNumberLiteralTypeAnnotation = assertNumberLiteralTypeAnnotation;
exports.assertNumberTypeAnnotation = assertNumberTypeAnnotation;
exports.assertObjectTypeAnnotation = assertObjectTypeAnnotation;
exports.assertObjectTypeInternalSlot = assertObjectTypeInternalSlot;
exports.assertObjectTypeCallProperty = assertObjectTypeCallProperty;
exports.assertObjectTypeIndexer = assertObjectTypeIndexer;
exports.assertObjectTypeProperty = assertObjectTypeProperty;
exports.assertObjectTypeSpreadProperty = assertObjectTypeSpreadProperty;
exports.assertOpaqueType = assertOpaqueType;
exports.assertQualifiedTypeIdentifier = assertQualifiedTypeIdentifier;
exports.assertStringLiteralTypeAnnotation = assertStringLiteralTypeAnnotation;
exports.assertStringTypeAnnotation = assertStringTypeAnnotation;
exports.assertThisTypeAnnotation = assertThisTypeAnnotation;
exports.assertTupleTypeAnnotation = assertTupleTypeAnnotation;
exports.assertTypeofTypeAnnotation = assertTypeofTypeAnnotation;
exports.assertTypeAlias = assertTypeAlias;
exports.assertTypeAnnotation = assertTypeAnnotation;
exports.assertTypeCastExpression = assertTypeCastExpression;
exports.assertTypeParameter = assertTypeParameter;
exports.assertTypeParameterDeclaration = assertTypeParameterDeclaration;
exports.assertTypeParameterInstantiation = assertTypeParameterInstantiation;
exports.assertUnionTypeAnnotation = assertUnionTypeAnnotation;
exports.assertVariance = assertVariance;
exports.assertVoidTypeAnnotation = assertVoidTypeAnnotation;
exports.assertEnumDeclaration = assertEnumDeclaration;
exports.assertEnumBooleanBody = assertEnumBooleanBody;
exports.assertEnumNumberBody = assertEnumNumberBody;
exports.assertEnumStringBody = assertEnumStringBody;
exports.assertEnumSymbolBody = assertEnumSymbolBody;
exports.assertEnumBooleanMember = assertEnumBooleanMember;
exports.assertEnumNumberMember = assertEnumNumberMember;
exports.assertEnumStringMember = assertEnumStringMember;
exports.assertEnumDefaultedMember = assertEnumDefaultedMember;
exports.assertJSXAttribute = assertJSXAttribute;
exports.assertJSXClosingElement = assertJSXClosingElement;
exports.assertJSXElement = assertJSXElement;
exports.assertJSXEmptyExpression = assertJSXEmptyExpression;
exports.assertJSXExpressionContainer = assertJSXExpressionContainer;
exports.assertJSXSpreadChild = assertJSXSpreadChild;
exports.assertJSXIdentifier = assertJSXIdentifier;
exports.assertJSXMemberExpression = assertJSXMemberExpression;
exports.assertJSXNamespacedName = assertJSXNamespacedName;
exports.assertJSXOpeningElement = assertJSXOpeningElement;
exports.assertJSXSpreadAttribute = assertJSXSpreadAttribute;
exports.assertJSXText = assertJSXText;
exports.assertJSXFragment = assertJSXFragment;
exports.assertJSXOpeningFragment = assertJSXOpeningFragment;
exports.assertJSXClosingFragment = assertJSXClosingFragment;
exports.assertNoop = assertNoop;
exports.assertPlaceholder = assertPlaceholder;
exports.assertV8IntrinsicIdentifier = assertV8IntrinsicIdentifier;
exports.assertArgumentPlaceholder = assertArgumentPlaceholder;
exports.assertAwaitExpression = assertAwaitExpression;
exports.assertBindExpression = assertBindExpression;
exports.assertClassProperty = assertClassProperty;
exports.assertOptionalMemberExpression = assertOptionalMemberExpression;
exports.assertPipelineTopicExpression = assertPipelineTopicExpression;
exports.assertPipelineBareFunction = assertPipelineBareFunction;
exports.assertPipelinePrimaryTopicReference = assertPipelinePrimaryTopicReference;
exports.assertOptionalCallExpression = assertOptionalCallExpression;
exports.assertClassPrivateProperty = assertClassPrivateProperty;
exports.assertClassPrivateMethod = assertClassPrivateMethod;
exports.assertImport = assertImport;
exports.assertDecorator = assertDecorator;
exports.assertDoExpression = assertDoExpression;
exports.assertExportDefaultSpecifier = assertExportDefaultSpecifier;
exports.assertExportNamespaceSpecifier = assertExportNamespaceSpecifier;
exports.assertPrivateName = assertPrivateName;
exports.assertBigIntLiteral = assertBigIntLiteral;
exports.assertTSParameterProperty = assertTSParameterProperty;
exports.assertTSDeclareFunction = assertTSDeclareFunction;
exports.assertTSDeclareMethod = assertTSDeclareMethod;
exports.assertTSQualifiedName = assertTSQualifiedName;
exports.assertTSCallSignatureDeclaration = assertTSCallSignatureDeclaration;
exports.assertTSConstructSignatureDeclaration = assertTSConstructSignatureDeclaration;
exports.assertTSPropertySignature = assertTSPropertySignature;
exports.assertTSMethodSignature = assertTSMethodSignature;
exports.assertTSIndexSignature = assertTSIndexSignature;
exports.assertTSAnyKeyword = assertTSAnyKeyword;
exports.assertTSBooleanKeyword = assertTSBooleanKeyword;
exports.assertTSBigIntKeyword = assertTSBigIntKeyword;
exports.assertTSNeverKeyword = assertTSNeverKeyword;
exports.assertTSNullKeyword = assertTSNullKeyword;
exports.assertTSNumberKeyword = assertTSNumberKeyword;
exports.assertTSObjectKeyword = assertTSObjectKeyword;
exports.assertTSStringKeyword = assertTSStringKeyword;
exports.assertTSSymbolKeyword = assertTSSymbolKeyword;
exports.assertTSUndefinedKeyword = assertTSUndefinedKeyword;
exports.assertTSUnknownKeyword = assertTSUnknownKeyword;
exports.assertTSVoidKeyword = assertTSVoidKeyword;
exports.assertTSThisType = assertTSThisType;
exports.assertTSFunctionType = assertTSFunctionType;
exports.assertTSConstructorType = assertTSConstructorType;
exports.assertTSTypeReference = assertTSTypeReference;
exports.assertTSTypePredicate = assertTSTypePredicate;
exports.assertTSTypeQuery = assertTSTypeQuery;
exports.assertTSTypeLiteral = assertTSTypeLiteral;
exports.assertTSArrayType = assertTSArrayType;
exports.assertTSTupleType = assertTSTupleType;
exports.assertTSOptionalType = assertTSOptionalType;
exports.assertTSRestType = assertTSRestType;
exports.assertTSUnionType = assertTSUnionType;
exports.assertTSIntersectionType = assertTSIntersectionType;
exports.assertTSConditionalType = assertTSConditionalType;
exports.assertTSInferType = assertTSInferType;
exports.assertTSParenthesizedType = assertTSParenthesizedType;
exports.assertTSTypeOperator = assertTSTypeOperator;
exports.assertTSIndexedAccessType = assertTSIndexedAccessType;
exports.assertTSMappedType = assertTSMappedType;
exports.assertTSLiteralType = assertTSLiteralType;
exports.assertTSExpressionWithTypeArguments = assertTSExpressionWithTypeArguments;
exports.assertTSInterfaceDeclaration = assertTSInterfaceDeclaration;
exports.assertTSInterfaceBody = assertTSInterfaceBody;
exports.assertTSTypeAliasDeclaration = assertTSTypeAliasDeclaration;
exports.assertTSAsExpression = assertTSAsExpression;
exports.assertTSTypeAssertion = assertTSTypeAssertion;
exports.assertTSEnumDeclaration = assertTSEnumDeclaration;
exports.assertTSEnumMember = assertTSEnumMember;
exports.assertTSModuleDeclaration = assertTSModuleDeclaration;
exports.assertTSModuleBlock = assertTSModuleBlock;
exports.assertTSImportType = assertTSImportType;
exports.assertTSImportEqualsDeclaration = assertTSImportEqualsDeclaration;
exports.assertTSExternalModuleReference = assertTSExternalModuleReference;
exports.assertTSNonNullExpression = assertTSNonNullExpression;
exports.assertTSExportAssignment = assertTSExportAssignment;
exports.assertTSNamespaceExportDeclaration = assertTSNamespaceExportDeclaration;
exports.assertTSTypeAnnotation = assertTSTypeAnnotation;
exports.assertTSTypeParameterInstantiation = assertTSTypeParameterInstantiation;
exports.assertTSTypeParameterDeclaration = assertTSTypeParameterDeclaration;
exports.assertTSTypeParameter = assertTSTypeParameter;
exports.assertExpression = assertExpression;
exports.assertBinary = assertBinary;
exports.assertScopable = assertScopable;
exports.assertBlockParent = assertBlockParent;
exports.assertBlock = assertBlock;
exports.assertStatement = assertStatement;
exports.assertTerminatorless = assertTerminatorless;
exports.assertCompletionStatement = assertCompletionStatement;
exports.assertConditional = assertConditional;
exports.assertLoop = assertLoop;
exports.assertWhile = assertWhile;
exports.assertExpressionWrapper = assertExpressionWrapper;
exports.assertFor = assertFor;
exports.assertForXStatement = assertForXStatement;
exports.assertFunction = assertFunction;
exports.assertFunctionParent = assertFunctionParent;
exports.assertPureish = assertPureish;
exports.assertDeclaration = assertDeclaration;
exports.assertPatternLike = assertPatternLike;
exports.assertLVal = assertLVal;
exports.assertTSEntityName = assertTSEntityName;
exports.assertLiteral = assertLiteral;
exports.assertImmutable = assertImmutable;
exports.assertUserWhitespacable = assertUserWhitespacable;
exports.assertMethod = assertMethod;
exports.assertObjectMember = assertObjectMember;
exports.assertProperty = assertProperty;
exports.assertUnaryLike = assertUnaryLike;
exports.assertPattern = assertPattern;
exports.assertClass = assertClass;
exports.assertModuleDeclaration = assertModuleDeclaration;
exports.assertExportDeclaration = assertExportDeclaration;
exports.assertModuleSpecifier = assertModuleSpecifier;
exports.assertFlow = assertFlow;
exports.assertFlowType = assertFlowType;
exports.assertFlowBaseAnnotation = assertFlowBaseAnnotation;
exports.assertFlowDeclaration = assertFlowDeclaration;
exports.assertFlowPredicate = assertFlowPredicate;
exports.assertEnumBody = assertEnumBody;
exports.assertEnumMember = assertEnumMember;
exports.assertJSX = assertJSX;
exports.assertPrivate = assertPrivate;
exports.assertTSTypeElement = assertTSTypeElement;
exports.assertTSType = assertTSType;
exports.assertNumberLiteral = assertNumberLiteral;
exports.assertRegexLiteral = assertRegexLiteral;
exports.assertRestProperty = assertRestProperty;
exports.assertSpreadProperty = assertSpreadProperty;

var _is = _interopRequireDefault(__webpack_require__(/*! ../../validators/is */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function assert(type, node, opts) {
  if (!(0, _is.default)(type, node, opts)) {
    throw new Error(`Expected type "${type}" with option ${JSON.stringify(opts)}, ` + `but instead got "${node.type}".`);
  }
}

function assertArrayExpression(node, opts = {}) {
  assert("ArrayExpression", node, opts);
}

function assertAssignmentExpression(node, opts = {}) {
  assert("AssignmentExpression", node, opts);
}

function assertBinaryExpression(node, opts = {}) {
  assert("BinaryExpression", node, opts);
}

function assertInterpreterDirective(node, opts = {}) {
  assert("InterpreterDirective", node, opts);
}

function assertDirective(node, opts = {}) {
  assert("Directive", node, opts);
}

function assertDirectiveLiteral(node, opts = {}) {
  assert("DirectiveLiteral", node, opts);
}

function assertBlockStatement(node, opts = {}) {
  assert("BlockStatement", node, opts);
}

function assertBreakStatement(node, opts = {}) {
  assert("BreakStatement", node, opts);
}

function assertCallExpression(node, opts = {}) {
  assert("CallExpression", node, opts);
}

function assertCatchClause(node, opts = {}) {
  assert("CatchClause", node, opts);
}

function assertConditionalExpression(node, opts = {}) {
  assert("ConditionalExpression", node, opts);
}

function assertContinueStatement(node, opts = {}) {
  assert("ContinueStatement", node, opts);
}

function assertDebuggerStatement(node, opts = {}) {
  assert("DebuggerStatement", node, opts);
}

function assertDoWhileStatement(node, opts = {}) {
  assert("DoWhileStatement", node, opts);
}

function assertEmptyStatement(node, opts = {}) {
  assert("EmptyStatement", node, opts);
}

function assertExpressionStatement(node, opts = {}) {
  assert("ExpressionStatement", node, opts);
}

function assertFile(node, opts = {}) {
  assert("File", node, opts);
}

function assertForInStatement(node, opts = {}) {
  assert("ForInStatement", node, opts);
}

function assertForStatement(node, opts = {}) {
  assert("ForStatement", node, opts);
}

function assertFunctionDeclaration(node, opts = {}) {
  assert("FunctionDeclaration", node, opts);
}

function assertFunctionExpression(node, opts = {}) {
  assert("FunctionExpression", node, opts);
}

function assertIdentifier(node, opts = {}) {
  assert("Identifier", node, opts);
}

function assertIfStatement(node, opts = {}) {
  assert("IfStatement", node, opts);
}

function assertLabeledStatement(node, opts = {}) {
  assert("LabeledStatement", node, opts);
}

function assertStringLiteral(node, opts = {}) {
  assert("StringLiteral", node, opts);
}

function assertNumericLiteral(node, opts = {}) {
  assert("NumericLiteral", node, opts);
}

function assertNullLiteral(node, opts = {}) {
  assert("NullLiteral", node, opts);
}

function assertBooleanLiteral(node, opts = {}) {
  assert("BooleanLiteral", node, opts);
}

function assertRegExpLiteral(node, opts = {}) {
  assert("RegExpLiteral", node, opts);
}

function assertLogicalExpression(node, opts = {}) {
  assert("LogicalExpression", node, opts);
}

function assertMemberExpression(node, opts = {}) {
  assert("MemberExpression", node, opts);
}

function assertNewExpression(node, opts = {}) {
  assert("NewExpression", node, opts);
}

function assertProgram(node, opts = {}) {
  assert("Program", node, opts);
}

function assertObjectExpression(node, opts = {}) {
  assert("ObjectExpression", node, opts);
}

function assertObjectMethod(node, opts = {}) {
  assert("ObjectMethod", node, opts);
}

function assertObjectProperty(node, opts = {}) {
  assert("ObjectProperty", node, opts);
}

function assertRestElement(node, opts = {}) {
  assert("RestElement", node, opts);
}

function assertReturnStatement(node, opts = {}) {
  assert("ReturnStatement", node, opts);
}

function assertSequenceExpression(node, opts = {}) {
  assert("SequenceExpression", node, opts);
}

function assertParenthesizedExpression(node, opts = {}) {
  assert("ParenthesizedExpression", node, opts);
}

function assertSwitchCase(node, opts = {}) {
  assert("SwitchCase", node, opts);
}

function assertSwitchStatement(node, opts = {}) {
  assert("SwitchStatement", node, opts);
}

function assertThisExpression(node, opts = {}) {
  assert("ThisExpression", node, opts);
}

function assertThrowStatement(node, opts = {}) {
  assert("ThrowStatement", node, opts);
}

function assertTryStatement(node, opts = {}) {
  assert("TryStatement", node, opts);
}

function assertUnaryExpression(node, opts = {}) {
  assert("UnaryExpression", node, opts);
}

function assertUpdateExpression(node, opts = {}) {
  assert("UpdateExpression", node, opts);
}

function assertVariableDeclaration(node, opts = {}) {
  assert("VariableDeclaration", node, opts);
}

function assertVariableDeclarator(node, opts = {}) {
  assert("VariableDeclarator", node, opts);
}

function assertWhileStatement(node, opts = {}) {
  assert("WhileStatement", node, opts);
}

function assertWithStatement(node, opts = {}) {
  assert("WithStatement", node, opts);
}

function assertAssignmentPattern(node, opts = {}) {
  assert("AssignmentPattern", node, opts);
}

function assertArrayPattern(node, opts = {}) {
  assert("ArrayPattern", node, opts);
}

function assertArrowFunctionExpression(node, opts = {}) {
  assert("ArrowFunctionExpression", node, opts);
}

function assertClassBody(node, opts = {}) {
  assert("ClassBody", node, opts);
}

function assertClassExpression(node, opts = {}) {
  assert("ClassExpression", node, opts);
}

function assertClassDeclaration(node, opts = {}) {
  assert("ClassDeclaration", node, opts);
}

function assertExportAllDeclaration(node, opts = {}) {
  assert("ExportAllDeclaration", node, opts);
}

function assertExportDefaultDeclaration(node, opts = {}) {
  assert("ExportDefaultDeclaration", node, opts);
}

function assertExportNamedDeclaration(node, opts = {}) {
  assert("ExportNamedDeclaration", node, opts);
}

function assertExportSpecifier(node, opts = {}) {
  assert("ExportSpecifier", node, opts);
}

function assertForOfStatement(node, opts = {}) {
  assert("ForOfStatement", node, opts);
}

function assertImportDeclaration(node, opts = {}) {
  assert("ImportDeclaration", node, opts);
}

function assertImportDefaultSpecifier(node, opts = {}) {
  assert("ImportDefaultSpecifier", node, opts);
}

function assertImportNamespaceSpecifier(node, opts = {}) {
  assert("ImportNamespaceSpecifier", node, opts);
}

function assertImportSpecifier(node, opts = {}) {
  assert("ImportSpecifier", node, opts);
}

function assertMetaProperty(node, opts = {}) {
  assert("MetaProperty", node, opts);
}

function assertClassMethod(node, opts = {}) {
  assert("ClassMethod", node, opts);
}

function assertObjectPattern(node, opts = {}) {
  assert("ObjectPattern", node, opts);
}

function assertSpreadElement(node, opts = {}) {
  assert("SpreadElement", node, opts);
}

function assertSuper(node, opts = {}) {
  assert("Super", node, opts);
}

function assertTaggedTemplateExpression(node, opts = {}) {
  assert("TaggedTemplateExpression", node, opts);
}

function assertTemplateElement(node, opts = {}) {
  assert("TemplateElement", node, opts);
}

function assertTemplateLiteral(node, opts = {}) {
  assert("TemplateLiteral", node, opts);
}

function assertYieldExpression(node, opts = {}) {
  assert("YieldExpression", node, opts);
}

function assertAnyTypeAnnotation(node, opts = {}) {
  assert("AnyTypeAnnotation", node, opts);
}

function assertArrayTypeAnnotation(node, opts = {}) {
  assert("ArrayTypeAnnotation", node, opts);
}

function assertBooleanTypeAnnotation(node, opts = {}) {
  assert("BooleanTypeAnnotation", node, opts);
}

function assertBooleanLiteralTypeAnnotation(node, opts = {}) {
  assert("BooleanLiteralTypeAnnotation", node, opts);
}

function assertNullLiteralTypeAnnotation(node, opts = {}) {
  assert("NullLiteralTypeAnnotation", node, opts);
}

function assertClassImplements(node, opts = {}) {
  assert("ClassImplements", node, opts);
}

function assertDeclareClass(node, opts = {}) {
  assert("DeclareClass", node, opts);
}

function assertDeclareFunction(node, opts = {}) {
  assert("DeclareFunction", node, opts);
}

function assertDeclareInterface(node, opts = {}) {
  assert("DeclareInterface", node, opts);
}

function assertDeclareModule(node, opts = {}) {
  assert("DeclareModule", node, opts);
}

function assertDeclareModuleExports(node, opts = {}) {
  assert("DeclareModuleExports", node, opts);
}

function assertDeclareTypeAlias(node, opts = {}) {
  assert("DeclareTypeAlias", node, opts);
}

function assertDeclareOpaqueType(node, opts = {}) {
  assert("DeclareOpaqueType", node, opts);
}

function assertDeclareVariable(node, opts = {}) {
  assert("DeclareVariable", node, opts);
}

function assertDeclareExportDeclaration(node, opts = {}) {
  assert("DeclareExportDeclaration", node, opts);
}

function assertDeclareExportAllDeclaration(node, opts = {}) {
  assert("DeclareExportAllDeclaration", node, opts);
}

function assertDeclaredPredicate(node, opts = {}) {
  assert("DeclaredPredicate", node, opts);
}

function assertExistsTypeAnnotation(node, opts = {}) {
  assert("ExistsTypeAnnotation", node, opts);
}

function assertFunctionTypeAnnotation(node, opts = {}) {
  assert("FunctionTypeAnnotation", node, opts);
}

function assertFunctionTypeParam(node, opts = {}) {
  assert("FunctionTypeParam", node, opts);
}

function assertGenericTypeAnnotation(node, opts = {}) {
  assert("GenericTypeAnnotation", node, opts);
}

function assertInferredPredicate(node, opts = {}) {
  assert("InferredPredicate", node, opts);
}

function assertInterfaceExtends(node, opts = {}) {
  assert("InterfaceExtends", node, opts);
}

function assertInterfaceDeclaration(node, opts = {}) {
  assert("InterfaceDeclaration", node, opts);
}

function assertInterfaceTypeAnnotation(node, opts = {}) {
  assert("InterfaceTypeAnnotation", node, opts);
}

function assertIntersectionTypeAnnotation(node, opts = {}) {
  assert("IntersectionTypeAnnotation", node, opts);
}

function assertMixedTypeAnnotation(node, opts = {}) {
  assert("MixedTypeAnnotation", node, opts);
}

function assertEmptyTypeAnnotation(node, opts = {}) {
  assert("EmptyTypeAnnotation", node, opts);
}

function assertNullableTypeAnnotation(node, opts = {}) {
  assert("NullableTypeAnnotation", node, opts);
}

function assertNumberLiteralTypeAnnotation(node, opts = {}) {
  assert("NumberLiteralTypeAnnotation", node, opts);
}

function assertNumberTypeAnnotation(node, opts = {}) {
  assert("NumberTypeAnnotation", node, opts);
}

function assertObjectTypeAnnotation(node, opts = {}) {
  assert("ObjectTypeAnnotation", node, opts);
}

function assertObjectTypeInternalSlot(node, opts = {}) {
  assert("ObjectTypeInternalSlot", node, opts);
}

function assertObjectTypeCallProperty(node, opts = {}) {
  assert("ObjectTypeCallProperty", node, opts);
}

function assertObjectTypeIndexer(node, opts = {}) {
  assert("ObjectTypeIndexer", node, opts);
}

function assertObjectTypeProperty(node, opts = {}) {
  assert("ObjectTypeProperty", node, opts);
}

function assertObjectTypeSpreadProperty(node, opts = {}) {
  assert("ObjectTypeSpreadProperty", node, opts);
}

function assertOpaqueType(node, opts = {}) {
  assert("OpaqueType", node, opts);
}

function assertQualifiedTypeIdentifier(node, opts = {}) {
  assert("QualifiedTypeIdentifier", node, opts);
}

function assertStringLiteralTypeAnnotation(node, opts = {}) {
  assert("StringLiteralTypeAnnotation", node, opts);
}

function assertStringTypeAnnotation(node, opts = {}) {
  assert("StringTypeAnnotation", node, opts);
}

function assertThisTypeAnnotation(node, opts = {}) {
  assert("ThisTypeAnnotation", node, opts);
}

function assertTupleTypeAnnotation(node, opts = {}) {
  assert("TupleTypeAnnotation", node, opts);
}

function assertTypeofTypeAnnotation(node, opts = {}) {
  assert("TypeofTypeAnnotation", node, opts);
}

function assertTypeAlias(node, opts = {}) {
  assert("TypeAlias", node, opts);
}

function assertTypeAnnotation(node, opts = {}) {
  assert("TypeAnnotation", node, opts);
}

function assertTypeCastExpression(node, opts = {}) {
  assert("TypeCastExpression", node, opts);
}

function assertTypeParameter(node, opts = {}) {
  assert("TypeParameter", node, opts);
}

function assertTypeParameterDeclaration(node, opts = {}) {
  assert("TypeParameterDeclaration", node, opts);
}

function assertTypeParameterInstantiation(node, opts = {}) {
  assert("TypeParameterInstantiation", node, opts);
}

function assertUnionTypeAnnotation(node, opts = {}) {
  assert("UnionTypeAnnotation", node, opts);
}

function assertVariance(node, opts = {}) {
  assert("Variance", node, opts);
}

function assertVoidTypeAnnotation(node, opts = {}) {
  assert("VoidTypeAnnotation", node, opts);
}

function assertEnumDeclaration(node, opts = {}) {
  assert("EnumDeclaration", node, opts);
}

function assertEnumBooleanBody(node, opts = {}) {
  assert("EnumBooleanBody", node, opts);
}

function assertEnumNumberBody(node, opts = {}) {
  assert("EnumNumberBody", node, opts);
}

function assertEnumStringBody(node, opts = {}) {
  assert("EnumStringBody", node, opts);
}

function assertEnumSymbolBody(node, opts = {}) {
  assert("EnumSymbolBody", node, opts);
}

function assertEnumBooleanMember(node, opts = {}) {
  assert("EnumBooleanMember", node, opts);
}

function assertEnumNumberMember(node, opts = {}) {
  assert("EnumNumberMember", node, opts);
}

function assertEnumStringMember(node, opts = {}) {
  assert("EnumStringMember", node, opts);
}

function assertEnumDefaultedMember(node, opts = {}) {
  assert("EnumDefaultedMember", node, opts);
}

function assertJSXAttribute(node, opts = {}) {
  assert("JSXAttribute", node, opts);
}

function assertJSXClosingElement(node, opts = {}) {
  assert("JSXClosingElement", node, opts);
}

function assertJSXElement(node, opts = {}) {
  assert("JSXElement", node, opts);
}

function assertJSXEmptyExpression(node, opts = {}) {
  assert("JSXEmptyExpression", node, opts);
}

function assertJSXExpressionContainer(node, opts = {}) {
  assert("JSXExpressionContainer", node, opts);
}

function assertJSXSpreadChild(node, opts = {}) {
  assert("JSXSpreadChild", node, opts);
}

function assertJSXIdentifier(node, opts = {}) {
  assert("JSXIdentifier", node, opts);
}

function assertJSXMemberExpression(node, opts = {}) {
  assert("JSXMemberExpression", node, opts);
}

function assertJSXNamespacedName(node, opts = {}) {
  assert("JSXNamespacedName", node, opts);
}

function assertJSXOpeningElement(node, opts = {}) {
  assert("JSXOpeningElement", node, opts);
}

function assertJSXSpreadAttribute(node, opts = {}) {
  assert("JSXSpreadAttribute", node, opts);
}

function assertJSXText(node, opts = {}) {
  assert("JSXText", node, opts);
}

function assertJSXFragment(node, opts = {}) {
  assert("JSXFragment", node, opts);
}

function assertJSXOpeningFragment(node, opts = {}) {
  assert("JSXOpeningFragment", node, opts);
}

function assertJSXClosingFragment(node, opts = {}) {
  assert("JSXClosingFragment", node, opts);
}

function assertNoop(node, opts = {}) {
  assert("Noop", node, opts);
}

function assertPlaceholder(node, opts = {}) {
  assert("Placeholder", node, opts);
}

function assertV8IntrinsicIdentifier(node, opts = {}) {
  assert("V8IntrinsicIdentifier", node, opts);
}

function assertArgumentPlaceholder(node, opts = {}) {
  assert("ArgumentPlaceholder", node, opts);
}

function assertAwaitExpression(node, opts = {}) {
  assert("AwaitExpression", node, opts);
}

function assertBindExpression(node, opts = {}) {
  assert("BindExpression", node, opts);
}

function assertClassProperty(node, opts = {}) {
  assert("ClassProperty", node, opts);
}

function assertOptionalMemberExpression(node, opts = {}) {
  assert("OptionalMemberExpression", node, opts);
}

function assertPipelineTopicExpression(node, opts = {}) {
  assert("PipelineTopicExpression", node, opts);
}

function assertPipelineBareFunction(node, opts = {}) {
  assert("PipelineBareFunction", node, opts);
}

function assertPipelinePrimaryTopicReference(node, opts = {}) {
  assert("PipelinePrimaryTopicReference", node, opts);
}

function assertOptionalCallExpression(node, opts = {}) {
  assert("OptionalCallExpression", node, opts);
}

function assertClassPrivateProperty(node, opts = {}) {
  assert("ClassPrivateProperty", node, opts);
}

function assertClassPrivateMethod(node, opts = {}) {
  assert("ClassPrivateMethod", node, opts);
}

function assertImport(node, opts = {}) {
  assert("Import", node, opts);
}

function assertDecorator(node, opts = {}) {
  assert("Decorator", node, opts);
}

function assertDoExpression(node, opts = {}) {
  assert("DoExpression", node, opts);
}

function assertExportDefaultSpecifier(node, opts = {}) {
  assert("ExportDefaultSpecifier", node, opts);
}

function assertExportNamespaceSpecifier(node, opts = {}) {
  assert("ExportNamespaceSpecifier", node, opts);
}

function assertPrivateName(node, opts = {}) {
  assert("PrivateName", node, opts);
}

function assertBigIntLiteral(node, opts = {}) {
  assert("BigIntLiteral", node, opts);
}

function assertTSParameterProperty(node, opts = {}) {
  assert("TSParameterProperty", node, opts);
}

function assertTSDeclareFunction(node, opts = {}) {
  assert("TSDeclareFunction", node, opts);
}

function assertTSDeclareMethod(node, opts = {}) {
  assert("TSDeclareMethod", node, opts);
}

function assertTSQualifiedName(node, opts = {}) {
  assert("TSQualifiedName", node, opts);
}

function assertTSCallSignatureDeclaration(node, opts = {}) {
  assert("TSCallSignatureDeclaration", node, opts);
}

function assertTSConstructSignatureDeclaration(node, opts = {}) {
  assert("TSConstructSignatureDeclaration", node, opts);
}

function assertTSPropertySignature(node, opts = {}) {
  assert("TSPropertySignature", node, opts);
}

function assertTSMethodSignature(node, opts = {}) {
  assert("TSMethodSignature", node, opts);
}

function assertTSIndexSignature(node, opts = {}) {
  assert("TSIndexSignature", node, opts);
}

function assertTSAnyKeyword(node, opts = {}) {
  assert("TSAnyKeyword", node, opts);
}

function assertTSBooleanKeyword(node, opts = {}) {
  assert("TSBooleanKeyword", node, opts);
}

function assertTSBigIntKeyword(node, opts = {}) {
  assert("TSBigIntKeyword", node, opts);
}

function assertTSNeverKeyword(node, opts = {}) {
  assert("TSNeverKeyword", node, opts);
}

function assertTSNullKeyword(node, opts = {}) {
  assert("TSNullKeyword", node, opts);
}

function assertTSNumberKeyword(node, opts = {}) {
  assert("TSNumberKeyword", node, opts);
}

function assertTSObjectKeyword(node, opts = {}) {
  assert("TSObjectKeyword", node, opts);
}

function assertTSStringKeyword(node, opts = {}) {
  assert("TSStringKeyword", node, opts);
}

function assertTSSymbolKeyword(node, opts = {}) {
  assert("TSSymbolKeyword", node, opts);
}

function assertTSUndefinedKeyword(node, opts = {}) {
  assert("TSUndefinedKeyword", node, opts);
}

function assertTSUnknownKeyword(node, opts = {}) {
  assert("TSUnknownKeyword", node, opts);
}

function assertTSVoidKeyword(node, opts = {}) {
  assert("TSVoidKeyword", node, opts);
}

function assertTSThisType(node, opts = {}) {
  assert("TSThisType", node, opts);
}

function assertTSFunctionType(node, opts = {}) {
  assert("TSFunctionType", node, opts);
}

function assertTSConstructorType(node, opts = {}) {
  assert("TSConstructorType", node, opts);
}

function assertTSTypeReference(node, opts = {}) {
  assert("TSTypeReference", node, opts);
}

function assertTSTypePredicate(node, opts = {}) {
  assert("TSTypePredicate", node, opts);
}

function assertTSTypeQuery(node, opts = {}) {
  assert("TSTypeQuery", node, opts);
}

function assertTSTypeLiteral(node, opts = {}) {
  assert("TSTypeLiteral", node, opts);
}

function assertTSArrayType(node, opts = {}) {
  assert("TSArrayType", node, opts);
}

function assertTSTupleType(node, opts = {}) {
  assert("TSTupleType", node, opts);
}

function assertTSOptionalType(node, opts = {}) {
  assert("TSOptionalType", node, opts);
}

function assertTSRestType(node, opts = {}) {
  assert("TSRestType", node, opts);
}

function assertTSUnionType(node, opts = {}) {
  assert("TSUnionType", node, opts);
}

function assertTSIntersectionType(node, opts = {}) {
  assert("TSIntersectionType", node, opts);
}

function assertTSConditionalType(node, opts = {}) {
  assert("TSConditionalType", node, opts);
}

function assertTSInferType(node, opts = {}) {
  assert("TSInferType", node, opts);
}

function assertTSParenthesizedType(node, opts = {}) {
  assert("TSParenthesizedType", node, opts);
}

function assertTSTypeOperator(node, opts = {}) {
  assert("TSTypeOperator", node, opts);
}

function assertTSIndexedAccessType(node, opts = {}) {
  assert("TSIndexedAccessType", node, opts);
}

function assertTSMappedType(node, opts = {}) {
  assert("TSMappedType", node, opts);
}

function assertTSLiteralType(node, opts = {}) {
  assert("TSLiteralType", node, opts);
}

function assertTSExpressionWithTypeArguments(node, opts = {}) {
  assert("TSExpressionWithTypeArguments", node, opts);
}

function assertTSInterfaceDeclaration(node, opts = {}) {
  assert("TSInterfaceDeclaration", node, opts);
}

function assertTSInterfaceBody(node, opts = {}) {
  assert("TSInterfaceBody", node, opts);
}

function assertTSTypeAliasDeclaration(node, opts = {}) {
  assert("TSTypeAliasDeclaration", node, opts);
}

function assertTSAsExpression(node, opts = {}) {
  assert("TSAsExpression", node, opts);
}

function assertTSTypeAssertion(node, opts = {}) {
  assert("TSTypeAssertion", node, opts);
}

function assertTSEnumDeclaration(node, opts = {}) {
  assert("TSEnumDeclaration", node, opts);
}

function assertTSEnumMember(node, opts = {}) {
  assert("TSEnumMember", node, opts);
}

function assertTSModuleDeclaration(node, opts = {}) {
  assert("TSModuleDeclaration", node, opts);
}

function assertTSModuleBlock(node, opts = {}) {
  assert("TSModuleBlock", node, opts);
}

function assertTSImportType(node, opts = {}) {
  assert("TSImportType", node, opts);
}

function assertTSImportEqualsDeclaration(node, opts = {}) {
  assert("TSImportEqualsDeclaration", node, opts);
}

function assertTSExternalModuleReference(node, opts = {}) {
  assert("TSExternalModuleReference", node, opts);
}

function assertTSNonNullExpression(node, opts = {}) {
  assert("TSNonNullExpression", node, opts);
}

function assertTSExportAssignment(node, opts = {}) {
  assert("TSExportAssignment", node, opts);
}

function assertTSNamespaceExportDeclaration(node, opts = {}) {
  assert("TSNamespaceExportDeclaration", node, opts);
}

function assertTSTypeAnnotation(node, opts = {}) {
  assert("TSTypeAnnotation", node, opts);
}

function assertTSTypeParameterInstantiation(node, opts = {}) {
  assert("TSTypeParameterInstantiation", node, opts);
}

function assertTSTypeParameterDeclaration(node, opts = {}) {
  assert("TSTypeParameterDeclaration", node, opts);
}

function assertTSTypeParameter(node, opts = {}) {
  assert("TSTypeParameter", node, opts);
}

function assertExpression(node, opts = {}) {
  assert("Expression", node, opts);
}

function assertBinary(node, opts = {}) {
  assert("Binary", node, opts);
}

function assertScopable(node, opts = {}) {
  assert("Scopable", node, opts);
}

function assertBlockParent(node, opts = {}) {
  assert("BlockParent", node, opts);
}

function assertBlock(node, opts = {}) {
  assert("Block", node, opts);
}

function assertStatement(node, opts = {}) {
  assert("Statement", node, opts);
}

function assertTerminatorless(node, opts = {}) {
  assert("Terminatorless", node, opts);
}

function assertCompletionStatement(node, opts = {}) {
  assert("CompletionStatement", node, opts);
}

function assertConditional(node, opts = {}) {
  assert("Conditional", node, opts);
}

function assertLoop(node, opts = {}) {
  assert("Loop", node, opts);
}

function assertWhile(node, opts = {}) {
  assert("While", node, opts);
}

function assertExpressionWrapper(node, opts = {}) {
  assert("ExpressionWrapper", node, opts);
}

function assertFor(node, opts = {}) {
  assert("For", node, opts);
}

function assertForXStatement(node, opts = {}) {
  assert("ForXStatement", node, opts);
}

function assertFunction(node, opts = {}) {
  assert("Function", node, opts);
}

function assertFunctionParent(node, opts = {}) {
  assert("FunctionParent", node, opts);
}

function assertPureish(node, opts = {}) {
  assert("Pureish", node, opts);
}

function assertDeclaration(node, opts = {}) {
  assert("Declaration", node, opts);
}

function assertPatternLike(node, opts = {}) {
  assert("PatternLike", node, opts);
}

function assertLVal(node, opts = {}) {
  assert("LVal", node, opts);
}

function assertTSEntityName(node, opts = {}) {
  assert("TSEntityName", node, opts);
}

function assertLiteral(node, opts = {}) {
  assert("Literal", node, opts);
}

function assertImmutable(node, opts = {}) {
  assert("Immutable", node, opts);
}

function assertUserWhitespacable(node, opts = {}) {
  assert("UserWhitespacable", node, opts);
}

function assertMethod(node, opts = {}) {
  assert("Method", node, opts);
}

function assertObjectMember(node, opts = {}) {
  assert("ObjectMember", node, opts);
}

function assertProperty(node, opts = {}) {
  assert("Property", node, opts);
}

function assertUnaryLike(node, opts = {}) {
  assert("UnaryLike", node, opts);
}

function assertPattern(node, opts = {}) {
  assert("Pattern", node, opts);
}

function assertClass(node, opts = {}) {
  assert("Class", node, opts);
}

function assertModuleDeclaration(node, opts = {}) {
  assert("ModuleDeclaration", node, opts);
}

function assertExportDeclaration(node, opts = {}) {
  assert("ExportDeclaration", node, opts);
}

function assertModuleSpecifier(node, opts = {}) {
  assert("ModuleSpecifier", node, opts);
}

function assertFlow(node, opts = {}) {
  assert("Flow", node, opts);
}

function assertFlowType(node, opts = {}) {
  assert("FlowType", node, opts);
}

function assertFlowBaseAnnotation(node, opts = {}) {
  assert("FlowBaseAnnotation", node, opts);
}

function assertFlowDeclaration(node, opts = {}) {
  assert("FlowDeclaration", node, opts);
}

function assertFlowPredicate(node, opts = {}) {
  assert("FlowPredicate", node, opts);
}

function assertEnumBody(node, opts = {}) {
  assert("EnumBody", node, opts);
}

function assertEnumMember(node, opts = {}) {
  assert("EnumMember", node, opts);
}

function assertJSX(node, opts = {}) {
  assert("JSX", node, opts);
}

function assertPrivate(node, opts = {}) {
  assert("Private", node, opts);
}

function assertTSTypeElement(node, opts = {}) {
  assert("TSTypeElement", node, opts);
}

function assertTSType(node, opts = {}) {
  assert("TSType", node, opts);
}

function assertNumberLiteral(node, opts) {
  console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
  assert("NumberLiteral", node, opts);
}

function assertRegexLiteral(node, opts) {
  console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
  assert("RegexLiteral", node, opts);
}

function assertRestProperty(node, opts) {
  console.trace("The node type RestProperty has been renamed to RestElement");
  assert("RestProperty", node, opts);
}

function assertSpreadProperty(node, opts) {
  console.trace("The node type SpreadProperty has been renamed to SpreadElement");
  assert("SpreadProperty", node, opts);
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/builders/builder.js":
/*!*********************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/builders/builder.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = builder;

var _clone = _interopRequireDefault(__webpack_require__(/*! lodash/clone */ "../babel-plugin-effects/node_modules/lodash/clone.js"));

var _definitions = __webpack_require__(/*! ../definitions */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/index.js");

var _validate = _interopRequireDefault(__webpack_require__(/*! ../validators/validate */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/validate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function builder(type, ...args) {
  const keys = _definitions.BUILDER_KEYS[type];
  const countArgs = args.length;

  if (countArgs > keys.length) {
    throw new Error(`${type}: Too many arguments passed. Received ${countArgs} but can receive no more than ${keys.length}`);
  }

  const node = {
    type
  };
  let i = 0;
  keys.forEach(key => {
    const field = _definitions.NODE_FIELDS[type][key];
    let arg;
    if (i < countArgs) arg = args[i];
    if (arg === undefined) arg = (0, _clone.default)(field.default);
    node[key] = arg;
    i++;
  });

  for (const key of Object.keys(node)) {
    (0, _validate.default)(node, key, node[key]);
  }

  return node;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/builders/flow/createTypeAnnotationBasedOnTypeof.js":
/*!****************************************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/builders/flow/createTypeAnnotationBasedOnTypeof.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTypeAnnotationBasedOnTypeof;

var _generated = __webpack_require__(/*! ../generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/builders/generated/index.js");

function createTypeAnnotationBasedOnTypeof(type) {
  if (type === "string") {
    return (0, _generated.stringTypeAnnotation)();
  } else if (type === "number") {
    return (0, _generated.numberTypeAnnotation)();
  } else if (type === "undefined") {
    return (0, _generated.voidTypeAnnotation)();
  } else if (type === "boolean") {
    return (0, _generated.booleanTypeAnnotation)();
  } else if (type === "function") {
    return (0, _generated.genericTypeAnnotation)((0, _generated.identifier)("Function"));
  } else if (type === "object") {
    return (0, _generated.genericTypeAnnotation)((0, _generated.identifier)("Object"));
  } else if (type === "symbol") {
    return (0, _generated.genericTypeAnnotation)((0, _generated.identifier)("Symbol"));
  } else {
    throw new Error("Invalid typeof value");
  }
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/builders/flow/createUnionTypeAnnotation.js":
/*!********************************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/builders/flow/createUnionTypeAnnotation.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createUnionTypeAnnotation;

var _generated = __webpack_require__(/*! ../generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/builders/generated/index.js");

var _removeTypeDuplicates = _interopRequireDefault(__webpack_require__(/*! ../../modifications/flow/removeTypeDuplicates */ "../babel-plugin-effects/node_modules/@babel/types/lib/modifications/flow/removeTypeDuplicates.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createUnionTypeAnnotation(types) {
  const flattened = (0, _removeTypeDuplicates.default)(types);

  if (flattened.length === 1) {
    return flattened[0];
  } else {
    return (0, _generated.unionTypeAnnotation)(flattened);
  }
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/builders/generated/index.js":
/*!*****************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/builders/generated/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayExpression = exports.ArrayExpression = ArrayExpression;
exports.assignmentExpression = exports.AssignmentExpression = AssignmentExpression;
exports.binaryExpression = exports.BinaryExpression = BinaryExpression;
exports.interpreterDirective = exports.InterpreterDirective = InterpreterDirective;
exports.directive = exports.Directive = Directive;
exports.directiveLiteral = exports.DirectiveLiteral = DirectiveLiteral;
exports.blockStatement = exports.BlockStatement = BlockStatement;
exports.breakStatement = exports.BreakStatement = BreakStatement;
exports.callExpression = exports.CallExpression = CallExpression;
exports.catchClause = exports.CatchClause = CatchClause;
exports.conditionalExpression = exports.ConditionalExpression = ConditionalExpression;
exports.continueStatement = exports.ContinueStatement = ContinueStatement;
exports.debuggerStatement = exports.DebuggerStatement = DebuggerStatement;
exports.doWhileStatement = exports.DoWhileStatement = DoWhileStatement;
exports.emptyStatement = exports.EmptyStatement = EmptyStatement;
exports.expressionStatement = exports.ExpressionStatement = ExpressionStatement;
exports.file = exports.File = File;
exports.forInStatement = exports.ForInStatement = ForInStatement;
exports.forStatement = exports.ForStatement = ForStatement;
exports.functionDeclaration = exports.FunctionDeclaration = FunctionDeclaration;
exports.functionExpression = exports.FunctionExpression = FunctionExpression;
exports.identifier = exports.Identifier = Identifier;
exports.ifStatement = exports.IfStatement = IfStatement;
exports.labeledStatement = exports.LabeledStatement = LabeledStatement;
exports.stringLiteral = exports.StringLiteral = StringLiteral;
exports.numericLiteral = exports.NumericLiteral = NumericLiteral;
exports.nullLiteral = exports.NullLiteral = NullLiteral;
exports.booleanLiteral = exports.BooleanLiteral = BooleanLiteral;
exports.regExpLiteral = exports.RegExpLiteral = RegExpLiteral;
exports.logicalExpression = exports.LogicalExpression = LogicalExpression;
exports.memberExpression = exports.MemberExpression = MemberExpression;
exports.newExpression = exports.NewExpression = NewExpression;
exports.program = exports.Program = Program;
exports.objectExpression = exports.ObjectExpression = ObjectExpression;
exports.objectMethod = exports.ObjectMethod = ObjectMethod;
exports.objectProperty = exports.ObjectProperty = ObjectProperty;
exports.restElement = exports.RestElement = RestElement;
exports.returnStatement = exports.ReturnStatement = ReturnStatement;
exports.sequenceExpression = exports.SequenceExpression = SequenceExpression;
exports.parenthesizedExpression = exports.ParenthesizedExpression = ParenthesizedExpression;
exports.switchCase = exports.SwitchCase = SwitchCase;
exports.switchStatement = exports.SwitchStatement = SwitchStatement;
exports.thisExpression = exports.ThisExpression = ThisExpression;
exports.throwStatement = exports.ThrowStatement = ThrowStatement;
exports.tryStatement = exports.TryStatement = TryStatement;
exports.unaryExpression = exports.UnaryExpression = UnaryExpression;
exports.updateExpression = exports.UpdateExpression = UpdateExpression;
exports.variableDeclaration = exports.VariableDeclaration = VariableDeclaration;
exports.variableDeclarator = exports.VariableDeclarator = VariableDeclarator;
exports.whileStatement = exports.WhileStatement = WhileStatement;
exports.withStatement = exports.WithStatement = WithStatement;
exports.assignmentPattern = exports.AssignmentPattern = AssignmentPattern;
exports.arrayPattern = exports.ArrayPattern = ArrayPattern;
exports.arrowFunctionExpression = exports.ArrowFunctionExpression = ArrowFunctionExpression;
exports.classBody = exports.ClassBody = ClassBody;
exports.classExpression = exports.ClassExpression = ClassExpression;
exports.classDeclaration = exports.ClassDeclaration = ClassDeclaration;
exports.exportAllDeclaration = exports.ExportAllDeclaration = ExportAllDeclaration;
exports.exportDefaultDeclaration = exports.ExportDefaultDeclaration = ExportDefaultDeclaration;
exports.exportNamedDeclaration = exports.ExportNamedDeclaration = ExportNamedDeclaration;
exports.exportSpecifier = exports.ExportSpecifier = ExportSpecifier;
exports.forOfStatement = exports.ForOfStatement = ForOfStatement;
exports.importDeclaration = exports.ImportDeclaration = ImportDeclaration;
exports.importDefaultSpecifier = exports.ImportDefaultSpecifier = ImportDefaultSpecifier;
exports.importNamespaceSpecifier = exports.ImportNamespaceSpecifier = ImportNamespaceSpecifier;
exports.importSpecifier = exports.ImportSpecifier = ImportSpecifier;
exports.metaProperty = exports.MetaProperty = MetaProperty;
exports.classMethod = exports.ClassMethod = ClassMethod;
exports.objectPattern = exports.ObjectPattern = ObjectPattern;
exports.spreadElement = exports.SpreadElement = SpreadElement;
exports.super = exports.Super = Super;
exports.taggedTemplateExpression = exports.TaggedTemplateExpression = TaggedTemplateExpression;
exports.templateElement = exports.TemplateElement = TemplateElement;
exports.templateLiteral = exports.TemplateLiteral = TemplateLiteral;
exports.yieldExpression = exports.YieldExpression = YieldExpression;
exports.anyTypeAnnotation = exports.AnyTypeAnnotation = AnyTypeAnnotation;
exports.arrayTypeAnnotation = exports.ArrayTypeAnnotation = ArrayTypeAnnotation;
exports.booleanTypeAnnotation = exports.BooleanTypeAnnotation = BooleanTypeAnnotation;
exports.booleanLiteralTypeAnnotation = exports.BooleanLiteralTypeAnnotation = BooleanLiteralTypeAnnotation;
exports.nullLiteralTypeAnnotation = exports.NullLiteralTypeAnnotation = NullLiteralTypeAnnotation;
exports.classImplements = exports.ClassImplements = ClassImplements;
exports.declareClass = exports.DeclareClass = DeclareClass;
exports.declareFunction = exports.DeclareFunction = DeclareFunction;
exports.declareInterface = exports.DeclareInterface = DeclareInterface;
exports.declareModule = exports.DeclareModule = DeclareModule;
exports.declareModuleExports = exports.DeclareModuleExports = DeclareModuleExports;
exports.declareTypeAlias = exports.DeclareTypeAlias = DeclareTypeAlias;
exports.declareOpaqueType = exports.DeclareOpaqueType = DeclareOpaqueType;
exports.declareVariable = exports.DeclareVariable = DeclareVariable;
exports.declareExportDeclaration = exports.DeclareExportDeclaration = DeclareExportDeclaration;
exports.declareExportAllDeclaration = exports.DeclareExportAllDeclaration = DeclareExportAllDeclaration;
exports.declaredPredicate = exports.DeclaredPredicate = DeclaredPredicate;
exports.existsTypeAnnotation = exports.ExistsTypeAnnotation = ExistsTypeAnnotation;
exports.functionTypeAnnotation = exports.FunctionTypeAnnotation = FunctionTypeAnnotation;
exports.functionTypeParam = exports.FunctionTypeParam = FunctionTypeParam;
exports.genericTypeAnnotation = exports.GenericTypeAnnotation = GenericTypeAnnotation;
exports.inferredPredicate = exports.InferredPredicate = InferredPredicate;
exports.interfaceExtends = exports.InterfaceExtends = InterfaceExtends;
exports.interfaceDeclaration = exports.InterfaceDeclaration = InterfaceDeclaration;
exports.interfaceTypeAnnotation = exports.InterfaceTypeAnnotation = InterfaceTypeAnnotation;
exports.intersectionTypeAnnotation = exports.IntersectionTypeAnnotation = IntersectionTypeAnnotation;
exports.mixedTypeAnnotation = exports.MixedTypeAnnotation = MixedTypeAnnotation;
exports.emptyTypeAnnotation = exports.EmptyTypeAnnotation = EmptyTypeAnnotation;
exports.nullableTypeAnnotation = exports.NullableTypeAnnotation = NullableTypeAnnotation;
exports.numberLiteralTypeAnnotation = exports.NumberLiteralTypeAnnotation = NumberLiteralTypeAnnotation;
exports.numberTypeAnnotation = exports.NumberTypeAnnotation = NumberTypeAnnotation;
exports.objectTypeAnnotation = exports.ObjectTypeAnnotation = ObjectTypeAnnotation;
exports.objectTypeInternalSlot = exports.ObjectTypeInternalSlot = ObjectTypeInternalSlot;
exports.objectTypeCallProperty = exports.ObjectTypeCallProperty = ObjectTypeCallProperty;
exports.objectTypeIndexer = exports.ObjectTypeIndexer = ObjectTypeIndexer;
exports.objectTypeProperty = exports.ObjectTypeProperty = ObjectTypeProperty;
exports.objectTypeSpreadProperty = exports.ObjectTypeSpreadProperty = ObjectTypeSpreadProperty;
exports.opaqueType = exports.OpaqueType = OpaqueType;
exports.qualifiedTypeIdentifier = exports.QualifiedTypeIdentifier = QualifiedTypeIdentifier;
exports.stringLiteralTypeAnnotation = exports.StringLiteralTypeAnnotation = StringLiteralTypeAnnotation;
exports.stringTypeAnnotation = exports.StringTypeAnnotation = StringTypeAnnotation;
exports.thisTypeAnnotation = exports.ThisTypeAnnotation = ThisTypeAnnotation;
exports.tupleTypeAnnotation = exports.TupleTypeAnnotation = TupleTypeAnnotation;
exports.typeofTypeAnnotation = exports.TypeofTypeAnnotation = TypeofTypeAnnotation;
exports.typeAlias = exports.TypeAlias = TypeAlias;
exports.typeAnnotation = exports.TypeAnnotation = TypeAnnotation;
exports.typeCastExpression = exports.TypeCastExpression = TypeCastExpression;
exports.typeParameter = exports.TypeParameter = TypeParameter;
exports.typeParameterDeclaration = exports.TypeParameterDeclaration = TypeParameterDeclaration;
exports.typeParameterInstantiation = exports.TypeParameterInstantiation = TypeParameterInstantiation;
exports.unionTypeAnnotation = exports.UnionTypeAnnotation = UnionTypeAnnotation;
exports.variance = exports.Variance = Variance;
exports.voidTypeAnnotation = exports.VoidTypeAnnotation = VoidTypeAnnotation;
exports.enumDeclaration = exports.EnumDeclaration = EnumDeclaration;
exports.enumBooleanBody = exports.EnumBooleanBody = EnumBooleanBody;
exports.enumNumberBody = exports.EnumNumberBody = EnumNumberBody;
exports.enumStringBody = exports.EnumStringBody = EnumStringBody;
exports.enumSymbolBody = exports.EnumSymbolBody = EnumSymbolBody;
exports.enumBooleanMember = exports.EnumBooleanMember = EnumBooleanMember;
exports.enumNumberMember = exports.EnumNumberMember = EnumNumberMember;
exports.enumStringMember = exports.EnumStringMember = EnumStringMember;
exports.enumDefaultedMember = exports.EnumDefaultedMember = EnumDefaultedMember;
exports.jSXAttribute = exports.jsxAttribute = exports.JSXAttribute = JSXAttribute;
exports.jSXClosingElement = exports.jsxClosingElement = exports.JSXClosingElement = JSXClosingElement;
exports.jSXElement = exports.jsxElement = exports.JSXElement = JSXElement;
exports.jSXEmptyExpression = exports.jsxEmptyExpression = exports.JSXEmptyExpression = JSXEmptyExpression;
exports.jSXExpressionContainer = exports.jsxExpressionContainer = exports.JSXExpressionContainer = JSXExpressionContainer;
exports.jSXSpreadChild = exports.jsxSpreadChild = exports.JSXSpreadChild = JSXSpreadChild;
exports.jSXIdentifier = exports.jsxIdentifier = exports.JSXIdentifier = JSXIdentifier;
exports.jSXMemberExpression = exports.jsxMemberExpression = exports.JSXMemberExpression = JSXMemberExpression;
exports.jSXNamespacedName = exports.jsxNamespacedName = exports.JSXNamespacedName = JSXNamespacedName;
exports.jSXOpeningElement = exports.jsxOpeningElement = exports.JSXOpeningElement = JSXOpeningElement;
exports.jSXSpreadAttribute = exports.jsxSpreadAttribute = exports.JSXSpreadAttribute = JSXSpreadAttribute;
exports.jSXText = exports.jsxText = exports.JSXText = JSXText;
exports.jSXFragment = exports.jsxFragment = exports.JSXFragment = JSXFragment;
exports.jSXOpeningFragment = exports.jsxOpeningFragment = exports.JSXOpeningFragment = JSXOpeningFragment;
exports.jSXClosingFragment = exports.jsxClosingFragment = exports.JSXClosingFragment = JSXClosingFragment;
exports.noop = exports.Noop = Noop;
exports.placeholder = exports.Placeholder = Placeholder;
exports.v8IntrinsicIdentifier = exports.V8IntrinsicIdentifier = V8IntrinsicIdentifier;
exports.argumentPlaceholder = exports.ArgumentPlaceholder = ArgumentPlaceholder;
exports.awaitExpression = exports.AwaitExpression = AwaitExpression;
exports.bindExpression = exports.BindExpression = BindExpression;
exports.classProperty = exports.ClassProperty = ClassProperty;
exports.optionalMemberExpression = exports.OptionalMemberExpression = OptionalMemberExpression;
exports.pipelineTopicExpression = exports.PipelineTopicExpression = PipelineTopicExpression;
exports.pipelineBareFunction = exports.PipelineBareFunction = PipelineBareFunction;
exports.pipelinePrimaryTopicReference = exports.PipelinePrimaryTopicReference = PipelinePrimaryTopicReference;
exports.optionalCallExpression = exports.OptionalCallExpression = OptionalCallExpression;
exports.classPrivateProperty = exports.ClassPrivateProperty = ClassPrivateProperty;
exports.classPrivateMethod = exports.ClassPrivateMethod = ClassPrivateMethod;
exports.import = exports.Import = Import;
exports.decorator = exports.Decorator = Decorator;
exports.doExpression = exports.DoExpression = DoExpression;
exports.exportDefaultSpecifier = exports.ExportDefaultSpecifier = ExportDefaultSpecifier;
exports.exportNamespaceSpecifier = exports.ExportNamespaceSpecifier = ExportNamespaceSpecifier;
exports.privateName = exports.PrivateName = PrivateName;
exports.bigIntLiteral = exports.BigIntLiteral = BigIntLiteral;
exports.tSParameterProperty = exports.tsParameterProperty = exports.TSParameterProperty = TSParameterProperty;
exports.tSDeclareFunction = exports.tsDeclareFunction = exports.TSDeclareFunction = TSDeclareFunction;
exports.tSDeclareMethod = exports.tsDeclareMethod = exports.TSDeclareMethod = TSDeclareMethod;
exports.tSQualifiedName = exports.tsQualifiedName = exports.TSQualifiedName = TSQualifiedName;
exports.tSCallSignatureDeclaration = exports.tsCallSignatureDeclaration = exports.TSCallSignatureDeclaration = TSCallSignatureDeclaration;
exports.tSConstructSignatureDeclaration = exports.tsConstructSignatureDeclaration = exports.TSConstructSignatureDeclaration = TSConstructSignatureDeclaration;
exports.tSPropertySignature = exports.tsPropertySignature = exports.TSPropertySignature = TSPropertySignature;
exports.tSMethodSignature = exports.tsMethodSignature = exports.TSMethodSignature = TSMethodSignature;
exports.tSIndexSignature = exports.tsIndexSignature = exports.TSIndexSignature = TSIndexSignature;
exports.tSAnyKeyword = exports.tsAnyKeyword = exports.TSAnyKeyword = TSAnyKeyword;
exports.tSBooleanKeyword = exports.tsBooleanKeyword = exports.TSBooleanKeyword = TSBooleanKeyword;
exports.tSBigIntKeyword = exports.tsBigIntKeyword = exports.TSBigIntKeyword = TSBigIntKeyword;
exports.tSNeverKeyword = exports.tsNeverKeyword = exports.TSNeverKeyword = TSNeverKeyword;
exports.tSNullKeyword = exports.tsNullKeyword = exports.TSNullKeyword = TSNullKeyword;
exports.tSNumberKeyword = exports.tsNumberKeyword = exports.TSNumberKeyword = TSNumberKeyword;
exports.tSObjectKeyword = exports.tsObjectKeyword = exports.TSObjectKeyword = TSObjectKeyword;
exports.tSStringKeyword = exports.tsStringKeyword = exports.TSStringKeyword = TSStringKeyword;
exports.tSSymbolKeyword = exports.tsSymbolKeyword = exports.TSSymbolKeyword = TSSymbolKeyword;
exports.tSUndefinedKeyword = exports.tsUndefinedKeyword = exports.TSUndefinedKeyword = TSUndefinedKeyword;
exports.tSUnknownKeyword = exports.tsUnknownKeyword = exports.TSUnknownKeyword = TSUnknownKeyword;
exports.tSVoidKeyword = exports.tsVoidKeyword = exports.TSVoidKeyword = TSVoidKeyword;
exports.tSThisType = exports.tsThisType = exports.TSThisType = TSThisType;
exports.tSFunctionType = exports.tsFunctionType = exports.TSFunctionType = TSFunctionType;
exports.tSConstructorType = exports.tsConstructorType = exports.TSConstructorType = TSConstructorType;
exports.tSTypeReference = exports.tsTypeReference = exports.TSTypeReference = TSTypeReference;
exports.tSTypePredicate = exports.tsTypePredicate = exports.TSTypePredicate = TSTypePredicate;
exports.tSTypeQuery = exports.tsTypeQuery = exports.TSTypeQuery = TSTypeQuery;
exports.tSTypeLiteral = exports.tsTypeLiteral = exports.TSTypeLiteral = TSTypeLiteral;
exports.tSArrayType = exports.tsArrayType = exports.TSArrayType = TSArrayType;
exports.tSTupleType = exports.tsTupleType = exports.TSTupleType = TSTupleType;
exports.tSOptionalType = exports.tsOptionalType = exports.TSOptionalType = TSOptionalType;
exports.tSRestType = exports.tsRestType = exports.TSRestType = TSRestType;
exports.tSUnionType = exports.tsUnionType = exports.TSUnionType = TSUnionType;
exports.tSIntersectionType = exports.tsIntersectionType = exports.TSIntersectionType = TSIntersectionType;
exports.tSConditionalType = exports.tsConditionalType = exports.TSConditionalType = TSConditionalType;
exports.tSInferType = exports.tsInferType = exports.TSInferType = TSInferType;
exports.tSParenthesizedType = exports.tsParenthesizedType = exports.TSParenthesizedType = TSParenthesizedType;
exports.tSTypeOperator = exports.tsTypeOperator = exports.TSTypeOperator = TSTypeOperator;
exports.tSIndexedAccessType = exports.tsIndexedAccessType = exports.TSIndexedAccessType = TSIndexedAccessType;
exports.tSMappedType = exports.tsMappedType = exports.TSMappedType = TSMappedType;
exports.tSLiteralType = exports.tsLiteralType = exports.TSLiteralType = TSLiteralType;
exports.tSExpressionWithTypeArguments = exports.tsExpressionWithTypeArguments = exports.TSExpressionWithTypeArguments = TSExpressionWithTypeArguments;
exports.tSInterfaceDeclaration = exports.tsInterfaceDeclaration = exports.TSInterfaceDeclaration = TSInterfaceDeclaration;
exports.tSInterfaceBody = exports.tsInterfaceBody = exports.TSInterfaceBody = TSInterfaceBody;
exports.tSTypeAliasDeclaration = exports.tsTypeAliasDeclaration = exports.TSTypeAliasDeclaration = TSTypeAliasDeclaration;
exports.tSAsExpression = exports.tsAsExpression = exports.TSAsExpression = TSAsExpression;
exports.tSTypeAssertion = exports.tsTypeAssertion = exports.TSTypeAssertion = TSTypeAssertion;
exports.tSEnumDeclaration = exports.tsEnumDeclaration = exports.TSEnumDeclaration = TSEnumDeclaration;
exports.tSEnumMember = exports.tsEnumMember = exports.TSEnumMember = TSEnumMember;
exports.tSModuleDeclaration = exports.tsModuleDeclaration = exports.TSModuleDeclaration = TSModuleDeclaration;
exports.tSModuleBlock = exports.tsModuleBlock = exports.TSModuleBlock = TSModuleBlock;
exports.tSImportType = exports.tsImportType = exports.TSImportType = TSImportType;
exports.tSImportEqualsDeclaration = exports.tsImportEqualsDeclaration = exports.TSImportEqualsDeclaration = TSImportEqualsDeclaration;
exports.tSExternalModuleReference = exports.tsExternalModuleReference = exports.TSExternalModuleReference = TSExternalModuleReference;
exports.tSNonNullExpression = exports.tsNonNullExpression = exports.TSNonNullExpression = TSNonNullExpression;
exports.tSExportAssignment = exports.tsExportAssignment = exports.TSExportAssignment = TSExportAssignment;
exports.tSNamespaceExportDeclaration = exports.tsNamespaceExportDeclaration = exports.TSNamespaceExportDeclaration = TSNamespaceExportDeclaration;
exports.tSTypeAnnotation = exports.tsTypeAnnotation = exports.TSTypeAnnotation = TSTypeAnnotation;
exports.tSTypeParameterInstantiation = exports.tsTypeParameterInstantiation = exports.TSTypeParameterInstantiation = TSTypeParameterInstantiation;
exports.tSTypeParameterDeclaration = exports.tsTypeParameterDeclaration = exports.TSTypeParameterDeclaration = TSTypeParameterDeclaration;
exports.tSTypeParameter = exports.tsTypeParameter = exports.TSTypeParameter = TSTypeParameter;
exports.numberLiteral = exports.NumberLiteral = NumberLiteral;
exports.regexLiteral = exports.RegexLiteral = RegexLiteral;
exports.restProperty = exports.RestProperty = RestProperty;
exports.spreadProperty = exports.SpreadProperty = SpreadProperty;

var _builder = _interopRequireDefault(__webpack_require__(/*! ../builder */ "../babel-plugin-effects/node_modules/@babel/types/lib/builders/builder.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ArrayExpression(...args) {
  return (0, _builder.default)("ArrayExpression", ...args);
}

function AssignmentExpression(...args) {
  return (0, _builder.default)("AssignmentExpression", ...args);
}

function BinaryExpression(...args) {
  return (0, _builder.default)("BinaryExpression", ...args);
}

function InterpreterDirective(...args) {
  return (0, _builder.default)("InterpreterDirective", ...args);
}

function Directive(...args) {
  return (0, _builder.default)("Directive", ...args);
}

function DirectiveLiteral(...args) {
  return (0, _builder.default)("DirectiveLiteral", ...args);
}

function BlockStatement(...args) {
  return (0, _builder.default)("BlockStatement", ...args);
}

function BreakStatement(...args) {
  return (0, _builder.default)("BreakStatement", ...args);
}

function CallExpression(...args) {
  return (0, _builder.default)("CallExpression", ...args);
}

function CatchClause(...args) {
  return (0, _builder.default)("CatchClause", ...args);
}

function ConditionalExpression(...args) {
  return (0, _builder.default)("ConditionalExpression", ...args);
}

function ContinueStatement(...args) {
  return (0, _builder.default)("ContinueStatement", ...args);
}

function DebuggerStatement(...args) {
  return (0, _builder.default)("DebuggerStatement", ...args);
}

function DoWhileStatement(...args) {
  return (0, _builder.default)("DoWhileStatement", ...args);
}

function EmptyStatement(...args) {
  return (0, _builder.default)("EmptyStatement", ...args);
}

function ExpressionStatement(...args) {
  return (0, _builder.default)("ExpressionStatement", ...args);
}

function File(...args) {
  return (0, _builder.default)("File", ...args);
}

function ForInStatement(...args) {
  return (0, _builder.default)("ForInStatement", ...args);
}

function ForStatement(...args) {
  return (0, _builder.default)("ForStatement", ...args);
}

function FunctionDeclaration(...args) {
  return (0, _builder.default)("FunctionDeclaration", ...args);
}

function FunctionExpression(...args) {
  return (0, _builder.default)("FunctionExpression", ...args);
}

function Identifier(...args) {
  return (0, _builder.default)("Identifier", ...args);
}

function IfStatement(...args) {
  return (0, _builder.default)("IfStatement", ...args);
}

function LabeledStatement(...args) {
  return (0, _builder.default)("LabeledStatement", ...args);
}

function StringLiteral(...args) {
  return (0, _builder.default)("StringLiteral", ...args);
}

function NumericLiteral(...args) {
  return (0, _builder.default)("NumericLiteral", ...args);
}

function NullLiteral(...args) {
  return (0, _builder.default)("NullLiteral", ...args);
}

function BooleanLiteral(...args) {
  return (0, _builder.default)("BooleanLiteral", ...args);
}

function RegExpLiteral(...args) {
  return (0, _builder.default)("RegExpLiteral", ...args);
}

function LogicalExpression(...args) {
  return (0, _builder.default)("LogicalExpression", ...args);
}

function MemberExpression(...args) {
  return (0, _builder.default)("MemberExpression", ...args);
}

function NewExpression(...args) {
  return (0, _builder.default)("NewExpression", ...args);
}

function Program(...args) {
  return (0, _builder.default)("Program", ...args);
}

function ObjectExpression(...args) {
  return (0, _builder.default)("ObjectExpression", ...args);
}

function ObjectMethod(...args) {
  return (0, _builder.default)("ObjectMethod", ...args);
}

function ObjectProperty(...args) {
  return (0, _builder.default)("ObjectProperty", ...args);
}

function RestElement(...args) {
  return (0, _builder.default)("RestElement", ...args);
}

function ReturnStatement(...args) {
  return (0, _builder.default)("ReturnStatement", ...args);
}

function SequenceExpression(...args) {
  return (0, _builder.default)("SequenceExpression", ...args);
}

function ParenthesizedExpression(...args) {
  return (0, _builder.default)("ParenthesizedExpression", ...args);
}

function SwitchCase(...args) {
  return (0, _builder.default)("SwitchCase", ...args);
}

function SwitchStatement(...args) {
  return (0, _builder.default)("SwitchStatement", ...args);
}

function ThisExpression(...args) {
  return (0, _builder.default)("ThisExpression", ...args);
}

function ThrowStatement(...args) {
  return (0, _builder.default)("ThrowStatement", ...args);
}

function TryStatement(...args) {
  return (0, _builder.default)("TryStatement", ...args);
}

function UnaryExpression(...args) {
  return (0, _builder.default)("UnaryExpression", ...args);
}

function UpdateExpression(...args) {
  return (0, _builder.default)("UpdateExpression", ...args);
}

function VariableDeclaration(...args) {
  return (0, _builder.default)("VariableDeclaration", ...args);
}

function VariableDeclarator(...args) {
  return (0, _builder.default)("VariableDeclarator", ...args);
}

function WhileStatement(...args) {
  return (0, _builder.default)("WhileStatement", ...args);
}

function WithStatement(...args) {
  return (0, _builder.default)("WithStatement", ...args);
}

function AssignmentPattern(...args) {
  return (0, _builder.default)("AssignmentPattern", ...args);
}

function ArrayPattern(...args) {
  return (0, _builder.default)("ArrayPattern", ...args);
}

function ArrowFunctionExpression(...args) {
  return (0, _builder.default)("ArrowFunctionExpression", ...args);
}

function ClassBody(...args) {
  return (0, _builder.default)("ClassBody", ...args);
}

function ClassExpression(...args) {
  return (0, _builder.default)("ClassExpression", ...args);
}

function ClassDeclaration(...args) {
  return (0, _builder.default)("ClassDeclaration", ...args);
}

function ExportAllDeclaration(...args) {
  return (0, _builder.default)("ExportAllDeclaration", ...args);
}

function ExportDefaultDeclaration(...args) {
  return (0, _builder.default)("ExportDefaultDeclaration", ...args);
}

function ExportNamedDeclaration(...args) {
  return (0, _builder.default)("ExportNamedDeclaration", ...args);
}

function ExportSpecifier(...args) {
  return (0, _builder.default)("ExportSpecifier", ...args);
}

function ForOfStatement(...args) {
  return (0, _builder.default)("ForOfStatement", ...args);
}

function ImportDeclaration(...args) {
  return (0, _builder.default)("ImportDeclaration", ...args);
}

function ImportDefaultSpecifier(...args) {
  return (0, _builder.default)("ImportDefaultSpecifier", ...args);
}

function ImportNamespaceSpecifier(...args) {
  return (0, _builder.default)("ImportNamespaceSpecifier", ...args);
}

function ImportSpecifier(...args) {
  return (0, _builder.default)("ImportSpecifier", ...args);
}

function MetaProperty(...args) {
  return (0, _builder.default)("MetaProperty", ...args);
}

function ClassMethod(...args) {
  return (0, _builder.default)("ClassMethod", ...args);
}

function ObjectPattern(...args) {
  return (0, _builder.default)("ObjectPattern", ...args);
}

function SpreadElement(...args) {
  return (0, _builder.default)("SpreadElement", ...args);
}

function Super(...args) {
  return (0, _builder.default)("Super", ...args);
}

function TaggedTemplateExpression(...args) {
  return (0, _builder.default)("TaggedTemplateExpression", ...args);
}

function TemplateElement(...args) {
  return (0, _builder.default)("TemplateElement", ...args);
}

function TemplateLiteral(...args) {
  return (0, _builder.default)("TemplateLiteral", ...args);
}

function YieldExpression(...args) {
  return (0, _builder.default)("YieldExpression", ...args);
}

function AnyTypeAnnotation(...args) {
  return (0, _builder.default)("AnyTypeAnnotation", ...args);
}

function ArrayTypeAnnotation(...args) {
  return (0, _builder.default)("ArrayTypeAnnotation", ...args);
}

function BooleanTypeAnnotation(...args) {
  return (0, _builder.default)("BooleanTypeAnnotation", ...args);
}

function BooleanLiteralTypeAnnotation(...args) {
  return (0, _builder.default)("BooleanLiteralTypeAnnotation", ...args);
}

function NullLiteralTypeAnnotation(...args) {
  return (0, _builder.default)("NullLiteralTypeAnnotation", ...args);
}

function ClassImplements(...args) {
  return (0, _builder.default)("ClassImplements", ...args);
}

function DeclareClass(...args) {
  return (0, _builder.default)("DeclareClass", ...args);
}

function DeclareFunction(...args) {
  return (0, _builder.default)("DeclareFunction", ...args);
}

function DeclareInterface(...args) {
  return (0, _builder.default)("DeclareInterface", ...args);
}

function DeclareModule(...args) {
  return (0, _builder.default)("DeclareModule", ...args);
}

function DeclareModuleExports(...args) {
  return (0, _builder.default)("DeclareModuleExports", ...args);
}

function DeclareTypeAlias(...args) {
  return (0, _builder.default)("DeclareTypeAlias", ...args);
}

function DeclareOpaqueType(...args) {
  return (0, _builder.default)("DeclareOpaqueType", ...args);
}

function DeclareVariable(...args) {
  return (0, _builder.default)("DeclareVariable", ...args);
}

function DeclareExportDeclaration(...args) {
  return (0, _builder.default)("DeclareExportDeclaration", ...args);
}

function DeclareExportAllDeclaration(...args) {
  return (0, _builder.default)("DeclareExportAllDeclaration", ...args);
}

function DeclaredPredicate(...args) {
  return (0, _builder.default)("DeclaredPredicate", ...args);
}

function ExistsTypeAnnotation(...args) {
  return (0, _builder.default)("ExistsTypeAnnotation", ...args);
}

function FunctionTypeAnnotation(...args) {
  return (0, _builder.default)("FunctionTypeAnnotation", ...args);
}

function FunctionTypeParam(...args) {
  return (0, _builder.default)("FunctionTypeParam", ...args);
}

function GenericTypeAnnotation(...args) {
  return (0, _builder.default)("GenericTypeAnnotation", ...args);
}

function InferredPredicate(...args) {
  return (0, _builder.default)("InferredPredicate", ...args);
}

function InterfaceExtends(...args) {
  return (0, _builder.default)("InterfaceExtends", ...args);
}

function InterfaceDeclaration(...args) {
  return (0, _builder.default)("InterfaceDeclaration", ...args);
}

function InterfaceTypeAnnotation(...args) {
  return (0, _builder.default)("InterfaceTypeAnnotation", ...args);
}

function IntersectionTypeAnnotation(...args) {
  return (0, _builder.default)("IntersectionTypeAnnotation", ...args);
}

function MixedTypeAnnotation(...args) {
  return (0, _builder.default)("MixedTypeAnnotation", ...args);
}

function EmptyTypeAnnotation(...args) {
  return (0, _builder.default)("EmptyTypeAnnotation", ...args);
}

function NullableTypeAnnotation(...args) {
  return (0, _builder.default)("NullableTypeAnnotation", ...args);
}

function NumberLiteralTypeAnnotation(...args) {
  return (0, _builder.default)("NumberLiteralTypeAnnotation", ...args);
}

function NumberTypeAnnotation(...args) {
  return (0, _builder.default)("NumberTypeAnnotation", ...args);
}

function ObjectTypeAnnotation(...args) {
  return (0, _builder.default)("ObjectTypeAnnotation", ...args);
}

function ObjectTypeInternalSlot(...args) {
  return (0, _builder.default)("ObjectTypeInternalSlot", ...args);
}

function ObjectTypeCallProperty(...args) {
  return (0, _builder.default)("ObjectTypeCallProperty", ...args);
}

function ObjectTypeIndexer(...args) {
  return (0, _builder.default)("ObjectTypeIndexer", ...args);
}

function ObjectTypeProperty(...args) {
  return (0, _builder.default)("ObjectTypeProperty", ...args);
}

function ObjectTypeSpreadProperty(...args) {
  return (0, _builder.default)("ObjectTypeSpreadProperty", ...args);
}

function OpaqueType(...args) {
  return (0, _builder.default)("OpaqueType", ...args);
}

function QualifiedTypeIdentifier(...args) {
  return (0, _builder.default)("QualifiedTypeIdentifier", ...args);
}

function StringLiteralTypeAnnotation(...args) {
  return (0, _builder.default)("StringLiteralTypeAnnotation", ...args);
}

function StringTypeAnnotation(...args) {
  return (0, _builder.default)("StringTypeAnnotation", ...args);
}

function ThisTypeAnnotation(...args) {
  return (0, _builder.default)("ThisTypeAnnotation", ...args);
}

function TupleTypeAnnotation(...args) {
  return (0, _builder.default)("TupleTypeAnnotation", ...args);
}

function TypeofTypeAnnotation(...args) {
  return (0, _builder.default)("TypeofTypeAnnotation", ...args);
}

function TypeAlias(...args) {
  return (0, _builder.default)("TypeAlias", ...args);
}

function TypeAnnotation(...args) {
  return (0, _builder.default)("TypeAnnotation", ...args);
}

function TypeCastExpression(...args) {
  return (0, _builder.default)("TypeCastExpression", ...args);
}

function TypeParameter(...args) {
  return (0, _builder.default)("TypeParameter", ...args);
}

function TypeParameterDeclaration(...args) {
  return (0, _builder.default)("TypeParameterDeclaration", ...args);
}

function TypeParameterInstantiation(...args) {
  return (0, _builder.default)("TypeParameterInstantiation", ...args);
}

function UnionTypeAnnotation(...args) {
  return (0, _builder.default)("UnionTypeAnnotation", ...args);
}

function Variance(...args) {
  return (0, _builder.default)("Variance", ...args);
}

function VoidTypeAnnotation(...args) {
  return (0, _builder.default)("VoidTypeAnnotation", ...args);
}

function EnumDeclaration(...args) {
  return (0, _builder.default)("EnumDeclaration", ...args);
}

function EnumBooleanBody(...args) {
  return (0, _builder.default)("EnumBooleanBody", ...args);
}

function EnumNumberBody(...args) {
  return (0, _builder.default)("EnumNumberBody", ...args);
}

function EnumStringBody(...args) {
  return (0, _builder.default)("EnumStringBody", ...args);
}

function EnumSymbolBody(...args) {
  return (0, _builder.default)("EnumSymbolBody", ...args);
}

function EnumBooleanMember(...args) {
  return (0, _builder.default)("EnumBooleanMember", ...args);
}

function EnumNumberMember(...args) {
  return (0, _builder.default)("EnumNumberMember", ...args);
}

function EnumStringMember(...args) {
  return (0, _builder.default)("EnumStringMember", ...args);
}

function EnumDefaultedMember(...args) {
  return (0, _builder.default)("EnumDefaultedMember", ...args);
}

function JSXAttribute(...args) {
  return (0, _builder.default)("JSXAttribute", ...args);
}

function JSXClosingElement(...args) {
  return (0, _builder.default)("JSXClosingElement", ...args);
}

function JSXElement(...args) {
  return (0, _builder.default)("JSXElement", ...args);
}

function JSXEmptyExpression(...args) {
  return (0, _builder.default)("JSXEmptyExpression", ...args);
}

function JSXExpressionContainer(...args) {
  return (0, _builder.default)("JSXExpressionContainer", ...args);
}

function JSXSpreadChild(...args) {
  return (0, _builder.default)("JSXSpreadChild", ...args);
}

function JSXIdentifier(...args) {
  return (0, _builder.default)("JSXIdentifier", ...args);
}

function JSXMemberExpression(...args) {
  return (0, _builder.default)("JSXMemberExpression", ...args);
}

function JSXNamespacedName(...args) {
  return (0, _builder.default)("JSXNamespacedName", ...args);
}

function JSXOpeningElement(...args) {
  return (0, _builder.default)("JSXOpeningElement", ...args);
}

function JSXSpreadAttribute(...args) {
  return (0, _builder.default)("JSXSpreadAttribute", ...args);
}

function JSXText(...args) {
  return (0, _builder.default)("JSXText", ...args);
}

function JSXFragment(...args) {
  return (0, _builder.default)("JSXFragment", ...args);
}

function JSXOpeningFragment(...args) {
  return (0, _builder.default)("JSXOpeningFragment", ...args);
}

function JSXClosingFragment(...args) {
  return (0, _builder.default)("JSXClosingFragment", ...args);
}

function Noop(...args) {
  return (0, _builder.default)("Noop", ...args);
}

function Placeholder(...args) {
  return (0, _builder.default)("Placeholder", ...args);
}

function V8IntrinsicIdentifier(...args) {
  return (0, _builder.default)("V8IntrinsicIdentifier", ...args);
}

function ArgumentPlaceholder(...args) {
  return (0, _builder.default)("ArgumentPlaceholder", ...args);
}

function AwaitExpression(...args) {
  return (0, _builder.default)("AwaitExpression", ...args);
}

function BindExpression(...args) {
  return (0, _builder.default)("BindExpression", ...args);
}

function ClassProperty(...args) {
  return (0, _builder.default)("ClassProperty", ...args);
}

function OptionalMemberExpression(...args) {
  return (0, _builder.default)("OptionalMemberExpression", ...args);
}

function PipelineTopicExpression(...args) {
  return (0, _builder.default)("PipelineTopicExpression", ...args);
}

function PipelineBareFunction(...args) {
  return (0, _builder.default)("PipelineBareFunction", ...args);
}

function PipelinePrimaryTopicReference(...args) {
  return (0, _builder.default)("PipelinePrimaryTopicReference", ...args);
}

function OptionalCallExpression(...args) {
  return (0, _builder.default)("OptionalCallExpression", ...args);
}

function ClassPrivateProperty(...args) {
  return (0, _builder.default)("ClassPrivateProperty", ...args);
}

function ClassPrivateMethod(...args) {
  return (0, _builder.default)("ClassPrivateMethod", ...args);
}

function Import(...args) {
  return (0, _builder.default)("Import", ...args);
}

function Decorator(...args) {
  return (0, _builder.default)("Decorator", ...args);
}

function DoExpression(...args) {
  return (0, _builder.default)("DoExpression", ...args);
}

function ExportDefaultSpecifier(...args) {
  return (0, _builder.default)("ExportDefaultSpecifier", ...args);
}

function ExportNamespaceSpecifier(...args) {
  return (0, _builder.default)("ExportNamespaceSpecifier", ...args);
}

function PrivateName(...args) {
  return (0, _builder.default)("PrivateName", ...args);
}

function BigIntLiteral(...args) {
  return (0, _builder.default)("BigIntLiteral", ...args);
}

function TSParameterProperty(...args) {
  return (0, _builder.default)("TSParameterProperty", ...args);
}

function TSDeclareFunction(...args) {
  return (0, _builder.default)("TSDeclareFunction", ...args);
}

function TSDeclareMethod(...args) {
  return (0, _builder.default)("TSDeclareMethod", ...args);
}

function TSQualifiedName(...args) {
  return (0, _builder.default)("TSQualifiedName", ...args);
}

function TSCallSignatureDeclaration(...args) {
  return (0, _builder.default)("TSCallSignatureDeclaration", ...args);
}

function TSConstructSignatureDeclaration(...args) {
  return (0, _builder.default)("TSConstructSignatureDeclaration", ...args);
}

function TSPropertySignature(...args) {
  return (0, _builder.default)("TSPropertySignature", ...args);
}

function TSMethodSignature(...args) {
  return (0, _builder.default)("TSMethodSignature", ...args);
}

function TSIndexSignature(...args) {
  return (0, _builder.default)("TSIndexSignature", ...args);
}

function TSAnyKeyword(...args) {
  return (0, _builder.default)("TSAnyKeyword", ...args);
}

function TSBooleanKeyword(...args) {
  return (0, _builder.default)("TSBooleanKeyword", ...args);
}

function TSBigIntKeyword(...args) {
  return (0, _builder.default)("TSBigIntKeyword", ...args);
}

function TSNeverKeyword(...args) {
  return (0, _builder.default)("TSNeverKeyword", ...args);
}

function TSNullKeyword(...args) {
  return (0, _builder.default)("TSNullKeyword", ...args);
}

function TSNumberKeyword(...args) {
  return (0, _builder.default)("TSNumberKeyword", ...args);
}

function TSObjectKeyword(...args) {
  return (0, _builder.default)("TSObjectKeyword", ...args);
}

function TSStringKeyword(...args) {
  return (0, _builder.default)("TSStringKeyword", ...args);
}

function TSSymbolKeyword(...args) {
  return (0, _builder.default)("TSSymbolKeyword", ...args);
}

function TSUndefinedKeyword(...args) {
  return (0, _builder.default)("TSUndefinedKeyword", ...args);
}

function TSUnknownKeyword(...args) {
  return (0, _builder.default)("TSUnknownKeyword", ...args);
}

function TSVoidKeyword(...args) {
  return (0, _builder.default)("TSVoidKeyword", ...args);
}

function TSThisType(...args) {
  return (0, _builder.default)("TSThisType", ...args);
}

function TSFunctionType(...args) {
  return (0, _builder.default)("TSFunctionType", ...args);
}

function TSConstructorType(...args) {
  return (0, _builder.default)("TSConstructorType", ...args);
}

function TSTypeReference(...args) {
  return (0, _builder.default)("TSTypeReference", ...args);
}

function TSTypePredicate(...args) {
  return (0, _builder.default)("TSTypePredicate", ...args);
}

function TSTypeQuery(...args) {
  return (0, _builder.default)("TSTypeQuery", ...args);
}

function TSTypeLiteral(...args) {
  return (0, _builder.default)("TSTypeLiteral", ...args);
}

function TSArrayType(...args) {
  return (0, _builder.default)("TSArrayType", ...args);
}

function TSTupleType(...args) {
  return (0, _builder.default)("TSTupleType", ...args);
}

function TSOptionalType(...args) {
  return (0, _builder.default)("TSOptionalType", ...args);
}

function TSRestType(...args) {
  return (0, _builder.default)("TSRestType", ...args);
}

function TSUnionType(...args) {
  return (0, _builder.default)("TSUnionType", ...args);
}

function TSIntersectionType(...args) {
  return (0, _builder.default)("TSIntersectionType", ...args);
}

function TSConditionalType(...args) {
  return (0, _builder.default)("TSConditionalType", ...args);
}

function TSInferType(...args) {
  return (0, _builder.default)("TSInferType", ...args);
}

function TSParenthesizedType(...args) {
  return (0, _builder.default)("TSParenthesizedType", ...args);
}

function TSTypeOperator(...args) {
  return (0, _builder.default)("TSTypeOperator", ...args);
}

function TSIndexedAccessType(...args) {
  return (0, _builder.default)("TSIndexedAccessType", ...args);
}

function TSMappedType(...args) {
  return (0, _builder.default)("TSMappedType", ...args);
}

function TSLiteralType(...args) {
  return (0, _builder.default)("TSLiteralType", ...args);
}

function TSExpressionWithTypeArguments(...args) {
  return (0, _builder.default)("TSExpressionWithTypeArguments", ...args);
}

function TSInterfaceDeclaration(...args) {
  return (0, _builder.default)("TSInterfaceDeclaration", ...args);
}

function TSInterfaceBody(...args) {
  return (0, _builder.default)("TSInterfaceBody", ...args);
}

function TSTypeAliasDeclaration(...args) {
  return (0, _builder.default)("TSTypeAliasDeclaration", ...args);
}

function TSAsExpression(...args) {
  return (0, _builder.default)("TSAsExpression", ...args);
}

function TSTypeAssertion(...args) {
  return (0, _builder.default)("TSTypeAssertion", ...args);
}

function TSEnumDeclaration(...args) {
  return (0, _builder.default)("TSEnumDeclaration", ...args);
}

function TSEnumMember(...args) {
  return (0, _builder.default)("TSEnumMember", ...args);
}

function TSModuleDeclaration(...args) {
  return (0, _builder.default)("TSModuleDeclaration", ...args);
}

function TSModuleBlock(...args) {
  return (0, _builder.default)("TSModuleBlock", ...args);
}

function TSImportType(...args) {
  return (0, _builder.default)("TSImportType", ...args);
}

function TSImportEqualsDeclaration(...args) {
  return (0, _builder.default)("TSImportEqualsDeclaration", ...args);
}

function TSExternalModuleReference(...args) {
  return (0, _builder.default)("TSExternalModuleReference", ...args);
}

function TSNonNullExpression(...args) {
  return (0, _builder.default)("TSNonNullExpression", ...args);
}

function TSExportAssignment(...args) {
  return (0, _builder.default)("TSExportAssignment", ...args);
}

function TSNamespaceExportDeclaration(...args) {
  return (0, _builder.default)("TSNamespaceExportDeclaration", ...args);
}

function TSTypeAnnotation(...args) {
  return (0, _builder.default)("TSTypeAnnotation", ...args);
}

function TSTypeParameterInstantiation(...args) {
  return (0, _builder.default)("TSTypeParameterInstantiation", ...args);
}

function TSTypeParameterDeclaration(...args) {
  return (0, _builder.default)("TSTypeParameterDeclaration", ...args);
}

function TSTypeParameter(...args) {
  return (0, _builder.default)("TSTypeParameter", ...args);
}

function NumberLiteral(...args) {
  console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
  return NumberLiteral("NumberLiteral", ...args);
}

function RegexLiteral(...args) {
  console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
  return RegexLiteral("RegexLiteral", ...args);
}

function RestProperty(...args) {
  console.trace("The node type RestProperty has been renamed to RestElement");
  return RestProperty("RestProperty", ...args);
}

function SpreadProperty(...args) {
  console.trace("The node type SpreadProperty has been renamed to SpreadElement");
  return SpreadProperty("SpreadProperty", ...args);
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/builders/react/buildChildren.js":
/*!*********************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/builders/react/buildChildren.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildChildren;

var _generated = __webpack_require__(/*! ../../validators/generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/generated/index.js");

var _cleanJSXElementLiteralChild = _interopRequireDefault(__webpack_require__(/*! ../../utils/react/cleanJSXElementLiteralChild */ "../babel-plugin-effects/node_modules/@babel/types/lib/utils/react/cleanJSXElementLiteralChild.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildChildren(node) {
  const elements = [];

  for (let i = 0; i < node.children.length; i++) {
    let child = node.children[i];

    if ((0, _generated.isJSXText)(child)) {
      (0, _cleanJSXElementLiteralChild.default)(child, elements);
      continue;
    }

    if ((0, _generated.isJSXExpressionContainer)(child)) child = child.expression;
    if ((0, _generated.isJSXEmptyExpression)(child)) continue;
    elements.push(child);
  }

  return elements;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/clone/clone.js":
/*!****************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/clone/clone.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clone;

var _cloneNode = _interopRequireDefault(__webpack_require__(/*! ./cloneNode */ "../babel-plugin-effects/node_modules/@babel/types/lib/clone/cloneNode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function clone(node) {
  return (0, _cloneNode.default)(node, false);
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/clone/cloneDeep.js":
/*!********************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/clone/cloneDeep.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneDeep;

var _cloneNode = _interopRequireDefault(__webpack_require__(/*! ./cloneNode */ "../babel-plugin-effects/node_modules/@babel/types/lib/clone/cloneNode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cloneDeep(node) {
  return (0, _cloneNode.default)(node);
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/clone/cloneNode.js":
/*!********************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/clone/cloneNode.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneNode;

var _definitions = __webpack_require__(/*! ../definitions */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/index.js");

const has = Function.call.bind(Object.prototype.hasOwnProperty);

function cloneIfNode(obj, deep) {
  if (obj && typeof obj.type === "string" && obj.type !== "CommentLine" && obj.type !== "CommentBlock") {
    return cloneNode(obj, deep);
  }

  return obj;
}

function cloneIfNodeOrArray(obj, deep) {
  if (Array.isArray(obj)) {
    return obj.map(node => cloneIfNode(node, deep));
  }

  return cloneIfNode(obj, deep);
}

function cloneNode(node, deep = true) {
  if (!node) return node;
  const {
    type
  } = node;
  const newNode = {
    type
  };

  if (type === "Identifier") {
    newNode.name = node.name;

    if (has(node, "optional") && typeof node.optional === "boolean") {
      newNode.optional = node.optional;
    }

    if (has(node, "typeAnnotation")) {
      newNode.typeAnnotation = deep ? cloneIfNodeOrArray(node.typeAnnotation, true) : node.typeAnnotation;
    }
  } else if (!has(_definitions.NODE_FIELDS, type)) {
    throw new Error(`Unknown node type: "${type}"`);
  } else {
    for (const field of Object.keys(_definitions.NODE_FIELDS[type])) {
      if (has(node, field)) {
        newNode[field] = deep ? cloneIfNodeOrArray(node[field], true) : node[field];
      }
    }
  }

  if (has(node, "loc")) {
    newNode.loc = node.loc;
  }

  if (has(node, "leadingComments")) {
    newNode.leadingComments = node.leadingComments;
  }

  if (has(node, "innerComments")) {
    newNode.innerComments = node.innerComments;
  }

  if (has(node, "trailingComments")) {
    newNode.trailingComments = node.trailingComments;
  }

  if (has(node, "extra")) {
    newNode.extra = Object.assign({}, node.extra);
  }

  return newNode;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/clone/cloneWithoutLoc.js":
/*!**************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/clone/cloneWithoutLoc.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneWithoutLoc;

var _clone = _interopRequireDefault(__webpack_require__(/*! ./clone */ "../babel-plugin-effects/node_modules/@babel/types/lib/clone/clone.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cloneWithoutLoc(node) {
  const newNode = (0, _clone.default)(node);
  newNode.loc = null;
  return newNode;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/comments/addComment.js":
/*!************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/comments/addComment.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addComment;

var _addComments = _interopRequireDefault(__webpack_require__(/*! ./addComments */ "../babel-plugin-effects/node_modules/@babel/types/lib/comments/addComments.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addComment(node, type, content, line) {
  return (0, _addComments.default)(node, type, [{
    type: line ? "CommentLine" : "CommentBlock",
    value: content
  }]);
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/comments/addComments.js":
/*!*************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/comments/addComments.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addComments;

function addComments(node, type, comments) {
  if (!comments || !node) return node;
  const key = `${type}Comments`;

  if (node[key]) {
    if (type === "leading") {
      node[key] = comments.concat(node[key]);
    } else {
      node[key] = node[key].concat(comments);
    }
  } else {
    node[key] = comments;
  }

  return node;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/comments/inheritInnerComments.js":
/*!**********************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/comments/inheritInnerComments.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inheritInnerComments;

var _inherit = _interopRequireDefault(__webpack_require__(/*! ../utils/inherit */ "../babel-plugin-effects/node_modules/@babel/types/lib/utils/inherit.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inheritInnerComments(child, parent) {
  (0, _inherit.default)("innerComments", child, parent);
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/comments/inheritLeadingComments.js":
/*!************************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/comments/inheritLeadingComments.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inheritLeadingComments;

var _inherit = _interopRequireDefault(__webpack_require__(/*! ../utils/inherit */ "../babel-plugin-effects/node_modules/@babel/types/lib/utils/inherit.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inheritLeadingComments(child, parent) {
  (0, _inherit.default)("leadingComments", child, parent);
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/comments/inheritTrailingComments.js":
/*!*************************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/comments/inheritTrailingComments.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inheritTrailingComments;

var _inherit = _interopRequireDefault(__webpack_require__(/*! ../utils/inherit */ "../babel-plugin-effects/node_modules/@babel/types/lib/utils/inherit.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inheritTrailingComments(child, parent) {
  (0, _inherit.default)("trailingComments", child, parent);
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/comments/inheritsComments.js":
/*!******************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/comments/inheritsComments.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inheritsComments;

var _inheritTrailingComments = _interopRequireDefault(__webpack_require__(/*! ./inheritTrailingComments */ "../babel-plugin-effects/node_modules/@babel/types/lib/comments/inheritTrailingComments.js"));

var _inheritLeadingComments = _interopRequireDefault(__webpack_require__(/*! ./inheritLeadingComments */ "../babel-plugin-effects/node_modules/@babel/types/lib/comments/inheritLeadingComments.js"));

var _inheritInnerComments = _interopRequireDefault(__webpack_require__(/*! ./inheritInnerComments */ "../babel-plugin-effects/node_modules/@babel/types/lib/comments/inheritInnerComments.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inheritsComments(child, parent) {
  (0, _inheritTrailingComments.default)(child, parent);
  (0, _inheritLeadingComments.default)(child, parent);
  (0, _inheritInnerComments.default)(child, parent);
  return child;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/comments/removeComments.js":
/*!****************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/comments/removeComments.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeComments;

var _constants = __webpack_require__(/*! ../constants */ "../babel-plugin-effects/node_modules/@babel/types/lib/constants/index.js");

function removeComments(node) {
  _constants.COMMENT_KEYS.forEach(key => {
    node[key] = null;
  });

  return node;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/constants/generated/index.js":
/*!******************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/constants/generated/index.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSTYPE_TYPES = exports.TSTYPEELEMENT_TYPES = exports.PRIVATE_TYPES = exports.JSX_TYPES = exports.ENUMMEMBER_TYPES = exports.ENUMBODY_TYPES = exports.FLOWPREDICATE_TYPES = exports.FLOWDECLARATION_TYPES = exports.FLOWBASEANNOTATION_TYPES = exports.FLOWTYPE_TYPES = exports.FLOW_TYPES = exports.MODULESPECIFIER_TYPES = exports.EXPORTDECLARATION_TYPES = exports.MODULEDECLARATION_TYPES = exports.CLASS_TYPES = exports.PATTERN_TYPES = exports.UNARYLIKE_TYPES = exports.PROPERTY_TYPES = exports.OBJECTMEMBER_TYPES = exports.METHOD_TYPES = exports.USERWHITESPACABLE_TYPES = exports.IMMUTABLE_TYPES = exports.LITERAL_TYPES = exports.TSENTITYNAME_TYPES = exports.LVAL_TYPES = exports.PATTERNLIKE_TYPES = exports.DECLARATION_TYPES = exports.PUREISH_TYPES = exports.FUNCTIONPARENT_TYPES = exports.FUNCTION_TYPES = exports.FORXSTATEMENT_TYPES = exports.FOR_TYPES = exports.EXPRESSIONWRAPPER_TYPES = exports.WHILE_TYPES = exports.LOOP_TYPES = exports.CONDITIONAL_TYPES = exports.COMPLETIONSTATEMENT_TYPES = exports.TERMINATORLESS_TYPES = exports.STATEMENT_TYPES = exports.BLOCK_TYPES = exports.BLOCKPARENT_TYPES = exports.SCOPABLE_TYPES = exports.BINARY_TYPES = exports.EXPRESSION_TYPES = void 0;

var _definitions = __webpack_require__(/*! ../../definitions */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/index.js");

const EXPRESSION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Expression"];
exports.EXPRESSION_TYPES = EXPRESSION_TYPES;
const BINARY_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Binary"];
exports.BINARY_TYPES = BINARY_TYPES;
const SCOPABLE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Scopable"];
exports.SCOPABLE_TYPES = SCOPABLE_TYPES;
const BLOCKPARENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["BlockParent"];
exports.BLOCKPARENT_TYPES = BLOCKPARENT_TYPES;
const BLOCK_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Block"];
exports.BLOCK_TYPES = BLOCK_TYPES;
const STATEMENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Statement"];
exports.STATEMENT_TYPES = STATEMENT_TYPES;
const TERMINATORLESS_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Terminatorless"];
exports.TERMINATORLESS_TYPES = TERMINATORLESS_TYPES;
const COMPLETIONSTATEMENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["CompletionStatement"];
exports.COMPLETIONSTATEMENT_TYPES = COMPLETIONSTATEMENT_TYPES;
const CONDITIONAL_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Conditional"];
exports.CONDITIONAL_TYPES = CONDITIONAL_TYPES;
const LOOP_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Loop"];
exports.LOOP_TYPES = LOOP_TYPES;
const WHILE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["While"];
exports.WHILE_TYPES = WHILE_TYPES;
const EXPRESSIONWRAPPER_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ExpressionWrapper"];
exports.EXPRESSIONWRAPPER_TYPES = EXPRESSIONWRAPPER_TYPES;
const FOR_TYPES = _definitions.FLIPPED_ALIAS_KEYS["For"];
exports.FOR_TYPES = FOR_TYPES;
const FORXSTATEMENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ForXStatement"];
exports.FORXSTATEMENT_TYPES = FORXSTATEMENT_TYPES;
const FUNCTION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Function"];
exports.FUNCTION_TYPES = FUNCTION_TYPES;
const FUNCTIONPARENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["FunctionParent"];
exports.FUNCTIONPARENT_TYPES = FUNCTIONPARENT_TYPES;
const PUREISH_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Pureish"];
exports.PUREISH_TYPES = PUREISH_TYPES;
const DECLARATION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Declaration"];
exports.DECLARATION_TYPES = DECLARATION_TYPES;
const PATTERNLIKE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["PatternLike"];
exports.PATTERNLIKE_TYPES = PATTERNLIKE_TYPES;
const LVAL_TYPES = _definitions.FLIPPED_ALIAS_KEYS["LVal"];
exports.LVAL_TYPES = LVAL_TYPES;
const TSENTITYNAME_TYPES = _definitions.FLIPPED_ALIAS_KEYS["TSEntityName"];
exports.TSENTITYNAME_TYPES = TSENTITYNAME_TYPES;
const LITERAL_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Literal"];
exports.LITERAL_TYPES = LITERAL_TYPES;
const IMMUTABLE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Immutable"];
exports.IMMUTABLE_TYPES = IMMUTABLE_TYPES;
const USERWHITESPACABLE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["UserWhitespacable"];
exports.USERWHITESPACABLE_TYPES = USERWHITESPACABLE_TYPES;
const METHOD_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Method"];
exports.METHOD_TYPES = METHOD_TYPES;
const OBJECTMEMBER_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ObjectMember"];
exports.OBJECTMEMBER_TYPES = OBJECTMEMBER_TYPES;
const PROPERTY_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Property"];
exports.PROPERTY_TYPES = PROPERTY_TYPES;
const UNARYLIKE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["UnaryLike"];
exports.UNARYLIKE_TYPES = UNARYLIKE_TYPES;
const PATTERN_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Pattern"];
exports.PATTERN_TYPES = PATTERN_TYPES;
const CLASS_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Class"];
exports.CLASS_TYPES = CLASS_TYPES;
const MODULEDECLARATION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ModuleDeclaration"];
exports.MODULEDECLARATION_TYPES = MODULEDECLARATION_TYPES;
const EXPORTDECLARATION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ExportDeclaration"];
exports.EXPORTDECLARATION_TYPES = EXPORTDECLARATION_TYPES;
const MODULESPECIFIER_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ModuleSpecifier"];
exports.MODULESPECIFIER_TYPES = MODULESPECIFIER_TYPES;
const FLOW_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Flow"];
exports.FLOW_TYPES = FLOW_TYPES;
const FLOWTYPE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["FlowType"];
exports.FLOWTYPE_TYPES = FLOWTYPE_TYPES;
const FLOWBASEANNOTATION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["FlowBaseAnnotation"];
exports.FLOWBASEANNOTATION_TYPES = FLOWBASEANNOTATION_TYPES;
const FLOWDECLARATION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["FlowDeclaration"];
exports.FLOWDECLARATION_TYPES = FLOWDECLARATION_TYPES;
const FLOWPREDICATE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["FlowPredicate"];
exports.FLOWPREDICATE_TYPES = FLOWPREDICATE_TYPES;
const ENUMBODY_TYPES = _definitions.FLIPPED_ALIAS_KEYS["EnumBody"];
exports.ENUMBODY_TYPES = ENUMBODY_TYPES;
const ENUMMEMBER_TYPES = _definitions.FLIPPED_ALIAS_KEYS["EnumMember"];
exports.ENUMMEMBER_TYPES = ENUMMEMBER_TYPES;
const JSX_TYPES = _definitions.FLIPPED_ALIAS_KEYS["JSX"];
exports.JSX_TYPES = JSX_TYPES;
const PRIVATE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Private"];
exports.PRIVATE_TYPES = PRIVATE_TYPES;
const TSTYPEELEMENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["TSTypeElement"];
exports.TSTYPEELEMENT_TYPES = TSTYPEELEMENT_TYPES;
const TSTYPE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["TSType"];
exports.TSTYPE_TYPES = TSTYPE_TYPES;

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/constants/index.js":
/*!********************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/constants/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NOT_LOCAL_BINDING = exports.BLOCK_SCOPED_SYMBOL = exports.INHERIT_KEYS = exports.UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = exports.NUMBER_UNARY_OPERATORS = exports.BOOLEAN_UNARY_OPERATORS = exports.ASSIGNMENT_OPERATORS = exports.BINARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = exports.EQUALITY_BINARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = exports.UPDATE_OPERATORS = exports.LOGICAL_OPERATORS = exports.COMMENT_KEYS = exports.FOR_INIT_KEYS = exports.FLATTENABLE_KEYS = exports.STATEMENT_OR_BLOCK_KEYS = void 0;
const STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
exports.STATEMENT_OR_BLOCK_KEYS = STATEMENT_OR_BLOCK_KEYS;
const FLATTENABLE_KEYS = ["body", "expressions"];
exports.FLATTENABLE_KEYS = FLATTENABLE_KEYS;
const FOR_INIT_KEYS = ["left", "init"];
exports.FOR_INIT_KEYS = FOR_INIT_KEYS;
const COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
exports.COMMENT_KEYS = COMMENT_KEYS;
const LOGICAL_OPERATORS = ["||", "&&", "??"];
exports.LOGICAL_OPERATORS = LOGICAL_OPERATORS;
const UPDATE_OPERATORS = ["++", "--"];
exports.UPDATE_OPERATORS = UPDATE_OPERATORS;
const BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="];
exports.BOOLEAN_NUMBER_BINARY_OPERATORS = BOOLEAN_NUMBER_BINARY_OPERATORS;
const EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="];
exports.EQUALITY_BINARY_OPERATORS = EQUALITY_BINARY_OPERATORS;
const COMPARISON_BINARY_OPERATORS = [...EQUALITY_BINARY_OPERATORS, "in", "instanceof"];
exports.COMPARISON_BINARY_OPERATORS = COMPARISON_BINARY_OPERATORS;
const BOOLEAN_BINARY_OPERATORS = [...COMPARISON_BINARY_OPERATORS, ...BOOLEAN_NUMBER_BINARY_OPERATORS];
exports.BOOLEAN_BINARY_OPERATORS = BOOLEAN_BINARY_OPERATORS;
const NUMBER_BINARY_OPERATORS = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
exports.NUMBER_BINARY_OPERATORS = NUMBER_BINARY_OPERATORS;
const BINARY_OPERATORS = ["+", ...NUMBER_BINARY_OPERATORS, ...BOOLEAN_BINARY_OPERATORS];
exports.BINARY_OPERATORS = BINARY_OPERATORS;
const ASSIGNMENT_OPERATORS = ["=", "+=", ...NUMBER_BINARY_OPERATORS.map(op => op + "=")];
exports.ASSIGNMENT_OPERATORS = ASSIGNMENT_OPERATORS;
const BOOLEAN_UNARY_OPERATORS = ["delete", "!"];
exports.BOOLEAN_UNARY_OPERATORS = BOOLEAN_UNARY_OPERATORS;
const NUMBER_UNARY_OPERATORS = ["+", "-", "~"];
exports.NUMBER_UNARY_OPERATORS = NUMBER_UNARY_OPERATORS;
const STRING_UNARY_OPERATORS = ["typeof"];
exports.STRING_UNARY_OPERATORS = STRING_UNARY_OPERATORS;
const UNARY_OPERATORS = ["void", "throw", ...BOOLEAN_UNARY_OPERATORS, ...NUMBER_UNARY_OPERATORS, ...STRING_UNARY_OPERATORS];
exports.UNARY_OPERATORS = UNARY_OPERATORS;
const INHERIT_KEYS = {
  optional: ["typeAnnotation", "typeParameters", "returnType"],
  force: ["start", "loc", "end"]
};
exports.INHERIT_KEYS = INHERIT_KEYS;
const BLOCK_SCOPED_SYMBOL = Symbol.for("var used to be block scoped");
exports.BLOCK_SCOPED_SYMBOL = BLOCK_SCOPED_SYMBOL;
const NOT_LOCAL_BINDING = Symbol.for("should not be considered a local binding");
exports.NOT_LOCAL_BINDING = NOT_LOCAL_BINDING;

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/converters/ensureBlock.js":
/*!***************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/converters/ensureBlock.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ensureBlock;

var _toBlock = _interopRequireDefault(__webpack_require__(/*! ./toBlock */ "../babel-plugin-effects/node_modules/@babel/types/lib/converters/toBlock.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ensureBlock(node, key = "body") {
  return node[key] = (0, _toBlock.default)(node[key], node);
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/converters/gatherSequenceExpressions.js":
/*!*****************************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/converters/gatherSequenceExpressions.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gatherSequenceExpressions;

var _getBindingIdentifiers = _interopRequireDefault(__webpack_require__(/*! ../retrievers/getBindingIdentifiers */ "../babel-plugin-effects/node_modules/@babel/types/lib/retrievers/getBindingIdentifiers.js"));

var _generated = __webpack_require__(/*! ../validators/generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/generated/index.js");

var _generated2 = __webpack_require__(/*! ../builders/generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/builders/generated/index.js");

var _cloneNode = _interopRequireDefault(__webpack_require__(/*! ../clone/cloneNode */ "../babel-plugin-effects/node_modules/@babel/types/lib/clone/cloneNode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function gatherSequenceExpressions(nodes, scope, declars) {
  const exprs = [];
  let ensureLastUndefined = true;

  for (const node of nodes) {
    ensureLastUndefined = false;

    if ((0, _generated.isExpression)(node)) {
      exprs.push(node);
    } else if ((0, _generated.isExpressionStatement)(node)) {
      exprs.push(node.expression);
    } else if ((0, _generated.isVariableDeclaration)(node)) {
      if (node.kind !== "var") return;

      for (const declar of node.declarations) {
        const bindings = (0, _getBindingIdentifiers.default)(declar);

        for (const key of Object.keys(bindings)) {
          declars.push({
            kind: node.kind,
            id: (0, _cloneNode.default)(bindings[key])
          });
        }

        if (declar.init) {
          exprs.push((0, _generated2.assignmentExpression)("=", declar.id, declar.init));
        }
      }

      ensureLastUndefined = true;
    } else if ((0, _generated.isIfStatement)(node)) {
      const consequent = node.consequent ? gatherSequenceExpressions([node.consequent], scope, declars) : scope.buildUndefinedNode();
      const alternate = node.alternate ? gatherSequenceExpressions([node.alternate], scope, declars) : scope.buildUndefinedNode();
      if (!consequent || !alternate) return;
      exprs.push((0, _generated2.conditionalExpression)(node.test, consequent, alternate));
    } else if ((0, _generated.isBlockStatement)(node)) {
      const body = gatherSequenceExpressions(node.body, scope, declars);
      if (!body) return;
      exprs.push(body);
    } else if ((0, _generated.isEmptyStatement)(node)) {
      ensureLastUndefined = true;
    } else {
      return;
    }
  }

  if (ensureLastUndefined) {
    exprs.push(scope.buildUndefinedNode());
  }

  if (exprs.length === 1) {
    return exprs[0];
  } else {
    return (0, _generated2.sequenceExpression)(exprs);
  }
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/converters/toBindingIdentifierName.js":
/*!***************************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/converters/toBindingIdentifierName.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBindingIdentifierName;

var _toIdentifier = _interopRequireDefault(__webpack_require__(/*! ./toIdentifier */ "../babel-plugin-effects/node_modules/@babel/types/lib/converters/toIdentifier.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toBindingIdentifierName(name) {
  name = (0, _toIdentifier.default)(name);
  if (name === "eval" || name === "arguments") name = "_" + name;
  return name;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/converters/toBlock.js":
/*!***********************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/converters/toBlock.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBlock;

var _generated = __webpack_require__(/*! ../validators/generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/generated/index.js");

var _generated2 = __webpack_require__(/*! ../builders/generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/builders/generated/index.js");

function toBlock(node, parent) {
  if ((0, _generated.isBlockStatement)(node)) {
    return node;
  }

  let blockNodes = [];

  if ((0, _generated.isEmptyStatement)(node)) {
    blockNodes = [];
  } else {
    if (!(0, _generated.isStatement)(node)) {
      if ((0, _generated.isFunction)(parent)) {
        node = (0, _generated2.returnStatement)(node);
      } else {
        node = (0, _generated2.expressionStatement)(node);
      }
    }

    blockNodes = [node];
  }

  return (0, _generated2.blockStatement)(blockNodes);
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/converters/toComputedKey.js":
/*!*****************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/converters/toComputedKey.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toComputedKey;

var _generated = __webpack_require__(/*! ../validators/generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/generated/index.js");

var _generated2 = __webpack_require__(/*! ../builders/generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/builders/generated/index.js");

function toComputedKey(node, key = node.key || node.property) {
  if (!node.computed && (0, _generated.isIdentifier)(key)) key = (0, _generated2.stringLiteral)(key.name);
  return key;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/converters/toExpression.js":
/*!****************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/converters/toExpression.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toExpression;

var _generated = __webpack_require__(/*! ../validators/generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/generated/index.js");

function toExpression(node) {
  if ((0, _generated.isExpressionStatement)(node)) {
    node = node.expression;
  }

  if ((0, _generated.isExpression)(node)) {
    return node;
  }

  if ((0, _generated.isClass)(node)) {
    node.type = "ClassExpression";
  } else if ((0, _generated.isFunction)(node)) {
    node.type = "FunctionExpression";
  }

  if (!(0, _generated.isExpression)(node)) {
    throw new Error(`cannot turn ${node.type} to an expression`);
  }

  return node;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/converters/toIdentifier.js":
/*!****************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/converters/toIdentifier.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toIdentifier;

var _isValidIdentifier = _interopRequireDefault(__webpack_require__(/*! ../validators/isValidIdentifier */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isValidIdentifier.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toIdentifier(name) {
  name = name + "";
  name = name.replace(/[^a-zA-Z0-9$_]/g, "-");
  name = name.replace(/^[-0-9]+/, "");
  name = name.replace(/[-\s]+(.)?/g, function (match, c) {
    return c ? c.toUpperCase() : "";
  });

  if (!(0, _isValidIdentifier.default)(name)) {
    name = `_${name}`;
  }

  return name || "_";
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/converters/toKeyAlias.js":
/*!**************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/converters/toKeyAlias.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toKeyAlias;

var _generated = __webpack_require__(/*! ../validators/generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/generated/index.js");

var _cloneNode = _interopRequireDefault(__webpack_require__(/*! ../clone/cloneNode */ "../babel-plugin-effects/node_modules/@babel/types/lib/clone/cloneNode.js"));

var _removePropertiesDeep = _interopRequireDefault(__webpack_require__(/*! ../modifications/removePropertiesDeep */ "../babel-plugin-effects/node_modules/@babel/types/lib/modifications/removePropertiesDeep.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toKeyAlias(node, key = node.key) {
  let alias;

  if (node.kind === "method") {
    return toKeyAlias.increment() + "";
  } else if ((0, _generated.isIdentifier)(key)) {
    alias = key.name;
  } else if ((0, _generated.isStringLiteral)(key)) {
    alias = JSON.stringify(key.value);
  } else {
    alias = JSON.stringify((0, _removePropertiesDeep.default)((0, _cloneNode.default)(key)));
  }

  if (node.computed) {
    alias = `[${alias}]`;
  }

  if (node.static) {
    alias = `static:${alias}`;
  }

  return alias;
}

toKeyAlias.uid = 0;

toKeyAlias.increment = function () {
  if (toKeyAlias.uid >= Number.MAX_SAFE_INTEGER) {
    return toKeyAlias.uid = 0;
  } else {
    return toKeyAlias.uid++;
  }
};

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/converters/toSequenceExpression.js":
/*!************************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/converters/toSequenceExpression.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toSequenceExpression;

var _gatherSequenceExpressions = _interopRequireDefault(__webpack_require__(/*! ./gatherSequenceExpressions */ "../babel-plugin-effects/node_modules/@babel/types/lib/converters/gatherSequenceExpressions.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toSequenceExpression(nodes, scope) {
  if (!nodes || !nodes.length) return;
  const declars = [];
  const result = (0, _gatherSequenceExpressions.default)(nodes, scope, declars);
  if (!result) return;

  for (const declar of declars) {
    scope.push(declar);
  }

  return result;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/converters/toStatement.js":
/*!***************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/converters/toStatement.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toStatement;

var _generated = __webpack_require__(/*! ../validators/generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/generated/index.js");

var _generated2 = __webpack_require__(/*! ../builders/generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/builders/generated/index.js");

function toStatement(node, ignore) {
  if ((0, _generated.isStatement)(node)) {
    return node;
  }

  let mustHaveId = false;
  let newType;

  if ((0, _generated.isClass)(node)) {
    mustHaveId = true;
    newType = "ClassDeclaration";
  } else if ((0, _generated.isFunction)(node)) {
    mustHaveId = true;
    newType = "FunctionDeclaration";
  } else if ((0, _generated.isAssignmentExpression)(node)) {
    return (0, _generated2.expressionStatement)(node);
  }

  if (mustHaveId && !node.id) {
    newType = false;
  }

  if (!newType) {
    if (ignore) {
      return false;
    } else {
      throw new Error(`cannot turn ${node.type} to a statement`);
    }
  }

  node.type = newType;
  return node;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/converters/valueToNode.js":
/*!***************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/converters/valueToNode.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = valueToNode;

var _isPlainObject = _interopRequireDefault(__webpack_require__(/*! lodash/isPlainObject */ "../babel-plugin-effects/node_modules/lodash/isPlainObject.js"));

var _isRegExp = _interopRequireDefault(__webpack_require__(/*! lodash/isRegExp */ "../babel-plugin-effects/node_modules/lodash/isRegExp.js"));

var _isValidIdentifier = _interopRequireDefault(__webpack_require__(/*! ../validators/isValidIdentifier */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isValidIdentifier.js"));

var _generated = __webpack_require__(/*! ../builders/generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/builders/generated/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function valueToNode(value) {
  if (value === undefined) {
    return (0, _generated.identifier)("undefined");
  }

  if (value === true || value === false) {
    return (0, _generated.booleanLiteral)(value);
  }

  if (value === null) {
    return (0, _generated.nullLiteral)();
  }

  if (typeof value === "string") {
    return (0, _generated.stringLiteral)(value);
  }

  if (typeof value === "number") {
    let result;

    if (Number.isFinite(value)) {
      result = (0, _generated.numericLiteral)(Math.abs(value));
    } else {
      let numerator;

      if (Number.isNaN(value)) {
        numerator = (0, _generated.numericLiteral)(0);
      } else {
        numerator = (0, _generated.numericLiteral)(1);
      }

      result = (0, _generated.binaryExpression)("/", numerator, (0, _generated.numericLiteral)(0));
    }

    if (value < 0 || Object.is(value, -0)) {
      result = (0, _generated.unaryExpression)("-", result);
    }

    return result;
  }

  if ((0, _isRegExp.default)(value)) {
    const pattern = value.source;
    const flags = value.toString().match(/\/([a-z]+|)$/)[1];
    return (0, _generated.regExpLiteral)(pattern, flags);
  }

  if (Array.isArray(value)) {
    return (0, _generated.arrayExpression)(value.map(valueToNode));
  }

  if ((0, _isPlainObject.default)(value)) {
    const props = [];

    for (const key of Object.keys(value)) {
      let nodeKey;

      if ((0, _isValidIdentifier.default)(key)) {
        nodeKey = (0, _generated.identifier)(key);
      } else {
        nodeKey = (0, _generated.stringLiteral)(key);
      }

      props.push((0, _generated.objectProperty)(nodeKey, valueToNode(value[key])));
    }

    return (0, _generated.objectExpression)(props);
  }

  throw new Error("don't know how to turn this value into a node");
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/core.js":
/*!*********************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/definitions/core.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patternLikeCommon = exports.functionDeclarationCommon = exports.functionTypeAnnotationCommon = exports.functionCommon = void 0;

var _esutils = _interopRequireDefault(__webpack_require__(/*! esutils */ "../babel-plugin-effects/node_modules/esutils/lib/utils.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ../validators/is */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/is.js"));

var _constants = __webpack_require__(/*! ../constants */ "../babel-plugin-effects/node_modules/@babel/types/lib/constants/index.js");

var _utils = _interopRequireWildcard(__webpack_require__(/*! ./utils */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/utils.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _utils.default)("ArrayExpression", {
  fields: {
    elements: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeOrValueType)("null", "Expression", "SpreadElement"))),
      default: !{}.BABEL_TYPES_8_BREAKING ? [] : undefined
    }
  },
  visitor: ["elements"],
  aliases: ["Expression"]
});
(0, _utils.default)("AssignmentExpression", {
  fields: {
    operator: {
      validate: function () {
        if (!{}.BABEL_TYPES_8_BREAKING) {
          return (0, _utils.assertValueType)("string");
        }

        const identifier = (0, _utils.assertOneOf)(..._constants.ASSIGNMENT_OPERATORS);
        const pattern = (0, _utils.assertOneOf)("=");
        return function (node, key, val) {
          const validator = (0, _is.default)("Pattern", node.left) ? pattern : identifier;
          validator(node, key, val);
        };
      }()
    },
    left: {
      validate: !{}.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("LVal") : (0, _utils.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  },
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Expression"]
});
(0, _utils.default)("BinaryExpression", {
  builder: ["operator", "left", "right"],
  fields: {
    operator: {
      validate: (0, _utils.assertOneOf)(..._constants.BINARY_OPERATORS)
    },
    left: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  },
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"]
});
(0, _utils.default)("InterpreterDirective", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("string")
    }
  }
});
(0, _utils.default)("Directive", {
  visitor: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertNodeType)("DirectiveLiteral")
    }
  }
});
(0, _utils.default)("DirectiveLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("string")
    }
  }
});
(0, _utils.default)("BlockStatement", {
  builder: ["body", "directives"],
  visitor: ["directives", "body"],
  fields: {
    directives: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Directive"))),
      default: []
    },
    body: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "Block", "Statement"]
});
(0, _utils.default)("BreakStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
(0, _utils.default)("CallExpression", {
  visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
  builder: ["callee", "arguments"],
  aliases: ["Expression"],
  fields: Object.assign({
    callee: {
      validate: (0, _utils.assertNodeType)("Expression", "V8IntrinsicIdentifier")
    },
    arguments: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
    }
  }, !{}.BABEL_TYPES_8_BREAKING ? {
    optional: {
      validate: (0, _utils.assertOneOf)(true, false),
      optional: true
    }
  } : {}, {
    typeArguments: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation"),
      optional: true
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TSTypeParameterInstantiation"),
      optional: true
    }
  })
});
(0, _utils.default)("CatchClause", {
  visitor: ["param", "body"],
  fields: {
    param: {
      validate: (0, _utils.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern"),
      optional: true
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  },
  aliases: ["Scopable", "BlockParent"]
});
(0, _utils.default)("ConditionalExpression", {
  visitor: ["test", "consequent", "alternate"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    consequent: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    alternate: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  },
  aliases: ["Expression", "Conditional"]
});
(0, _utils.default)("ContinueStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
(0, _utils.default)("DebuggerStatement", {
  aliases: ["Statement"]
});
(0, _utils.default)("DoWhileStatement", {
  visitor: ["test", "body"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  },
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
});
(0, _utils.default)("EmptyStatement", {
  aliases: ["Statement"]
});
(0, _utils.default)("ExpressionStatement", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  },
  aliases: ["Statement", "ExpressionWrapper"]
});
(0, _utils.default)("File", {
  builder: ["program", "comments", "tokens"],
  visitor: ["program"],
  fields: {
    program: {
      validate: (0, _utils.assertNodeType)("Program")
    }
  }
});
(0, _utils.default)("ForInStatement", {
  visitor: ["left", "right", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: !{}.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("VariableDeclaration", "LVal") : (0, _utils.assertNodeType)("VariableDeclaration", "Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
(0, _utils.default)("ForStatement", {
  visitor: ["init", "test", "update", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
  fields: {
    init: {
      validate: (0, _utils.assertNodeType)("VariableDeclaration", "Expression"),
      optional: true
    },
    test: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    update: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
const functionCommon = {
  params: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Identifier", "Pattern", "RestElement", "TSParameterProperty")))
  },
  generator: {
    default: false
  },
  async: {
    default: false
  }
};
exports.functionCommon = functionCommon;
const functionTypeAnnotationCommon = {
  returnType: {
    validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: true
  },
  typeParameters: {
    validate: (0, _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
    optional: true
  }
};
exports.functionTypeAnnotationCommon = functionTypeAnnotationCommon;
const functionDeclarationCommon = Object.assign({}, functionCommon, {
  declare: {
    validate: (0, _utils.assertValueType)("boolean"),
    optional: true
  },
  id: {
    validate: (0, _utils.assertNodeType)("Identifier"),
    optional: true
  }
});
exports.functionDeclarationCommon = functionDeclarationCommon;
(0, _utils.default)("FunctionDeclaration", {
  builder: ["id", "params", "body", "generator", "async"],
  visitor: ["id", "params", "body", "returnType", "typeParameters"],
  fields: Object.assign({}, functionDeclarationCommon, {}, functionTypeAnnotationCommon, {
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  }),
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"],
  validate: function () {
    if (!{}.BABEL_TYPES_8_BREAKING) return () => {};
    const identifier = (0, _utils.assertNodeType)("Identifier");
    return function (parent, key, node) {
      if (!(0, _is.default)("ExportDefaultDeclaration", parent)) {
        identifier(node, "id", node.id);
      }
    };
  }()
});
(0, _utils.default)("FunctionExpression", {
  inherits: "FunctionDeclaration",
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: Object.assign({}, functionCommon, {}, functionTypeAnnotationCommon, {
    id: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  })
});
const patternLikeCommon = {
  typeAnnotation: {
    validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: true
  },
  decorators: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator")))
  }
};
exports.patternLikeCommon = patternLikeCommon;
(0, _utils.default)("Identifier", {
  builder: ["name"],
  visitor: ["typeAnnotation", "decorators"],
  aliases: ["Expression", "PatternLike", "LVal", "TSEntityName"],
  fields: Object.assign({}, patternLikeCommon, {
    name: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("string"), function (node, key, val) {
        if (!{}.BABEL_TYPES_8_BREAKING) return;

        if (!_esutils.default.keyword.isIdentifierNameES6(val)) {
          throw new TypeError(`"${val}" is not a valid identifier name`);
        }
      })
    },
    optional: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    }
  }),

  validate(parent, key, node) {
    if (!{}.BABEL_TYPES_8_BREAKING) return;
    const match = /\.(\w+)$/.exec(key);
    if (!match) return;
    const [, parentKey] = match;
    const nonComp = {
      computed: false
    };

    if (parentKey === "property") {
      if ((0, _is.default)("MemberExpression", parent, nonComp)) return;
      if ((0, _is.default)("OptionalMemberExpression", parent, nonComp)) return;
    } else if (parentKey === "key") {
      if ((0, _is.default)("Property", parent, nonComp)) return;
      if ((0, _is.default)("Method", parent, nonComp)) return;
    } else if (parentKey === "exported") {
      if ((0, _is.default)("ExportSpecifier", parent)) return;
    } else if (parentKey === "imported") {
      if ((0, _is.default)("ImportSpecifier", parent, {
        imported: node
      })) return;
    } else if (parentKey === "meta") {
      if ((0, _is.default)("MetaProperty", parent, {
        meta: node
      })) return;
    }

    if (_esutils.default.keyword.isReservedWordES6(node.name, false) && node.name !== "this") {
      throw new TypeError(`"${node.name}" is not a valid identifer`);
    }
  }

});
(0, _utils.default)("IfStatement", {
  visitor: ["test", "consequent", "alternate"],
  aliases: ["Statement", "Conditional"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    consequent: {
      validate: (0, _utils.assertNodeType)("Statement")
    },
    alternate: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
(0, _utils.default)("LabeledStatement", {
  visitor: ["label", "body"],
  aliases: ["Statement"],
  fields: {
    label: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
(0, _utils.default)("StringLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, _utils.default)("NumericLiteral", {
  builder: ["value"],
  deprecatedAlias: "NumberLiteral",
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("number")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, _utils.default)("NullLiteral", {
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, _utils.default)("BooleanLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("boolean")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, _utils.default)("RegExpLiteral", {
  builder: ["pattern", "flags"],
  deprecatedAlias: "RegexLiteral",
  aliases: ["Expression", "Literal"],
  fields: {
    pattern: {
      validate: (0, _utils.assertValueType)("string")
    },
    flags: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("string"), function (node, key, val) {
        if (!{}.BABEL_TYPES_8_BREAKING) return;
        const invalid = /[^gimsuy]/.exec(val);

        if (invalid) {
          throw new TypeError(`"${invalid[0]}" is not a valid RegExp flag`);
        }
      }),
      default: ""
    }
  }
});
(0, _utils.default)("LogicalExpression", {
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"],
  fields: {
    operator: {
      validate: (0, _utils.assertOneOf)(..._constants.LOGICAL_OPERATORS)
    },
    left: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("MemberExpression", {
  builder: ["object", "property", "computed", "optional"],
  visitor: ["object", "property"],
  aliases: ["Expression", "LVal"],
  fields: Object.assign({
    object: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    property: {
      validate: function () {
        const normal = (0, _utils.assertNodeType)("Identifier", "PrivateName");
        const computed = (0, _utils.assertNodeType)("Expression");
        return function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
      }()
    },
    computed: {
      default: false
    }
  }, !{}.BABEL_TYPES_8_BREAKING ? {
    optional: {
      validate: (0, _utils.assertOneOf)(true, false),
      optional: true
    }
  } : {})
});
(0, _utils.default)("NewExpression", {
  inherits: "CallExpression"
});
(0, _utils.default)("Program", {
  visitor: ["directives", "body"],
  builder: ["body", "directives", "sourceType", "interpreter"],
  fields: {
    sourceFile: {
      validate: (0, _utils.assertValueType)("string")
    },
    sourceType: {
      validate: (0, _utils.assertOneOf)("script", "module"),
      default: "script"
    },
    interpreter: {
      validate: (0, _utils.assertNodeType)("InterpreterDirective"),
      default: null,
      optional: true
    },
    directives: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Directive"))),
      default: []
    },
    body: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "Block"]
});
(0, _utils.default)("ObjectExpression", {
  visitor: ["properties"],
  aliases: ["Expression"],
  fields: {
    properties: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ObjectMethod", "ObjectProperty", "SpreadElement")))
    }
  }
});
(0, _utils.default)("ObjectMethod", {
  builder: ["kind", "key", "params", "body", "computed", "generator", "async"],
  fields: Object.assign({}, functionCommon, {}, functionTypeAnnotationCommon, {
    kind: Object.assign({
      validate: (0, _utils.assertOneOf)("method", "get", "set")
    }, !{}.BABEL_TYPES_8_BREAKING ? {
      default: "method"
    } : {}),
    computed: {
      default: false
    },
    key: {
      validate: function () {
        const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
        const computed = (0, _utils.assertNodeType)("Expression");
        return function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
      }()
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  }),
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
});
(0, _utils.default)("ObjectProperty", {
  builder: ["key", "value", "computed", "shorthand", ...(!{}.BABEL_TYPES_8_BREAKING ? ["decorators"] : [])],
  fields: {
    computed: {
      default: false
    },
    key: {
      validate: function () {
        const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
        const computed = (0, _utils.assertNodeType)("Expression");
        return function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
      }()
    },
    value: {
      validate: (0, _utils.assertNodeType)("Expression", "PatternLike")
    },
    shorthand: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("boolean"), function (node, key, val) {
        if (!{}.BABEL_TYPES_8_BREAKING) return;

        if (val && node.computed) {
          throw new TypeError("Property shorthand of ObjectProperty cannot be true if computed is true");
        }
      }, function (node, key, val) {
        if (!{}.BABEL_TYPES_8_BREAKING) return;

        if (val && !(0, _is.default)("Identifier", node.key)) {
          throw new TypeError("Property shorthand of ObjectProperty cannot be true if key is not an Identifier");
        }
      }),
      default: false
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    }
  },
  visitor: ["key", "value", "decorators"],
  aliases: ["UserWhitespacable", "Property", "ObjectMember"],
  validate: function () {
    const pattern = (0, _utils.assertNodeType)("Identifier", "Pattern");
    const expression = (0, _utils.assertNodeType)("Expression");
    return function (parent, key, node) {
      if (!{}.BABEL_TYPES_8_BREAKING) return;
      const validator = (0, _is.default)("ObjectPattern", parent) ? pattern : expression;
      validator(node, "value", node.value);
    };
  }()
});
(0, _utils.default)("RestElement", {
  visitor: ["argument", "typeAnnotation"],
  builder: ["argument"],
  aliases: ["LVal", "PatternLike"],
  deprecatedAlias: "RestProperty",
  fields: Object.assign({}, patternLikeCommon, {
    argument: {
      validate: !{}.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("LVal") : (0, _utils.assertNodeType)("Identifier", "Pattern", "MemberExpression")
    }
  }),

  validate(parent, key) {
    if (!{}.BABEL_TYPES_8_BREAKING) return;
    const match = /(\w+)\[(\d+)\]/.exec(key);
    if (!match) throw new Error("Internal Babel error: malformed key.");
    const [, listKey, index] = match;

    if (parent[listKey].length > index + 1) {
      throw new TypeError(`RestElement must be last element of ${listKey}`);
    }
  }

});
(0, _utils.default)("ReturnStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    }
  }
});
(0, _utils.default)("SequenceExpression", {
  visitor: ["expressions"],
  fields: {
    expressions: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression")))
    }
  },
  aliases: ["Expression"]
});
(0, _utils.default)("ParenthesizedExpression", {
  visitor: ["expression"],
  aliases: ["Expression", "ExpressionWrapper"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("SwitchCase", {
  visitor: ["test", "consequent"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    consequent: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Statement")))
    }
  }
});
(0, _utils.default)("SwitchStatement", {
  visitor: ["discriminant", "cases"],
  aliases: ["Statement", "BlockParent", "Scopable"],
  fields: {
    discriminant: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    cases: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("SwitchCase")))
    }
  }
});
(0, _utils.default)("ThisExpression", {
  aliases: ["Expression"]
});
(0, _utils.default)("ThrowStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("TryStatement", {
  visitor: ["block", "handler", "finalizer"],
  aliases: ["Statement"],
  fields: {
    block: {
      validate: (0, _utils.chain)((0, _utils.assertNodeType)("BlockStatement"), function (node) {
        if (!{}.BABEL_TYPES_8_BREAKING) return;

        if (!node.handler && !node.finalizer) {
          throw new TypeError("TryStatement expects either a handler or finalizer, or both");
        }
      })
    },
    handler: {
      optional: true,
      validate: (0, _utils.assertNodeType)("CatchClause")
    },
    finalizer: {
      optional: true,
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  }
});
(0, _utils.default)("UnaryExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: true
    },
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    operator: {
      validate: (0, _utils.assertOneOf)(..._constants.UNARY_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["UnaryLike", "Expression"]
});
(0, _utils.default)("UpdateExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: false
    },
    argument: {
      validate: !{}.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("Expression") : (0, _utils.assertNodeType)("Identifier", "MemberExpression")
    },
    operator: {
      validate: (0, _utils.assertOneOf)(..._constants.UPDATE_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["Expression"]
});
(0, _utils.default)("VariableDeclaration", {
  builder: ["kind", "declarations"],
  visitor: ["declarations"],
  aliases: ["Statement", "Declaration"],
  fields: {
    declare: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    kind: {
      validate: (0, _utils.assertOneOf)("var", "let", "const")
    },
    declarations: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("VariableDeclarator")))
    }
  },

  validate(parent, key, node) {
    if (!{}.BABEL_TYPES_8_BREAKING) return;
    if (!(0, _is.default)("ForXStatement", parent, {
      left: node
    })) return;

    if (node.declarations.length !== 1) {
      throw new TypeError(`Exactly one VariableDeclarator is required in the VariableDeclaration of a ${parent.type}`);
    }
  }

});
(0, _utils.default)("VariableDeclarator", {
  visitor: ["id", "init"],
  fields: {
    id: {
      validate: function () {
        if (!{}.BABEL_TYPES_8_BREAKING) {
          return (0, _utils.assertNodeType)("LVal");
        }

        const normal = (0, _utils.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern");
        const without = (0, _utils.assertNodeType)("Identifier");
        return function (node, key, val) {
          const validator = node.init ? normal : without;
          validator(node, key, val);
        };
      }()
    },
    definite: {
      optional: true,
      validate: (0, _utils.assertValueType)("boolean")
    },
    init: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("WhileStatement", {
  visitor: ["test", "body"],
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
(0, _utils.default)("WithStatement", {
  visitor: ["object", "body"],
  aliases: ["Statement"],
  fields: {
    object: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/es2015.js":
/*!***********************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/definitions/es2015.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classMethodOrDeclareMethodCommon = exports.classMethodOrPropertyCommon = void 0;

var _utils = _interopRequireWildcard(__webpack_require__(/*! ./utils */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/utils.js"));

var _core = __webpack_require__(/*! ./core */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/core.js");

var _is = _interopRequireDefault(__webpack_require__(/*! ../validators/is */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/is.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(0, _utils.default)("AssignmentPattern", {
  visitor: ["left", "right", "decorators"],
  builder: ["left", "right"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, _core.patternLikeCommon, {
    left: {
      validate: (0, _utils.assertNodeType)("Identifier", "ObjectPattern", "ArrayPattern", "MemberExpression")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    }
  })
});
(0, _utils.default)("ArrayPattern", {
  visitor: ["elements", "typeAnnotation"],
  builder: ["elements"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, _core.patternLikeCommon, {
    elements: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeOrValueType)("null", "PatternLike")))
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    }
  })
});
(0, _utils.default)("ArrowFunctionExpression", {
  builder: ["params", "body", "async"],
  visitor: ["params", "body", "returnType", "typeParameters"],
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: Object.assign({}, _core.functionCommon, {}, _core.functionTypeAnnotationCommon, {
    expression: {
      validate: (0, _utils.assertValueType)("boolean")
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement", "Expression")
    }
  })
});
(0, _utils.default)("ClassBody", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassPrivateProperty", "TSDeclareMethod", "TSIndexSignature")))
    }
  }
});
(0, _utils.default)("ClassExpression", {
  builder: ["id", "superClass", "body", "decorators"],
  visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"],
  aliases: ["Scopable", "Class", "Expression", "Pureish"],
  fields: {
    id: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
      optional: true
    },
    body: {
      validate: (0, _utils.assertNodeType)("ClassBody")
    },
    superClass: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Expression")
    },
    superTypeParameters: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    },
    implements: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
      optional: true
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    }
  }
});
(0, _utils.default)("ClassDeclaration", {
  inherits: "ClassExpression",
  aliases: ["Scopable", "Class", "Statement", "Declaration", "Pureish"],
  fields: {
    declare: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    abstract: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    }
  },
  validate: function () {
    const identifier = (0, _utils.assertNodeType)("Identifier");
    return function (parent, key, node) {
      if (!{}.BABEL_TYPES_8_BREAKING) return;

      if (!(0, _is.default)("ExportDefaultDeclaration", parent)) {
        identifier(node, "id", node.id);
      }
    };
  }()
});
(0, _utils.default)("ExportAllDeclaration", {
  visitor: ["source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    source: {
      validate: (0, _utils.assertNodeType)("StringLiteral")
    }
  }
});
(0, _utils.default)("ExportDefaultDeclaration", {
  visitor: ["declaration"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      validate: (0, _utils.assertNodeType)("FunctionDeclaration", "TSDeclareFunction", "ClassDeclaration", "Expression")
    }
  }
});
(0, _utils.default)("ExportNamedDeclaration", {
  visitor: ["declaration", "specifiers", "source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      optional: true,
      validate: (0, _utils.chain)((0, _utils.assertNodeType)("Declaration"), function (node, key, val) {
        if (!{}.BABEL_TYPES_8_BREAKING) return;

        if (val && node.specifiers.length) {
          throw new TypeError("Only declaration or specifiers is allowed on ExportNamedDeclaration");
        }
      }, function (node, key, val) {
        if (!{}.BABEL_TYPES_8_BREAKING) return;

        if (val && node.source) {
          throw new TypeError("Cannot export a declaration from a source");
        }
      })
    },
    specifiers: {
      default: [],
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)(function () {
        const sourced = (0, _utils.assertNodeType)("ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier");
        const sourceless = (0, _utils.assertNodeType)("ExportSpecifier");
        if (!{}.BABEL_TYPES_8_BREAKING) return sourced;
        return function (node, key, val) {
          const validator = node.source ? sourced : sourceless;
          validator(node, key, val);
        };
      }()))
    },
    source: {
      validate: (0, _utils.assertNodeType)("StringLiteral"),
      optional: true
    },
    exportKind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("type", "value"))
  }
});
(0, _utils.default)("ExportSpecifier", {
  visitor: ["local", "exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    exported: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
(0, _utils.default)("ForOfStatement", {
  visitor: ["left", "right", "body"],
  builder: ["left", "right", "body", "await"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: function () {
        if (!{}.BABEL_TYPES_8_BREAKING) {
          return (0, _utils.assertNodeType)("VariableDeclaration", "LVal");
        }

        const declaration = (0, _utils.assertNodeType)("VariableDeclaration");
        const lval = (0, _utils.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern");
        return function (node, key, val) {
          if ((0, _is.default)("VariableDeclaration", val)) {
            declaration(node, key, val);
          } else {
            lval(node, key, val);
          }
        };
      }()
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    },
    await: {
      default: false
    }
  }
});
(0, _utils.default)("ImportDeclaration", {
  visitor: ["specifiers", "source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration"],
  fields: {
    specifiers: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier")))
    },
    source: {
      validate: (0, _utils.assertNodeType)("StringLiteral")
    },
    importKind: {
      validate: (0, _utils.assertOneOf)("type", "typeof", "value"),
      optional: true
    }
  }
});
(0, _utils.default)("ImportDefaultSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
(0, _utils.default)("ImportNamespaceSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
(0, _utils.default)("ImportSpecifier", {
  visitor: ["local", "imported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    imported: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    importKind: {
      validate: (0, _utils.assertOneOf)("type", "typeof"),
      optional: true
    }
  }
});
(0, _utils.default)("MetaProperty", {
  visitor: ["meta", "property"],
  aliases: ["Expression"],
  fields: {
    meta: {
      validate: (0, _utils.chain)((0, _utils.assertNodeType)("Identifier"), function (node, key, val) {
        if (!{}.BABEL_TYPES_8_BREAKING) return;
        let property;

        switch (val.name) {
          case "function":
            property = "sent";
            break;

          case "new":
            property = "target";
            break;

          case "import":
            property = "meta";
            break;
        }

        if (!(0, _is.default)("Identifier", node.property, {
          name: property
        })) {
          throw new TypeError("Unrecognised MetaProperty");
        }
      })
    },
    property: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
const classMethodOrPropertyCommon = {
  abstract: {
    validate: (0, _utils.assertValueType)("boolean"),
    optional: true
  },
  accessibility: {
    validate: (0, _utils.assertOneOf)("public", "private", "protected"),
    optional: true
  },
  static: {
    default: false
  },
  computed: {
    default: false
  },
  optional: {
    validate: (0, _utils.assertValueType)("boolean"),
    optional: true
  },
  key: {
    validate: (0, _utils.chain)(function () {
      const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
      const computed = (0, _utils.assertNodeType)("Expression");
      return function (node, key, val) {
        const validator = node.computed ? computed : normal;
        validator(node, key, val);
      };
    }(), (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "Expression"))
  }
};
exports.classMethodOrPropertyCommon = classMethodOrPropertyCommon;
const classMethodOrDeclareMethodCommon = Object.assign({}, _core.functionCommon, {}, classMethodOrPropertyCommon, {
  kind: {
    validate: (0, _utils.assertOneOf)("get", "set", "method", "constructor"),
    default: "method"
  },
  access: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("string"), (0, _utils.assertOneOf)("public", "private", "protected")),
    optional: true
  },
  decorators: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
    optional: true
  }
});
exports.classMethodOrDeclareMethodCommon = classMethodOrDeclareMethodCommon;
(0, _utils.default)("ClassMethod", {
  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
  builder: ["kind", "key", "params", "body", "computed", "static", "generator", "async"],
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  fields: Object.assign({}, classMethodOrDeclareMethodCommon, {}, _core.functionTypeAnnotationCommon, {
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  })
});
(0, _utils.default)("ObjectPattern", {
  visitor: ["properties", "typeAnnotation", "decorators"],
  builder: ["properties"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, _core.patternLikeCommon, {
    properties: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("RestElement", "ObjectProperty")))
    }
  })
});
(0, _utils.default)("SpreadElement", {
  visitor: ["argument"],
  aliases: ["UnaryLike"],
  deprecatedAlias: "SpreadProperty",
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("Super", {
  aliases: ["Expression"]
});
(0, _utils.default)("TaggedTemplateExpression", {
  visitor: ["tag", "quasi"],
  aliases: ["Expression"],
  fields: {
    tag: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    quasi: {
      validate: (0, _utils.assertNodeType)("TemplateLiteral")
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
(0, _utils.default)("TemplateElement", {
  builder: ["value", "tail"],
  fields: {
    value: {
      validate: (0, _utils.assertShape)({
        raw: {
          validate: (0, _utils.assertValueType)("string")
        },
        cooked: {
          validate: (0, _utils.assertValueType)("string"),
          optional: true
        }
      })
    },
    tail: {
      default: false
    }
  }
});
(0, _utils.default)("TemplateLiteral", {
  visitor: ["quasis", "expressions"],
  aliases: ["Expression", "Literal"],
  fields: {
    quasis: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TemplateElement")))
    },
    expressions: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression")), function (node, key, val) {
        if (node.quasis.length !== val.length + 1) {
          throw new TypeError(`Number of ${node.type} quasis should be exactly one more than the number of expressions.\nExpected ${val.length + 1} quasis but got ${node.quasis.length}`);
        }
      })
    }
  }
});
(0, _utils.default)("YieldExpression", {
  builder: ["argument", "delegate"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    delegate: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("boolean"), function (node, key, val) {
        if (!{}.BABEL_TYPES_8_BREAKING) return;

        if (val && !node.argument) {
          throw new TypeError("Property delegate of YieldExpression cannot be true if there is no argument");
        }
      }),
      default: false
    },
    argument: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/experimental.js":
/*!*****************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/definitions/experimental.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = _interopRequireWildcard(__webpack_require__(/*! ./utils */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/utils.js"));

var _es = __webpack_require__(/*! ./es2015 */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/es2015.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(0, _utils.default)("ArgumentPlaceholder", {});
(0, _utils.default)("AwaitExpression", {
  builder: ["argument"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("BindExpression", {
  visitor: ["object", "callee"],
  aliases: ["Expression"],
  fields: !{}.BABEL_TYPES_8_BREAKING ? {} : {
    object: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    callee: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("ClassProperty", {
  visitor: ["key", "value", "typeAnnotation", "decorators"],
  builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
  aliases: ["Property"],
  fields: Object.assign({}, _es.classMethodOrPropertyCommon, {
    value: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    definite: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    typeAnnotation: {
      validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: true
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    },
    readonly: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    declare: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    }
  })
});
(0, _utils.default)("OptionalMemberExpression", {
  builder: ["object", "property", "computed", "optional"],
  visitor: ["object", "property"],
  aliases: ["Expression"],
  fields: {
    object: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    property: {
      validate: function () {
        const normal = (0, _utils.assertNodeType)("Identifier");
        const computed = (0, _utils.assertNodeType)("Expression");
        return function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
      }()
    },
    computed: {
      default: false
    },
    optional: {
      validate: (0, _utils.assertValueType)("boolean")
    }
  }
});
(0, _utils.default)("PipelineTopicExpression", {
  builder: ["expression"],
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("PipelineBareFunction", {
  builder: ["callee"],
  visitor: ["callee"],
  fields: {
    callee: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("PipelinePrimaryTopicReference", {
  aliases: ["Expression"]
});
(0, _utils.default)("OptionalCallExpression", {
  visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
  builder: ["callee", "arguments", "optional"],
  aliases: ["Expression"],
  fields: {
    callee: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    arguments: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName")))
    },
    optional: {
      validate: (0, _utils.assertValueType)("boolean")
    },
    typeArguments: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation"),
      optional: true
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
(0, _utils.default)("ClassPrivateProperty", {
  visitor: ["key", "value", "decorators"],
  builder: ["key", "value", "decorators"],
  aliases: ["Property", "Private"],
  fields: {
    key: {
      validate: (0, _utils.assertNodeType)("PrivateName")
    },
    value: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    }
  }
});
(0, _utils.default)("ClassPrivateMethod", {
  builder: ["kind", "key", "params", "body", "static"],
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method", "Private"],
  fields: Object.assign({}, _es.classMethodOrDeclareMethodCommon, {
    key: {
      validate: (0, _utils.assertNodeType)("PrivateName")
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  })
});
(0, _utils.default)("Import", {
  aliases: ["Expression"]
});
(0, _utils.default)("Decorator", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("DoExpression", {
  visitor: ["body"],
  aliases: ["Expression"],
  fields: {
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  }
});
(0, _utils.default)("ExportDefaultSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
(0, _utils.default)("ExportNamespaceSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
(0, _utils.default)("PrivateName", {
  visitor: ["id"],
  aliases: ["Private"],
  fields: {
    id: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
(0, _utils.default)("BigIntLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/flow.js":
/*!*********************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/definitions/flow.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = _interopRequireWildcard(__webpack_require__(/*! ./utils */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/utils.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const defineInterfaceishType = (name, typeParameterType = "TypeParameterDeclaration") => {
  (0, _utils.default)(name, {
    builder: ["id", "typeParameters", "extends", "body"],
    visitor: ["id", "typeParameters", "extends", "mixins", "implements", "body"],
    aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, _utils.validateType)("Identifier"),
      typeParameters: (0, _utils.validateOptionalType)(typeParameterType),
      extends: (0, _utils.validateOptional)((0, _utils.arrayOfType)("InterfaceExtends")),
      mixins: (0, _utils.validateOptional)((0, _utils.arrayOfType)("InterfaceExtends")),
      implements: (0, _utils.validateOptional)((0, _utils.arrayOfType)("ClassImplements")),
      body: (0, _utils.validateType)("ObjectTypeAnnotation")
    }
  });
};

(0, _utils.default)("AnyTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("ArrayTypeAnnotation", {
  visitor: ["elementType"],
  aliases: ["Flow", "FlowType"],
  fields: {
    elementType: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("BooleanTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("BooleanLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["Flow", "FlowType"],
  fields: {
    value: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("NullLiteralTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("ClassImplements", {
  visitor: ["id", "typeParameters"],
  aliases: ["Flow"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterInstantiation")
  }
});
defineInterfaceishType("DeclareClass");
(0, _utils.default)("DeclareFunction", {
  visitor: ["id"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    predicate: (0, _utils.validateOptionalType)("DeclaredPredicate")
  }
});
defineInterfaceishType("DeclareInterface");
(0, _utils.default)("DeclareModule", {
  builder: ["id", "body", "kind"],
  visitor: ["id", "body"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
    body: (0, _utils.validateType)("BlockStatement"),
    kind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("CommonJS", "ES"))
  }
});
(0, _utils.default)("DeclareModuleExports", {
  visitor: ["typeAnnotation"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TypeAnnotation")
  }
});
(0, _utils.default)("DeclareTypeAlias", {
  visitor: ["id", "typeParameters", "right"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
    right: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("DeclareOpaqueType", {
  visitor: ["id", "typeParameters", "supertype"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
    supertype: (0, _utils.validateOptionalType)("FlowType")
  }
});
(0, _utils.default)("DeclareVariable", {
  visitor: ["id"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier")
  }
});
(0, _utils.default)("DeclareExportDeclaration", {
  visitor: ["declaration", "specifiers", "source"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    declaration: (0, _utils.validateOptionalType)("Flow"),
    specifiers: (0, _utils.validateOptional)((0, _utils.arrayOfType)(["ExportSpecifier", "ExportNamespaceSpecifier"])),
    source: (0, _utils.validateOptionalType)("StringLiteral"),
    default: (0, _utils.validateOptional)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("DeclareExportAllDeclaration", {
  visitor: ["source"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    source: (0, _utils.validateType)("StringLiteral"),
    exportKind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("type", "value"))
  }
});
(0, _utils.default)("DeclaredPredicate", {
  visitor: ["value"],
  aliases: ["Flow", "FlowPredicate"],
  fields: {
    value: (0, _utils.validateType)("Flow")
  }
});
(0, _utils.default)("ExistsTypeAnnotation", {
  aliases: ["Flow", "FlowType"]
});
(0, _utils.default)("FunctionTypeAnnotation", {
  visitor: ["typeParameters", "params", "rest", "returnType"],
  aliases: ["Flow", "FlowType"],
  fields: {
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
    params: (0, _utils.validate)((0, _utils.arrayOfType)("FunctionTypeParam")),
    rest: (0, _utils.validateOptionalType)("FunctionTypeParam"),
    returnType: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("FunctionTypeParam", {
  visitor: ["name", "typeAnnotation"],
  aliases: ["Flow"],
  fields: {
    name: (0, _utils.validateOptionalType)("Identifier"),
    typeAnnotation: (0, _utils.validateType)("FlowType"),
    optional: (0, _utils.validateOptional)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("GenericTypeAnnotation", {
  visitor: ["id", "typeParameters"],
  aliases: ["Flow", "FlowType"],
  fields: {
    id: (0, _utils.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterInstantiation")
  }
});
(0, _utils.default)("InferredPredicate", {
  aliases: ["Flow", "FlowPredicate"]
});
(0, _utils.default)("InterfaceExtends", {
  visitor: ["id", "typeParameters"],
  aliases: ["Flow"],
  fields: {
    id: (0, _utils.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterInstantiation")
  }
});
defineInterfaceishType("InterfaceDeclaration");
(0, _utils.default)("InterfaceTypeAnnotation", {
  visitor: ["extends", "body"],
  aliases: ["Flow", "FlowType"],
  fields: {
    extends: (0, _utils.validateOptional)((0, _utils.arrayOfType)("InterfaceExtends")),
    body: (0, _utils.validateType)("ObjectTypeAnnotation")
  }
});
(0, _utils.default)("IntersectionTypeAnnotation", {
  visitor: ["types"],
  aliases: ["Flow", "FlowType"],
  fields: {
    types: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
  }
});
(0, _utils.default)("MixedTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("EmptyTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("NullableTypeAnnotation", {
  visitor: ["typeAnnotation"],
  aliases: ["Flow", "FlowType"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("NumberLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["Flow", "FlowType"],
  fields: {
    value: (0, _utils.validate)((0, _utils.assertValueType)("number"))
  }
});
(0, _utils.default)("NumberTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("ObjectTypeAnnotation", {
  visitor: ["properties", "indexers", "callProperties", "internalSlots"],
  aliases: ["Flow", "FlowType"],
  builder: ["properties", "indexers", "callProperties", "internalSlots", "exact"],
  fields: {
    properties: (0, _utils.validate)((0, _utils.arrayOfType)(["ObjectTypeProperty", "ObjectTypeSpreadProperty"])),
    indexers: (0, _utils.validateOptional)((0, _utils.arrayOfType)("ObjectTypeIndexer")),
    callProperties: (0, _utils.validateOptional)((0, _utils.arrayOfType)("ObjectTypeCallProperty")),
    internalSlots: (0, _utils.validateOptional)((0, _utils.arrayOfType)("ObjectTypeInternalSlot")),
    exact: {
      validate: (0, _utils.assertValueType)("boolean"),
      default: false
    },
    inexact: (0, _utils.validateOptional)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("ObjectTypeInternalSlot", {
  visitor: ["id", "value", "optional", "static", "method"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    value: (0, _utils.validateType)("FlowType"),
    optional: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    static: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    method: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("ObjectTypeCallProperty", {
  visitor: ["value"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {
    value: (0, _utils.validateType)("FlowType"),
    static: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("ObjectTypeIndexer", {
  visitor: ["id", "key", "value", "variance"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {
    id: (0, _utils.validateOptionalType)("Identifier"),
    key: (0, _utils.validateType)("FlowType"),
    value: (0, _utils.validateType)("FlowType"),
    static: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    variance: (0, _utils.validateOptionalType)("Variance")
  }
});
(0, _utils.default)("ObjectTypeProperty", {
  visitor: ["key", "value", "variance"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {
    key: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
    value: (0, _utils.validateType)("FlowType"),
    kind: (0, _utils.validate)((0, _utils.assertOneOf)("init", "get", "set")),
    static: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    proto: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    optional: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    variance: (0, _utils.validateOptionalType)("Variance")
  }
});
(0, _utils.default)("ObjectTypeSpreadProperty", {
  visitor: ["argument"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {
    argument: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("OpaqueType", {
  visitor: ["id", "typeParameters", "supertype", "impltype"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
    supertype: (0, _utils.validateOptionalType)("FlowType"),
    impltype: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("QualifiedTypeIdentifier", {
  visitor: ["id", "qualification"],
  aliases: ["Flow"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    qualification: (0, _utils.validateType)(["Identifier", "QualifiedTypeIdentifier"])
  }
});
(0, _utils.default)("StringLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["Flow", "FlowType"],
  fields: {
    value: (0, _utils.validate)((0, _utils.assertValueType)("string"))
  }
});
(0, _utils.default)("StringTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("ThisTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("TupleTypeAnnotation", {
  visitor: ["types"],
  aliases: ["Flow", "FlowType"],
  fields: {
    types: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
  }
});
(0, _utils.default)("TypeofTypeAnnotation", {
  visitor: ["argument"],
  aliases: ["Flow", "FlowType"],
  fields: {
    argument: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("TypeAlias", {
  visitor: ["id", "typeParameters", "right"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
    right: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("TypeAnnotation", {
  aliases: ["Flow"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("TypeCastExpression", {
  visitor: ["expression", "typeAnnotation"],
  aliases: ["Flow", "ExpressionWrapper", "Expression"],
  fields: {
    expression: (0, _utils.validateType)("Expression"),
    typeAnnotation: (0, _utils.validateType)("TypeAnnotation")
  }
});
(0, _utils.default)("TypeParameter", {
  aliases: ["Flow"],
  visitor: ["bound", "default", "variance"],
  fields: {
    name: (0, _utils.validate)((0, _utils.assertValueType)("string")),
    bound: (0, _utils.validateOptionalType)("TypeAnnotation"),
    default: (0, _utils.validateOptionalType)("FlowType"),
    variance: (0, _utils.validateOptionalType)("Variance")
  }
});
(0, _utils.default)("TypeParameterDeclaration", {
  aliases: ["Flow"],
  visitor: ["params"],
  fields: {
    params: (0, _utils.validate)((0, _utils.arrayOfType)("TypeParameter"))
  }
});
(0, _utils.default)("TypeParameterInstantiation", {
  aliases: ["Flow"],
  visitor: ["params"],
  fields: {
    params: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
  }
});
(0, _utils.default)("UnionTypeAnnotation", {
  visitor: ["types"],
  aliases: ["Flow", "FlowType"],
  fields: {
    types: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
  }
});
(0, _utils.default)("Variance", {
  aliases: ["Flow"],
  builder: ["kind"],
  fields: {
    kind: (0, _utils.validate)((0, _utils.assertOneOf)("minus", "plus"))
  }
});
(0, _utils.default)("VoidTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("EnumDeclaration", {
  aliases: ["Declaration"],
  visitor: ["id", "body"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    body: (0, _utils.validateType)(["EnumBooleanBody", "EnumNumberBody", "EnumStringBody", "EnumSymbolBody"])
  }
});
(0, _utils.default)("EnumBooleanBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    explicit: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    members: (0, _utils.validateArrayOfType)("EnumBooleanMember")
  }
});
(0, _utils.default)("EnumNumberBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    explicit: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    members: (0, _utils.validateArrayOfType)("EnumNumberMember")
  }
});
(0, _utils.default)("EnumStringBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    explicit: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    members: (0, _utils.validateArrayOfType)(["EnumStringMember", "EnumDefaultedMember"])
  }
});
(0, _utils.default)("EnumSymbolBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    members: (0, _utils.validateArrayOfType)("EnumDefaultedMember")
  }
});
(0, _utils.default)("EnumBooleanMember", {
  aliases: ["EnumMember"],
  visitor: ["id"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    init: (0, _utils.validateType)("BooleanLiteral")
  }
});
(0, _utils.default)("EnumNumberMember", {
  aliases: ["EnumMember"],
  visitor: ["id", "init"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    init: (0, _utils.validateType)("NumericLiteral")
  }
});
(0, _utils.default)("EnumStringMember", {
  aliases: ["EnumMember"],
  visitor: ["id", "init"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    init: (0, _utils.validateType)("StringLiteral")
  }
});
(0, _utils.default)("EnumDefaultedMember", {
  aliases: ["EnumMember"],
  visitor: ["id"],
  fields: {
    id: (0, _utils.validateType)("Identifier")
  }
});

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/index.js":
/*!**********************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/definitions/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "VISITOR_KEYS", {
  enumerable: true,
  get: function () {
    return _utils.VISITOR_KEYS;
  }
});
Object.defineProperty(exports, "ALIAS_KEYS", {
  enumerable: true,
  get: function () {
    return _utils.ALIAS_KEYS;
  }
});
Object.defineProperty(exports, "FLIPPED_ALIAS_KEYS", {
  enumerable: true,
  get: function () {
    return _utils.FLIPPED_ALIAS_KEYS;
  }
});
Object.defineProperty(exports, "NODE_FIELDS", {
  enumerable: true,
  get: function () {
    return _utils.NODE_FIELDS;
  }
});
Object.defineProperty(exports, "BUILDER_KEYS", {
  enumerable: true,
  get: function () {
    return _utils.BUILDER_KEYS;
  }
});
Object.defineProperty(exports, "DEPRECATED_KEYS", {
  enumerable: true,
  get: function () {
    return _utils.DEPRECATED_KEYS;
  }
});
Object.defineProperty(exports, "NODE_PARENT_VALIDATIONS", {
  enumerable: true,
  get: function () {
    return _utils.NODE_PARENT_VALIDATIONS;
  }
});
Object.defineProperty(exports, "PLACEHOLDERS", {
  enumerable: true,
  get: function () {
    return _placeholders.PLACEHOLDERS;
  }
});
Object.defineProperty(exports, "PLACEHOLDERS_ALIAS", {
  enumerable: true,
  get: function () {
    return _placeholders.PLACEHOLDERS_ALIAS;
  }
});
Object.defineProperty(exports, "PLACEHOLDERS_FLIPPED_ALIAS", {
  enumerable: true,
  get: function () {
    return _placeholders.PLACEHOLDERS_FLIPPED_ALIAS;
  }
});
exports.TYPES = void 0;

var _toFastProperties = _interopRequireDefault(__webpack_require__(/*! to-fast-properties */ "../babel-plugin-effects/node_modules/to-fast-properties/index.js"));

__webpack_require__(/*! ./core */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/core.js");

__webpack_require__(/*! ./es2015 */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/es2015.js");

__webpack_require__(/*! ./flow */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/flow.js");

__webpack_require__(/*! ./jsx */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/jsx.js");

__webpack_require__(/*! ./misc */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/misc.js");

__webpack_require__(/*! ./experimental */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/experimental.js");

__webpack_require__(/*! ./typescript */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/typescript.js");

var _utils = __webpack_require__(/*! ./utils */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/utils.js");

var _placeholders = __webpack_require__(/*! ./placeholders */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/placeholders.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _toFastProperties.default)(_utils.VISITOR_KEYS);
(0, _toFastProperties.default)(_utils.ALIAS_KEYS);
(0, _toFastProperties.default)(_utils.FLIPPED_ALIAS_KEYS);
(0, _toFastProperties.default)(_utils.NODE_FIELDS);
(0, _toFastProperties.default)(_utils.BUILDER_KEYS);
(0, _toFastProperties.default)(_utils.DEPRECATED_KEYS);
(0, _toFastProperties.default)(_placeholders.PLACEHOLDERS_ALIAS);
(0, _toFastProperties.default)(_placeholders.PLACEHOLDERS_FLIPPED_ALIAS);
const TYPES = Object.keys(_utils.VISITOR_KEYS).concat(Object.keys(_utils.FLIPPED_ALIAS_KEYS)).concat(Object.keys(_utils.DEPRECATED_KEYS));
exports.TYPES = TYPES;

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/jsx.js":
/*!********************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/definitions/jsx.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = _interopRequireWildcard(__webpack_require__(/*! ./utils */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/utils.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(0, _utils.default)("JSXAttribute", {
  visitor: ["name", "value"],
  aliases: ["JSX", "Immutable"],
  fields: {
    name: {
      validate: (0, _utils.assertNodeType)("JSXIdentifier", "JSXNamespacedName")
    },
    value: {
      optional: true,
      validate: (0, _utils.assertNodeType)("JSXElement", "JSXFragment", "StringLiteral", "JSXExpressionContainer")
    }
  }
});
(0, _utils.default)("JSXClosingElement", {
  visitor: ["name"],
  aliases: ["JSX", "Immutable"],
  fields: {
    name: {
      validate: (0, _utils.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
    }
  }
});
(0, _utils.default)("JSXElement", {
  builder: ["openingElement", "closingElement", "children", "selfClosing"],
  visitor: ["openingElement", "children", "closingElement"],
  aliases: ["JSX", "Immutable", "Expression"],
  fields: {
    openingElement: {
      validate: (0, _utils.assertNodeType)("JSXOpeningElement")
    },
    closingElement: {
      optional: true,
      validate: (0, _utils.assertNodeType)("JSXClosingElement")
    },
    children: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
    }
  }
});
(0, _utils.default)("JSXEmptyExpression", {
  aliases: ["JSX"]
});
(0, _utils.default)("JSXExpressionContainer", {
  visitor: ["expression"],
  aliases: ["JSX", "Immutable"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression", "JSXEmptyExpression")
    }
  }
});
(0, _utils.default)("JSXSpreadChild", {
  visitor: ["expression"],
  aliases: ["JSX", "Immutable"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("JSXIdentifier", {
  builder: ["name"],
  aliases: ["JSX"],
  fields: {
    name: {
      validate: (0, _utils.assertValueType)("string")
    }
  }
});
(0, _utils.default)("JSXMemberExpression", {
  visitor: ["object", "property"],
  aliases: ["JSX"],
  fields: {
    object: {
      validate: (0, _utils.assertNodeType)("JSXMemberExpression", "JSXIdentifier")
    },
    property: {
      validate: (0, _utils.assertNodeType)("JSXIdentifier")
    }
  }
});
(0, _utils.default)("JSXNamespacedName", {
  visitor: ["namespace", "name"],
  aliases: ["JSX"],
  fields: {
    namespace: {
      validate: (0, _utils.assertNodeType)("JSXIdentifier")
    },
    name: {
      validate: (0, _utils.assertNodeType)("JSXIdentifier")
    }
  }
});
(0, _utils.default)("JSXOpeningElement", {
  builder: ["name", "attributes", "selfClosing"],
  visitor: ["name", "attributes"],
  aliases: ["JSX", "Immutable"],
  fields: {
    name: {
      validate: (0, _utils.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
    },
    selfClosing: {
      default: false
    },
    attributes: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("JSXAttribute", "JSXSpreadAttribute")))
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
(0, _utils.default)("JSXSpreadAttribute", {
  visitor: ["argument"],
  aliases: ["JSX"],
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("JSXText", {
  aliases: ["JSX", "Immutable"],
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("string")
    }
  }
});
(0, _utils.default)("JSXFragment", {
  builder: ["openingFragment", "closingFragment", "children"],
  visitor: ["openingFragment", "children", "closingFragment"],
  aliases: ["JSX", "Immutable", "Expression"],
  fields: {
    openingFragment: {
      validate: (0, _utils.assertNodeType)("JSXOpeningFragment")
    },
    closingFragment: {
      validate: (0, _utils.assertNodeType)("JSXClosingFragment")
    },
    children: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
    }
  }
});
(0, _utils.default)("JSXOpeningFragment", {
  aliases: ["JSX", "Immutable"]
});
(0, _utils.default)("JSXClosingFragment", {
  aliases: ["JSX", "Immutable"]
});

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/misc.js":
/*!*********************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/definitions/misc.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = _interopRequireWildcard(__webpack_require__(/*! ./utils */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/utils.js"));

var _placeholders = __webpack_require__(/*! ./placeholders */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/placeholders.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(0, _utils.default)("Noop", {
  visitor: []
});
(0, _utils.default)("Placeholder", {
  visitor: [],
  builder: ["expectedNode", "name"],
  fields: {
    name: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    expectedNode: {
      validate: (0, _utils.assertOneOf)(..._placeholders.PLACEHOLDERS)
    }
  }
});
(0, _utils.default)("V8IntrinsicIdentifier", {
  builder: ["name"],
  fields: {
    name: {
      validate: (0, _utils.assertValueType)("string")
    }
  }
});

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/placeholders.js":
/*!*****************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/definitions/placeholders.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PLACEHOLDERS_FLIPPED_ALIAS = exports.PLACEHOLDERS_ALIAS = exports.PLACEHOLDERS = void 0;

var _utils = __webpack_require__(/*! ./utils */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/utils.js");

const PLACEHOLDERS = ["Identifier", "StringLiteral", "Expression", "Statement", "Declaration", "BlockStatement", "ClassBody", "Pattern"];
exports.PLACEHOLDERS = PLACEHOLDERS;
const PLACEHOLDERS_ALIAS = {
  Declaration: ["Statement"],
  Pattern: ["PatternLike", "LVal"]
};
exports.PLACEHOLDERS_ALIAS = PLACEHOLDERS_ALIAS;

for (const type of PLACEHOLDERS) {
  const alias = _utils.ALIAS_KEYS[type];
  if (alias && alias.length) PLACEHOLDERS_ALIAS[type] = alias;
}

const PLACEHOLDERS_FLIPPED_ALIAS = {};
exports.PLACEHOLDERS_FLIPPED_ALIAS = PLACEHOLDERS_FLIPPED_ALIAS;
Object.keys(PLACEHOLDERS_ALIAS).forEach(type => {
  PLACEHOLDERS_ALIAS[type].forEach(alias => {
    if (!Object.hasOwnProperty.call(PLACEHOLDERS_FLIPPED_ALIAS, alias)) {
      PLACEHOLDERS_FLIPPED_ALIAS[alias] = [];
    }

    PLACEHOLDERS_FLIPPED_ALIAS[alias].push(type);
  });
});

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/typescript.js":
/*!***************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/definitions/typescript.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = _interopRequireWildcard(__webpack_require__(/*! ./utils */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/utils.js"));

var _core = __webpack_require__(/*! ./core */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/core.js");

var _es = __webpack_require__(/*! ./es2015 */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/es2015.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const bool = (0, _utils.assertValueType)("boolean");
const tSFunctionTypeAnnotationCommon = {
  returnType: {
    validate: (0, _utils.assertNodeType)("TSTypeAnnotation", "Noop"),
    optional: true
  },
  typeParameters: {
    validate: (0, _utils.assertNodeType)("TSTypeParameterDeclaration", "Noop"),
    optional: true
  }
};
(0, _utils.default)("TSParameterProperty", {
  aliases: ["LVal"],
  visitor: ["parameter"],
  fields: {
    accessibility: {
      validate: (0, _utils.assertOneOf)("public", "private", "protected"),
      optional: true
    },
    readonly: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    parameter: {
      validate: (0, _utils.assertNodeType)("Identifier", "AssignmentPattern")
    }
  }
});
(0, _utils.default)("TSDeclareFunction", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "params", "returnType"],
  fields: Object.assign({}, _core.functionDeclarationCommon, {}, tSFunctionTypeAnnotationCommon)
});
(0, _utils.default)("TSDeclareMethod", {
  visitor: ["decorators", "key", "typeParameters", "params", "returnType"],
  fields: Object.assign({}, _es.classMethodOrDeclareMethodCommon, {}, tSFunctionTypeAnnotationCommon)
});
(0, _utils.default)("TSQualifiedName", {
  aliases: ["TSEntityName"],
  visitor: ["left", "right"],
  fields: {
    left: (0, _utils.validateType)("TSEntityName"),
    right: (0, _utils.validateType)("Identifier")
  }
});
const signatureDeclarationCommon = {
  typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
  parameters: (0, _utils.validateArrayOfType)(["Identifier", "RestElement"]),
  typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation")
};
const callConstructSignatureDeclaration = {
  aliases: ["TSTypeElement"],
  visitor: ["typeParameters", "parameters", "typeAnnotation"],
  fields: signatureDeclarationCommon
};
(0, _utils.default)("TSCallSignatureDeclaration", callConstructSignatureDeclaration);
(0, _utils.default)("TSConstructSignatureDeclaration", callConstructSignatureDeclaration);
const namedTypeElementCommon = {
  key: (0, _utils.validateType)("Expression"),
  computed: (0, _utils.validate)(bool),
  optional: (0, _utils.validateOptional)(bool)
};
(0, _utils.default)("TSPropertySignature", {
  aliases: ["TSTypeElement"],
  visitor: ["key", "typeAnnotation", "initializer"],
  fields: Object.assign({}, namedTypeElementCommon, {
    readonly: (0, _utils.validateOptional)(bool),
    typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation"),
    initializer: (0, _utils.validateOptionalType)("Expression")
  })
});
(0, _utils.default)("TSMethodSignature", {
  aliases: ["TSTypeElement"],
  visitor: ["key", "typeParameters", "parameters", "typeAnnotation"],
  fields: Object.assign({}, signatureDeclarationCommon, {}, namedTypeElementCommon)
});
(0, _utils.default)("TSIndexSignature", {
  aliases: ["TSTypeElement"],
  visitor: ["parameters", "typeAnnotation"],
  fields: {
    readonly: (0, _utils.validateOptional)(bool),
    parameters: (0, _utils.validateArrayOfType)("Identifier"),
    typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation")
  }
});
const tsKeywordTypes = ["TSAnyKeyword", "TSBooleanKeyword", "TSBigIntKeyword", "TSNeverKeyword", "TSNullKeyword", "TSNumberKeyword", "TSObjectKeyword", "TSStringKeyword", "TSSymbolKeyword", "TSUndefinedKeyword", "TSUnknownKeyword", "TSVoidKeyword"];

for (const type of tsKeywordTypes) {
  (0, _utils.default)(type, {
    aliases: ["TSType"],
    visitor: [],
    fields: {}
  });
}

(0, _utils.default)("TSThisType", {
  aliases: ["TSType"],
  visitor: [],
  fields: {}
});
const fnOrCtr = {
  aliases: ["TSType"],
  visitor: ["typeParameters", "parameters", "typeAnnotation"],
  fields: signatureDeclarationCommon
};
(0, _utils.default)("TSFunctionType", fnOrCtr);
(0, _utils.default)("TSConstructorType", fnOrCtr);
(0, _utils.default)("TSTypeReference", {
  aliases: ["TSType"],
  visitor: ["typeName", "typeParameters"],
  fields: {
    typeName: (0, _utils.validateType)("TSEntityName"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
(0, _utils.default)("TSTypePredicate", {
  aliases: ["TSType"],
  visitor: ["parameterName", "typeAnnotation"],
  builder: ["parameterName", "typeAnnotation", "asserts"],
  fields: {
    parameterName: (0, _utils.validateType)(["Identifier", "TSThisType"]),
    typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation"),
    asserts: (0, _utils.validateOptional)(bool)
  }
});
(0, _utils.default)("TSTypeQuery", {
  aliases: ["TSType"],
  visitor: ["exprName"],
  fields: {
    exprName: (0, _utils.validateType)(["TSEntityName", "TSImportType"])
  }
});
(0, _utils.default)("TSTypeLiteral", {
  aliases: ["TSType"],
  visitor: ["members"],
  fields: {
    members: (0, _utils.validateArrayOfType)("TSTypeElement")
  }
});
(0, _utils.default)("TSArrayType", {
  aliases: ["TSType"],
  visitor: ["elementType"],
  fields: {
    elementType: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSTupleType", {
  aliases: ["TSType"],
  visitor: ["elementTypes"],
  fields: {
    elementTypes: (0, _utils.validateArrayOfType)("TSType")
  }
});
(0, _utils.default)("TSOptionalType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSRestType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
const unionOrIntersection = {
  aliases: ["TSType"],
  visitor: ["types"],
  fields: {
    types: (0, _utils.validateArrayOfType)("TSType")
  }
};
(0, _utils.default)("TSUnionType", unionOrIntersection);
(0, _utils.default)("TSIntersectionType", unionOrIntersection);
(0, _utils.default)("TSConditionalType", {
  aliases: ["TSType"],
  visitor: ["checkType", "extendsType", "trueType", "falseType"],
  fields: {
    checkType: (0, _utils.validateType)("TSType"),
    extendsType: (0, _utils.validateType)("TSType"),
    trueType: (0, _utils.validateType)("TSType"),
    falseType: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSInferType", {
  aliases: ["TSType"],
  visitor: ["typeParameter"],
  fields: {
    typeParameter: (0, _utils.validateType)("TSTypeParameter")
  }
});
(0, _utils.default)("TSParenthesizedType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSTypeOperator", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    operator: (0, _utils.validate)((0, _utils.assertValueType)("string")),
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSIndexedAccessType", {
  aliases: ["TSType"],
  visitor: ["objectType", "indexType"],
  fields: {
    objectType: (0, _utils.validateType)("TSType"),
    indexType: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSMappedType", {
  aliases: ["TSType"],
  visitor: ["typeParameter", "typeAnnotation"],
  fields: {
    readonly: (0, _utils.validateOptional)(bool),
    typeParameter: (0, _utils.validateType)("TSTypeParameter"),
    optional: (0, _utils.validateOptional)(bool),
    typeAnnotation: (0, _utils.validateOptionalType)("TSType")
  }
});
(0, _utils.default)("TSLiteralType", {
  aliases: ["TSType"],
  visitor: ["literal"],
  fields: {
    literal: (0, _utils.validateType)(["NumericLiteral", "StringLiteral", "BooleanLiteral"])
  }
});
(0, _utils.default)("TSExpressionWithTypeArguments", {
  aliases: ["TSType"],
  visitor: ["expression", "typeParameters"],
  fields: {
    expression: (0, _utils.validateType)("TSEntityName"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
(0, _utils.default)("TSInterfaceDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "extends", "body"],
  fields: {
    declare: (0, _utils.validateOptional)(bool),
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
    extends: (0, _utils.validateOptional)((0, _utils.arrayOfType)("TSExpressionWithTypeArguments")),
    body: (0, _utils.validateType)("TSInterfaceBody")
  }
});
(0, _utils.default)("TSInterfaceBody", {
  visitor: ["body"],
  fields: {
    body: (0, _utils.validateArrayOfType)("TSTypeElement")
  }
});
(0, _utils.default)("TSTypeAliasDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "typeAnnotation"],
  fields: {
    declare: (0, _utils.validateOptional)(bool),
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSAsExpression", {
  aliases: ["Expression"],
  visitor: ["expression", "typeAnnotation"],
  fields: {
    expression: (0, _utils.validateType)("Expression"),
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSTypeAssertion", {
  aliases: ["Expression"],
  visitor: ["typeAnnotation", "expression"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TSType"),
    expression: (0, _utils.validateType)("Expression")
  }
});
(0, _utils.default)("TSEnumDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "members"],
  fields: {
    declare: (0, _utils.validateOptional)(bool),
    const: (0, _utils.validateOptional)(bool),
    id: (0, _utils.validateType)("Identifier"),
    members: (0, _utils.validateArrayOfType)("TSEnumMember"),
    initializer: (0, _utils.validateOptionalType)("Expression")
  }
});
(0, _utils.default)("TSEnumMember", {
  visitor: ["id", "initializer"],
  fields: {
    id: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
    initializer: (0, _utils.validateOptionalType)("Expression")
  }
});
(0, _utils.default)("TSModuleDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "body"],
  fields: {
    declare: (0, _utils.validateOptional)(bool),
    global: (0, _utils.validateOptional)(bool),
    id: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
    body: (0, _utils.validateType)(["TSModuleBlock", "TSModuleDeclaration"])
  }
});
(0, _utils.default)("TSModuleBlock", {
  aliases: ["Scopable", "Block", "BlockParent"],
  visitor: ["body"],
  fields: {
    body: (0, _utils.validateArrayOfType)("Statement")
  }
});
(0, _utils.default)("TSImportType", {
  aliases: ["TSType"],
  visitor: ["argument", "qualifier", "typeParameters"],
  fields: {
    argument: (0, _utils.validateType)("StringLiteral"),
    qualifier: (0, _utils.validateOptionalType)("TSEntityName"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
(0, _utils.default)("TSImportEqualsDeclaration", {
  aliases: ["Statement"],
  visitor: ["id", "moduleReference"],
  fields: {
    isExport: (0, _utils.validate)(bool),
    id: (0, _utils.validateType)("Identifier"),
    moduleReference: (0, _utils.validateType)(["TSEntityName", "TSExternalModuleReference"])
  }
});
(0, _utils.default)("TSExternalModuleReference", {
  visitor: ["expression"],
  fields: {
    expression: (0, _utils.validateType)("StringLiteral")
  }
});
(0, _utils.default)("TSNonNullExpression", {
  aliases: ["Expression"],
  visitor: ["expression"],
  fields: {
    expression: (0, _utils.validateType)("Expression")
  }
});
(0, _utils.default)("TSExportAssignment", {
  aliases: ["Statement"],
  visitor: ["expression"],
  fields: {
    expression: (0, _utils.validateType)("Expression")
  }
});
(0, _utils.default)("TSNamespaceExportDeclaration", {
  aliases: ["Statement"],
  visitor: ["id"],
  fields: {
    id: (0, _utils.validateType)("Identifier")
  }
});
(0, _utils.default)("TSTypeAnnotation", {
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: {
      validate: (0, _utils.assertNodeType)("TSType")
    }
  }
});
(0, _utils.default)("TSTypeParameterInstantiation", {
  visitor: ["params"],
  fields: {
    params: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSType")))
    }
  }
});
(0, _utils.default)("TSTypeParameterDeclaration", {
  visitor: ["params"],
  fields: {
    params: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSTypeParameter")))
    }
  }
});
(0, _utils.default)("TSTypeParameter", {
  builder: ["constraint", "default", "name"],
  visitor: ["constraint", "default"],
  fields: {
    name: {
      validate: (0, _utils.assertValueType)("string")
    },
    constraint: {
      validate: (0, _utils.assertNodeType)("TSType"),
      optional: true
    },
    default: {
      validate: (0, _utils.assertNodeType)("TSType"),
      optional: true
    }
  }
});

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/utils.js":
/*!**********************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/definitions/utils.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = validate;
exports.typeIs = typeIs;
exports.validateType = validateType;
exports.validateOptional = validateOptional;
exports.validateOptionalType = validateOptionalType;
exports.arrayOf = arrayOf;
exports.arrayOfType = arrayOfType;
exports.validateArrayOfType = validateArrayOfType;
exports.assertEach = assertEach;
exports.assertOneOf = assertOneOf;
exports.assertNodeType = assertNodeType;
exports.assertNodeOrValueType = assertNodeOrValueType;
exports.assertValueType = assertValueType;
exports.assertShape = assertShape;
exports.chain = chain;
exports.default = defineType;
exports.NODE_PARENT_VALIDATIONS = exports.DEPRECATED_KEYS = exports.BUILDER_KEYS = exports.NODE_FIELDS = exports.FLIPPED_ALIAS_KEYS = exports.ALIAS_KEYS = exports.VISITOR_KEYS = void 0;

var _is = _interopRequireDefault(__webpack_require__(/*! ../validators/is */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/is.js"));

var _validate = __webpack_require__(/*! ../validators/validate */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/validate.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const VISITOR_KEYS = {};
exports.VISITOR_KEYS = VISITOR_KEYS;
const ALIAS_KEYS = {};
exports.ALIAS_KEYS = ALIAS_KEYS;
const FLIPPED_ALIAS_KEYS = {};
exports.FLIPPED_ALIAS_KEYS = FLIPPED_ALIAS_KEYS;
const NODE_FIELDS = {};
exports.NODE_FIELDS = NODE_FIELDS;
const BUILDER_KEYS = {};
exports.BUILDER_KEYS = BUILDER_KEYS;
const DEPRECATED_KEYS = {};
exports.DEPRECATED_KEYS = DEPRECATED_KEYS;
const NODE_PARENT_VALIDATIONS = {};
exports.NODE_PARENT_VALIDATIONS = NODE_PARENT_VALIDATIONS;

function getType(val) {
  if (Array.isArray(val)) {
    return "array";
  } else if (val === null) {
    return "null";
  } else {
    return typeof val;
  }
}

function validate(validate) {
  return {
    validate
  };
}

function typeIs(typeName) {
  return typeof typeName === "string" ? assertNodeType(typeName) : assertNodeType(...typeName);
}

function validateType(typeName) {
  return validate(typeIs(typeName));
}

function validateOptional(validate) {
  return {
    validate,
    optional: true
  };
}

function validateOptionalType(typeName) {
  return {
    validate: typeIs(typeName),
    optional: true
  };
}

function arrayOf(elementType) {
  return chain(assertValueType("array"), assertEach(elementType));
}

function arrayOfType(typeName) {
  return arrayOf(typeIs(typeName));
}

function validateArrayOfType(typeName) {
  return validate(arrayOfType(typeName));
}

function assertEach(callback) {
  function validator(node, key, val) {
    if (!Array.isArray(val)) return;

    for (let i = 0; i < val.length; i++) {
      const subkey = `${key}[${i}]`;
      const v = val[i];
      callback(node, subkey, v);
      if ({}.BABEL_TYPES_8_BREAKING) (0, _validate.validateChild)(node, subkey, v);
    }
  }

  validator.each = callback;
  return validator;
}

function assertOneOf(...values) {
  function validate(node, key, val) {
    if (values.indexOf(val) < 0) {
      throw new TypeError(`Property ${key} expected value to be one of ${JSON.stringify(values)} but got ${JSON.stringify(val)}`);
    }
  }

  validate.oneOf = values;
  return validate;
}

function assertNodeType(...types) {
  function validate(node, key, val) {
    for (const type of types) {
      if ((0, _is.default)(type, val)) {
        (0, _validate.validateChild)(node, key, val);
        return;
      }
    }

    throw new TypeError(`Property ${key} of ${node.type} expected node to be of a type ${JSON.stringify(types)} but instead got ${JSON.stringify(val && val.type)}`);
  }

  validate.oneOfNodeTypes = types;
  return validate;
}

function assertNodeOrValueType(...types) {
  function validate(node, key, val) {
    for (const type of types) {
      if (getType(val) === type || (0, _is.default)(type, val)) {
        (0, _validate.validateChild)(node, key, val);
        return;
      }
    }

    throw new TypeError(`Property ${key} of ${node.type} expected node to be of a type ${JSON.stringify(types)} but instead got ${JSON.stringify(val && val.type)}`);
  }

  validate.oneOfNodeOrValueTypes = types;
  return validate;
}

function assertValueType(type) {
  function validate(node, key, val) {
    const valid = getType(val) === type;

    if (!valid) {
      throw new TypeError(`Property ${key} expected type of ${type} but got ${getType(val)}`);
    }
  }

  validate.type = type;
  return validate;
}

function assertShape(shape) {
  function validate(node, key, val) {
    const errors = [];

    for (const property of Object.keys(shape)) {
      try {
        (0, _validate.validateField)(node, property, val[property], shape[property]);
      } catch (error) {
        if (error instanceof TypeError) {
          errors.push(error.message);
          continue;
        }

        throw error;
      }
    }

    if (errors.length) {
      throw new TypeError(`Property ${key} of ${node.type} expected to have the following:\n${errors.join("\n")}`);
    }
  }

  validate.shapeOf = shape;
  return validate;
}

function chain(...fns) {
  function validate(...args) {
    for (const fn of fns) {
      fn(...args);
    }
  }

  validate.chainOf = fns;
  return validate;
}

const validTypeOpts = ["aliases", "builder", "deprecatedAlias", "fields", "inherits", "visitor", "validate"];
const validFieldKeys = ["default", "optional", "validate"];

function defineType(type, opts = {}) {
  const inherits = opts.inherits && store[opts.inherits] || {};
  let fields = opts.fields;

  if (!fields) {
    fields = {};

    if (inherits.fields) {
      const keys = Object.getOwnPropertyNames(inherits.fields);

      for (const key of keys) {
        const field = inherits.fields[key];
        fields[key] = {
          default: field.default,
          optional: field.optional,
          validate: field.validate
        };
      }
    }
  }

  const visitor = opts.visitor || inherits.visitor || [];
  const aliases = opts.aliases || inherits.aliases || [];
  const builder = opts.builder || inherits.builder || opts.visitor || [];

  for (const k of Object.keys(opts)) {
    if (validTypeOpts.indexOf(k) === -1) {
      throw new Error(`Unknown type option "${k}" on ${type}`);
    }
  }

  if (opts.deprecatedAlias) {
    DEPRECATED_KEYS[opts.deprecatedAlias] = type;
  }

  for (const key of visitor.concat(builder)) {
    fields[key] = fields[key] || {};
  }

  for (const key of Object.keys(fields)) {
    const field = fields[key];

    if (field.default !== undefined && builder.indexOf(key) === -1) {
      field.optional = true;
    }

    if (field.default === undefined) {
      field.default = null;
    } else if (!field.validate && field.default != null) {
      field.validate = assertValueType(getType(field.default));
    }

    for (const k of Object.keys(field)) {
      if (validFieldKeys.indexOf(k) === -1) {
        throw new Error(`Unknown field key "${k}" on ${type}.${key}`);
      }
    }
  }

  VISITOR_KEYS[type] = opts.visitor = visitor;
  BUILDER_KEYS[type] = opts.builder = builder;
  NODE_FIELDS[type] = opts.fields = fields;
  ALIAS_KEYS[type] = opts.aliases = aliases;
  aliases.forEach(alias => {
    FLIPPED_ALIAS_KEYS[alias] = FLIPPED_ALIAS_KEYS[alias] || [];
    FLIPPED_ALIAS_KEYS[alias].push(type);
  });

  if (opts.validate) {
    NODE_PARENT_VALIDATIONS[type] = opts.validate;
  }

  store[type] = opts;
}

const store = {};

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/index.js":
/*!**********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  react: true,
  assertNode: true,
  createTypeAnnotationBasedOnTypeof: true,
  createUnionTypeAnnotation: true,
  cloneNode: true,
  clone: true,
  cloneDeep: true,
  cloneWithoutLoc: true,
  addComment: true,
  addComments: true,
  inheritInnerComments: true,
  inheritLeadingComments: true,
  inheritsComments: true,
  inheritTrailingComments: true,
  removeComments: true,
  ensureBlock: true,
  toBindingIdentifierName: true,
  toBlock: true,
  toComputedKey: true,
  toExpression: true,
  toIdentifier: true,
  toKeyAlias: true,
  toSequenceExpression: true,
  toStatement: true,
  valueToNode: true,
  appendToMemberExpression: true,
  inherits: true,
  prependToMemberExpression: true,
  removeProperties: true,
  removePropertiesDeep: true,
  removeTypeDuplicates: true,
  getBindingIdentifiers: true,
  getOuterBindingIdentifiers: true,
  traverse: true,
  traverseFast: true,
  shallowEqual: true,
  is: true,
  isBinding: true,
  isBlockScoped: true,
  isImmutable: true,
  isLet: true,
  isNode: true,
  isNodesEquivalent: true,
  isPlaceholderType: true,
  isReferenced: true,
  isScope: true,
  isSpecifierDefault: true,
  isType: true,
  isValidES3Identifier: true,
  isValidIdentifier: true,
  isVar: true,
  matchesPattern: true,
  validate: true,
  buildMatchMemberExpression: true
};
Object.defineProperty(exports, "assertNode", {
  enumerable: true,
  get: function () {
    return _assertNode.default;
  }
});
Object.defineProperty(exports, "createTypeAnnotationBasedOnTypeof", {
  enumerable: true,
  get: function () {
    return _createTypeAnnotationBasedOnTypeof.default;
  }
});
Object.defineProperty(exports, "createUnionTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _createUnionTypeAnnotation.default;
  }
});
Object.defineProperty(exports, "cloneNode", {
  enumerable: true,
  get: function () {
    return _cloneNode.default;
  }
});
Object.defineProperty(exports, "clone", {
  enumerable: true,
  get: function () {
    return _clone.default;
  }
});
Object.defineProperty(exports, "cloneDeep", {
  enumerable: true,
  get: function () {
    return _cloneDeep.default;
  }
});
Object.defineProperty(exports, "cloneWithoutLoc", {
  enumerable: true,
  get: function () {
    return _cloneWithoutLoc.default;
  }
});
Object.defineProperty(exports, "addComment", {
  enumerable: true,
  get: function () {
    return _addComment.default;
  }
});
Object.defineProperty(exports, "addComments", {
  enumerable: true,
  get: function () {
    return _addComments.default;
  }
});
Object.defineProperty(exports, "inheritInnerComments", {
  enumerable: true,
  get: function () {
    return _inheritInnerComments.default;
  }
});
Object.defineProperty(exports, "inheritLeadingComments", {
  enumerable: true,
  get: function () {
    return _inheritLeadingComments.default;
  }
});
Object.defineProperty(exports, "inheritsComments", {
  enumerable: true,
  get: function () {
    return _inheritsComments.default;
  }
});
Object.defineProperty(exports, "inheritTrailingComments", {
  enumerable: true,
  get: function () {
    return _inheritTrailingComments.default;
  }
});
Object.defineProperty(exports, "removeComments", {
  enumerable: true,
  get: function () {
    return _removeComments.default;
  }
});
Object.defineProperty(exports, "ensureBlock", {
  enumerable: true,
  get: function () {
    return _ensureBlock.default;
  }
});
Object.defineProperty(exports, "toBindingIdentifierName", {
  enumerable: true,
  get: function () {
    return _toBindingIdentifierName.default;
  }
});
Object.defineProperty(exports, "toBlock", {
  enumerable: true,
  get: function () {
    return _toBlock.default;
  }
});
Object.defineProperty(exports, "toComputedKey", {
  enumerable: true,
  get: function () {
    return _toComputedKey.default;
  }
});
Object.defineProperty(exports, "toExpression", {
  enumerable: true,
  get: function () {
    return _toExpression.default;
  }
});
Object.defineProperty(exports, "toIdentifier", {
  enumerable: true,
  get: function () {
    return _toIdentifier.default;
  }
});
Object.defineProperty(exports, "toKeyAlias", {
  enumerable: true,
  get: function () {
    return _toKeyAlias.default;
  }
});
Object.defineProperty(exports, "toSequenceExpression", {
  enumerable: true,
  get: function () {
    return _toSequenceExpression.default;
  }
});
Object.defineProperty(exports, "toStatement", {
  enumerable: true,
  get: function () {
    return _toStatement.default;
  }
});
Object.defineProperty(exports, "valueToNode", {
  enumerable: true,
  get: function () {
    return _valueToNode.default;
  }
});
Object.defineProperty(exports, "appendToMemberExpression", {
  enumerable: true,
  get: function () {
    return _appendToMemberExpression.default;
  }
});
Object.defineProperty(exports, "inherits", {
  enumerable: true,
  get: function () {
    return _inherits.default;
  }
});
Object.defineProperty(exports, "prependToMemberExpression", {
  enumerable: true,
  get: function () {
    return _prependToMemberExpression.default;
  }
});
Object.defineProperty(exports, "removeProperties", {
  enumerable: true,
  get: function () {
    return _removeProperties.default;
  }
});
Object.defineProperty(exports, "removePropertiesDeep", {
  enumerable: true,
  get: function () {
    return _removePropertiesDeep.default;
  }
});
Object.defineProperty(exports, "removeTypeDuplicates", {
  enumerable: true,
  get: function () {
    return _removeTypeDuplicates.default;
  }
});
Object.defineProperty(exports, "getBindingIdentifiers", {
  enumerable: true,
  get: function () {
    return _getBindingIdentifiers.default;
  }
});
Object.defineProperty(exports, "getOuterBindingIdentifiers", {
  enumerable: true,
  get: function () {
    return _getOuterBindingIdentifiers.default;
  }
});
Object.defineProperty(exports, "traverse", {
  enumerable: true,
  get: function () {
    return _traverse.default;
  }
});
Object.defineProperty(exports, "traverseFast", {
  enumerable: true,
  get: function () {
    return _traverseFast.default;
  }
});
Object.defineProperty(exports, "shallowEqual", {
  enumerable: true,
  get: function () {
    return _shallowEqual.default;
  }
});
Object.defineProperty(exports, "is", {
  enumerable: true,
  get: function () {
    return _is.default;
  }
});
Object.defineProperty(exports, "isBinding", {
  enumerable: true,
  get: function () {
    return _isBinding.default;
  }
});
Object.defineProperty(exports, "isBlockScoped", {
  enumerable: true,
  get: function () {
    return _isBlockScoped.default;
  }
});
Object.defineProperty(exports, "isImmutable", {
  enumerable: true,
  get: function () {
    return _isImmutable.default;
  }
});
Object.defineProperty(exports, "isLet", {
  enumerable: true,
  get: function () {
    return _isLet.default;
  }
});
Object.defineProperty(exports, "isNode", {
  enumerable: true,
  get: function () {
    return _isNode.default;
  }
});
Object.defineProperty(exports, "isNodesEquivalent", {
  enumerable: true,
  get: function () {
    return _isNodesEquivalent.default;
  }
});
Object.defineProperty(exports, "isPlaceholderType", {
  enumerable: true,
  get: function () {
    return _isPlaceholderType.default;
  }
});
Object.defineProperty(exports, "isReferenced", {
  enumerable: true,
  get: function () {
    return _isReferenced.default;
  }
});
Object.defineProperty(exports, "isScope", {
  enumerable: true,
  get: function () {
    return _isScope.default;
  }
});
Object.defineProperty(exports, "isSpecifierDefault", {
  enumerable: true,
  get: function () {
    return _isSpecifierDefault.default;
  }
});
Object.defineProperty(exports, "isType", {
  enumerable: true,
  get: function () {
    return _isType.default;
  }
});
Object.defineProperty(exports, "isValidES3Identifier", {
  enumerable: true,
  get: function () {
    return _isValidES3Identifier.default;
  }
});
Object.defineProperty(exports, "isValidIdentifier", {
  enumerable: true,
  get: function () {
    return _isValidIdentifier.default;
  }
});
Object.defineProperty(exports, "isVar", {
  enumerable: true,
  get: function () {
    return _isVar.default;
  }
});
Object.defineProperty(exports, "matchesPattern", {
  enumerable: true,
  get: function () {
    return _matchesPattern.default;
  }
});
Object.defineProperty(exports, "validate", {
  enumerable: true,
  get: function () {
    return _validate.default;
  }
});
Object.defineProperty(exports, "buildMatchMemberExpression", {
  enumerable: true,
  get: function () {
    return _buildMatchMemberExpression.default;
  }
});
exports.react = void 0;

var _isReactComponent = _interopRequireDefault(__webpack_require__(/*! ./validators/react/isReactComponent */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/react/isReactComponent.js"));

var _isCompatTag = _interopRequireDefault(__webpack_require__(/*! ./validators/react/isCompatTag */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/react/isCompatTag.js"));

var _buildChildren = _interopRequireDefault(__webpack_require__(/*! ./builders/react/buildChildren */ "../babel-plugin-effects/node_modules/@babel/types/lib/builders/react/buildChildren.js"));

var _assertNode = _interopRequireDefault(__webpack_require__(/*! ./asserts/assertNode */ "../babel-plugin-effects/node_modules/@babel/types/lib/asserts/assertNode.js"));

var _generated = __webpack_require__(/*! ./asserts/generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/asserts/generated/index.js");

Object.keys(_generated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _generated[key];
    }
  });
});

var _createTypeAnnotationBasedOnTypeof = _interopRequireDefault(__webpack_require__(/*! ./builders/flow/createTypeAnnotationBasedOnTypeof */ "../babel-plugin-effects/node_modules/@babel/types/lib/builders/flow/createTypeAnnotationBasedOnTypeof.js"));

var _createUnionTypeAnnotation = _interopRequireDefault(__webpack_require__(/*! ./builders/flow/createUnionTypeAnnotation */ "../babel-plugin-effects/node_modules/@babel/types/lib/builders/flow/createUnionTypeAnnotation.js"));

var _generated2 = __webpack_require__(/*! ./builders/generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/builders/generated/index.js");

Object.keys(_generated2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _generated2[key];
    }
  });
});

var _cloneNode = _interopRequireDefault(__webpack_require__(/*! ./clone/cloneNode */ "../babel-plugin-effects/node_modules/@babel/types/lib/clone/cloneNode.js"));

var _clone = _interopRequireDefault(__webpack_require__(/*! ./clone/clone */ "../babel-plugin-effects/node_modules/@babel/types/lib/clone/clone.js"));

var _cloneDeep = _interopRequireDefault(__webpack_require__(/*! ./clone/cloneDeep */ "../babel-plugin-effects/node_modules/@babel/types/lib/clone/cloneDeep.js"));

var _cloneWithoutLoc = _interopRequireDefault(__webpack_require__(/*! ./clone/cloneWithoutLoc */ "../babel-plugin-effects/node_modules/@babel/types/lib/clone/cloneWithoutLoc.js"));

var _addComment = _interopRequireDefault(__webpack_require__(/*! ./comments/addComment */ "../babel-plugin-effects/node_modules/@babel/types/lib/comments/addComment.js"));

var _addComments = _interopRequireDefault(__webpack_require__(/*! ./comments/addComments */ "../babel-plugin-effects/node_modules/@babel/types/lib/comments/addComments.js"));

var _inheritInnerComments = _interopRequireDefault(__webpack_require__(/*! ./comments/inheritInnerComments */ "../babel-plugin-effects/node_modules/@babel/types/lib/comments/inheritInnerComments.js"));

var _inheritLeadingComments = _interopRequireDefault(__webpack_require__(/*! ./comments/inheritLeadingComments */ "../babel-plugin-effects/node_modules/@babel/types/lib/comments/inheritLeadingComments.js"));

var _inheritsComments = _interopRequireDefault(__webpack_require__(/*! ./comments/inheritsComments */ "../babel-plugin-effects/node_modules/@babel/types/lib/comments/inheritsComments.js"));

var _inheritTrailingComments = _interopRequireDefault(__webpack_require__(/*! ./comments/inheritTrailingComments */ "../babel-plugin-effects/node_modules/@babel/types/lib/comments/inheritTrailingComments.js"));

var _removeComments = _interopRequireDefault(__webpack_require__(/*! ./comments/removeComments */ "../babel-plugin-effects/node_modules/@babel/types/lib/comments/removeComments.js"));

var _generated3 = __webpack_require__(/*! ./constants/generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/constants/generated/index.js");

Object.keys(_generated3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _generated3[key];
    }
  });
});

var _constants = __webpack_require__(/*! ./constants */ "../babel-plugin-effects/node_modules/@babel/types/lib/constants/index.js");

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constants[key];
    }
  });
});

var _ensureBlock = _interopRequireDefault(__webpack_require__(/*! ./converters/ensureBlock */ "../babel-plugin-effects/node_modules/@babel/types/lib/converters/ensureBlock.js"));

var _toBindingIdentifierName = _interopRequireDefault(__webpack_require__(/*! ./converters/toBindingIdentifierName */ "../babel-plugin-effects/node_modules/@babel/types/lib/converters/toBindingIdentifierName.js"));

var _toBlock = _interopRequireDefault(__webpack_require__(/*! ./converters/toBlock */ "../babel-plugin-effects/node_modules/@babel/types/lib/converters/toBlock.js"));

var _toComputedKey = _interopRequireDefault(__webpack_require__(/*! ./converters/toComputedKey */ "../babel-plugin-effects/node_modules/@babel/types/lib/converters/toComputedKey.js"));

var _toExpression = _interopRequireDefault(__webpack_require__(/*! ./converters/toExpression */ "../babel-plugin-effects/node_modules/@babel/types/lib/converters/toExpression.js"));

var _toIdentifier = _interopRequireDefault(__webpack_require__(/*! ./converters/toIdentifier */ "../babel-plugin-effects/node_modules/@babel/types/lib/converters/toIdentifier.js"));

var _toKeyAlias = _interopRequireDefault(__webpack_require__(/*! ./converters/toKeyAlias */ "../babel-plugin-effects/node_modules/@babel/types/lib/converters/toKeyAlias.js"));

var _toSequenceExpression = _interopRequireDefault(__webpack_require__(/*! ./converters/toSequenceExpression */ "../babel-plugin-effects/node_modules/@babel/types/lib/converters/toSequenceExpression.js"));

var _toStatement = _interopRequireDefault(__webpack_require__(/*! ./converters/toStatement */ "../babel-plugin-effects/node_modules/@babel/types/lib/converters/toStatement.js"));

var _valueToNode = _interopRequireDefault(__webpack_require__(/*! ./converters/valueToNode */ "../babel-plugin-effects/node_modules/@babel/types/lib/converters/valueToNode.js"));

var _definitions = __webpack_require__(/*! ./definitions */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/index.js");

Object.keys(_definitions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _definitions[key];
    }
  });
});

var _appendToMemberExpression = _interopRequireDefault(__webpack_require__(/*! ./modifications/appendToMemberExpression */ "../babel-plugin-effects/node_modules/@babel/types/lib/modifications/appendToMemberExpression.js"));

var _inherits = _interopRequireDefault(__webpack_require__(/*! ./modifications/inherits */ "../babel-plugin-effects/node_modules/@babel/types/lib/modifications/inherits.js"));

var _prependToMemberExpression = _interopRequireDefault(__webpack_require__(/*! ./modifications/prependToMemberExpression */ "../babel-plugin-effects/node_modules/@babel/types/lib/modifications/prependToMemberExpression.js"));

var _removeProperties = _interopRequireDefault(__webpack_require__(/*! ./modifications/removeProperties */ "../babel-plugin-effects/node_modules/@babel/types/lib/modifications/removeProperties.js"));

var _removePropertiesDeep = _interopRequireDefault(__webpack_require__(/*! ./modifications/removePropertiesDeep */ "../babel-plugin-effects/node_modules/@babel/types/lib/modifications/removePropertiesDeep.js"));

var _removeTypeDuplicates = _interopRequireDefault(__webpack_require__(/*! ./modifications/flow/removeTypeDuplicates */ "../babel-plugin-effects/node_modules/@babel/types/lib/modifications/flow/removeTypeDuplicates.js"));

var _getBindingIdentifiers = _interopRequireDefault(__webpack_require__(/*! ./retrievers/getBindingIdentifiers */ "../babel-plugin-effects/node_modules/@babel/types/lib/retrievers/getBindingIdentifiers.js"));

var _getOuterBindingIdentifiers = _interopRequireDefault(__webpack_require__(/*! ./retrievers/getOuterBindingIdentifiers */ "../babel-plugin-effects/node_modules/@babel/types/lib/retrievers/getOuterBindingIdentifiers.js"));

var _traverse = _interopRequireDefault(__webpack_require__(/*! ./traverse/traverse */ "../babel-plugin-effects/node_modules/@babel/types/lib/traverse/traverse.js"));

var _traverseFast = _interopRequireDefault(__webpack_require__(/*! ./traverse/traverseFast */ "../babel-plugin-effects/node_modules/@babel/types/lib/traverse/traverseFast.js"));

var _shallowEqual = _interopRequireDefault(__webpack_require__(/*! ./utils/shallowEqual */ "../babel-plugin-effects/node_modules/@babel/types/lib/utils/shallowEqual.js"));

var _is = _interopRequireDefault(__webpack_require__(/*! ./validators/is */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/is.js"));

var _isBinding = _interopRequireDefault(__webpack_require__(/*! ./validators/isBinding */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isBinding.js"));

var _isBlockScoped = _interopRequireDefault(__webpack_require__(/*! ./validators/isBlockScoped */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isBlockScoped.js"));

var _isImmutable = _interopRequireDefault(__webpack_require__(/*! ./validators/isImmutable */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isImmutable.js"));

var _isLet = _interopRequireDefault(__webpack_require__(/*! ./validators/isLet */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isLet.js"));

var _isNode = _interopRequireDefault(__webpack_require__(/*! ./validators/isNode */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isNode.js"));

var _isNodesEquivalent = _interopRequireDefault(__webpack_require__(/*! ./validators/isNodesEquivalent */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isNodesEquivalent.js"));

var _isPlaceholderType = _interopRequireDefault(__webpack_require__(/*! ./validators/isPlaceholderType */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isPlaceholderType.js"));

var _isReferenced = _interopRequireDefault(__webpack_require__(/*! ./validators/isReferenced */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isReferenced.js"));

var _isScope = _interopRequireDefault(__webpack_require__(/*! ./validators/isScope */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isScope.js"));

var _isSpecifierDefault = _interopRequireDefault(__webpack_require__(/*! ./validators/isSpecifierDefault */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isSpecifierDefault.js"));

var _isType = _interopRequireDefault(__webpack_require__(/*! ./validators/isType */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isType.js"));

var _isValidES3Identifier = _interopRequireDefault(__webpack_require__(/*! ./validators/isValidES3Identifier */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isValidES3Identifier.js"));

var _isValidIdentifier = _interopRequireDefault(__webpack_require__(/*! ./validators/isValidIdentifier */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isValidIdentifier.js"));

var _isVar = _interopRequireDefault(__webpack_require__(/*! ./validators/isVar */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isVar.js"));

var _matchesPattern = _interopRequireDefault(__webpack_require__(/*! ./validators/matchesPattern */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/matchesPattern.js"));

var _validate = _interopRequireDefault(__webpack_require__(/*! ./validators/validate */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/validate.js"));

var _buildMatchMemberExpression = _interopRequireDefault(__webpack_require__(/*! ./validators/buildMatchMemberExpression */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/buildMatchMemberExpression.js"));

var _generated4 = __webpack_require__(/*! ./validators/generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/generated/index.js");

Object.keys(_generated4).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _generated4[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const react = {
  isReactComponent: _isReactComponent.default,
  isCompatTag: _isCompatTag.default,
  buildChildren: _buildChildren.default
};
exports.react = react;

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/modifications/appendToMemberExpression.js":
/*!*******************************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/modifications/appendToMemberExpression.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = appendToMemberExpression;

var _generated = __webpack_require__(/*! ../builders/generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/builders/generated/index.js");

function appendToMemberExpression(member, append, computed = false) {
  member.object = (0, _generated.memberExpression)(member.object, member.property, member.computed);
  member.property = append;
  member.computed = !!computed;
  return member;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/modifications/flow/removeTypeDuplicates.js":
/*!********************************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/modifications/flow/removeTypeDuplicates.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeTypeDuplicates;

var _generated = __webpack_require__(/*! ../../validators/generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/generated/index.js");

function removeTypeDuplicates(nodes) {
  const generics = {};
  const bases = {};
  const typeGroups = [];
  const types = [];

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (!node) continue;

    if (types.indexOf(node) >= 0) {
      continue;
    }

    if ((0, _generated.isAnyTypeAnnotation)(node)) {
      return [node];
    }

    if ((0, _generated.isFlowBaseAnnotation)(node)) {
      bases[node.type] = node;
      continue;
    }

    if ((0, _generated.isUnionTypeAnnotation)(node)) {
      if (typeGroups.indexOf(node.types) < 0) {
        nodes = nodes.concat(node.types);
        typeGroups.push(node.types);
      }

      continue;
    }

    if ((0, _generated.isGenericTypeAnnotation)(node)) {
      const name = node.id.name;

      if (generics[name]) {
        let existing = generics[name];

        if (existing.typeParameters) {
          if (node.typeParameters) {
            existing.typeParameters.params = removeTypeDuplicates(existing.typeParameters.params.concat(node.typeParameters.params));
          }
        } else {
          existing = node.typeParameters;
        }
      } else {
        generics[name] = node;
      }

      continue;
    }

    types.push(node);
  }

  for (const type of Object.keys(bases)) {
    types.push(bases[type]);
  }

  for (const name of Object.keys(generics)) {
    types.push(generics[name]);
  }

  return types;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/modifications/inherits.js":
/*!***************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/modifications/inherits.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inherits;

var _constants = __webpack_require__(/*! ../constants */ "../babel-plugin-effects/node_modules/@babel/types/lib/constants/index.js");

var _inheritsComments = _interopRequireDefault(__webpack_require__(/*! ../comments/inheritsComments */ "../babel-plugin-effects/node_modules/@babel/types/lib/comments/inheritsComments.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inherits(child, parent) {
  if (!child || !parent) return child;

  for (const key of _constants.INHERIT_KEYS.optional) {
    if (child[key] == null) {
      child[key] = parent[key];
    }
  }

  for (const key of Object.keys(parent)) {
    if (key[0] === "_" && key !== "__clone") child[key] = parent[key];
  }

  for (const key of _constants.INHERIT_KEYS.force) {
    child[key] = parent[key];
  }

  (0, _inheritsComments.default)(child, parent);
  return child;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/modifications/prependToMemberExpression.js":
/*!********************************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/modifications/prependToMemberExpression.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prependToMemberExpression;

var _generated = __webpack_require__(/*! ../builders/generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/builders/generated/index.js");

function prependToMemberExpression(member, prepend) {
  member.object = (0, _generated.memberExpression)(prepend, member.object);
  return member;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/modifications/removeProperties.js":
/*!***********************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/modifications/removeProperties.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeProperties;

var _constants = __webpack_require__(/*! ../constants */ "../babel-plugin-effects/node_modules/@babel/types/lib/constants/index.js");

const CLEAR_KEYS = ["tokens", "start", "end", "loc", "raw", "rawValue"];

const CLEAR_KEYS_PLUS_COMMENTS = _constants.COMMENT_KEYS.concat(["comments"]).concat(CLEAR_KEYS);

function removeProperties(node, opts = {}) {
  const map = opts.preserveComments ? CLEAR_KEYS : CLEAR_KEYS_PLUS_COMMENTS;

  for (const key of map) {
    if (node[key] != null) node[key] = undefined;
  }

  for (const key of Object.keys(node)) {
    if (key[0] === "_" && node[key] != null) node[key] = undefined;
  }

  const symbols = Object.getOwnPropertySymbols(node);

  for (const sym of symbols) {
    node[sym] = null;
  }
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/modifications/removePropertiesDeep.js":
/*!***************************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/modifications/removePropertiesDeep.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removePropertiesDeep;

var _traverseFast = _interopRequireDefault(__webpack_require__(/*! ../traverse/traverseFast */ "../babel-plugin-effects/node_modules/@babel/types/lib/traverse/traverseFast.js"));

var _removeProperties = _interopRequireDefault(__webpack_require__(/*! ./removeProperties */ "../babel-plugin-effects/node_modules/@babel/types/lib/modifications/removeProperties.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function removePropertiesDeep(tree, opts) {
  (0, _traverseFast.default)(tree, _removeProperties.default, opts);
  return tree;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/retrievers/getBindingIdentifiers.js":
/*!*************************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/retrievers/getBindingIdentifiers.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBindingIdentifiers;

var _generated = __webpack_require__(/*! ../validators/generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/generated/index.js");

function getBindingIdentifiers(node, duplicates, outerOnly) {
  let search = [].concat(node);
  const ids = Object.create(null);

  while (search.length) {
    const id = search.shift();
    if (!id) continue;
    const keys = getBindingIdentifiers.keys[id.type];

    if ((0, _generated.isIdentifier)(id)) {
      if (duplicates) {
        const _ids = ids[id.name] = ids[id.name] || [];

        _ids.push(id);
      } else {
        ids[id.name] = id;
      }

      continue;
    }

    if ((0, _generated.isExportDeclaration)(id)) {
      if ((0, _generated.isDeclaration)(id.declaration)) {
        search.push(id.declaration);
      }

      continue;
    }

    if (outerOnly) {
      if ((0, _generated.isFunctionDeclaration)(id)) {
        search.push(id.id);
        continue;
      }

      if ((0, _generated.isFunctionExpression)(id)) {
        continue;
      }
    }

    if (keys) {
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];

        if (id[key]) {
          search = search.concat(id[key]);
        }
      }
    }
  }

  return ids;
}

getBindingIdentifiers.keys = {
  DeclareClass: ["id"],
  DeclareFunction: ["id"],
  DeclareModule: ["id"],
  DeclareVariable: ["id"],
  DeclareInterface: ["id"],
  DeclareTypeAlias: ["id"],
  DeclareOpaqueType: ["id"],
  InterfaceDeclaration: ["id"],
  TypeAlias: ["id"],
  OpaqueType: ["id"],
  CatchClause: ["param"],
  LabeledStatement: ["label"],
  UnaryExpression: ["argument"],
  AssignmentExpression: ["left"],
  ImportSpecifier: ["local"],
  ImportNamespaceSpecifier: ["local"],
  ImportDefaultSpecifier: ["local"],
  ImportDeclaration: ["specifiers"],
  ExportSpecifier: ["exported"],
  ExportNamespaceSpecifier: ["exported"],
  ExportDefaultSpecifier: ["exported"],
  FunctionDeclaration: ["id", "params"],
  FunctionExpression: ["id", "params"],
  ArrowFunctionExpression: ["params"],
  ObjectMethod: ["params"],
  ClassMethod: ["params"],
  ForInStatement: ["left"],
  ForOfStatement: ["left"],
  ClassDeclaration: ["id"],
  ClassExpression: ["id"],
  RestElement: ["argument"],
  UpdateExpression: ["argument"],
  ObjectProperty: ["value"],
  AssignmentPattern: ["left"],
  ArrayPattern: ["elements"],
  ObjectPattern: ["properties"],
  VariableDeclaration: ["declarations"],
  VariableDeclarator: ["id"]
};

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/retrievers/getOuterBindingIdentifiers.js":
/*!******************************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/retrievers/getOuterBindingIdentifiers.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOuterBindingIdentifiers;

var _getBindingIdentifiers = _interopRequireDefault(__webpack_require__(/*! ./getBindingIdentifiers */ "../babel-plugin-effects/node_modules/@babel/types/lib/retrievers/getBindingIdentifiers.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getOuterBindingIdentifiers(node, duplicates) {
  return (0, _getBindingIdentifiers.default)(node, duplicates, true);
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/traverse/traverse.js":
/*!**********************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/traverse/traverse.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = traverse;

var _definitions = __webpack_require__(/*! ../definitions */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/index.js");

function traverse(node, handlers, state) {
  if (typeof handlers === "function") {
    handlers = {
      enter: handlers
    };
  }

  const {
    enter,
    exit
  } = handlers;
  traverseSimpleImpl(node, enter, exit, state, []);
}

function traverseSimpleImpl(node, enter, exit, state, ancestors) {
  const keys = _definitions.VISITOR_KEYS[node.type];
  if (!keys) return;
  if (enter) enter(node, ancestors, state);

  for (const key of keys) {
    const subNode = node[key];

    if (Array.isArray(subNode)) {
      for (let i = 0; i < subNode.length; i++) {
        const child = subNode[i];
        if (!child) continue;
        ancestors.push({
          node,
          key,
          index: i
        });
        traverseSimpleImpl(child, enter, exit, state, ancestors);
        ancestors.pop();
      }
    } else if (subNode) {
      ancestors.push({
        node,
        key
      });
      traverseSimpleImpl(subNode, enter, exit, state, ancestors);
      ancestors.pop();
    }
  }

  if (exit) exit(node, ancestors, state);
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/traverse/traverseFast.js":
/*!**************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/traverse/traverseFast.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = traverseFast;

var _definitions = __webpack_require__(/*! ../definitions */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/index.js");

function traverseFast(node, enter, opts) {
  if (!node) return;
  const keys = _definitions.VISITOR_KEYS[node.type];
  if (!keys) return;
  opts = opts || {};
  enter(node, opts);

  for (const key of keys) {
    const subNode = node[key];

    if (Array.isArray(subNode)) {
      for (const node of subNode) {
        traverseFast(node, enter, opts);
      }
    } else {
      traverseFast(subNode, enter, opts);
    }
  }
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/utils/inherit.js":
/*!******************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/utils/inherit.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inherit;

var _uniq = _interopRequireDefault(__webpack_require__(/*! lodash/uniq */ "../babel-plugin-effects/node_modules/lodash/uniq.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inherit(key, child, parent) {
  if (child && parent) {
    child[key] = (0, _uniq.default)([].concat(child[key], parent[key]).filter(Boolean));
  }
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/utils/react/cleanJSXElementLiteralChild.js":
/*!********************************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/utils/react/cleanJSXElementLiteralChild.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cleanJSXElementLiteralChild;

var _generated = __webpack_require__(/*! ../../builders/generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/builders/generated/index.js");

function cleanJSXElementLiteralChild(child, args) {
  const lines = child.value.split(/\r\n|\n|\r/);
  let lastNonEmptyLine = 0;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].match(/[^ \t]/)) {
      lastNonEmptyLine = i;
    }
  }

  let str = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isFirstLine = i === 0;
    const isLastLine = i === lines.length - 1;
    const isLastNonEmptyLine = i === lastNonEmptyLine;
    let trimmedLine = line.replace(/\t/g, " ");

    if (!isFirstLine) {
      trimmedLine = trimmedLine.replace(/^[ ]+/, "");
    }

    if (!isLastLine) {
      trimmedLine = trimmedLine.replace(/[ ]+$/, "");
    }

    if (trimmedLine) {
      if (!isLastNonEmptyLine) {
        trimmedLine += " ";
      }

      str += trimmedLine;
    }
  }

  if (str) args.push((0, _generated.stringLiteral)(str));
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/utils/shallowEqual.js":
/*!***********************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/utils/shallowEqual.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shallowEqual;

function shallowEqual(actual, expected) {
  const keys = Object.keys(expected);

  for (const key of keys) {
    if (actual[key] !== expected[key]) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/buildMatchMemberExpression.js":
/*!******************************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/validators/buildMatchMemberExpression.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildMatchMemberExpression;

var _matchesPattern = _interopRequireDefault(__webpack_require__(/*! ./matchesPattern */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/matchesPattern.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildMatchMemberExpression(match, allowPartial) {
  const parts = match.split(".");
  return member => (0, _matchesPattern.default)(member, parts, allowPartial);
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/generated/index.js":
/*!*******************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/validators/generated/index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArrayExpression = isArrayExpression;
exports.isAssignmentExpression = isAssignmentExpression;
exports.isBinaryExpression = isBinaryExpression;
exports.isInterpreterDirective = isInterpreterDirective;
exports.isDirective = isDirective;
exports.isDirectiveLiteral = isDirectiveLiteral;
exports.isBlockStatement = isBlockStatement;
exports.isBreakStatement = isBreakStatement;
exports.isCallExpression = isCallExpression;
exports.isCatchClause = isCatchClause;
exports.isConditionalExpression = isConditionalExpression;
exports.isContinueStatement = isContinueStatement;
exports.isDebuggerStatement = isDebuggerStatement;
exports.isDoWhileStatement = isDoWhileStatement;
exports.isEmptyStatement = isEmptyStatement;
exports.isExpressionStatement = isExpressionStatement;
exports.isFile = isFile;
exports.isForInStatement = isForInStatement;
exports.isForStatement = isForStatement;
exports.isFunctionDeclaration = isFunctionDeclaration;
exports.isFunctionExpression = isFunctionExpression;
exports.isIdentifier = isIdentifier;
exports.isIfStatement = isIfStatement;
exports.isLabeledStatement = isLabeledStatement;
exports.isStringLiteral = isStringLiteral;
exports.isNumericLiteral = isNumericLiteral;
exports.isNullLiteral = isNullLiteral;
exports.isBooleanLiteral = isBooleanLiteral;
exports.isRegExpLiteral = isRegExpLiteral;
exports.isLogicalExpression = isLogicalExpression;
exports.isMemberExpression = isMemberExpression;
exports.isNewExpression = isNewExpression;
exports.isProgram = isProgram;
exports.isObjectExpression = isObjectExpression;
exports.isObjectMethod = isObjectMethod;
exports.isObjectProperty = isObjectProperty;
exports.isRestElement = isRestElement;
exports.isReturnStatement = isReturnStatement;
exports.isSequenceExpression = isSequenceExpression;
exports.isParenthesizedExpression = isParenthesizedExpression;
exports.isSwitchCase = isSwitchCase;
exports.isSwitchStatement = isSwitchStatement;
exports.isThisExpression = isThisExpression;
exports.isThrowStatement = isThrowStatement;
exports.isTryStatement = isTryStatement;
exports.isUnaryExpression = isUnaryExpression;
exports.isUpdateExpression = isUpdateExpression;
exports.isVariableDeclaration = isVariableDeclaration;
exports.isVariableDeclarator = isVariableDeclarator;
exports.isWhileStatement = isWhileStatement;
exports.isWithStatement = isWithStatement;
exports.isAssignmentPattern = isAssignmentPattern;
exports.isArrayPattern = isArrayPattern;
exports.isArrowFunctionExpression = isArrowFunctionExpression;
exports.isClassBody = isClassBody;
exports.isClassExpression = isClassExpression;
exports.isClassDeclaration = isClassDeclaration;
exports.isExportAllDeclaration = isExportAllDeclaration;
exports.isExportDefaultDeclaration = isExportDefaultDeclaration;
exports.isExportNamedDeclaration = isExportNamedDeclaration;
exports.isExportSpecifier = isExportSpecifier;
exports.isForOfStatement = isForOfStatement;
exports.isImportDeclaration = isImportDeclaration;
exports.isImportDefaultSpecifier = isImportDefaultSpecifier;
exports.isImportNamespaceSpecifier = isImportNamespaceSpecifier;
exports.isImportSpecifier = isImportSpecifier;
exports.isMetaProperty = isMetaProperty;
exports.isClassMethod = isClassMethod;
exports.isObjectPattern = isObjectPattern;
exports.isSpreadElement = isSpreadElement;
exports.isSuper = isSuper;
exports.isTaggedTemplateExpression = isTaggedTemplateExpression;
exports.isTemplateElement = isTemplateElement;
exports.isTemplateLiteral = isTemplateLiteral;
exports.isYieldExpression = isYieldExpression;
exports.isAnyTypeAnnotation = isAnyTypeAnnotation;
exports.isArrayTypeAnnotation = isArrayTypeAnnotation;
exports.isBooleanTypeAnnotation = isBooleanTypeAnnotation;
exports.isBooleanLiteralTypeAnnotation = isBooleanLiteralTypeAnnotation;
exports.isNullLiteralTypeAnnotation = isNullLiteralTypeAnnotation;
exports.isClassImplements = isClassImplements;
exports.isDeclareClass = isDeclareClass;
exports.isDeclareFunction = isDeclareFunction;
exports.isDeclareInterface = isDeclareInterface;
exports.isDeclareModule = isDeclareModule;
exports.isDeclareModuleExports = isDeclareModuleExports;
exports.isDeclareTypeAlias = isDeclareTypeAlias;
exports.isDeclareOpaqueType = isDeclareOpaqueType;
exports.isDeclareVariable = isDeclareVariable;
exports.isDeclareExportDeclaration = isDeclareExportDeclaration;
exports.isDeclareExportAllDeclaration = isDeclareExportAllDeclaration;
exports.isDeclaredPredicate = isDeclaredPredicate;
exports.isExistsTypeAnnotation = isExistsTypeAnnotation;
exports.isFunctionTypeAnnotation = isFunctionTypeAnnotation;
exports.isFunctionTypeParam = isFunctionTypeParam;
exports.isGenericTypeAnnotation = isGenericTypeAnnotation;
exports.isInferredPredicate = isInferredPredicate;
exports.isInterfaceExtends = isInterfaceExtends;
exports.isInterfaceDeclaration = isInterfaceDeclaration;
exports.isInterfaceTypeAnnotation = isInterfaceTypeAnnotation;
exports.isIntersectionTypeAnnotation = isIntersectionTypeAnnotation;
exports.isMixedTypeAnnotation = isMixedTypeAnnotation;
exports.isEmptyTypeAnnotation = isEmptyTypeAnnotation;
exports.isNullableTypeAnnotation = isNullableTypeAnnotation;
exports.isNumberLiteralTypeAnnotation = isNumberLiteralTypeAnnotation;
exports.isNumberTypeAnnotation = isNumberTypeAnnotation;
exports.isObjectTypeAnnotation = isObjectTypeAnnotation;
exports.isObjectTypeInternalSlot = isObjectTypeInternalSlot;
exports.isObjectTypeCallProperty = isObjectTypeCallProperty;
exports.isObjectTypeIndexer = isObjectTypeIndexer;
exports.isObjectTypeProperty = isObjectTypeProperty;
exports.isObjectTypeSpreadProperty = isObjectTypeSpreadProperty;
exports.isOpaqueType = isOpaqueType;
exports.isQualifiedTypeIdentifier = isQualifiedTypeIdentifier;
exports.isStringLiteralTypeAnnotation = isStringLiteralTypeAnnotation;
exports.isStringTypeAnnotation = isStringTypeAnnotation;
exports.isThisTypeAnnotation = isThisTypeAnnotation;
exports.isTupleTypeAnnotation = isTupleTypeAnnotation;
exports.isTypeofTypeAnnotation = isTypeofTypeAnnotation;
exports.isTypeAlias = isTypeAlias;
exports.isTypeAnnotation = isTypeAnnotation;
exports.isTypeCastExpression = isTypeCastExpression;
exports.isTypeParameter = isTypeParameter;
exports.isTypeParameterDeclaration = isTypeParameterDeclaration;
exports.isTypeParameterInstantiation = isTypeParameterInstantiation;
exports.isUnionTypeAnnotation = isUnionTypeAnnotation;
exports.isVariance = isVariance;
exports.isVoidTypeAnnotation = isVoidTypeAnnotation;
exports.isEnumDeclaration = isEnumDeclaration;
exports.isEnumBooleanBody = isEnumBooleanBody;
exports.isEnumNumberBody = isEnumNumberBody;
exports.isEnumStringBody = isEnumStringBody;
exports.isEnumSymbolBody = isEnumSymbolBody;
exports.isEnumBooleanMember = isEnumBooleanMember;
exports.isEnumNumberMember = isEnumNumberMember;
exports.isEnumStringMember = isEnumStringMember;
exports.isEnumDefaultedMember = isEnumDefaultedMember;
exports.isJSXAttribute = isJSXAttribute;
exports.isJSXClosingElement = isJSXClosingElement;
exports.isJSXElement = isJSXElement;
exports.isJSXEmptyExpression = isJSXEmptyExpression;
exports.isJSXExpressionContainer = isJSXExpressionContainer;
exports.isJSXSpreadChild = isJSXSpreadChild;
exports.isJSXIdentifier = isJSXIdentifier;
exports.isJSXMemberExpression = isJSXMemberExpression;
exports.isJSXNamespacedName = isJSXNamespacedName;
exports.isJSXOpeningElement = isJSXOpeningElement;
exports.isJSXSpreadAttribute = isJSXSpreadAttribute;
exports.isJSXText = isJSXText;
exports.isJSXFragment = isJSXFragment;
exports.isJSXOpeningFragment = isJSXOpeningFragment;
exports.isJSXClosingFragment = isJSXClosingFragment;
exports.isNoop = isNoop;
exports.isPlaceholder = isPlaceholder;
exports.isV8IntrinsicIdentifier = isV8IntrinsicIdentifier;
exports.isArgumentPlaceholder = isArgumentPlaceholder;
exports.isAwaitExpression = isAwaitExpression;
exports.isBindExpression = isBindExpression;
exports.isClassProperty = isClassProperty;
exports.isOptionalMemberExpression = isOptionalMemberExpression;
exports.isPipelineTopicExpression = isPipelineTopicExpression;
exports.isPipelineBareFunction = isPipelineBareFunction;
exports.isPipelinePrimaryTopicReference = isPipelinePrimaryTopicReference;
exports.isOptionalCallExpression = isOptionalCallExpression;
exports.isClassPrivateProperty = isClassPrivateProperty;
exports.isClassPrivateMethod = isClassPrivateMethod;
exports.isImport = isImport;
exports.isDecorator = isDecorator;
exports.isDoExpression = isDoExpression;
exports.isExportDefaultSpecifier = isExportDefaultSpecifier;
exports.isExportNamespaceSpecifier = isExportNamespaceSpecifier;
exports.isPrivateName = isPrivateName;
exports.isBigIntLiteral = isBigIntLiteral;
exports.isTSParameterProperty = isTSParameterProperty;
exports.isTSDeclareFunction = isTSDeclareFunction;
exports.isTSDeclareMethod = isTSDeclareMethod;
exports.isTSQualifiedName = isTSQualifiedName;
exports.isTSCallSignatureDeclaration = isTSCallSignatureDeclaration;
exports.isTSConstructSignatureDeclaration = isTSConstructSignatureDeclaration;
exports.isTSPropertySignature = isTSPropertySignature;
exports.isTSMethodSignature = isTSMethodSignature;
exports.isTSIndexSignature = isTSIndexSignature;
exports.isTSAnyKeyword = isTSAnyKeyword;
exports.isTSBooleanKeyword = isTSBooleanKeyword;
exports.isTSBigIntKeyword = isTSBigIntKeyword;
exports.isTSNeverKeyword = isTSNeverKeyword;
exports.isTSNullKeyword = isTSNullKeyword;
exports.isTSNumberKeyword = isTSNumberKeyword;
exports.isTSObjectKeyword = isTSObjectKeyword;
exports.isTSStringKeyword = isTSStringKeyword;
exports.isTSSymbolKeyword = isTSSymbolKeyword;
exports.isTSUndefinedKeyword = isTSUndefinedKeyword;
exports.isTSUnknownKeyword = isTSUnknownKeyword;
exports.isTSVoidKeyword = isTSVoidKeyword;
exports.isTSThisType = isTSThisType;
exports.isTSFunctionType = isTSFunctionType;
exports.isTSConstructorType = isTSConstructorType;
exports.isTSTypeReference = isTSTypeReference;
exports.isTSTypePredicate = isTSTypePredicate;
exports.isTSTypeQuery = isTSTypeQuery;
exports.isTSTypeLiteral = isTSTypeLiteral;
exports.isTSArrayType = isTSArrayType;
exports.isTSTupleType = isTSTupleType;
exports.isTSOptionalType = isTSOptionalType;
exports.isTSRestType = isTSRestType;
exports.isTSUnionType = isTSUnionType;
exports.isTSIntersectionType = isTSIntersectionType;
exports.isTSConditionalType = isTSConditionalType;
exports.isTSInferType = isTSInferType;
exports.isTSParenthesizedType = isTSParenthesizedType;
exports.isTSTypeOperator = isTSTypeOperator;
exports.isTSIndexedAccessType = isTSIndexedAccessType;
exports.isTSMappedType = isTSMappedType;
exports.isTSLiteralType = isTSLiteralType;
exports.isTSExpressionWithTypeArguments = isTSExpressionWithTypeArguments;
exports.isTSInterfaceDeclaration = isTSInterfaceDeclaration;
exports.isTSInterfaceBody = isTSInterfaceBody;
exports.isTSTypeAliasDeclaration = isTSTypeAliasDeclaration;
exports.isTSAsExpression = isTSAsExpression;
exports.isTSTypeAssertion = isTSTypeAssertion;
exports.isTSEnumDeclaration = isTSEnumDeclaration;
exports.isTSEnumMember = isTSEnumMember;
exports.isTSModuleDeclaration = isTSModuleDeclaration;
exports.isTSModuleBlock = isTSModuleBlock;
exports.isTSImportType = isTSImportType;
exports.isTSImportEqualsDeclaration = isTSImportEqualsDeclaration;
exports.isTSExternalModuleReference = isTSExternalModuleReference;
exports.isTSNonNullExpression = isTSNonNullExpression;
exports.isTSExportAssignment = isTSExportAssignment;
exports.isTSNamespaceExportDeclaration = isTSNamespaceExportDeclaration;
exports.isTSTypeAnnotation = isTSTypeAnnotation;
exports.isTSTypeParameterInstantiation = isTSTypeParameterInstantiation;
exports.isTSTypeParameterDeclaration = isTSTypeParameterDeclaration;
exports.isTSTypeParameter = isTSTypeParameter;
exports.isExpression = isExpression;
exports.isBinary = isBinary;
exports.isScopable = isScopable;
exports.isBlockParent = isBlockParent;
exports.isBlock = isBlock;
exports.isStatement = isStatement;
exports.isTerminatorless = isTerminatorless;
exports.isCompletionStatement = isCompletionStatement;
exports.isConditional = isConditional;
exports.isLoop = isLoop;
exports.isWhile = isWhile;
exports.isExpressionWrapper = isExpressionWrapper;
exports.isFor = isFor;
exports.isForXStatement = isForXStatement;
exports.isFunction = isFunction;
exports.isFunctionParent = isFunctionParent;
exports.isPureish = isPureish;
exports.isDeclaration = isDeclaration;
exports.isPatternLike = isPatternLike;
exports.isLVal = isLVal;
exports.isTSEntityName = isTSEntityName;
exports.isLiteral = isLiteral;
exports.isImmutable = isImmutable;
exports.isUserWhitespacable = isUserWhitespacable;
exports.isMethod = isMethod;
exports.isObjectMember = isObjectMember;
exports.isProperty = isProperty;
exports.isUnaryLike = isUnaryLike;
exports.isPattern = isPattern;
exports.isClass = isClass;
exports.isModuleDeclaration = isModuleDeclaration;
exports.isExportDeclaration = isExportDeclaration;
exports.isModuleSpecifier = isModuleSpecifier;
exports.isFlow = isFlow;
exports.isFlowType = isFlowType;
exports.isFlowBaseAnnotation = isFlowBaseAnnotation;
exports.isFlowDeclaration = isFlowDeclaration;
exports.isFlowPredicate = isFlowPredicate;
exports.isEnumBody = isEnumBody;
exports.isEnumMember = isEnumMember;
exports.isJSX = isJSX;
exports.isPrivate = isPrivate;
exports.isTSTypeElement = isTSTypeElement;
exports.isTSType = isTSType;
exports.isNumberLiteral = isNumberLiteral;
exports.isRegexLiteral = isRegexLiteral;
exports.isRestProperty = isRestProperty;
exports.isSpreadProperty = isSpreadProperty;

var _shallowEqual = _interopRequireDefault(__webpack_require__(/*! ../../utils/shallowEqual */ "../babel-plugin-effects/node_modules/@babel/types/lib/utils/shallowEqual.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isArrayExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ArrayExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isAssignmentExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "AssignmentExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBinaryExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BinaryExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isInterpreterDirective(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "InterpreterDirective") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDirective(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Directive") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDirectiveLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DirectiveLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBlockStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BlockStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBreakStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BreakStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isCallExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "CallExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isCatchClause(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "CatchClause") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isConditionalExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ConditionalExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isContinueStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ContinueStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDebuggerStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DebuggerStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDoWhileStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DoWhileStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEmptyStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EmptyStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExpressionStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExpressionStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFile(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "File") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isForInStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ForInStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isForStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ForStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFunctionDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FunctionDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFunctionExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FunctionExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isIdentifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Identifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isIfStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "IfStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isLabeledStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "LabeledStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isStringLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "StringLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNumericLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NumericLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNullLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NullLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBooleanLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BooleanLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isRegExpLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "RegExpLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isLogicalExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "LogicalExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isMemberExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "MemberExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNewExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NewExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isProgram(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Program") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectMethod(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectMethod") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isRestElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "RestElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isReturnStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ReturnStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isSequenceExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SequenceExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isParenthesizedExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ParenthesizedExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isSwitchCase(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SwitchCase") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isSwitchStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SwitchStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isThisExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ThisExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isThrowStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ThrowStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTryStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TryStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isUnaryExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "UnaryExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isUpdateExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "UpdateExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isVariableDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "VariableDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isVariableDeclarator(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "VariableDeclarator") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isWhileStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "WhileStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isWithStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "WithStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isAssignmentPattern(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "AssignmentPattern") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isArrayPattern(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ArrayPattern") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isArrowFunctionExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ArrowFunctionExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClassBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClassExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClassDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExportAllDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportAllDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExportDefaultDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportDefaultDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExportNamedDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportNamedDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExportSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isForOfStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ForOfStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isImportDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ImportDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isImportDefaultSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ImportDefaultSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isImportNamespaceSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ImportNamespaceSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isImportSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ImportSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isMetaProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "MetaProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClassMethod(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassMethod") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectPattern(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectPattern") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isSpreadElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SpreadElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isSuper(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Super") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTaggedTemplateExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TaggedTemplateExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTemplateElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TemplateElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTemplateLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TemplateLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isYieldExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "YieldExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isAnyTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "AnyTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isArrayTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ArrayTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBooleanTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BooleanTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBooleanLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BooleanLiteralTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNullLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NullLiteralTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClassImplements(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassImplements") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareClass(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareClass") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareFunction(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareFunction") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareInterface(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareInterface") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareModule(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareModule") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareModuleExports(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareModuleExports") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareTypeAlias(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareTypeAlias") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareOpaqueType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareOpaqueType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareVariable(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareVariable") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareExportDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareExportDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareExportAllDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareExportAllDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclaredPredicate(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclaredPredicate") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExistsTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExistsTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFunctionTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FunctionTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFunctionTypeParam(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FunctionTypeParam") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isGenericTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "GenericTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isInferredPredicate(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "InferredPredicate") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isInterfaceExtends(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "InterfaceExtends") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isInterfaceDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "InterfaceDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isInterfaceTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "InterfaceTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isIntersectionTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "IntersectionTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isMixedTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "MixedTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEmptyTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EmptyTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNullableTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NullableTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNumberLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NumberLiteralTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNumberTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NumberTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeInternalSlot(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeInternalSlot") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeCallProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeCallProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeIndexer(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeIndexer") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeSpreadProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeSpreadProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isOpaqueType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "OpaqueType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isQualifiedTypeIdentifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "QualifiedTypeIdentifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isStringLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "StringLiteralTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isStringTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "StringTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isThisTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ThisTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTupleTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TupleTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTypeofTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeofTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTypeAlias(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeAlias") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTypeCastExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeCastExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTypeParameter(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeParameter") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTypeParameterDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeParameterDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTypeParameterInstantiation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeParameterInstantiation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isUnionTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "UnionTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isVariance(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Variance") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isVoidTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "VoidTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEnumDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEnumBooleanBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumBooleanBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEnumNumberBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumNumberBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEnumStringBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumStringBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEnumSymbolBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumSymbolBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEnumBooleanMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumBooleanMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEnumNumberMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumNumberMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEnumStringMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumStringMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEnumDefaultedMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumDefaultedMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXAttribute(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXAttribute") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXClosingElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXClosingElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXEmptyExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXEmptyExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXExpressionContainer(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXExpressionContainer") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXSpreadChild(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXSpreadChild") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXIdentifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXIdentifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXMemberExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXMemberExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXNamespacedName(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXNamespacedName") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXOpeningElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXOpeningElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXSpreadAttribute(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXSpreadAttribute") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXText(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXText") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXFragment(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXFragment") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXOpeningFragment(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXOpeningFragment") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXClosingFragment(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXClosingFragment") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNoop(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Noop") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPlaceholder(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Placeholder") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isV8IntrinsicIdentifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "V8IntrinsicIdentifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isArgumentPlaceholder(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ArgumentPlaceholder") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isAwaitExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "AwaitExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBindExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BindExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClassProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isOptionalMemberExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "OptionalMemberExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPipelineTopicExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "PipelineTopicExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPipelineBareFunction(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "PipelineBareFunction") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPipelinePrimaryTopicReference(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "PipelinePrimaryTopicReference") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isOptionalCallExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "OptionalCallExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClassPrivateProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassPrivateProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClassPrivateMethod(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassPrivateMethod") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isImport(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Import") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDecorator(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Decorator") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDoExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DoExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExportDefaultSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportDefaultSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExportNamespaceSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportNamespaceSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPrivateName(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "PrivateName") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBigIntLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BigIntLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSParameterProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSParameterProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSDeclareFunction(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSDeclareFunction") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSDeclareMethod(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSDeclareMethod") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSQualifiedName(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSQualifiedName") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSCallSignatureDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSCallSignatureDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSConstructSignatureDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSConstructSignatureDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSPropertySignature(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSPropertySignature") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSMethodSignature(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSMethodSignature") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSIndexSignature(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSIndexSignature") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSAnyKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSAnyKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSBooleanKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSBooleanKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSBigIntKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSBigIntKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSNeverKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNeverKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSNullKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNullKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSNumberKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNumberKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSObjectKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSObjectKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSStringKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSStringKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSSymbolKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSSymbolKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSUndefinedKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSUndefinedKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSUnknownKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSUnknownKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSVoidKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSVoidKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSThisType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSThisType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSFunctionType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSFunctionType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSConstructorType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSConstructorType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeReference(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeReference") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypePredicate(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypePredicate") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeQuery(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeQuery") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSArrayType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSArrayType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTupleType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTupleType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSOptionalType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSOptionalType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSRestType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSRestType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSUnionType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSUnionType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSIntersectionType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSIntersectionType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSConditionalType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSConditionalType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSInferType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSInferType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSParenthesizedType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSParenthesizedType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeOperator(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeOperator") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSIndexedAccessType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSIndexedAccessType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSMappedType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSMappedType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSLiteralType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSLiteralType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSExpressionWithTypeArguments(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSExpressionWithTypeArguments") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSInterfaceDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSInterfaceDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSInterfaceBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSInterfaceBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeAliasDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeAliasDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSAsExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSAsExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeAssertion(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeAssertion") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSEnumDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSEnumDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSEnumMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSEnumMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSModuleDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSModuleDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSModuleBlock(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSModuleBlock") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSImportType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSImportType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSImportEqualsDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSImportEqualsDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSExternalModuleReference(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSExternalModuleReference") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSNonNullExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNonNullExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSExportAssignment(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSExportAssignment") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSNamespaceExportDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNamespaceExportDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeParameterInstantiation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeParameterInstantiation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeParameterDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeParameterDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeParameter(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeParameter") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Expression" || "ArrayExpression" === nodeType || "AssignmentExpression" === nodeType || "BinaryExpression" === nodeType || "CallExpression" === nodeType || "ConditionalExpression" === nodeType || "FunctionExpression" === nodeType || "Identifier" === nodeType || "StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "RegExpLiteral" === nodeType || "LogicalExpression" === nodeType || "MemberExpression" === nodeType || "NewExpression" === nodeType || "ObjectExpression" === nodeType || "SequenceExpression" === nodeType || "ParenthesizedExpression" === nodeType || "ThisExpression" === nodeType || "UnaryExpression" === nodeType || "UpdateExpression" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassExpression" === nodeType || "MetaProperty" === nodeType || "Super" === nodeType || "TaggedTemplateExpression" === nodeType || "TemplateLiteral" === nodeType || "YieldExpression" === nodeType || "TypeCastExpression" === nodeType || "JSXElement" === nodeType || "JSXFragment" === nodeType || "AwaitExpression" === nodeType || "BindExpression" === nodeType || "OptionalMemberExpression" === nodeType || "PipelinePrimaryTopicReference" === nodeType || "OptionalCallExpression" === nodeType || "Import" === nodeType || "DoExpression" === nodeType || "BigIntLiteral" === nodeType || "TSAsExpression" === nodeType || "TSTypeAssertion" === nodeType || "TSNonNullExpression" === nodeType || nodeType === "Placeholder" && ("Expression" === node.expectedNode || "Identifier" === node.expectedNode || "StringLiteral" === node.expectedNode)) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBinary(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Binary" || "BinaryExpression" === nodeType || "LogicalExpression" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isScopable(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Scopable" || "BlockStatement" === nodeType || "CatchClause" === nodeType || "DoWhileStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "Program" === nodeType || "ObjectMethod" === nodeType || "SwitchStatement" === nodeType || "WhileStatement" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassExpression" === nodeType || "ClassDeclaration" === nodeType || "ForOfStatement" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType || "TSModuleBlock" === nodeType || nodeType === "Placeholder" && "BlockStatement" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBlockParent(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BlockParent" || "BlockStatement" === nodeType || "CatchClause" === nodeType || "DoWhileStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "Program" === nodeType || "ObjectMethod" === nodeType || "SwitchStatement" === nodeType || "WhileStatement" === nodeType || "ArrowFunctionExpression" === nodeType || "ForOfStatement" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType || "TSModuleBlock" === nodeType || nodeType === "Placeholder" && "BlockStatement" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBlock(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Block" || "BlockStatement" === nodeType || "Program" === nodeType || "TSModuleBlock" === nodeType || nodeType === "Placeholder" && "BlockStatement" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Statement" || "BlockStatement" === nodeType || "BreakStatement" === nodeType || "ContinueStatement" === nodeType || "DebuggerStatement" === nodeType || "DoWhileStatement" === nodeType || "EmptyStatement" === nodeType || "ExpressionStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "FunctionDeclaration" === nodeType || "IfStatement" === nodeType || "LabeledStatement" === nodeType || "ReturnStatement" === nodeType || "SwitchStatement" === nodeType || "ThrowStatement" === nodeType || "TryStatement" === nodeType || "VariableDeclaration" === nodeType || "WhileStatement" === nodeType || "WithStatement" === nodeType || "ClassDeclaration" === nodeType || "ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType || "ForOfStatement" === nodeType || "ImportDeclaration" === nodeType || "DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "InterfaceDeclaration" === nodeType || "OpaqueType" === nodeType || "TypeAlias" === nodeType || "TSDeclareFunction" === nodeType || "TSInterfaceDeclaration" === nodeType || "TSTypeAliasDeclaration" === nodeType || "TSEnumDeclaration" === nodeType || "TSModuleDeclaration" === nodeType || "TSImportEqualsDeclaration" === nodeType || "TSExportAssignment" === nodeType || "TSNamespaceExportDeclaration" === nodeType || nodeType === "Placeholder" && ("Statement" === node.expectedNode || "Declaration" === node.expectedNode || "BlockStatement" === node.expectedNode)) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTerminatorless(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Terminatorless" || "BreakStatement" === nodeType || "ContinueStatement" === nodeType || "ReturnStatement" === nodeType || "ThrowStatement" === nodeType || "YieldExpression" === nodeType || "AwaitExpression" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isCompletionStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "CompletionStatement" || "BreakStatement" === nodeType || "ContinueStatement" === nodeType || "ReturnStatement" === nodeType || "ThrowStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isConditional(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Conditional" || "ConditionalExpression" === nodeType || "IfStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isLoop(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Loop" || "DoWhileStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "WhileStatement" === nodeType || "ForOfStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isWhile(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "While" || "DoWhileStatement" === nodeType || "WhileStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExpressionWrapper(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExpressionWrapper" || "ExpressionStatement" === nodeType || "ParenthesizedExpression" === nodeType || "TypeCastExpression" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFor(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "For" || "ForInStatement" === nodeType || "ForStatement" === nodeType || "ForOfStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isForXStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ForXStatement" || "ForInStatement" === nodeType || "ForOfStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFunction(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Function" || "FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "ObjectMethod" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFunctionParent(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FunctionParent" || "FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "ObjectMethod" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPureish(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Pureish" || "FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassExpression" === nodeType || "ClassDeclaration" === nodeType || "BigIntLiteral" === nodeType || nodeType === "Placeholder" && "StringLiteral" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Declaration" || "FunctionDeclaration" === nodeType || "VariableDeclaration" === nodeType || "ClassDeclaration" === nodeType || "ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType || "ImportDeclaration" === nodeType || "DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "InterfaceDeclaration" === nodeType || "OpaqueType" === nodeType || "TypeAlias" === nodeType || "EnumDeclaration" === nodeType || "TSDeclareFunction" === nodeType || "TSInterfaceDeclaration" === nodeType || "TSTypeAliasDeclaration" === nodeType || "TSEnumDeclaration" === nodeType || "TSModuleDeclaration" === nodeType || nodeType === "Placeholder" && "Declaration" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPatternLike(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "PatternLike" || "Identifier" === nodeType || "RestElement" === nodeType || "AssignmentPattern" === nodeType || "ArrayPattern" === nodeType || "ObjectPattern" === nodeType || nodeType === "Placeholder" && ("Pattern" === node.expectedNode || "Identifier" === node.expectedNode)) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isLVal(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "LVal" || "Identifier" === nodeType || "MemberExpression" === nodeType || "RestElement" === nodeType || "AssignmentPattern" === nodeType || "ArrayPattern" === nodeType || "ObjectPattern" === nodeType || "TSParameterProperty" === nodeType || nodeType === "Placeholder" && ("Pattern" === node.expectedNode || "Identifier" === node.expectedNode)) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSEntityName(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSEntityName" || "Identifier" === nodeType || "TSQualifiedName" === nodeType || nodeType === "Placeholder" && "Identifier" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Literal" || "StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "RegExpLiteral" === nodeType || "TemplateLiteral" === nodeType || "BigIntLiteral" === nodeType || nodeType === "Placeholder" && "StringLiteral" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isImmutable(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Immutable" || "StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "JSXAttribute" === nodeType || "JSXClosingElement" === nodeType || "JSXElement" === nodeType || "JSXExpressionContainer" === nodeType || "JSXSpreadChild" === nodeType || "JSXOpeningElement" === nodeType || "JSXText" === nodeType || "JSXFragment" === nodeType || "JSXOpeningFragment" === nodeType || "JSXClosingFragment" === nodeType || "BigIntLiteral" === nodeType || nodeType === "Placeholder" && "StringLiteral" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isUserWhitespacable(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "UserWhitespacable" || "ObjectMethod" === nodeType || "ObjectProperty" === nodeType || "ObjectTypeInternalSlot" === nodeType || "ObjectTypeCallProperty" === nodeType || "ObjectTypeIndexer" === nodeType || "ObjectTypeProperty" === nodeType || "ObjectTypeSpreadProperty" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isMethod(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Method" || "ObjectMethod" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectMember" || "ObjectMethod" === nodeType || "ObjectProperty" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Property" || "ObjectProperty" === nodeType || "ClassProperty" === nodeType || "ClassPrivateProperty" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isUnaryLike(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "UnaryLike" || "UnaryExpression" === nodeType || "SpreadElement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPattern(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Pattern" || "AssignmentPattern" === nodeType || "ArrayPattern" === nodeType || "ObjectPattern" === nodeType || nodeType === "Placeholder" && "Pattern" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClass(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Class" || "ClassExpression" === nodeType || "ClassDeclaration" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isModuleDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ModuleDeclaration" || "ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType || "ImportDeclaration" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExportDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportDeclaration" || "ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isModuleSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ModuleSpecifier" || "ExportSpecifier" === nodeType || "ImportDefaultSpecifier" === nodeType || "ImportNamespaceSpecifier" === nodeType || "ImportSpecifier" === nodeType || "ExportDefaultSpecifier" === nodeType || "ExportNamespaceSpecifier" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFlow(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Flow" || "AnyTypeAnnotation" === nodeType || "ArrayTypeAnnotation" === nodeType || "BooleanTypeAnnotation" === nodeType || "BooleanLiteralTypeAnnotation" === nodeType || "NullLiteralTypeAnnotation" === nodeType || "ClassImplements" === nodeType || "DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "DeclaredPredicate" === nodeType || "ExistsTypeAnnotation" === nodeType || "FunctionTypeAnnotation" === nodeType || "FunctionTypeParam" === nodeType || "GenericTypeAnnotation" === nodeType || "InferredPredicate" === nodeType || "InterfaceExtends" === nodeType || "InterfaceDeclaration" === nodeType || "InterfaceTypeAnnotation" === nodeType || "IntersectionTypeAnnotation" === nodeType || "MixedTypeAnnotation" === nodeType || "EmptyTypeAnnotation" === nodeType || "NullableTypeAnnotation" === nodeType || "NumberLiteralTypeAnnotation" === nodeType || "NumberTypeAnnotation" === nodeType || "ObjectTypeAnnotation" === nodeType || "ObjectTypeInternalSlot" === nodeType || "ObjectTypeCallProperty" === nodeType || "ObjectTypeIndexer" === nodeType || "ObjectTypeProperty" === nodeType || "ObjectTypeSpreadProperty" === nodeType || "OpaqueType" === nodeType || "QualifiedTypeIdentifier" === nodeType || "StringLiteralTypeAnnotation" === nodeType || "StringTypeAnnotation" === nodeType || "ThisTypeAnnotation" === nodeType || "TupleTypeAnnotation" === nodeType || "TypeofTypeAnnotation" === nodeType || "TypeAlias" === nodeType || "TypeAnnotation" === nodeType || "TypeCastExpression" === nodeType || "TypeParameter" === nodeType || "TypeParameterDeclaration" === nodeType || "TypeParameterInstantiation" === nodeType || "UnionTypeAnnotation" === nodeType || "Variance" === nodeType || "VoidTypeAnnotation" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFlowType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FlowType" || "AnyTypeAnnotation" === nodeType || "ArrayTypeAnnotation" === nodeType || "BooleanTypeAnnotation" === nodeType || "BooleanLiteralTypeAnnotation" === nodeType || "NullLiteralTypeAnnotation" === nodeType || "ExistsTypeAnnotation" === nodeType || "FunctionTypeAnnotation" === nodeType || "GenericTypeAnnotation" === nodeType || "InterfaceTypeAnnotation" === nodeType || "IntersectionTypeAnnotation" === nodeType || "MixedTypeAnnotation" === nodeType || "EmptyTypeAnnotation" === nodeType || "NullableTypeAnnotation" === nodeType || "NumberLiteralTypeAnnotation" === nodeType || "NumberTypeAnnotation" === nodeType || "ObjectTypeAnnotation" === nodeType || "StringLiteralTypeAnnotation" === nodeType || "StringTypeAnnotation" === nodeType || "ThisTypeAnnotation" === nodeType || "TupleTypeAnnotation" === nodeType || "TypeofTypeAnnotation" === nodeType || "UnionTypeAnnotation" === nodeType || "VoidTypeAnnotation" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFlowBaseAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FlowBaseAnnotation" || "AnyTypeAnnotation" === nodeType || "BooleanTypeAnnotation" === nodeType || "NullLiteralTypeAnnotation" === nodeType || "MixedTypeAnnotation" === nodeType || "EmptyTypeAnnotation" === nodeType || "NumberTypeAnnotation" === nodeType || "StringTypeAnnotation" === nodeType || "ThisTypeAnnotation" === nodeType || "VoidTypeAnnotation" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFlowDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FlowDeclaration" || "DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "InterfaceDeclaration" === nodeType || "OpaqueType" === nodeType || "TypeAlias" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFlowPredicate(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FlowPredicate" || "DeclaredPredicate" === nodeType || "InferredPredicate" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEnumBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumBody" || "EnumBooleanBody" === nodeType || "EnumNumberBody" === nodeType || "EnumStringBody" === nodeType || "EnumSymbolBody" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEnumMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumMember" || "EnumBooleanMember" === nodeType || "EnumNumberMember" === nodeType || "EnumStringMember" === nodeType || "EnumDefaultedMember" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSX(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSX" || "JSXAttribute" === nodeType || "JSXClosingElement" === nodeType || "JSXElement" === nodeType || "JSXEmptyExpression" === nodeType || "JSXExpressionContainer" === nodeType || "JSXSpreadChild" === nodeType || "JSXIdentifier" === nodeType || "JSXMemberExpression" === nodeType || "JSXNamespacedName" === nodeType || "JSXOpeningElement" === nodeType || "JSXSpreadAttribute" === nodeType || "JSXText" === nodeType || "JSXFragment" === nodeType || "JSXOpeningFragment" === nodeType || "JSXClosingFragment" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPrivate(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Private" || "ClassPrivateProperty" === nodeType || "ClassPrivateMethod" === nodeType || "PrivateName" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeElement" || "TSCallSignatureDeclaration" === nodeType || "TSConstructSignatureDeclaration" === nodeType || "TSPropertySignature" === nodeType || "TSMethodSignature" === nodeType || "TSIndexSignature" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSType" || "TSAnyKeyword" === nodeType || "TSBooleanKeyword" === nodeType || "TSBigIntKeyword" === nodeType || "TSNeverKeyword" === nodeType || "TSNullKeyword" === nodeType || "TSNumberKeyword" === nodeType || "TSObjectKeyword" === nodeType || "TSStringKeyword" === nodeType || "TSSymbolKeyword" === nodeType || "TSUndefinedKeyword" === nodeType || "TSUnknownKeyword" === nodeType || "TSVoidKeyword" === nodeType || "TSThisType" === nodeType || "TSFunctionType" === nodeType || "TSConstructorType" === nodeType || "TSTypeReference" === nodeType || "TSTypePredicate" === nodeType || "TSTypeQuery" === nodeType || "TSTypeLiteral" === nodeType || "TSArrayType" === nodeType || "TSTupleType" === nodeType || "TSOptionalType" === nodeType || "TSRestType" === nodeType || "TSUnionType" === nodeType || "TSIntersectionType" === nodeType || "TSConditionalType" === nodeType || "TSInferType" === nodeType || "TSParenthesizedType" === nodeType || "TSTypeOperator" === nodeType || "TSIndexedAccessType" === nodeType || "TSMappedType" === nodeType || "TSLiteralType" === nodeType || "TSExpressionWithTypeArguments" === nodeType || "TSImportType" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNumberLiteral(node, opts) {
  console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NumberLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isRegexLiteral(node, opts) {
  console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "RegexLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isRestProperty(node, opts) {
  console.trace("The node type RestProperty has been renamed to RestElement");
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "RestProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isSpreadProperty(node, opts) {
  console.trace("The node type SpreadProperty has been renamed to SpreadElement");
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SpreadProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/is.js":
/*!******************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/validators/is.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = is;

var _shallowEqual = _interopRequireDefault(__webpack_require__(/*! ../utils/shallowEqual */ "../babel-plugin-effects/node_modules/@babel/types/lib/utils/shallowEqual.js"));

var _isType = _interopRequireDefault(__webpack_require__(/*! ./isType */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isType.js"));

var _isPlaceholderType = _interopRequireDefault(__webpack_require__(/*! ./isPlaceholderType */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isPlaceholderType.js"));

var _definitions = __webpack_require__(/*! ../definitions */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function is(type, node, opts) {
  if (!node) return false;
  const matches = (0, _isType.default)(node.type, type);

  if (!matches) {
    if (!opts && node.type === "Placeholder" && type in _definitions.FLIPPED_ALIAS_KEYS) {
      return (0, _isPlaceholderType.default)(node.expectedNode, type);
    }

    return false;
  }

  if (typeof opts === "undefined") {
    return true;
  } else {
    return (0, _shallowEqual.default)(node, opts);
  }
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isBinding.js":
/*!*************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/validators/isBinding.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBinding;

var _getBindingIdentifiers = _interopRequireDefault(__webpack_require__(/*! ../retrievers/getBindingIdentifiers */ "../babel-plugin-effects/node_modules/@babel/types/lib/retrievers/getBindingIdentifiers.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBinding(node, parent, grandparent) {
  if (grandparent && node.type === "Identifier" && parent.type === "ObjectProperty" && grandparent.type === "ObjectExpression") {
    return false;
  }

  const keys = _getBindingIdentifiers.default.keys[parent.type];

  if (keys) {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const val = parent[key];

      if (Array.isArray(val)) {
        if (val.indexOf(node) >= 0) return true;
      } else {
        if (val === node) return true;
      }
    }
  }

  return false;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isBlockScoped.js":
/*!*****************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/validators/isBlockScoped.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBlockScoped;

var _generated = __webpack_require__(/*! ./generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/generated/index.js");

var _isLet = _interopRequireDefault(__webpack_require__(/*! ./isLet */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isLet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBlockScoped(node) {
  return (0, _generated.isFunctionDeclaration)(node) || (0, _generated.isClassDeclaration)(node) || (0, _isLet.default)(node);
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isImmutable.js":
/*!***************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/validators/isImmutable.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isImmutable;

var _isType = _interopRequireDefault(__webpack_require__(/*! ./isType */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isType.js"));

var _generated = __webpack_require__(/*! ./generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/generated/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isImmutable(node) {
  if ((0, _isType.default)(node.type, "Immutable")) return true;

  if ((0, _generated.isIdentifier)(node)) {
    if (node.name === "undefined") {
      return true;
    } else {
      return false;
    }
  }

  return false;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isLet.js":
/*!*********************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/validators/isLet.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLet;

var _generated = __webpack_require__(/*! ./generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/generated/index.js");

var _constants = __webpack_require__(/*! ../constants */ "../babel-plugin-effects/node_modules/@babel/types/lib/constants/index.js");

function isLet(node) {
  return (0, _generated.isVariableDeclaration)(node) && (node.kind !== "var" || node[_constants.BLOCK_SCOPED_SYMBOL]);
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isNode.js":
/*!**********************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/validators/isNode.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNode;

var _definitions = __webpack_require__(/*! ../definitions */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/index.js");

function isNode(node) {
  return !!(node && _definitions.VISITOR_KEYS[node.type]);
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isNodesEquivalent.js":
/*!*********************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/validators/isNodesEquivalent.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNodesEquivalent;

var _definitions = __webpack_require__(/*! ../definitions */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/index.js");

function isNodesEquivalent(a, b) {
  if (typeof a !== "object" || typeof b !== "object" || a == null || b == null) {
    return a === b;
  }

  if (a.type !== b.type) {
    return false;
  }

  const fields = Object.keys(_definitions.NODE_FIELDS[a.type] || a.type);
  const visitorKeys = _definitions.VISITOR_KEYS[a.type];

  for (const field of fields) {
    if (typeof a[field] !== typeof b[field]) {
      return false;
    }

    if (a[field] == null && b[field] == null) {
      continue;
    } else if (a[field] == null || b[field] == null) {
      return false;
    }

    if (Array.isArray(a[field])) {
      if (!Array.isArray(b[field])) {
        return false;
      }

      if (a[field].length !== b[field].length) {
        return false;
      }

      for (let i = 0; i < a[field].length; i++) {
        if (!isNodesEquivalent(a[field][i], b[field][i])) {
          return false;
        }
      }

      continue;
    }

    if (typeof a[field] === "object" && (!visitorKeys || !visitorKeys.includes(field))) {
      for (const key of Object.keys(a[field])) {
        if (a[field][key] !== b[field][key]) {
          return false;
        }
      }

      continue;
    }

    if (!isNodesEquivalent(a[field], b[field])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isPlaceholderType.js":
/*!*********************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/validators/isPlaceholderType.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPlaceholderType;

var _definitions = __webpack_require__(/*! ../definitions */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/index.js");

function isPlaceholderType(placeholderType, targetType) {
  if (placeholderType === targetType) return true;
  const aliases = _definitions.PLACEHOLDERS_ALIAS[placeholderType];

  if (aliases) {
    for (const alias of aliases) {
      if (targetType === alias) return true;
    }
  }

  return false;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isReferenced.js":
/*!****************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/validators/isReferenced.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isReferenced;

function isReferenced(node, parent, grandparent) {
  switch (parent.type) {
    case "MemberExpression":
    case "JSXMemberExpression":
    case "OptionalMemberExpression":
      if (parent.property === node) {
        return !!parent.computed;
      }

      return parent.object === node;

    case "VariableDeclarator":
      return parent.init === node;

    case "ArrowFunctionExpression":
      return parent.body === node;

    case "ExportSpecifier":
      if (parent.source) {
        return false;
      }

      return parent.local === node;

    case "PrivateName":
      return false;

    case "ObjectProperty":
    case "ClassProperty":
    case "ClassPrivateProperty":
    case "ClassMethod":
    case "ClassPrivateMethod":
    case "ObjectMethod":
      if (parent.key === node) {
        return !!parent.computed;
      }

      if (parent.value === node) {
        return !grandparent || grandparent.type !== "ObjectPattern";
      }

      return true;

    case "ClassDeclaration":
    case "ClassExpression":
      return parent.superClass === node;

    case "AssignmentExpression":
      return parent.right === node;

    case "AssignmentPattern":
      return parent.right === node;

    case "LabeledStatement":
      return false;

    case "CatchClause":
      return false;

    case "RestElement":
      return false;

    case "BreakStatement":
    case "ContinueStatement":
      return false;

    case "FunctionDeclaration":
    case "FunctionExpression":
      return false;

    case "ExportNamespaceSpecifier":
    case "ExportDefaultSpecifier":
      return false;

    case "ImportDefaultSpecifier":
    case "ImportNamespaceSpecifier":
    case "ImportSpecifier":
      return false;

    case "JSXAttribute":
      return false;

    case "ObjectPattern":
    case "ArrayPattern":
      return false;

    case "MetaProperty":
      return false;

    case "ObjectTypeProperty":
      return parent.key !== node;

    case "TSEnumMember":
      return parent.id !== node;

    case "TSPropertySignature":
      if (parent.key === node) {
        return !!parent.computed;
      }

      return true;
  }

  return true;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isScope.js":
/*!***********************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/validators/isScope.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isScope;

var _generated = __webpack_require__(/*! ./generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/generated/index.js");

function isScope(node, parent) {
  if ((0, _generated.isBlockStatement)(node) && (0, _generated.isFunction)(parent, {
    body: node
  })) {
    return false;
  }

  if ((0, _generated.isBlockStatement)(node) && (0, _generated.isCatchClause)(parent, {
    body: node
  })) {
    return false;
  }

  if ((0, _generated.isPattern)(node) && (0, _generated.isFunction)(parent)) {
    return true;
  }

  return (0, _generated.isScopable)(node);
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isSpecifierDefault.js":
/*!**********************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/validators/isSpecifierDefault.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSpecifierDefault;

var _generated = __webpack_require__(/*! ./generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/generated/index.js");

function isSpecifierDefault(specifier) {
  return (0, _generated.isImportDefaultSpecifier)(specifier) || (0, _generated.isIdentifier)(specifier.imported || specifier.exported, {
    name: "default"
  });
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isType.js":
/*!**********************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/validators/isType.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isType;

var _definitions = __webpack_require__(/*! ../definitions */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/index.js");

function isType(nodeType, targetType) {
  if (nodeType === targetType) return true;
  if (_definitions.ALIAS_KEYS[targetType]) return false;
  const aliases = _definitions.FLIPPED_ALIAS_KEYS[targetType];

  if (aliases) {
    if (aliases[0] === nodeType) return true;

    for (const alias of aliases) {
      if (nodeType === alias) return true;
    }
  }

  return false;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isValidES3Identifier.js":
/*!************************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/validators/isValidES3Identifier.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidES3Identifier;

var _isValidIdentifier = _interopRequireDefault(__webpack_require__(/*! ./isValidIdentifier */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isValidIdentifier.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RESERVED_WORDS_ES3_ONLY = new Set(["abstract", "boolean", "byte", "char", "double", "enum", "final", "float", "goto", "implements", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "synchronized", "throws", "transient", "volatile"]);

function isValidES3Identifier(name) {
  return (0, _isValidIdentifier.default)(name) && !RESERVED_WORDS_ES3_ONLY.has(name);
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isValidIdentifier.js":
/*!*********************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/validators/isValidIdentifier.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidIdentifier;

var _esutils = _interopRequireDefault(__webpack_require__(/*! esutils */ "../babel-plugin-effects/node_modules/esutils/lib/utils.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isValidIdentifier(name, reserved = true) {
  if (typeof name !== "string") return false;

  if (reserved) {
    if (_esutils.default.keyword.isReservedWordES6(name, true)) {
      return false;
    } else if (name === "await") {
      return false;
    }
  }

  return _esutils.default.keyword.isIdentifierNameES6(name);
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/isVar.js":
/*!*********************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/validators/isVar.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isVar;

var _generated = __webpack_require__(/*! ./generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/generated/index.js");

var _constants = __webpack_require__(/*! ../constants */ "../babel-plugin-effects/node_modules/@babel/types/lib/constants/index.js");

function isVar(node) {
  return (0, _generated.isVariableDeclaration)(node, {
    kind: "var"
  }) && !node[_constants.BLOCK_SCOPED_SYMBOL];
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/matchesPattern.js":
/*!******************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/validators/matchesPattern.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = matchesPattern;

var _generated = __webpack_require__(/*! ./generated */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/generated/index.js");

function matchesPattern(member, match, allowPartial) {
  if (!(0, _generated.isMemberExpression)(member)) return false;
  const parts = Array.isArray(match) ? match : match.split(".");
  const nodes = [];
  let node;

  for (node = member; (0, _generated.isMemberExpression)(node); node = node.object) {
    nodes.push(node.property);
  }

  nodes.push(node);
  if (nodes.length < parts.length) return false;
  if (!allowPartial && nodes.length > parts.length) return false;

  for (let i = 0, j = nodes.length - 1; i < parts.length; i++, j--) {
    const node = nodes[j];
    let value;

    if ((0, _generated.isIdentifier)(node)) {
      value = node.name;
    } else if ((0, _generated.isStringLiteral)(node)) {
      value = node.value;
    } else {
      return false;
    }

    if (parts[i] !== value) return false;
  }

  return true;
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/react/isCompatTag.js":
/*!*********************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/validators/react/isCompatTag.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCompatTag;

function isCompatTag(tagName) {
  return !!tagName && /^[a-z]/.test(tagName);
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/react/isReactComponent.js":
/*!**************************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/validators/react/isReactComponent.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _buildMatchMemberExpression = _interopRequireDefault(__webpack_require__(/*! ../buildMatchMemberExpression */ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/buildMatchMemberExpression.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isReactComponent = (0, _buildMatchMemberExpression.default)("React.Component");
var _default = isReactComponent;
exports.default = _default;

/***/ }),

/***/ "../babel-plugin-effects/node_modules/@babel/types/lib/validators/validate.js":
/*!************************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/@babel/types/lib/validators/validate.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validate;
exports.validateField = validateField;
exports.validateChild = validateChild;

var _definitions = __webpack_require__(/*! ../definitions */ "../babel-plugin-effects/node_modules/@babel/types/lib/definitions/index.js");

function validate(node, key, val) {
  if (!node) return;
  const fields = _definitions.NODE_FIELDS[node.type];
  if (!fields) return;
  const field = fields[key];
  validateField(node, key, val, field);
  validateChild(node, key, val);
}

function validateField(node, key, val, field) {
  if (!field || !field.validate) return;
  if (field.optional && val == null) return;
  field.validate(node, key, val);
}

function validateChild(node, key, val) {
  if (val == null) return;
  const validate = _definitions.NODE_PARENT_VALIDATIONS[val.type];
  if (!validate) return;
  validate(node, key, val);
}

/***/ }),

/***/ "../babel-plugin-effects/node_modules/esutils/lib/ast.js":
/*!***************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/esutils/lib/ast.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS'
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

(function () {
    'use strict';

    function isExpression(node) {
        if (node == null) { return false; }
        switch (node.type) {
            case 'ArrayExpression':
            case 'AssignmentExpression':
            case 'BinaryExpression':
            case 'CallExpression':
            case 'ConditionalExpression':
            case 'FunctionExpression':
            case 'Identifier':
            case 'Literal':
            case 'LogicalExpression':
            case 'MemberExpression':
            case 'NewExpression':
            case 'ObjectExpression':
            case 'SequenceExpression':
            case 'ThisExpression':
            case 'UnaryExpression':
            case 'UpdateExpression':
                return true;
        }
        return false;
    }

    function isIterationStatement(node) {
        if (node == null) { return false; }
        switch (node.type) {
            case 'DoWhileStatement':
            case 'ForInStatement':
            case 'ForStatement':
            case 'WhileStatement':
                return true;
        }
        return false;
    }

    function isStatement(node) {
        if (node == null) { return false; }
        switch (node.type) {
            case 'BlockStatement':
            case 'BreakStatement':
            case 'ContinueStatement':
            case 'DebuggerStatement':
            case 'DoWhileStatement':
            case 'EmptyStatement':
            case 'ExpressionStatement':
            case 'ForInStatement':
            case 'ForStatement':
            case 'IfStatement':
            case 'LabeledStatement':
            case 'ReturnStatement':
            case 'SwitchStatement':
            case 'ThrowStatement':
            case 'TryStatement':
            case 'VariableDeclaration':
            case 'WhileStatement':
            case 'WithStatement':
                return true;
        }
        return false;
    }

    function isSourceElement(node) {
      return isStatement(node) || node != null && node.type === 'FunctionDeclaration';
    }

    function trailingStatement(node) {
        switch (node.type) {
        case 'IfStatement':
            if (node.alternate != null) {
                return node.alternate;
            }
            return node.consequent;

        case 'LabeledStatement':
        case 'ForStatement':
        case 'ForInStatement':
        case 'WhileStatement':
        case 'WithStatement':
            return node.body;
        }
        return null;
    }

    function isProblematicIfStatement(node) {
        var current;

        if (node.type !== 'IfStatement') {
            return false;
        }
        if (node.alternate == null) {
            return false;
        }
        current = node.consequent;
        do {
            if (current.type === 'IfStatement') {
                if (current.alternate == null)  {
                    return true;
                }
            }
            current = trailingStatement(current);
        } while (current);

        return false;
    }

    module.exports = {
        isExpression: isExpression,
        isStatement: isStatement,
        isIterationStatement: isIterationStatement,
        isSourceElement: isSourceElement,
        isProblematicIfStatement: isProblematicIfStatement,

        trailingStatement: trailingStatement
    };
}());
/* vim: set sw=4 ts=4 et tw=80 : */


/***/ }),

/***/ "../babel-plugin-effects/node_modules/esutils/lib/code.js":
/*!****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/esutils/lib/code.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
  Copyright (C) 2013-2014 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2014 Ivan Nikulin <ifaaan@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

(function () {
    'use strict';

    var ES6Regex, ES5Regex, NON_ASCII_WHITESPACES, IDENTIFIER_START, IDENTIFIER_PART, ch;

    // See `tools/generate-identifier-regex.js`.
    ES5Regex = {
        // ECMAScript 5.1/Unicode v9.0.0 NonAsciiIdentifierStart:
        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        // ECMAScript 5.1/Unicode v9.0.0 NonAsciiIdentifierPart:
        NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
    };

    ES6Regex = {
        // ECMAScript 6/Unicode v9.0.0 NonAsciiIdentifierStart:
        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
        // ECMAScript 6/Unicode v9.0.0 NonAsciiIdentifierPart:
        NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
    };

    function isDecimalDigit(ch) {
        return 0x30 <= ch && ch <= 0x39;  // 0..9
    }

    function isHexDigit(ch) {
        return 0x30 <= ch && ch <= 0x39 ||  // 0..9
            0x61 <= ch && ch <= 0x66 ||     // a..f
            0x41 <= ch && ch <= 0x46;       // A..F
    }

    function isOctalDigit(ch) {
        return ch >= 0x30 && ch <= 0x37;  // 0..7
    }

    // 7.2 White Space

    NON_ASCII_WHITESPACES = [
        0x1680,
        0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A,
        0x202F, 0x205F,
        0x3000,
        0xFEFF
    ];

    function isWhiteSpace(ch) {
        return ch === 0x20 || ch === 0x09 || ch === 0x0B || ch === 0x0C || ch === 0xA0 ||
            ch >= 0x1680 && NON_ASCII_WHITESPACES.indexOf(ch) >= 0;
    }

    // 7.3 Line Terminators

    function isLineTerminator(ch) {
        return ch === 0x0A || ch === 0x0D || ch === 0x2028 || ch === 0x2029;
    }

    // 7.6 Identifier Names and Identifiers

    function fromCodePoint(cp) {
        if (cp <= 0xFFFF) { return String.fromCharCode(cp); }
        var cu1 = String.fromCharCode(Math.floor((cp - 0x10000) / 0x400) + 0xD800);
        var cu2 = String.fromCharCode(((cp - 0x10000) % 0x400) + 0xDC00);
        return cu1 + cu2;
    }

    IDENTIFIER_START = new Array(0x80);
    for(ch = 0; ch < 0x80; ++ch) {
        IDENTIFIER_START[ch] =
            ch >= 0x61 && ch <= 0x7A ||  // a..z
            ch >= 0x41 && ch <= 0x5A ||  // A..Z
            ch === 0x24 || ch === 0x5F;  // $ (dollar) and _ (underscore)
    }

    IDENTIFIER_PART = new Array(0x80);
    for(ch = 0; ch < 0x80; ++ch) {
        IDENTIFIER_PART[ch] =
            ch >= 0x61 && ch <= 0x7A ||  // a..z
            ch >= 0x41 && ch <= 0x5A ||  // A..Z
            ch >= 0x30 && ch <= 0x39 ||  // 0..9
            ch === 0x24 || ch === 0x5F;  // $ (dollar) and _ (underscore)
    }

    function isIdentifierStartES5(ch) {
        return ch < 0x80 ? IDENTIFIER_START[ch] : ES5Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch));
    }

    function isIdentifierPartES5(ch) {
        return ch < 0x80 ? IDENTIFIER_PART[ch] : ES5Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch));
    }

    function isIdentifierStartES6(ch) {
        return ch < 0x80 ? IDENTIFIER_START[ch] : ES6Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch));
    }

    function isIdentifierPartES6(ch) {
        return ch < 0x80 ? IDENTIFIER_PART[ch] : ES6Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch));
    }

    module.exports = {
        isDecimalDigit: isDecimalDigit,
        isHexDigit: isHexDigit,
        isOctalDigit: isOctalDigit,
        isWhiteSpace: isWhiteSpace,
        isLineTerminator: isLineTerminator,
        isIdentifierStartES5: isIdentifierStartES5,
        isIdentifierPartES5: isIdentifierPartES5,
        isIdentifierStartES6: isIdentifierStartES6,
        isIdentifierPartES6: isIdentifierPartES6
    };
}());
/* vim: set sw=4 ts=4 et tw=80 : */


/***/ }),

/***/ "../babel-plugin-effects/node_modules/esutils/lib/keyword.js":
/*!*******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/esutils/lib/keyword.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

(function () {
    'use strict';

    var code = __webpack_require__(/*! ./code */ "../babel-plugin-effects/node_modules/esutils/lib/code.js");

    function isStrictModeReservedWordES6(id) {
        switch (id) {
        case 'implements':
        case 'interface':
        case 'package':
        case 'private':
        case 'protected':
        case 'public':
        case 'static':
        case 'let':
            return true;
        default:
            return false;
        }
    }

    function isKeywordES5(id, strict) {
        // yield should not be treated as keyword under non-strict mode.
        if (!strict && id === 'yield') {
            return false;
        }
        return isKeywordES6(id, strict);
    }

    function isKeywordES6(id, strict) {
        if (strict && isStrictModeReservedWordES6(id)) {
            return true;
        }

        switch (id.length) {
        case 2:
            return (id === 'if') || (id === 'in') || (id === 'do');
        case 3:
            return (id === 'var') || (id === 'for') || (id === 'new') || (id === 'try');
        case 4:
            return (id === 'this') || (id === 'else') || (id === 'case') ||
                (id === 'void') || (id === 'with') || (id === 'enum');
        case 5:
            return (id === 'while') || (id === 'break') || (id === 'catch') ||
                (id === 'throw') || (id === 'const') || (id === 'yield') ||
                (id === 'class') || (id === 'super');
        case 6:
            return (id === 'return') || (id === 'typeof') || (id === 'delete') ||
                (id === 'switch') || (id === 'export') || (id === 'import');
        case 7:
            return (id === 'default') || (id === 'finally') || (id === 'extends');
        case 8:
            return (id === 'function') || (id === 'continue') || (id === 'debugger');
        case 10:
            return (id === 'instanceof');
        default:
            return false;
        }
    }

    function isReservedWordES5(id, strict) {
        return id === 'null' || id === 'true' || id === 'false' || isKeywordES5(id, strict);
    }

    function isReservedWordES6(id, strict) {
        return id === 'null' || id === 'true' || id === 'false' || isKeywordES6(id, strict);
    }

    function isRestrictedWord(id) {
        return id === 'eval' || id === 'arguments';
    }

    function isIdentifierNameES5(id) {
        var i, iz, ch;

        if (id.length === 0) { return false; }

        ch = id.charCodeAt(0);
        if (!code.isIdentifierStartES5(ch)) {
            return false;
        }

        for (i = 1, iz = id.length; i < iz; ++i) {
            ch = id.charCodeAt(i);
            if (!code.isIdentifierPartES5(ch)) {
                return false;
            }
        }
        return true;
    }

    function decodeUtf16(lead, trail) {
        return (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
    }

    function isIdentifierNameES6(id) {
        var i, iz, ch, lowCh, check;

        if (id.length === 0) { return false; }

        check = code.isIdentifierStartES6;
        for (i = 0, iz = id.length; i < iz; ++i) {
            ch = id.charCodeAt(i);
            if (0xD800 <= ch && ch <= 0xDBFF) {
                ++i;
                if (i >= iz) { return false; }
                lowCh = id.charCodeAt(i);
                if (!(0xDC00 <= lowCh && lowCh <= 0xDFFF)) {
                    return false;
                }
                ch = decodeUtf16(ch, lowCh);
            }
            if (!check(ch)) {
                return false;
            }
            check = code.isIdentifierPartES6;
        }
        return true;
    }

    function isIdentifierES5(id, strict) {
        return isIdentifierNameES5(id) && !isReservedWordES5(id, strict);
    }

    function isIdentifierES6(id, strict) {
        return isIdentifierNameES6(id) && !isReservedWordES6(id, strict);
    }

    module.exports = {
        isKeywordES5: isKeywordES5,
        isKeywordES6: isKeywordES6,
        isReservedWordES5: isReservedWordES5,
        isReservedWordES6: isReservedWordES6,
        isRestrictedWord: isRestrictedWord,
        isIdentifierNameES5: isIdentifierNameES5,
        isIdentifierNameES6: isIdentifierNameES6,
        isIdentifierES5: isIdentifierES5,
        isIdentifierES6: isIdentifierES6
    };
}());
/* vim: set sw=4 ts=4 et tw=80 : */


/***/ }),

/***/ "../babel-plugin-effects/node_modules/esutils/lib/utils.js":
/*!*****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/esutils/lib/utils.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/


(function () {
    'use strict';

    exports.ast = __webpack_require__(/*! ./ast */ "../babel-plugin-effects/node_modules/esutils/lib/ast.js");
    exports.code = __webpack_require__(/*! ./code */ "../babel-plugin-effects/node_modules/esutils/lib/code.js");
    exports.keyword = __webpack_require__(/*! ./keyword */ "../babel-plugin-effects/node_modules/esutils/lib/keyword.js");
}());
/* vim: set sw=4 ts=4 et tw=80 : */


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_DataView.js":
/*!****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_DataView.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../babel-plugin-effects/node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../babel-plugin-effects/node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_Hash.js":
/*!************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_Hash.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "../babel-plugin-effects/node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "../babel-plugin-effects/node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "../babel-plugin-effects/node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "../babel-plugin-effects/node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "../babel-plugin-effects/node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_ListCache.js":
/*!*****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_ListCache.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "../babel-plugin-effects/node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "../babel-plugin-effects/node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "../babel-plugin-effects/node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "../babel-plugin-effects/node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "../babel-plugin-effects/node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_Map.js":
/*!***********************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_Map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../babel-plugin-effects/node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../babel-plugin-effects/node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_MapCache.js":
/*!****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_MapCache.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "../babel-plugin-effects/node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "../babel-plugin-effects/node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "../babel-plugin-effects/node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "../babel-plugin-effects/node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "../babel-plugin-effects/node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_Promise.js":
/*!***************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_Promise.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../babel-plugin-effects/node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../babel-plugin-effects/node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_Set.js":
/*!***********************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_Set.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../babel-plugin-effects/node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../babel-plugin-effects/node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_SetCache.js":
/*!****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_SetCache.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "../babel-plugin-effects/node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "../babel-plugin-effects/node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "../babel-plugin-effects/node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_Stack.js":
/*!*************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_Stack.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "../babel-plugin-effects/node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "../babel-plugin-effects/node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "../babel-plugin-effects/node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "../babel-plugin-effects/node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "../babel-plugin-effects/node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "../babel-plugin-effects/node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_Symbol.js":
/*!**************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_Symbol.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../babel-plugin-effects/node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_Uint8Array.js":
/*!******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_Uint8Array.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../babel-plugin-effects/node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_WeakMap.js":
/*!***************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_WeakMap.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../babel-plugin-effects/node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../babel-plugin-effects/node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_arrayEach.js":
/*!*****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_arrayEach.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_arrayFilter.js":
/*!*******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_arrayFilter.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_arrayIncludes.js":
/*!*********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_arrayIncludes.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "../babel-plugin-effects/node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_arrayIncludesWith.js":
/*!*************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_arrayIncludesWith.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_arrayLikeKeys.js":
/*!*********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_arrayLikeKeys.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "../babel-plugin-effects/node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "../babel-plugin-effects/node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../babel-plugin-effects/node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../babel-plugin-effects/node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "../babel-plugin-effects/node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "../babel-plugin-effects/node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_arrayPush.js":
/*!*****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_arrayPush.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_assignValue.js":
/*!*******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_assignValue.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "../babel-plugin-effects/node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "../babel-plugin-effects/node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_assocIndexOf.js":
/*!********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_assocIndexOf.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "../babel-plugin-effects/node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_baseAssign.js":
/*!******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_baseAssign.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "../babel-plugin-effects/node_modules/lodash/_copyObject.js"),
    keys = __webpack_require__(/*! ./keys */ "../babel-plugin-effects/node_modules/lodash/keys.js");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_baseAssignIn.js":
/*!********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_baseAssignIn.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "../babel-plugin-effects/node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "../babel-plugin-effects/node_modules/lodash/keysIn.js");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_baseAssignValue.js":
/*!***********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_baseAssignValue.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "../babel-plugin-effects/node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_baseClone.js":
/*!*****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_baseClone.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "../babel-plugin-effects/node_modules/lodash/_Stack.js"),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ "../babel-plugin-effects/node_modules/lodash/_arrayEach.js"),
    assignValue = __webpack_require__(/*! ./_assignValue */ "../babel-plugin-effects/node_modules/lodash/_assignValue.js"),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ "../babel-plugin-effects/node_modules/lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "../babel-plugin-effects/node_modules/lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "../babel-plugin-effects/node_modules/lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "../babel-plugin-effects/node_modules/lodash/_copyArray.js"),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ "../babel-plugin-effects/node_modules/lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "../babel-plugin-effects/node_modules/lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "../babel-plugin-effects/node_modules/lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "../babel-plugin-effects/node_modules/lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "../babel-plugin-effects/node_modules/lodash/_getTag.js"),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "../babel-plugin-effects/node_modules/lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "../babel-plugin-effects/node_modules/lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "../babel-plugin-effects/node_modules/lodash/_initCloneObject.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../babel-plugin-effects/node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../babel-plugin-effects/node_modules/lodash/isBuffer.js"),
    isMap = __webpack_require__(/*! ./isMap */ "../babel-plugin-effects/node_modules/lodash/isMap.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../babel-plugin-effects/node_modules/lodash/isObject.js"),
    isSet = __webpack_require__(/*! ./isSet */ "../babel-plugin-effects/node_modules/lodash/isSet.js"),
    keys = __webpack_require__(/*! ./keys */ "../babel-plugin-effects/node_modules/lodash/keys.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_baseCreate.js":
/*!******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_baseCreate.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "../babel-plugin-effects/node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_baseFindIndex.js":
/*!*********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_baseFindIndex.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_baseGetAllKeys.js":
/*!**********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_baseGetAllKeys.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "../babel-plugin-effects/node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../babel-plugin-effects/node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_baseGetTag.js":
/*!******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_baseGetTag.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../babel-plugin-effects/node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "../babel-plugin-effects/node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "../babel-plugin-effects/node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_baseIndexOf.js":
/*!*******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_baseIndexOf.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "../babel-plugin-effects/node_modules/lodash/_baseFindIndex.js"),
    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ "../babel-plugin-effects/node_modules/lodash/_baseIsNaN.js"),
    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ "../babel-plugin-effects/node_modules/lodash/_strictIndexOf.js");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_baseIsArguments.js":
/*!***********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_baseIsArguments.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../babel-plugin-effects/node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../babel-plugin-effects/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_baseIsMap.js":
/*!*****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_baseIsMap.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "../babel-plugin-effects/node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../babel-plugin-effects/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_baseIsNaN.js":
/*!*****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_baseIsNaN.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_baseIsNative.js":
/*!********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_baseIsNative.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "../babel-plugin-effects/node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "../babel-plugin-effects/node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../babel-plugin-effects/node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "../babel-plugin-effects/node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_baseIsRegExp.js":
/*!********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_baseIsRegExp.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../babel-plugin-effects/node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../babel-plugin-effects/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var regexpTag = '[object RegExp]';

/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */
function baseIsRegExp(value) {
  return isObjectLike(value) && baseGetTag(value) == regexpTag;
}

module.exports = baseIsRegExp;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_baseIsSet.js":
/*!*****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_baseIsSet.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "../babel-plugin-effects/node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../babel-plugin-effects/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_baseIsTypedArray.js":
/*!************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_baseIsTypedArray.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../babel-plugin-effects/node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../babel-plugin-effects/node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../babel-plugin-effects/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_baseKeys.js":
/*!****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_baseKeys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "../babel-plugin-effects/node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "../babel-plugin-effects/node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_baseKeysIn.js":
/*!******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_baseKeysIn.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "../babel-plugin-effects/node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "../babel-plugin-effects/node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "../babel-plugin-effects/node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_baseTimes.js":
/*!*****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_baseTimes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_baseUnary.js":
/*!*****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_baseUnary.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_baseUniq.js":
/*!****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_baseUniq.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "../babel-plugin-effects/node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "../babel-plugin-effects/node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ "../babel-plugin-effects/node_modules/lodash/_arrayIncludesWith.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "../babel-plugin-effects/node_modules/lodash/_cacheHas.js"),
    createSet = __webpack_require__(/*! ./_createSet */ "../babel-plugin-effects/node_modules/lodash/_createSet.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "../babel-plugin-effects/node_modules/lodash/_setToArray.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_cacheHas.js":
/*!****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_cacheHas.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_cloneArrayBuffer.js":
/*!************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_cloneArrayBuffer.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "../babel-plugin-effects/node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_cloneBuffer.js":
/*!*******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_cloneBuffer.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "../babel-plugin-effects/node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../effects-docs/node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_cloneDataView.js":
/*!*********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_cloneDataView.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "../babel-plugin-effects/node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_cloneRegExp.js":
/*!*******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_cloneRegExp.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_cloneSymbol.js":
/*!*******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_cloneSymbol.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../babel-plugin-effects/node_modules/lodash/_Symbol.js");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_cloneTypedArray.js":
/*!***********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_cloneTypedArray.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "../babel-plugin-effects/node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_copyArray.js":
/*!*****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_copyArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_copyObject.js":
/*!******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_copyObject.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "../babel-plugin-effects/node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "../babel-plugin-effects/node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_copySymbols.js":
/*!*******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_copySymbols.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "../babel-plugin-effects/node_modules/lodash/_copyObject.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "../babel-plugin-effects/node_modules/lodash/_getSymbols.js");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_copySymbolsIn.js":
/*!*********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_copySymbolsIn.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "../babel-plugin-effects/node_modules/lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "../babel-plugin-effects/node_modules/lodash/_getSymbolsIn.js");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_coreJsData.js":
/*!******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_coreJsData.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../babel-plugin-effects/node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_createSet.js":
/*!*****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_createSet.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./_Set */ "../babel-plugin-effects/node_modules/lodash/_Set.js"),
    noop = __webpack_require__(/*! ./noop */ "../babel-plugin-effects/node_modules/lodash/noop.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "../babel-plugin-effects/node_modules/lodash/_setToArray.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_defineProperty.js":
/*!**********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_defineProperty.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../babel-plugin-effects/node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_freeGlobal.js":
/*!******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_freeGlobal.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_getAllKeys.js":
/*!******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_getAllKeys.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "../babel-plugin-effects/node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "../babel-plugin-effects/node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "../babel-plugin-effects/node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_getAllKeysIn.js":
/*!********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_getAllKeysIn.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "../babel-plugin-effects/node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "../babel-plugin-effects/node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "../babel-plugin-effects/node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_getMapData.js":
/*!******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_getMapData.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "../babel-plugin-effects/node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_getNative.js":
/*!*****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_getNative.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "../babel-plugin-effects/node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "../babel-plugin-effects/node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_getPrototype.js":
/*!********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_getPrototype.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "../babel-plugin-effects/node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_getRawTag.js":
/*!*****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_getRawTag.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../babel-plugin-effects/node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_getSymbols.js":
/*!******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_getSymbols.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "../babel-plugin-effects/node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "../babel-plugin-effects/node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_getSymbolsIn.js":
/*!********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_getSymbolsIn.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "../babel-plugin-effects/node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "../babel-plugin-effects/node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "../babel-plugin-effects/node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "../babel-plugin-effects/node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_getTag.js":
/*!**************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_getTag.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "../babel-plugin-effects/node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "../babel-plugin-effects/node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "../babel-plugin-effects/node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "../babel-plugin-effects/node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "../babel-plugin-effects/node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../babel-plugin-effects/node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "../babel-plugin-effects/node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_getValue.js":
/*!****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_getValue.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_hashClear.js":
/*!*****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_hashClear.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../babel-plugin-effects/node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_hashDelete.js":
/*!******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_hashDelete.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_hashGet.js":
/*!***************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_hashGet.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../babel-plugin-effects/node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_hashHas.js":
/*!***************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_hashHas.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../babel-plugin-effects/node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_hashSet.js":
/*!***************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_hashSet.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../babel-plugin-effects/node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_initCloneArray.js":
/*!**********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_initCloneArray.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_initCloneByTag.js":
/*!**********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_initCloneByTag.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "../babel-plugin-effects/node_modules/lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "../babel-plugin-effects/node_modules/lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "../babel-plugin-effects/node_modules/lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "../babel-plugin-effects/node_modules/lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "../babel-plugin-effects/node_modules/lodash/_cloneTypedArray.js");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_initCloneObject.js":
/*!***********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_initCloneObject.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "../babel-plugin-effects/node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "../babel-plugin-effects/node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "../babel-plugin-effects/node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_isIndex.js":
/*!***************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_isIndex.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_isKeyable.js":
/*!*****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_isKeyable.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_isMasked.js":
/*!****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_isMasked.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "../babel-plugin-effects/node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_isPrototype.js":
/*!*******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_isPrototype.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_listCacheClear.js":
/*!**********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_listCacheClear.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_listCacheDelete.js":
/*!***********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_listCacheDelete.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../babel-plugin-effects/node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_listCacheGet.js":
/*!********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_listCacheGet.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../babel-plugin-effects/node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_listCacheHas.js":
/*!********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_listCacheHas.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../babel-plugin-effects/node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_listCacheSet.js":
/*!********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_listCacheSet.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../babel-plugin-effects/node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_mapCacheClear.js":
/*!*********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_mapCacheClear.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "../babel-plugin-effects/node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "../babel-plugin-effects/node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "../babel-plugin-effects/node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_mapCacheDelete.js":
/*!**********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_mapCacheDelete.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../babel-plugin-effects/node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_mapCacheGet.js":
/*!*******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_mapCacheGet.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../babel-plugin-effects/node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_mapCacheHas.js":
/*!*******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_mapCacheHas.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../babel-plugin-effects/node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_mapCacheSet.js":
/*!*******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_mapCacheSet.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../babel-plugin-effects/node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_nativeCreate.js":
/*!********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_nativeCreate.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../babel-plugin-effects/node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_nativeKeys.js":
/*!******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_nativeKeys.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "../babel-plugin-effects/node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_nativeKeysIn.js":
/*!********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_nativeKeysIn.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_nodeUtil.js":
/*!****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_nodeUtil.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../babel-plugin-effects/node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../effects-docs/node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_objectToString.js":
/*!**********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_objectToString.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_overArg.js":
/*!***************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_overArg.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_root.js":
/*!************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_root.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../babel-plugin-effects/node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_setCacheAdd.js":
/*!*******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_setCacheAdd.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_setCacheHas.js":
/*!*******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_setCacheHas.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_setToArray.js":
/*!******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_setToArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_stackClear.js":
/*!******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_stackClear.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "../babel-plugin-effects/node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_stackDelete.js":
/*!*******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_stackDelete.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_stackGet.js":
/*!****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_stackGet.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_stackHas.js":
/*!****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_stackHas.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_stackSet.js":
/*!****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_stackSet.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "../babel-plugin-effects/node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "../babel-plugin-effects/node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "../babel-plugin-effects/node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_strictIndexOf.js":
/*!*********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_strictIndexOf.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/_toSource.js":
/*!****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/_toSource.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/clone.js":
/*!************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/clone.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(/*! ./_baseClone */ "../babel-plugin-effects/node_modules/lodash/_baseClone.js");

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

module.exports = clone;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/eq.js":
/*!*********************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/eq.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/isArguments.js":
/*!******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/isArguments.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "../babel-plugin-effects/node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../babel-plugin-effects/node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/isArray.js":
/*!**************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/isArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/isArrayLike.js":
/*!******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/isArrayLike.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "../babel-plugin-effects/node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../babel-plugin-effects/node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/isBuffer.js":
/*!***************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/isBuffer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "../babel-plugin-effects/node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "../babel-plugin-effects/node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../effects-docs/node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/isFunction.js":
/*!*****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/isFunction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../babel-plugin-effects/node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../babel-plugin-effects/node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/isLength.js":
/*!***************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/isLength.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/isMap.js":
/*!************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/isMap.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "../babel-plugin-effects/node_modules/lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "../babel-plugin-effects/node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "../babel-plugin-effects/node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/isObject.js":
/*!***************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/isObject.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/isObjectLike.js":
/*!*******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/isObjectLike.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/isPlainObject.js":
/*!********************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/isPlainObject.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../babel-plugin-effects/node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "../babel-plugin-effects/node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../babel-plugin-effects/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/isRegExp.js":
/*!***************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/isRegExp.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsRegExp = __webpack_require__(/*! ./_baseIsRegExp */ "../babel-plugin-effects/node_modules/lodash/_baseIsRegExp.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "../babel-plugin-effects/node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "../babel-plugin-effects/node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */
var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

module.exports = isRegExp;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/isSet.js":
/*!************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/isSet.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "../babel-plugin-effects/node_modules/lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "../babel-plugin-effects/node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "../babel-plugin-effects/node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/isTypedArray.js":
/*!*******************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/isTypedArray.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "../babel-plugin-effects/node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "../babel-plugin-effects/node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "../babel-plugin-effects/node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/keys.js":
/*!***********************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "../babel-plugin-effects/node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "../babel-plugin-effects/node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../babel-plugin-effects/node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/keysIn.js":
/*!*************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/keysIn.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "../babel-plugin-effects/node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "../babel-plugin-effects/node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../babel-plugin-effects/node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/noop.js":
/*!***********************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/noop.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/stubArray.js":
/*!****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/stubArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/stubFalse.js":
/*!****************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/stubFalse.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/lodash/uniq.js":
/*!***********************************************************!*\
  !*** ../babel-plugin-effects/node_modules/lodash/uniq.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseUniq = __webpack_require__(/*! ./_baseUniq */ "../babel-plugin-effects/node_modules/lodash/_baseUniq.js");

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),

/***/ "../babel-plugin-effects/node_modules/to-fast-properties/index.js":
/*!************************************************************************!*\
  !*** ../babel-plugin-effects/node_modules/to-fast-properties/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let fastProto = null;

// Creates an object with permanently fast properties in V8. See Toon Verwaest's
// post https://medium.com/@tverwaes/setting-up-prototypes-in-v8-ec9c9491dfe2#5f62
// for more details. Use %HasFastProperties(object) and the Node.js flag
// --allow-natives-syntax to check whether an object has fast properties.
function FastObject(o) {
	// A prototype object will have "fast properties" enabled once it is checked
	// against the inline property cache of a function, e.g. fastProto.property:
	// https://github.com/v8/v8/blob/6.0.122/test/mjsunit/fast-prototype.js#L48-L63
	if (fastProto !== null && typeof fastProto.property) {
		const result = fastProto;
		fastProto = FastObject.prototype = null;
		return result;
	}
	fastProto = FastObject.prototype = o == null ? Object.create(null) : o;
	return new FastObject;
}

// Initialize the inline property cache of FastObject
FastObject();

module.exports = function toFastproperties(o) {
	return FastObject(o);
};


/***/ }),

/***/ "../effects-common/lib/EffectBoundary.js":
/*!***********************************************!*\
  !*** ../effects-common/lib/EffectBoundary.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __extends=this&&this.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __generator=this&&this.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};Object.defineProperty(exports,"__esModule",{value:true});var StackFrame_1=__webpack_require__(/*! ./StackFrame */ "../effects-common/lib/StackFrame.js");var util_1=__webpack_require__(/*! ./util */ "../effects-common/lib/util.js");var validateIC=function(ic){return util_1.isContinuation(ic)||util_1.isGeneratorFactory(ic);};var BoundaryError=/** @class */function(_super){__extends(BoundaryError,_super);function BoundaryError(message){var _this=_super.call(this)||this;_this.message=message;Reflect.setPrototypeOf(_this,BoundaryError.prototype);return _this;}return BoundaryError;}(Error);exports.BoundaryError=BoundaryError;var getStackResumeFromContext=function(ctx){var _a;var stackResume=(_a=global.stackResume)!==null&&_a!==void 0?_a:ctx["stackResume"];if(!util_1.exists(stackResume)){throw new BoundaryError("Missing stackResume from context. Are you using Boundary without the Effects prelude-polyfill?");}return stackResume;};var maybeCreateFrame=function(ic){return util_1.isContinuation(ic)?function(){var _i;var args=[];for(_i=0;_i<arguments.length;_i++){args[_i]=arguments[_i];}return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,ic.apply(void 0,args)];case 1:return[2/*return*/,_a.sent()];}});}:ic;};exports.EffectBoundary=function(){var ctxFn=function(ic){return function(){var args=[];for(var _i=0;_i<arguments.length;_i++){args[_i]=arguments[_i];}if(!validateIC(ic)){throw new BoundaryError("Must call boundary with a function or generator function");}var unlink=function(){return StackFrame_1.addReturn(temporalFrame,null);};var stackResume=getStackResumeFromContext(exports.EffectBoundary);var temporalFrame=function(){return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,maybeCreateFrame(ic).apply(void 0,args)];case 1:_a.sent();unlink();return[2/*return*/];}});}();StackFrame_1.addReturn(temporalFrame,StackFrame_1.getReturnFrame(ctxFn));return stackResume(temporalFrame);};};ctxFn.next=function(){return{value:ctxFn,done:!!StackFrame_1.getReturnFrame(ctxFn)};};return ctxFn;};

/***/ }),

/***/ "../effects-common/lib/StackFrame.js":
/*!*******************************************!*\
  !*** ../effects-common/lib/StackFrame.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var util_1=__webpack_require__(/*! ./util */ "../effects-common/lib/util.js");var ReturnFrame=Symbol("ReturnFrame");var HandlerReference=Symbol("HandlerReference");var RootContinuation=Symbol("RootContinuation");exports.getHandler=function(frame,type,defaultType){if(defaultType===void 0){defaultType=null;}var _a;var handler=frame[HandlerReference];if(util_1.exists(handler)){// @ts-ignore
return util_1.exists(handler[type])?handler[type]:(_a=handler[defaultType])!==null&&_a!==void 0?_a:null;}return null;};exports.getReturnFrame=function(frame){return frame[ReturnFrame];};exports.isHandlerType=function(frame,type){if(!util_1.isIterator(frame))return false;return exports.getHandler(frame,type)!==null;};exports.addReturn=function(targetFrame,returnFrame){return void(targetFrame[ReturnFrame]=returnFrame);};exports.addHandler=function(frame,handler){return void(frame[HandlerReference]=handler);};exports.setRootContinuation=function(fn){return void(fn[RootContinuation]=true);};exports.isRootContinuation=function(fn){return Boolean(fn[RootContinuation]);};exports.findHandlerFrame=function(frame,type,defaultType){if(defaultType===void 0){defaultType=null;}var frameWithHandler=frame;while(util_1.exists(frameWithHandler)&&!exports.isHandlerType(frameWithHandler,type)){if(util_1.exists(defaultType)&&exports.isHandlerType(frameWithHandler,defaultType))break;frameWithHandler=exports.getReturnFrame(frameWithHandler);}if(!util_1.exists(frameWithHandler)||!util_1.isIterator(frameWithHandler))return null;return frameWithHandler;};

/***/ }),

/***/ "../effects-common/lib/mod.js":
/*!************************************!*\
  !*** ../effects-common/lib/mod.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __extends=this&&this.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __awaiter=this&&this.__awaiter||function(thisArg,_arguments,P,generator){function adopt(value){return value instanceof P?value:new P(function(resolve){resolve(value);});}return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=this&&this.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};var __rest=this&&this.__rest||function(s,e){var t={};for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(Object.hasOwnProperty.call(mod,k))result[k]=mod[k];result["default"]=mod;return result;};Object.defineProperty(exports,"__esModule",{value:true});var StackFrame_1=__webpack_require__(/*! ./StackFrame */ "../effects-common/lib/StackFrame.js");var util_1=__webpack_require__(/*! ./util */ "../effects-common/lib/util.js");var _frame=__importStar(__webpack_require__(/*! ./StackFrame */ "../effects-common/lib/StackFrame.js"));var _util=__importStar(__webpack_require__(/*! ./util */ "../effects-common/lib/util.js"));exports.frame=_frame;exports.util=_util;var EffectBoundary_1=__webpack_require__(/*! ./EffectBoundary */ "../effects-common/lib/EffectBoundary.js");exports.EffectBoundary=EffectBoundary_1.EffectBoundary;exports.BoundaryError=EffectBoundary_1.BoundaryError;var UnhandledEffectError=/** @class */function(_super){__extends(UnhandledEffectError,_super);function UnhandledEffectError(_a){var type=_a.type;var _this=_super.call(this)||this;_this.message="Encountered an unhandled effect :"+String(type);return _this;}return UnhandledEffectError;}(TypeError);exports.UnhandledEffectError=UnhandledEffectError;var unwindStack=function(e,frame){// TODO: [major] construct an intelligible stack trace.
//  This might be done best with the help of a babel transform plugin
var root=frame;while(util_1.exists(root)&&!StackFrame_1.isRootContinuation(root)){root=StackFrame_1.getReturnFrame(root);}if(util_1.isContinuation(root))root(e);else throw e;};exports.stackResume=function(gen,arg){return __awaiter(void 0,void 0,void 0,function(){var _a,value,done,returnFrame,e_1;return __generator(this,function(_b){switch(_b.label){case 0:if(!util_1.isIterator(gen)){return[2/*return*/,gen];}_b.label=1;case 1:_b.trys.push([1,15,,16]);return[4/*yield*/,gen.next(arg)];case 2:_a=_b.sent(),value=_a.value,done=_a.done;if(!!done)return[3/*break*/,9];if(!util_1.isIterator(value))return[3/*break*/,4];StackFrame_1.addReturn(value,gen);return[4/*yield*/,exports.stackResume(value,null)];case 3:return[2/*return*/,_b.sent()];case 4:if(!util_1.isContinuation(value))return[3/*break*/,6];return[4/*yield*/,value(gen)];case 5:return[2/*return*/,_b.sent()];case 6:return[4/*yield*/,exports.stackResume(gen,value)];case 7:return[2/*return*/,_b.sent()];case 8:return[3/*break*/,14];case 9:returnFrame=StackFrame_1.getReturnFrame(gen);if(!util_1.isIterator(returnFrame))return[3/*break*/,11];return[4/*yield*/,exports.stackResume(returnFrame,value)];case 10:return[2/*return*/,_b.sent()];case 11:if(!util_1.isContinuation(returnFrame))return[3/*break*/,13];return[4/*yield*/,returnFrame(value)];case 12:return[2/*return*/,_b.sent()];case 13:return[2/*return*/,arg];case 14:return[3/*break*/,16];case 15:e_1=_b.sent();unwindStack(e_1,gen);return[3/*break*/,16];case 16:return[2/*return*/];}});});};exports.runProgram=function(root){return __awaiter(void 0,void 0,void 0,function(){return __generator(this,function(_a){return[2/*return*/,exports.stackResume(root,null)];});});};exports.performEffect=function(_a){var type=_a.type,data=__rest(_a,["type"]);return function(currentFrame){return __awaiter(void 0,void 0,void 0,function(){var frameWithEffectHandler,handlerFrameCreator,capturedContinuation,handlerFrame;return __generator(this,function(_a){switch(_a.label){case 0:frameWithEffectHandler=StackFrame_1.findHandlerFrame(currentFrame,type);if(!util_1.exists(frameWithEffectHandler)){throw new UnhandledEffectError({type:type});}handlerFrameCreator=StackFrame_1.getHandler(frameWithEffectHandler,type);// TODO: [minor] Set up a type-guard on getHandler, or findHandlerFrame to indicate that at this point the handlerFrame must exist.
if(!util_1.exists(handlerFrameCreator)){// Unreachable code
throw new TypeError("Reached Something That shouldn't be reachable");}capturedContinuation=function(handlerFnResult){/**
                         * The interpreter will call this with whatever frame is currently in control.
                         * It's possible to do something with that frame.. but I don't think it's necessary,
                         * just resume the frame that performed with the result of the perform.
                         */return function(currentControlFrame){return __awaiter(void 0,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,exports.stackResume(currentFrame,handlerFnResult)];case 1:return[2/*return*/,_a.sent()];}});});};};handlerFrame=handlerFrameCreator(data,capturedContinuation);StackFrame_1.addReturn(handlerFrame,StackFrame_1.getReturnFrame(frameWithEffectHandler));return[4/*yield*/,exports.stackResume(handlerFrame)];case 1:return[2/*return*/,_a.sent()];}});});};};exports.withHandler=function(handler,frame){var handlerFrame=function(){return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,frame];case 1:return[2/*return*/,_a.sent()];}});}();StackFrame_1.addHandler(handlerFrame,handler);return handlerFrame;};

/***/ }),

/***/ "../effects-common/lib/util.js":
/*!*************************************!*\
  !*** ../effects-common/lib/util.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __generator=this&&this.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};var __await=this&&this.__await||function(v){return this instanceof __await?(this.v=v,this):new __await(v);};var __asyncGenerator=this&&this.__asyncGenerator||function(thisArg,_arguments,generator){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var g=generator.apply(thisArg,_arguments||[]),i,q=[];return i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this;},i;function verb(n){if(g[n])i[n]=function(v){return new Promise(function(a,b){q.push([n,v,a,b])>1||resume(n,v);});};}function resume(n,v){try{step(g[n](v));}catch(e){settle(q[0][3],e);}}function step(r){r.value instanceof __await?Promise.resolve(r.value.v).then(fulfill,reject):settle(q[0][2],r);}function fulfill(value){resume("next",value);}function reject(value){resume("throw",value);}function settle(f,v){if(f(v),q.shift(),q.length)resume(q[0][0],q[0][1]);}};Object.defineProperty(exports,"__esModule",{value:true});// Helper method to lens a value as not null and not undefined
exports.exists=function(x){return typeof x!=="undefined"&&x!==null;};exports.isGeneratorFactory=function(x){if(typeof x!=="function")return false;return["AsyncGeneratorFunction","GeneratorFunction"].some(function(type){return type===Reflect.getPrototypeOf(x).constructor.name;});};//  A Continuation is just a plain-old function.
//  But the virtual stack interpreter checks to see if frames point to "continuations" which
//  are plain old functions... helps the readability.
exports.isContinuation=function(x){return typeof x==="function"&&!exports.isGeneratorFactory(x);};exports.isIterator=function(x){return exports.exists(x)&&exports.isContinuation(x.next);};var asyncGeneratorInstance=function(){return __asyncGenerator(this,arguments,function(){return __generator(this,function(_a){return[2/*return*/];});});};exports.isAsyncGenerator=function(input){return Reflect.getPrototypeOf(input)===Reflect.getPrototypeOf(asyncGeneratorInstance);};

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

});
//# sourceMappingURL=0.3215f57c428cc9bb6568.worker.js.map