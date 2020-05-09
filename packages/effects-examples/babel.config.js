const { transformEffects } = require("babel-plugin-effects");

module.exports = function (api) {
  api.cache(false);
  return {
    presets: ["@babel/env", "@babel/preset-react"],
    plugins: [transformEffects],
  };
};
