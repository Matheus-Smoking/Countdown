import Countdown from './countdown.js';

const tempoParaONatal = new Countdown('24 December 2019 23:59:59 GMT-0300');
const tempoParaOAnoNovo = new Countdown('31 December 2019 23:59:59 GMT-0300');

setInterval(() => {
  document.querySelector('.natal .days').innerHTML = tempoParaONatal.total.days;
  document.querySelector('.natal .hours').innerHTML = tempoParaONatal.total.hours;
  document.querySelector('.natal .minutes').innerHTML = tempoParaONatal.total.minutes;
  document.querySelector('.natal .seconds').innerHTML = tempoParaONatal.total.seconds;
}, 1000)

setInterval(() => {
  document.querySelector('.novo .days').innerHTML = tempoParaOAnoNovo.total.days;
  document.querySelector('.novo  .hours').innerHTML = tempoParaOAnoNovo.total.hours;
  document.querySelector('.novo  .minutes').innerHTML = tempoParaOAnoNovo.total.minutes;
  document.querySelector('.novo .seconds').innerHTML = tempoParaOAnoNovo.total.seconds;
}, 1000)