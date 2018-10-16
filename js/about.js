'use strict';
(function ($) {
    $(document).ready(function () {
        // PROGRESS BAR
        var $progress = $('.about__skills--bar');
        $progress.eq(0).animate({width:"90%"}, 18000);
        $progress.eq(1).animate({width:"95%"}, 19000);
        $progress.eq(2).animate({width:"50%"}, 10000);
        $progress.eq(3).animate({width:"85%"}, 17000);
    });
}) (jQuery);
