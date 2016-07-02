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

  function showBooksSection(section) {
    var $activeBooks = $('.books-container.active'),
      $booksSection = $('.books-container[data-books-section='+ section +']');

    if ($activeBooks.data('books-section') === section) {
      return;
    }

    $activeBooks.removeClass('active');
    $booksSection.addClass('active');
      $('[data-show-book-section='+ section +']').addClass('active');
  }

  $('[data-show-book-section]').on('click', function(e) {
    var $t = $(this),
      section = $t.data('show-book-section');

    e.preventDefault();

    if ($t.hasClass('active')) {
      return;
    }

    $('.active[data-show-book-section]').removeClass('active');
    showBooksSection(section);
  });

  $('[data-smooth-scroll]').on('click', function(e) {
    var $t = $(this),
      id = $t.attr('href'),
      $elem = $(id);

    if (!$elem.length) {
      return;
    }

    $('body, html').animate({ scrollTop: $elem.offset().top });
    e.preventDefault();
  });

  $(window).on('resize', updateHomeHeight);

  updateHomeHeight();
  initHomeBackground();
  showBooksSection('adult');
});
