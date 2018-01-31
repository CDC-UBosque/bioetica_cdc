//= require ../vendor/mediaCheck/js/mediaCheck.js

(function ($) {
  /*
   * Change the default behavior of the Bootstrap menus to display submenus on hover.
   */
  Drupal.behaviors.menuHover = {
    attach: function (context, settings) {
      // we only want this for tablets or bigger devices.
      mediaCheck({
        media: '(min-width: 480px)',
        entry: function() {
          $('ul.nav li.dropdown').hover(function() {
            $(this).find('.dropdown-menu').first().stop(true, true).delay(200).fadeIn(200);
          }, function() {
            $(this).find('.dropdown-menu').first().stop(true, true).delay(200).fadeOut(200);
          });
        }
      });
    }
  };


  $('#myCarousel').carousel({
    interval: 4000
});

// handles the carousel thumbnails
$('[id^=carousel-selector-]').click( function(){
  var id_selector = $(this).attr("id");
  var id = id_selector.substr(id_selector.length -1);
  id = parseInt(id);
  $('#myCarousel').carousel(id);
  $('[id^=carousel-selector-]').removeClass('selected');
  $(this).addClass('selected');
});

// when the carousel slides, auto update
$('#myCarousel').on('slid', function (e) {
  var id = $('.item.active').data('slide-number');
  id = parseInt(id);
  $('[id^=carousel-selector-]').removeClass('selected');
  $('[id=carousel-selector-'+id+']').addClass('selected');
});

})(jQuery);

