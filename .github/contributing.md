# contributing

Thanks for you interest in contributing.

# bootstrapping

To bootstrap development, please

- install [nvm](https://github.com/nvm-sh/nvm)
- fork & clone this repo, then `cd ./effectsjs`
- install and use the repository requestend version of nodejs: `nvm install && nvm use`
- install and link all depedencies: `npm run bootstrap`
- configure the babel fork:
  - `git submodule init`
  - `git submodule update`
  - `cd babel`
  - `make bootstrap`
  - `make build`
  - `cd ..`
- cd `packages/<package-name>`
- start the compiler: `npm run build -- --watch`
- do great work

# submitting patches

You're awesome.  Thank you!

- run a full build, `npx tsc -b packages`
- run the tests, `npm run test`
- run the formatter, `npm run format`
- run the linter, `npm run format`
- open a pull request

# code of conduct

Please refer to the [nodejs code-of-conduct](https://github.com/nodejs/node/blob/master/CODE_OF_CONDUCT.md).

