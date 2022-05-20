"use strict";
$(function() {
    
    $(window).scroll(function() {
    
    if($(this).scrollTop() != 0) {
    
    $('#toTop').fadeIn();
    
    } else {
    
    $('#toTop').fadeOut();
    
    }
    
    });
    
    $('#toTop').click(function() {
    
    $('body,html').animate({scrollTop:0},800);
    
    });
    
})
$('.slider__items').slick({
    infinite: true,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: '<div class="slick-next"></div>',
    prevArrow: '<div class="slick-prev"></div>',
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1680,
        settings: {
            dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
});