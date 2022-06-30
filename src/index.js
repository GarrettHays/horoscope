import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GetHoroscope from './horoscope.js';
import Sign from './sign.js';

function clearFields() {
  $('#userMonth').val("");
  $('#userDay').val("");
}

function getElements(response,astro_sign) {
    const horoscope = JSON.parse(response);
    console.log(horoscope);
    $('.showReading').text(`You are a(n) ${astro_sign}, and your daily horoscope is: ${horoscope.description}.`);
}

async function makeApiCall(astro_sign) {
  const response = await GetHoroscope.getHoroscope(astro_sign);
  getElements(response,astro_sign);
}

$(document).ready(function() {
  $('#horiscopeBtn').click(function() {
    let month = $('#userMonth').val();
    let day = $('#userDay').val();
    let astro_sign = Sign.getSign(day,month);
    clearFields();
    makeApiCall(astro_sign);
  });
});