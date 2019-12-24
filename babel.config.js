const transformEffects = require('./lib/babel-plugin-transform-effects');
const prelude = require('./lib/babel-plugin-transform-prelude');

module.exports = function(api){
    api.cache(false);
    return {
        plugins: [transformEffects]
    }
};