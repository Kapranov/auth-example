'use strict';
const AUTH_CONFIG = require('./auth0-variables');

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'auth-example',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        'ds-improved-ajax': true
      },
      EXTEND_PROTOTYPES: {
        Date: false
      }
    },

    APP: { }
  };

  if (environment === 'development') {
    ENV.APP.LOG_RESOLVER = false;
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
  }

  if (environment === 'test') {
    ENV.locationType = 'none';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') { }

  ENV.auth0 = {
    clientId: AUTH_CONFIG.clientId,
    domain: AUTH_CONFIG.domain,
    callbackUrl: AUTH_CONFIG.callbackUrl
  }

  return ENV;
};
