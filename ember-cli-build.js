'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, { });

  app.import('node_modules/auth0-js/build/auth0.js');

  return app.toTree();
};
