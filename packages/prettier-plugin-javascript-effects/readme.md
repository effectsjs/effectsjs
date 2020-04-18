# prettier-plugin-javascript-effects

## design

Prettier plugins are non-trivial. We want to exploit as _much of the status quo_
babel plugin and pipeline as possible and alter only that which is necessary.

Unfortunately, prettier's internal babel plugin doesn't expose APIs to modify
its behavior.

Given the lack of extensibility, we have two options:

1. create a standalone plugin, with _oodles_ of prettier boilerplate, or
2. recycle prettier's source on a per-file-basis only as edits are needed, edit the files, and re-package them

I have chosen the latter :smile:!

### how it works

How does prettier-plugin-javascript-effects copy, edit, and re-package prettier's
source to support effects in a plugin?

1. First, we decalare the [`plugin`](https://prettier.io/docs/en/api.html#custom-parser-api). See `src/plugin.ts`. This is our entrypoint.
2. Second, we expose our custom parser to our plugin. See `src/parser-babel.template.js`.
   - Consider that prettier internally uses `prettier/language-js/parser-babel.js` to bootstrap its JS parser for its internal plugin.
   - `prettier/language-js/parser-babel.js` is copied to our source as `src/parser-babel.template.js`
   - `parser-babel.template.js` is edited as needed to support effects, and annotated wherever edits take place
   - `parser-babel.template.js` is `webpack`ed--targeting nodejs--as `parser-babel.bundle.js`,
     - By running this build process, prettier's complex babel setup pipeline is recycled, with minimal adjustments for effects!
3. Third, we import the bundled parser and configure our plugin to use it.
4. Fourth, now that we can parse effects in javascript, we also need format effects code.
   - Consider that prettier internally uses `printer-estree.js` to format JS code.
   - Just as with the parser we copy prettier's `printer-estree.js` to `./src/printer-estree.template.js`
   - `printer-estree.template.js` is updated to support effects, `webpack`ed, and passed into our plugin.

:tada:
