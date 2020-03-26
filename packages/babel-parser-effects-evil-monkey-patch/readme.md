# babel-parser-effects-evil-monkey-patch

**warning: please try and use effects-babel-parser** before using this package. use this as a last resort.

> an easy-but-dangerous way to install effectsjs babel parser into an existing babel project

hijacks node's `require` functionality to redirect key `@babel/parser` files to ones that can parse effects code.

## usage

`node -r babel-parser-effects-evil-monkey-patch ...`

## why

babel doesn't have a mechanism to customize/extend syntax.  [it used to](https://medium.com/@jacobp100/adding-custom-syntax-to-babel-e1a1315c6a90), but no more. further, the babel team [doesn't plan on supporting it](https://babeljs.io/docs/en/babel-parser#will-the-babel-parser-support-a-plugin-system).

thus, if you want effects you need to install a custom `babel`, specify a custom parser, or monkey patch the babel parser to use effects-aware files.

## is it actually evil?

yes! incredibly dangerous and evil. we don't/can't check to make sure everything will still work within babel. that would be _great_.
