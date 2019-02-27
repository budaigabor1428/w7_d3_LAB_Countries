const Countries = require('./models/countries.js')
const FormView = require('./views/form_view.js')
const ResultView = require('./views/result_view.js')


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const formView = new FormView();
  formView.bindEvent();

  const resultView = new ResultView();
  resultView.bindEvent();

  const countries = new Countries();
  countries.getData();




});
