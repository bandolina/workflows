var $, fill;

$ = require('jquery');

(fill = function(item) {
  return $('.tagline').append(`${item}`);
})('Creative minds at Development expo');

fill;
