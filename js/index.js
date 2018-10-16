'use strict';
(function ($) {
    // console.log('The script for INDEX page was loaded!');
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
    });

    $('#main').load('home.html');

    $('.header__navigation--link').click(function (e) {
        e.preventDefault();

        var valueLink = $(this).attr('href');
        $('#main').load(valueLink);
        $('.header__navigation--link').removeClass('header__navigation--active');
        this.classList.add('header__navigation--active');
    });


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
                        $('span.found').not(':last').attr({title: 'Click here to go to the next found element'}).click(function() {
                            $('body, html').animate({scrollTop: $('span.found:gt('+$(this).attr('n')+'):first').offset().top-paddingTop}, scrollSpeed);
                        });
                        $('span.found:last').attr({title: 'Click here to go to the search form'}).click(function(){
                            $('body, html').animate({scrollTop: $('.header__navigation--input').offset().top-paddingTop}, scrollSpeed);
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
