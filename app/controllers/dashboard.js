import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);

    this.set('balance', this.bankBalance());
  },
  bankBalance() {
    return "$" + Math.floor((Math.random() + 1) * 10000) + ".00";
  }
});
