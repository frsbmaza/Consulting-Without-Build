jQuery(document).ready(function($) {
    $('#project-slider-init').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('#team-slider-init').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('#testimonial-slider-init').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.counter-number').counterUp({
        delay: 10,
        time: 1000
    });
    $('.toggle-nav').click(function() {
        $('.header-nav').addClass('active');
        $('html').css('overflow', 'hidden');
    });
    $('.close-nav').click(function() {
        $('.header-nav').removeClass('active');
        $('html').css('overflow', 'scroll');
    });

    $('nav li').click(function() {
        $('.header-nav').removeClass('active');
        $('html').css('overflow', 'scroll');
    })
});
