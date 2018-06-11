$(document).ready(function() {
 'use strict';
 /*==========================================
 Preloader
 ===========================================*/
 if ($('.preloader').length) {
  var $loader = $('.preloader');
  $(window).load(function() {
   $('.animation').delay(1000).fadeOut(300, function() {
    $loader.fadeOut(600);
   });
  });
 }
 
/* hero carousel*/
var $headerHeight = $('.navbar-default').height();
var $item = $('.carousel .item'); 
var $wHeight = $(window).height()-$headerHeight;
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height()-$headerHeight;
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 6000,
  pause: "false"
});

 /*==========================================
     I S O T O P E
===========================================*/
 if ($('.portfolio-items').length) {
  var $container = $('.portfolio-items').isotope({
   itemSelector: '.portfolio-item',
   masonry: {
    columnWidth: '.portfolio-item'
   }
  });
  // filter items when filter link is clicked
  $('.portfolio-filter a').on('click', function() {
   var selector = $(this).attr('data-filter');
   $container.isotope({
    filter: selector
   });
   return false;
  });

  $('.portfolio-filter a').on('click', function() {
   $('.portfolio-filter').find('.current').removeClass('current');
   $(this).parent().addClass('current');
  });
 }
 /*==========================================
  Magnific popup
 ===========================================*/
 if ($('.mfp-image').length) {
  $('.mfp-image').magnificPopup({
   type: 'image',
   removalDelay: 300
  });
 }
/*==========================================
 	owl carousel
 ===========================================*/
 if ($('#testimonial-carousel').length) {
  $('#testimonial-carousel').owlCarousel({
   loop: true,
   margin: 0,
   items: 1,
   singleItem: true,
   animateOut: 'fadeOutLeft',
   animateIn: 'fadeInDown',
   nav: false
  });
 }
 
/*==========================================
  contact form
 ===========================================*/
 $('#contactform').validate({
  submitHandler: function(form) {
   $.ajax({
    type: "POST",
    url: 'email.php',
    data: $('#contactform').serialize(),
    success: function(msg) {
     if (msg == 'success') {
      $('.alert-success-contact').show('fast');
      $('#contactform')[0].reset();
     } else {
      $('.alert-danger-contact').show('fast');
     }
    }
   });
  }
 });
 
  //back to top start
    var $top = $('.goto-top');
    var $html_body = $("html,body");
    var $window = $(window);
    $top.on('click', function () {
        $html_body.animate({
            scrollTop: 0
        }, 600)
    });
    $window.on('scroll', function () {
        var $offset = $(this).scrollTop();
        if ($offset > 200) {

            $top.fadeIn(1000);
        } else {
            $top.fadeOut(1000);
        }
 }); 
 
 

}); // END function