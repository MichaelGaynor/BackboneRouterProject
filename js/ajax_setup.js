import $ from 'jquery';

const APP_ID = 'UlWlMwzGZkF2edx0N6WeRZz1rVcQRnXGhjK6OtWo';
const API_KEY = '25lqcMABfqdJ9AYp6bTR69sQ1ItsjroJ5n6Cj0R0';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});

