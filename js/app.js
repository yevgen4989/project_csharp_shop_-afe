"use strict";




(function ($) {
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
})(jQuery);