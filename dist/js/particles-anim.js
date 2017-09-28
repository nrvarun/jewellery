/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

// particlesJS.load('particles-js', 'particlesjs-config.json', function() {
//     console.log('callback - particles.js config loaded');
// });

/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

// $('.sl-custom-made').particleground();

$(document).ready(function() {
    $('.particles').particleground({
      dotColor: '#5cbdaa',
      lineColor: '#5cbdaa'
    });
    $('.sl-custom-made__content').css({
      'margin-top': -($('.intro').height() / 2)
    });
});

// document.addEventListener('DOMContentLoaded', function () {

//     particleground(document.getElementById('particles'), {
//       dotColor: '#5cbdaa',
//       lineColor: '#5cbdaa'
//     });

//     var intro = document.getElementById('intro');
//     intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
    
//   }, false);  