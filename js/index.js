'use strict';
(function ($) {

    window.onscroll = function() {makeHeader()};

    var header = document.querySelector("header");
    var sticky = header.offsetTop;

    function makeHeader() {
        if (window.pageYOffset > sticky) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };

    $('.header__navigation--menu').click(function () {
        $('.header__navigation--mobile').toggleClass('show__menu')
    });

    $('.header__navigation--search').click(function () {
        $('.header__navigation--link').toggleClass('hide');
        $('.header__search, .header__navigation--input').toggleClass('show__menu');
        $('.header__navigation--input').focus();
        $('.header__navigation--results').toggleClass('hide');
        $(document).keyup(function(e) {
            if ($('.header__navigation--link').hasClass('hide') && e.keyCode === 27) {
                $('.header__search, .header__navigation--input').removeClass('show__menu');
                $('.header__navigation--link').removeClass('hide');
                var inputArea =  $('.header__navigation--input');
                inputArea.val('');
                $('.header__navigation--results').toggleClass('hide');
                console.log('The search form was hidden by pressing Esc');
            }
        });
    });


    $('#main').load('home.html');

    $('.header__navigation--link').click(function (e) {
        e.preventDefault();
        var valueLink = $(this).attr('href');
        $('#main').load(valueLink);
        $('.header__navigation--link').removeClass('header__navigation--active');
        this.classList.add('header__navigation--active');
    });

    // $('.error__link').click(function (e) {
    //     e.preventDefault();
    //     var value = $(this).attr('href');
    //     $('#main').load(value);
    // });




    function search() {
        $(document).ready(function(){
            var minLength = 3;
            var paddingTop = 30;
            var scrollSpeed = 200;
            var keyInterval = 1000;
            var term = '';
            var n = 0;
            var timeKeyup = 0;
            var timeSearch = 0;

            $('body').on('click', '#goNext', function(){
                $('body, html').animate({scrollTop: $('span.found:first').offset().top-paddingTop}, scrollSpeed);
            });
            function doSearch() {
                term = $('.header__navigation--input').val();
                $('span.found').each(function(){
                    $(this).after($(this).html()).remove();
                });

                $('main').each(function(){
                    $(this).html($(this).html().replace(new RegExp(term, 'ig'), '<span class="found">$&</span>'));
                    n = $('span.found').length;
                    console.log('n = '+ n);
                    if (n === 0)
                        $('.header__navigation--results').html('Nothing found');
                    else
                        $('.header__navigation--results').html('Results found: '+ n +'. <span class="next" id="goNext">Go to</span>');
                    if (n > 1) {
                        $('span.found').each(function(i){
                            var i = 0;
                            $(this).attr('n', i++);
                        });
                    }
                });
            }

            $('.header__navigation--input').keyup(function(){
                var d1 = new Date();
                timeKeyup = d1.getTime();
                if ($('.header__navigation--input').val()!= term)
                    if ($('.header__navigation--input').val().length >= minLength) {
                        setTimeout(function(){
                            var d2 = new Date();
                            timeSearch = d2.getTime();
                            if (timeSearch - timeKeyup >= keyInterval)
                                doSearch();
                        }, keyInterval);
                    } else
                        $('.header__navigation--results').html('&nbsp');
            });

            // if (window.location.hash != '') {
            //     var t = window.location.hash.substr(1, 50);
            //     $('.header__navigation--input').val(t).keyup();
            //     $('#goNext').click();
            // }
        });
    };
    search();

})(jQuery);
