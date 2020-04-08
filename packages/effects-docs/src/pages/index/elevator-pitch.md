---
title: elevator_pitch
---

## TLDR, What are Algebraic Effects?

The best way to conceptualize the effect control flow is to expand upon an already well-known programming language construct: Exceptions.

Consider the following example:

```javascript
const child = () => {
    throw "Hello"
};

const parent = () => {
    child();
    doMoreWork();
};

const main = () => {
    try{
      parent();
    }catch(e){
      console.log(e);
    }
}
```

Function calls get pushed onto the call-stack as they are invoked. Normally, as a function completes it's frame is 
popped off of the call stack and the previous stack frame is resumed. The above example demonstrates an alternative flow:
when `child` throws an exception, the exception "bubbles" up the call-stack until a call-site with an exception handler is found.

If you've been programming in a language that offers first-class support for exception handling as outlined above, you're most-likely
comfortable with the flow just described.


Now let's tweak our existing mental model for this new concept. Imagine a catch-block that can resume back to the throwing call-site. 
In the above example, our `catch` block in main, would recall to `child`. 

This is the crash course for the proposed control flow, and the keywords to facilitate it.