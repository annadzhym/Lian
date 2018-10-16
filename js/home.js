'use strict';
(function ($) {
    // SLIDER
    $(document).ready(function() {
        $('.home__carousel').slick({
            initialSlide: 1,
            dots: true,
            speed: 800,
            fade: true,
            slide: 'div',
            arrows: true,
            prevArrow: '.carousel__arrow--prev',
            nextArrow: '.carousel__arrow--next',
            dotsClass: 'slick-dots carousel__dots',

        });
        $('.home__carousel--slider').click(function next() {
            $('.home__carousel').slick('slickNext');
        });
    });

    // ISOTOPE
    $(document).ready(function () {
        var $pictures = $('.home__isotope').isotope({
            itemSelector: '.home__isotope--el',
            masonry: {
                gutter: 45,
                horizontalOrder: true
            }
        });

        $('.home__group').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $pictures.isotope({ filter: filterValue });
            $('.home__group').find('.home__group--active').removeClass('home__group--active');
            $(this).addClass('home__group--active');
        });
        function getItemElement() {
            var $item = $('<div class="home__isotope--el wordpress" ' +
                'data-big="./img/home/img6.png"><img src="./img/home/img6.png">' +
                '<div class="mask"><span class="mask__zoom">+</span>\n' +
                '</div></div>');
            return $item;
        };
        function getItemElement1() {
            var $item1 = $('<div class="home__isotope--el mobile-app" ' +
                'data-big="./img/home/img4.png"><img src="./img/home/img4.png"><div class="mask">\n' +
                '<span class="mask__zoom">+</span>\n' +
                '</div></div>');
            return $item1;
        };
        function getItemElement2() {
            var $item2 = $('<div class="home__isotope--el webdesign" ' +
                'data-big="./img/home/img2.png"><img src="./img/home/img2.png"><div class="mask">\n' +
                '<span class="mask__zoom">+</span>\n' +
                '</div></div>');
            return $item2;
        };
        $('.home__isotope--append').on( 'click', function() {
            var $items = getItemElement().add( getItemElement1() ).add( getItemElement2() );
            $pictures.append( $items )
                .isotope( 'appended', $items );
            console.log('Added 3 images');
            $('.home__isotope--el').pan();
        });
        $('.home__isotope--el').pan();
    });

})(jQuery);