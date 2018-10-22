'use strict';
(function ($) {
    $(document).ready(function () {
        // PROGRESS BAR
        var $progress = $('.about__skills--bar');
        $progress.eq(0).animate({width:"90%"}, 7000);
        $progress.eq(1).animate({width:"95%"}, 7000);
        $progress.eq(2).animate({width:"50%"}, 7000);
        $progress.eq(3).animate({width:"85%"}, 7000);
        $('.about__skills--number').delay(7000).fadeIn(1500);

    });
}) (jQuery);
