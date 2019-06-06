"use strict";
$(document).foundation();

$('.menu a').on('click', function (e) {
    e.preventDefault();
});

$(function () {
    "use strict";


    $(function () {
        var H;
        var menuSubstrate = $('.liner');
        var linerHeight = menuSubstrate.outerHeight();

        if ($("div").is(".track")) {
            H = $(".track").outerHeight() - $(".header").outerHeight();
        } else {
            H = 0;
        }

        jQuery(function ($) {
            $(window).scroll(function () {
                linerActivity();
            });
        });

        function linerActivity() {
            if ($(window).scrollTop() > H) {
                $('.liner').addClass('liner_fixed');
                $('.liner-fix').height(linerHeight);
                menuSubstrate.css({
                    'height': $('.liner').outerHeight()
                });
            } else if ($(window).scrollTop() < H) {
                $('.liner-fix').height(0);
                $('.liner').removeClass('liner_fixed');
                menuSubstrate.css('height', 'auto');
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
        var h = $('.info-about').height();
        document.querySelector("#myGallery").style.height = h + "px";

        var h_img = $('.img-reservation').innerHeight();
        var h_form = $('.reservation-block').innerHeight();
        var h_for_form_1 = (h_img - h_form) / 2;
        document.querySelector("#reservation-block-id").style.padding = h_for_form_1 + "px" + " 7.5%";

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
            autoplaySpeed: 1500000,
        });
        $(".lazy").slick({
            lazyLoad: 'ondemand',
            infinite: true,
            dots: false,
            // autoplay: true,
            // autoplaySpeed: 3000,
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