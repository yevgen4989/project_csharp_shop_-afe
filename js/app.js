"use strict";
$(document).foundation();

$('.menu a').on('click', function (e) {
    e.preventDefault();
});

$(function () {
    "use strict";



    $(window).scroll(function() {
        if ($(".header-menu-logo").offset().top > 50) {
            $(".navbar-fixed-top").addClass("nav-scroll");
        } else {
            $(".navbar-fixed-top").removeClass("nav-scroll");
        }
    });


    $(function () {
        var H;
        var menuSubstrate = $('.header-menu-logo');
        var linerHeight = menuSubstrate.outerHeight();

        if ($("div").is(".header-menu-logo")) {
            H = $(".header-menu-logo").outerHeight() / 2;
        } else {
            H = 0;
        }

        jQuery(function ($) {
            $(window).scroll(function () {
                linerActivity();
            });
        });

        function linerActivity() {
            if ($(window).scrollTop() > 1) {
                $('.header-menu-logo').addClass('header-menu-fixed');
            } else if ($(window).scrollTop() < 1) {
                $('.header-menu-logo').removeClass('header-menu-fixed');
            }
        }

        $(document).ready(function () {
            linerActivity();
        }); //end of .liner activity


    });


    $(document).ready(function () {
        $("#back-top").hide();
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 120) {
                    $('#back-top').fadeIn();
                } else {
                    $('#back-top').fadeOut();
                }
            });
            $('#back-top a').click(function () {
                $('body,html').animate({scrollTop: 0}, 800);
                return false;
            });
        });
    });

    $(document).on('ready', function () {

        $('.carouser-staff').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3500,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });



        $('.vertical-center').slick({
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            centerMode: true,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 3500,
        });
        $(".lazy").slick({
            lazyLoad: 'ondemand',
            infinite: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 3500,
            arrows: true,
            fade: true,
            speed: 350,
            centerMode: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1050,
                    settings: {
                        arrows: false,
                    }
                }
            ]

        });

    });


});