# prettier-plugin-javascript-effects

## design

Prettier plugins are non-trivial. We want to exploit as _much of the status quo_
babel plugin and pipeline as possible, and alter only that which is necessary.

Unfortunately, prettier's internal babel plugin doesn't expose APIs to modify
its behavior.

Given the lack of extensibility, we could:

1. create a standalone plugin, with _oodles_ of boilerplate, or
1. try to maintain parity with prettier as much as possible, use their own source, edit it and rebuild it.

I have chose the latter :smile:.

### how it works

1. `plugin` - `src/plugin.ts`. This is our plugin entrypoint.
  - adheres to the [prettier plugin api](https://prettier.io/docs/en/api.html#custom-parser-api)
  - plugins need to expose a parser, and we want our custom `effects` parser
    - we do this by importing `parser-babel.bundle.js`
1. `parser-babel.bundle.js` - needed to wire our custom babel parser into prettier's babel bootstrapping process
  - prettier internally uses `prettier/language-js/parser-babel.js` to bootstrap the JS formatter
  - `prettier/language-js/parser-babel.js` is copied to our source as `src/parser-babel.template.js`
  - `src/parser-babel.template.js` is edited as needed, annotated
  - `src/parser-babel.template.js` is `webpack`ed--targeting nodejs--as `parser-babel.bundle.js`,
  - we import the bundle and teach our plugin that "hey, this is pretty much just the prettier stuff, but with our babel parser!"
  - now, we have a mirror of prettier w/ effects support
    - if we need to update prettier support, we have to copy their latest entrypoint, and apply the diff.
      - **isn't this brittle**? _Yes_. We could fork prettier, apply our changes in our fork, and rewire their processes to publish only a subset of their code (just the js plugin), and distribute that way. We should probably so something like that soon, so as to dedupe distribution of our @babel/parser. It's not particularly clean either, given that the language-js plugins are not plugin _packages_ in the prettier source.
1. `printer-estree.bundle.js` - the updated printer. copied, edited, rebuilt, and passed into our plugin.
