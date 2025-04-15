$(document).ready(function() {

    $('.land-newfroz-welcome-btn a, .land-newfroz-menu-item a').click(function(e) {
        var curBlock = $($(this).attr('href'));
        if (curBlock.length == 1) {
            var curOffset = 20;
            if ($('header').length == 1) {
                curOffset = $('header').outerHeight() + 20;
            }
            $('html, body').animate({'scrollTop': curBlock.offset().top - curOffset});
        }
        e.preventDefault();
    });

    $('.land-newfroz-ctrl-left').on('mouseenter touchstart', function() {
        $('.land-newfroz-ctrl').removeClass('land-newfroz-ctrl-super');
        $('.land-newfroz-ctrl').addClass('land-newfroz-ctrl-eco');
    });

    $('.land-newfroz-ctrl-left').on('mouseleave', function() {
        $('.land-newfroz-ctrl').removeClass('land-newfroz-ctrl-eco');
    });

    $('.land-newfroz-ctrl-right').on('mouseenter touchstart', function() {
        $('.land-newfroz-ctrl').removeClass('land-newfroz-ctrl-eco');
        $('.land-newfroz-ctrl').addClass('land-newfroz-ctrl-super');
    });

    $('.land-newfroz-ctrl-right').on('mouseleave', function() {
        $('.land-newfroz-ctrl').removeClass('land-newfroz-ctrl-super');
    });

    $('.land-newfroz-design-point').on('click', function() {
        var curPoint = $(this);
        if (curPoint.hasClass('active')) {
            curPoint.removeClass('active');
            $('.land-newfroz-design-popup-mobile').html('');
        } else {
            $('.land-newfroz-design-point.active').removeClass('active');
            curPoint.addClass('active');
            $('.land-newfroz-design-popup-mobile').html(curPoint.find('.land-newfroz-design-point-popup').html());
        }
    });

    new Swiper('.land-newfroz-catalogue-list .swiper', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        navigation: {
            nextEl: $('.land-newfroz-catalogue-list .swiper-button-next')[0],
            prevEl: $('.land-newfroz-catalogue-list .swiper-button-prev')[0],
        },
        pagination: {
            el: $('.land-newfroz-catalogue-list .swiper-pagination')[0],
            clickable: true,
        },
        breakpoints: {
            1168: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
        }
    });

    if ($('header').length == 1) {
        $('.land-newfroz-wrapper').addClass('full');
    }
});