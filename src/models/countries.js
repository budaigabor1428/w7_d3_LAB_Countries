const RequestHelper = require('../helpers/request_helper.js')
const PubSub = require('../helpers/pub_sub.js')


const Countries = function() {
this.names = []
this.countries = null;
};

Countries.prototype.bindEvent = function () {
  PubSub.subscribe('FormView:change', (event) => {
    console.log(event.detail);
    let num = event.detail;
  const country_obj = this.countries[num];
  console.log(country_obj);
})
};

Countries.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://restcountries.eu/rest/v2/all');
  requestHelper.get((data) => {
    this.countries = data
    this.names = data.map(obj => {
      return obj.name
    });
    PubSub.publish('model:countries-ready', this.names);
  });
};

module.exports = Countries;
