// numberGenerator
jQuery(document).ready(function( $ ) {
    $('.counter').counterUp({
        delay: 20,
        time: 1000 
    });
    });
// owlCarousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
    }
})