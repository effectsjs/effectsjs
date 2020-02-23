const transformEffects = require('babel-plugin-effects');

module.exports = function(api){
    api.cache(false);
    return {
        plugins: [transformEffects]
    }
};
