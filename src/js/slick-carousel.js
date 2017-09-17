'use strict';

let $ = require('jquery');

$(document).ready(function () {
  $('.sl-intro-banner__slider').slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1
    });
  $('.collection-slider').slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1
    });
});
