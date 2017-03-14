

$(".nav-links").click(function deslisarTela(event) {
        var $anchor = $(this);

      $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 1000);     

});
