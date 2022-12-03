$(document).ready(function () {
    $('#barBtn').click(function () {
        $('.header-navbar__menu').slideToggle();
    });

    $('#homepage').mouseenter(function () {
        $('#homePageDropdown').slideDown();
    });

    $('#homepage').mouseleave(function () {
        $('#homePageDropdown').slideUp();
    });

    $('#homepageSubmenu').mouseenter(function () {
        $('#homePageDropdownSubmenu').slideDown();
    });

    $('#homepageSubmenu').mouseleave(function () {
        $('#homePageDropdownSubmenu').slideUp();
    });

    $('#pages').mouseenter(function () {
        $('#pagesDropdown').slideDown();
    });

    $('#pages').mouseleave(function () {
        $('#pagesDropdown').slideUp();
    });

    $('#pagesSubmenu').mouseenter(function () {
        $('#pagesDropdownSubmenu').slideDown();
    });

    $('#pagesSubmenu').mouseleave(function () {
        $('#pagesDropdownSubmenu').slideUp();
    });

    window.addEventListener('scroll', function () {
        const scrollTop = document.documentElement.scrollTop;

        if (scrollTop > 1) {

            $('#whiteLogo').css('display', 'none');

            $('#blackLogo').css('display', 'inline-block');

            $('.header-navbar__menu__items span').css('color', 'black');

            $('.header-navbar').css('background', 'white');

            $('.active').css('color', '#28ABE3');

        } else {

            $('#whiteLogo').css('display', 'inline-block');

            $('#blackLogo').css('display', 'none');

            $('.header-navbar__menu__items span').css('color', 'rgba(255, 255, 255, 0.8)');

            $('.header-navbar').css('background', 'transparent');

            $('.active').css('color', '#28ABE3');

        };
    });

    $('#headerSlider').slick({
        autoplay: true,
        autoplaySpeed: 8000,
        prevArrow: $('#prevBtn'),
        nextArrow: $('#nextBtn'),
        speed: 500,
        pauseOnFocus: false,
        pauseOnHover: false
    });

    $('#sliderBtn').click(function () {
        $('.header-slider__texts').css('display', 'none');
        $('.header-slider__texts').fadeIn(700);
    });

    function counter() {
        var oTop;

        if ($('.counter').length !== 0) {
            oTop = $('.counter').offset().top - window.innerHeight;
        }

        $('.counter').each(function () {
            var $this = $(this),

                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()

            }).animate({
                countNum: countTo
            }, {
                duration: 1000,

                easing: 'swing',

                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            });
        });
    };

    $(window).scroll(function () { 
        var scroll = $(window).scrollTop();

        if (scroll > 2500) {
            counter();
        };
    });

    $('.main-comments__slider').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });
});