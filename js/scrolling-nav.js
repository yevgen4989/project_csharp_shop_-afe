$(window).scroll(function() {
    if ($(".header-menu-logo").offset().top > 50) {
        $(".navbar-fixed-top").addClass("nav-scroll");
    } else {
        $(".navbar-fixed-top").removeClass("nav-scroll");
    }
});