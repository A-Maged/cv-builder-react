const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
   config = injectBabelPlugin('react-css-modules', config);

   return config;
};
