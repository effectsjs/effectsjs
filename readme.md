# effectsjs

![master](https://github.com/effectsjs/effectsjs/workflows/master/badge.svg)

## Algebraic Effects

This monorepo provides a toolkit for adding Algebraic effects to Javascript. The implementation is not currently stable and is in active development. It's best seen 
as an experiment to explore how Algebraic Effects can improve (or degrade) application development. And an early-stages proposal for the addition of a mechanism to facilitate Algebraic Effects in ECMAScript.

TLDR: *DON'T USE THIS IN PROD*.

Looking for how & why of effectjs?  Check out our docs site at [effectsjs.github.io/effectsjs](https://effectsjs.github.io/effectsjs).

### Package Overview

| Package              | Description                                                                                                                                                                                                                                                                          |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [babel-plugin-effects](./packages/babel-plugin-effects) | The Babel Transform plugin.   Transform proposed syntax into functional javascript.   Under the hood, effects are implemented with generators and processed through a "runtime". This babel plugin transforms Effects Syntax into functional javascript that relies on this runtime. |
| [effects-common](./packages/effects-common)       | Common utilities shared across the effects ecosystem. Primarily used by `effects-runtime` but shared elsewhere. Virtual stack primitives are defined here.                                                                                                                           |
| [effects-docs](./packages/effects-docs)         | Code that powers https://effects.js.org/                                                                                                                                                                                                                                             |
| [effects-runtime](./packages/effects-runtime)      | The guts that facilitate algebraic effects. All of the necessary logic to provide and interperate a Virtual Stack of generator functions.                                                                                                                                            |


The core effects toolkit is babel-plugin-effects, effects-common and effects-runtime. The rest of the ecosystem exists to provide a better developer experience.

## Contributing

Looking to contribute? _Awesome ❤️_ see [.github/contributing.md](./.github/contributing.md)