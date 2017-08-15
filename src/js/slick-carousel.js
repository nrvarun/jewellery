'use strict';

let $ = require('jQuery');

$(document).ready(function () {
  $('.sl-collections__slider').slick({
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      centerMode: true
    });
});
