const PubSub = require('../helpers/pub_sub.js')


const FormView = function() {

};

FormView.prototype.bindEvent = function () {
    PubSub.subscribe('model:countries-ready', (event) => {
    const names = event.detail;
    this.populate(names);
    }
  )};

FormView.prototype.populate = function (countries) {
    const selector = document.querySelector('#countries');
    countries.forEach((country, index) => {
       const option = document.createElement('option');
       option.textContent = country;
       option.value = index;
       selector.appendChild(option);
});
};

module.exports = FormView;
