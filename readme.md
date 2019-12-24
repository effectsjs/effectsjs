# Algebraic Effects

This repo provides a sketch to explore what Algebraic Effects would look like in JavaScript apps.

A rudimentary example would look like this:

```javascript
try{
    const result = perform ({type : 'effect'});
    console.log(result);
} handle (e) {
    if(e.type === 'effect'){
        recall "Effect Result";
    }
}
```

Where `perform` allows you to step into a previous stack frame, do something, then (optionally) return to the 
original stack frame with some new data.

This works with async handlers:

```javascript
const sleep = (ms) => new Promise(res => setTimeout(res, ms));
const asyncHandler = async () => {
    const start = Date.now();
    await sleep(1500);
    recall ({start, end : Date.now()});
};
const main = () => {
    console.log('main start');
    const performResult = perform ({type : 'sleepHandler'});
    console.log(performResult);
    console.log('main end');
}


try{
    main();
}handle (e){
    if(e.type === 'sleepHandler'){
        asyncHandler()
    }
}
```


## Try it out

The repo contains a babel fork as a sub module. The babel fork introduces three new keywords to the babel parser:

- `perform` - To exit the current stack frame
- `handle` - To delimit an effect handler
- `recall` - (needs a better name) - To resume into the frame that performed.

You'll need to do cd into the babel fork run the following commands:

```
make bootstrap
make build
```

In the babel repo to build the fork.

From there, you'll be able to run the tests `npm run test`.
