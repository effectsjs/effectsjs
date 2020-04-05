# Effects Runtime

For an overview of what this package enables and interactive exampels, see [the effectsjs website](https://effects.js.org/).

### Technical overview

Performing, handling and recalling are all handled by generators under the hood. The [babel transform plugin](../babel-plugin-effects) performs transforms to abstract away the generator syntax.

Consider the following variables

```javascript
const getIntegerHandler = 'getInteger';

const GetIntegerEffect = () => ({
  type: getIntegerHandler
});
```

Compare the following code

```javascript
const main = async () => {
    'use effects';
    try{
        return perform GetIntegerEffect();

        return integer
    }handle getIntegerHandler with (e){
        recall 5;
    }
}
```

To the functionally equivalent code:

```javascript
const handler = {
  *[getIntegerHandler](e, resume){
    return resume(5);
  }
};

const frame = function*(){
  return  yield performEffect(GetIntegerEffect());  
}

const program = withHandler(
  handler,
  frame()
);

const main = () => runProgram(program());
```

Above, we see all of the features of effects implemented first with the proposed effects syntax and second in runtime syntax.

The rest of this document will deal with the latter, to demonstrate _how_ effects are implemented for the proposal.

## The Virtual Stack

Algebraic Effects operate in a control flow that is not available to us in the JavaScript programming language. We have a call-stack, which is very -- well -- _stack_ like. Quick and dirty overview of the call-stack: as functions are called, they are pushed onto the stack. Functions called from that function are pushed onto stack, evaluated and then popped into the last call-site until the stack is empty. 

