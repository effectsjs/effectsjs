### Anatomy

In order use use effects, we must learn about three new keywords and a _directive_.

This sounds like a lot. But it's not that bad:

#### use effects

Because effects aren't first-class (yet), we need a way to indicate to the transpiler that 
the Virtual Stack should begin. The `'use effects'` directive is the way to do this.

There are several valid places for the `'use effects'` directive to be used, but the convention
is to place it immediately above the root `try/handle` expression. 

If used within a function, the directive indicates that the function is asynchronous:
Should the function return a value, due to the asynchronous nature of `try/handle` the value
will be a `Promise` that resolves to the result.

#### perform

The `perform` keyword is a `UnaryExpression` that expects an `ObjectExpression` as an argument. That's a fancy way to say,
`perform` is only valid when followed by an object literal. e.g.: `perform {}`

In order to perform an _effect_ we must specify the _type_: `perform {type : 'effect'}`.

Perform _may_ return a result. Thus, it is valid to bind that result to a variable:

```javascript
const result = perform {type : 'fetch_pokemon'}
```

_Any_ function may perform. Calling that function outside of a `try/handle` construct is considered undefined behavior. It's important
to emphasize here that, performs *do not* have to occur as direct descendants of`try/handle`, but they must be descendants. 

We conceptualize this as the `Virtual Stack`. The `'use effects'` directive indicates that we are beginning the `Virtual Stack`, the `try/handle` construct indicates the _bounds_ of the virtual stack.
As long as a `perform` keyword is used within the virtual stack, it's considered valid.



#### try / handle

The syntax allows for us to match against specific effects performed within the `Virtual Stack`, much like a
`CatchExpression` indicates an "escape hatch" for anything that might throw within the preceding `Try`.

`Handlers` may use any `Expression` as an effect type:

```javascript
}handle getSomeType() with (e){
}handle 'effect' with (e) {
}handle 10 with (e){
}handle someVariable with (e){
```

By convention, prefer `Symbol`s to communicate effect types -- though basic examples typically use strings to communicate intent.

A handler that does not `recall` is considered undefined behavior and will result in unexpected application results.

#### recall

Recall is the final keyword we must learn, and is the easiest to master. Like `perform`, it is another `UnaryExpression`. `recall` 
expects any expression as it's argument. Thus, the following are all valid expressions:

```javascript
recall {}
recall 'a'
recall getResult()
recall null
```

As mentioned previously, every effect must recall. `recall` -- unlike `perform` -- is only valid in effect frames. Thus, only descendants of the 
effect handler block may `recall`. `recall`ing outside of an effect frame is considered undefined behavior.