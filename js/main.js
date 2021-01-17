$(document).ready(function(){

    /* ==== RESPONSIVE MENU ==== */
    $('#menu').slicknav();

    /* ==== COUNTER PLUGIN ==== */
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

    /* ==== SLIDER PLUGIN ==== */
    $('.testimonial-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.test-img-active'
      });
      $('.test-img-active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-active',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        arrows: false
      });

    /* ==== QWL CAROUSEL PLUGIN ==== */
      $('.brand-active').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

});
    

    


/* 

(function ($) {
    "use strict";

    // ==== DATA BACKGROUND
    $(["data-background"]).each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })

})(jQuery);


$(document).ready(function(){
     // ==== DATA BACKGROUND
     $(["data-background"]).each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })
});

*/