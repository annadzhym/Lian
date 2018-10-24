'use strict';
(function ($) {

    // ISOTOPE
    $(document).ready(function () {
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


        function showDetails() {
            $('.portfolio__details').hide();
            $('.portfolio__isotope--el').click(function () {
                $('.portfolio__main').hide();
                $('.portfolio__details').show();
            });
            $('.details__navigation--all').click(function () {
                $('.portfolio__details').hide();
                $('.portfolio__main').show();
            });
        };

        showDetails();

        $('.details__info--like').click(function () {
            $(this).addClass('blog__post--red');
            $('.js-output').html(function(i, val) {
                return val*1+1
            });
        });

        var $images = $('.portfolio__isotope').isotope({
            itemSelector: '.portfolio__isotope--el',
            masonry: {
                gutter: 45,
                horizontalOrder: true
            }
        });

        $images.isotope({ filter: '*' });

        $('.portfolio__group').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $images.isotope({ filter: filterValue });
            $('.portfolio__group').find('.portfolio__group--active').removeClass('portfolio__group--active');
            $(this).addClass('portfolio__group--active');
        });
        function getItemElement() {
            var $item = $('<div class="col-xs-3 portfolio__isotope--el wordpress" ' +
                'data-big="./img/portfolio/img6.png"><img src="./img/home/img6.png">' +
                '<div class="mask"><span class="mask__zoom">MORE</span>\n' +
                '</div></div>');
            return $item;
        };
        function getItemElement1() {
            var $item1 = $('<div class="col-xs-3 portfolio__isotope--el mobile-app" ' +
                'data-big="./img/portfolio/img4.png"><img src="./img/home/img4.png"><div class="mask">\n' +
                '<span class="mask__zoom">MORE</span>\n' +
                '</div></div>');
            return $item1;
        };
        function getItemElement2() {
            var $item2 = $('<div class="col-xs-3 portfolio__isotope--el webdesign" ' +
                'data-big="./img/portfolio/img2.png"><img src="./img/home/img2.png"><div class="mask">\n' +
                '<span class="mask__zoom">MORE</span>\n' +
                '</div></div>');
            return $item2;
        };
        $('.portfolio__isotope--append').on( 'click', function() {
            var $items = getItemElement().add( getItemElement1() ).add( getItemElement2() );
            $images.append( $items )
                .isotope( 'appended', $items );
            showDetails();
            console.log('Added 3 images');
        });
    });

    $('.js-next').click(function () {
        $.ajax({
            url: './data/portfolio.json',
            dataType: "json"
        }).done(function (response) {
            for (var i = 0; i < response.length; i++) {
                $('.details__info--title').text(response[i].name);
                $('.details__info--filter').text(response[i].branding);
                $('.details__info--date').text(response[i].date);
                $('.details__info--likeAmount').text(response[i].likes);
                $('.js-role').text(response[i].role);
                $('.js-tags').text(response[i].tags);
            }
        })
    });
    $('.js-prev').click(function () {
        $.ajax({
            url: './data/portfolio.json',
            dataType: "json"
        }).done(function (response) {
                $('.details__info--title').text(response[2].name);
                $('.details__info--filter').text(response[2].branding);
                $('.details__info--date').text(response[2].date);
                $('.details__info--likeAmount').text(response[2].likes);
                $('.js-role').text(response[2].role);
                $('.js-tags').text(response[2].tags);
        })
    });




})(jQuery);