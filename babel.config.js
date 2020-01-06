const transformEffects = require('./lib/babel-plugin-transform-effects');

module.exports = function(api){
    api.cache(false);
    return {
        plugins: [transformEffects]
    }
};