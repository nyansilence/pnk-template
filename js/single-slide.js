$(document).ready(function () {
    $('.mod-banner').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        lazyLoad: true,
        dots: false,
        responsive:{
            0:{
                items:1,
                dots: true,
            },
            600:{
                items:1,
                dots: true,
            },
            1000:{
                items:1,
            }
        }
    });
    $('.product').owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        lazyLoad: true,
        dots: false,
        responsive:{
            0:{
                items:1,
                dots: true,
            },
            600:{
                items:2,
                dots: true,
            },
            1000:{
                items:4
            }
        }
    });
    $('.slide-product').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        lazyLoad: true,
        dots: false,
        responsive:{
            0:{
                items:1,
                dots: true,
            },
            600:{
                items:1,
                dots: true,
            },
            1000:{
                items:1
            }
        }
    });
    $('.slide-feedback').owlCarousel({
        items: 3,
        margin:100,
        loop: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        lazyLoad: true,
        dots: false,
        responsive:{
            0:{
             center: true,
             items:1,
             dots: true,
            },
            600:{
             items:1,
             dots: true,
            },
            1000:{
             items:3
            }
        }
    });
//     $('.mdetail_img').owlCarousel({
//         items:1,
//         loop:false,
//         center:true,
//         margin:10,
//         URLhashListener:true,
//         autoplayHoverPause:true,
//         startPosition: 'URLHash'
//     })
//     $('.mcom-img').owlCarousel({
//         items:1,
//         loop:false,
//         center:true,
//         margin:10,
//         URLhashListener:true,
//         autoplayHoverPause:true,
//         startPosition: 'URLHash'
//     });
//     $('.mvideo_img').owlCarousel({
//         items:1,
//         loop:false,
//         center:true,
//         margin:10,
//         URLhashListener:true,
//         autoplayHoverPause:true,
//         startPosition: 'URLHash'
//     });
})
