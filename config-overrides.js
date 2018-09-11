//using react-app-rewired we can override create-react-app webpack configuration

const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
   /* change configuration here */

   // config = injectBabelPlugin('transform-object-rest-spread', config);

   return config;
};
