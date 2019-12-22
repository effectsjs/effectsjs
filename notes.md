Notes to help me along the way.


https://jlongster.com/Exploring-Continuations-Resumable-Exceptions

https://dev.to/yelouafi/algebraic-effects-in-javascript-part-1---continuations-and-control-transfer-3g88


### Direct-Style

Direct style is the familiar style of programming: naturally stack-based, in synchronous order from top to bottom.

```javascript

// Direct Style:
const identity = x => x;

const id = identity('a');

console.log(id);
```

### Continuation-Passing Style

A function written in CPS does not return to it's caller, but recieves a function to be executed _next_

```javascript

// Continuous-Passing Style
const identity = (x, ret) => ret(x);


identity('a', console.log);

```

##### Currying & CPS

CPS functions may be curried for composability: 

```javascript
const identity = x => ret => ret(x);

identity('a')(console.log);
```

## Continuations

`Computation` - The thing being computed now.

`Continuation` - The Rest of the Computation.

The Current Continuation represents the _next_ state in relation to the *Current Computation*

```
Example:

1 + (2 * 3) - 4

Current Computation:

2 * 3

Current Continuation:

1 + _ - 4 
```


```javascript
// Direct Style
const onDone = console.log;

const step1 = () => 2 * 3;
const step2 = (x) => 1 + x;
const step3 = (x) => x - 4;

console.log(
  step3(step2(step1()))
);

// Continuation Passing Style

const step1 = (next) => next(2+3);
const step2 = (x, next) => next(1+x);
const step3 = (x, next) => next(x - 4);

step1((result1) => {
    step2(result1, (result2) => {
        step3(result2, console.log)
    })
});


// CPS, curried

const step1 = () => (next) => next(2+3);
const step2 = (x) => (next) => next(1+x);
const step3 = (x) => (next) => next(x - 4);

step1()(step2)(step3)(console.log);
```

*Note from the above examples*:

 - The callback provided to a function written in CPS is a continuation.

 - CPS provides explicit control flow: the current function decides when and what to do next.

 - CPS is sucks to write and is worst to read.


Great news about the last point: Any Direct-Style can be converted to CPS. It would be possible to write (for example)
a babel plugin, or an ide macro to convert a function to CPS, following these formulae:

#### Formula 1 - Continuation
```javascript
const _x = () => {
    return 'a';
};
const x = (ret) => {ret('a')};
```

A function receives an additional parameter which represents the continuation. 
The continuation is called at return;

#### Formula 2 - x() calls y()
```javascript
const _x = () => {
    return y()
};

const x = (ret) => {   
    y(ret)
};
```
The continuation is passed to the call to `y`

#### Formula 3 - x calls y with result of z.
```javascript
const _x = () => {
  const zResult = z();
  
  return y(zResult);
};

const x = (ret) => {
    const deferred = (res) => y(res, ret);

    z(deferred);
} 
```

Note the deferred computation: 

y must receive the result computed by z, so an intermediate function must be constructed
to pass the result and continuation to y. 

z receives this deferred computation as it's passed-continuation.


#### Formula 4 - x calls y then z

```javascript
const _x = () => {
    y();
    return z();
};

const x = (ret) => {
    const deferred = () => z(ret);

    y( deferred );
}; 
```

In this position, a deferred computation is constructed to call z with the current continuation.

#### Formula 5 - conditional

```javascript
const _w = () => {
    if(x()){
        return y();
    }else{
        return z();
    }   
};

const w = (ret) => {
    const deferred = (res) => {
        if(res){
            y(ret)
        }else{
            z(ret)
        }
    };
    
    x(deferred)
}
```

#### Formula 6 - Loops
```javascript
const _x = () => {
    let i = 0;
    let j = [];
    while(i < 5){
        i += 1;
        j.push(y(i));
    }
     
    return j;
};

const x = (ret, i = 1, j = []) => {
    if(i === 5) {
        ret(j);
    } else{
      y(i+1, (res) => {
        x(ret, i+1, [...j, res]);
      });   
    }
};
```

Note: nothing special here: Loops must be converted to recursion, then the rest of the formulaes can be applied.