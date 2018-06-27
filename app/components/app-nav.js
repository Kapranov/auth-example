import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),
  auth: service('auth'),

  actions: {
    login() {
      this.get('auth').login();
    },

    goHome() {
      this.get('router').transitionTo('home');
    },

    goDashboard() {
      this.get('router').transitionTo('dashboard');
    },

    logout() {
      this.get('auth').logout()
    }
  }
});
