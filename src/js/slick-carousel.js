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

  // Platinum Collections slider
  $('.collection-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1
  });

  // Featured Collections slider
  $('.featured-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1
  });
});
