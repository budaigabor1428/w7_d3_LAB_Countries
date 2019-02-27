const PubSub = require('../helpers/pub_sub.js')


const FormView = function() {

};

FormView.prototype.bindEvent = function () {
    PubSub.subscribe('model:countries-ready', (event) => {
    const names = event.detail;
    this.populate(names);
  })

  const countrySelect = document.querySelector('#countries');
    countrySelect.addEventListener('change', (evt)=>{
      const selectedIndex = evt.target.value;
  PubSub.publish('FormView:change', selectedIndex);
    })

  };

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
