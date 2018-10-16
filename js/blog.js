'use strict';
(function ($) {
    $(document).ready(function () {
        $('.blog__singlepost').hide();
        $('.blog__post--img').click(function () {
            $('.blog__content').hide();
            $('.blog__singlepost').show();
        });
        $('.single__text--button').click(function () {
            $('.blog__singlepost').hide();
            $('.blog__content').show();
        });
        $('.blog__aside--tags').click(function (e) {
            e.preventDefault();
            $(this).toggleClass('blog__aside--tagsBlack');
        });
        $('.post__info--like').click(function () {
            $(this).addClass('blog__post--red');
            $('.js-output').html(function(i, val) {
                return val*1+1
            });
        });

        $('.blog__aside--heading').click(function (e) {
            e.preventDefault();
        });



        function showComment() {
            var author = $('.js-comment__author').val();
            var email = $('.js-comment__email').val();
            var website = $('.js-comment__website').val();
            var message = $('.js-comment__message').val();

            var comment = $('<div class="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2 single__comment">\n' +
                '<div class="single__comment--flex">\n' +
                '<span class="single__comment--author"> ' + author +' </span>\n' +
                '<span class="single__comment--email"> '+ email +' </span>\n' +
                '<span class="single__comment--website"> '+ website +' </span>\n' +
                '</div>\n' +
                '<p class="single__comment--message"> '+ message +' </p>\n' +
                ' </div>');
            return comment;
        };
        $('.single__fieldset--button').click(function () {
            var comment = showComment();
            alert('Please wait, your comment is publishing...');
            comment.appendTo('.js-comment__append');
        });
    });

})(jQuery);