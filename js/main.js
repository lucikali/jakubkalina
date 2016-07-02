$(document).ready(function(){
  var FRAME_IMAGE_URL = /url\("(http[s]?:[\/\w:\.-]+)"\)/gm;
  var $home = $('#home');

  function updateHomeHeight() {
    var $w = $(window),
      height = $w.height();
    $home.css('height', height);
  }

  function initHomeBackground() {
    var url = $home.css('background-image').replace(FRAME_IMAGE_URL, '$1').trim();
    $home.backstretch(url);
  }

  $(window).on('resize', updateHomeHeight);

  updateHomeHeight();
  initHomeBackground();
});
