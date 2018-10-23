'use strict';
(function ($) {
    $(document).ready(function () {
        $('.blog__post--img').hover(
            function () {
                $(this).siblings('div.post__info').fadeOut();
                }, function () {
                $(this).siblings('div.post__info').fadeIn();
            });

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
        function show404() {
            function open() {
                $('.dialog').fadeIn('fast');
            }
            function close() {
                $('.dialog').fadeOut('slow');
            }
            $('.error').click(open);
            $('.dialog__close, .dialog__submit').click(close);
        };
        show404();



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

        //Clear fields function
        function clearAll() {
            $('.single__fieldset--elements').val('');
        }

//Store Data
        $('.js-comment-button').click(function() {
            var author = $('.js-comment__author').val();
            var email = $('.js-comment__email').val();
            var website = $('.js-comment__website').val();
            var message = $('.js-comment__message').val();

            //Check if Key or Value is empty
            if ($.trim(author) == '' || $.trim(email) == ''|| $.trim(website) == '' || $.trim(message) == '') {
                $('.js-comment-notice').text('Please fill the form');
            }

            //If not empty then store data
            else {
                var comment = showComment();
                comment.appendTo('.js-comment__append');
                localStorage.setItem('CommentAuthor', author);
                localStorage.setItem('CommentEmail', email);
                localStorage.setItem('CommentWebsite', website);
                localStorage.setItem('CommentMessage', message);
                clearAll();
                $('.js-comment-notice').text(author + ' your comment is very important for us.'
                );
            }
        });
    });

})(jQuery);