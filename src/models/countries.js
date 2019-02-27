const RequestHelper = require('../helpers/request_helper.js')
const PubSub = require('../helpers/pub_sub.js')


const Countries = function() {
this.names = []
this.countries = null;
};

Countries.prototype.bindEvent = function () {

};

Countries.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://restcountries.eu/rest/v2/all');
  requestHelper.get((data) => {
    this.countries = data
    this.names = data.map(obj => {
      return obj.name
    });
    console.log(this.names);
    PubSub.publish('model:countries-ready', this.names);
  });
};

module.exports = Countries;
