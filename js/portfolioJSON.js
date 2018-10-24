'use strict';
(function ($) {

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

        $('.portfolio__group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            var active = '';
            if (active !== filterValue) {
                $('.portfolio__isotope--el').filter('.' + filterValue).show(800);
                $('.portfolio__isotope--el').filter(':not(.' + filterValue + ')').hide(800);
            }
        });
        $('.portfolio__group--button').on('click', function () {
            $('.portfolio__group').find('.portfolio__group--button').removeClass('portfolio__group--active');
            $(this).addClass('portfolio__group--active');
        });
    $(document).ready(function () {
        showItems(1);
    });

    function showItems(page) {
        var xhr = new XMLHttpRequest;
        xhr.open('GET', 'portfolioJSON.json', true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                var response = JSON.parse(this.responseText);
                var number = 10;
                var startItem = page * number - number;
                var counter = 0;
                var portfolioItems = document.getElementById("posts");
                portfolioItems.innerHTML = '';
                while (counter < number && response[startItem]) {
                    counter++;
                    var string =
                        '<div class="col-xs-4 col-md-4 portfolio__isotope--el ' + response[startItem].class.join(' ') + ' ' + '">\n' +
                        '<img src="' + response[startItem].image + ' ' + '">\n' +
                        '<a href="#" onclick="moreInfo(' + response[startItem].id + ')">\n' +
                        '<div class="mask">\n' +
                        '<span class="mask__zoom" >' + response[startItem].link + '</span>\n' +
                        '</div>\n' +
                        '</a>\n' +
                        ' </div>';

                    portfolioItems.innerHTML = portfolioItems.innerHTML + string;
                    startItem++;
                }
            }
        };
    }

})(jQuery);

function moreInfo(workId) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'portfolioJSON.json', true);
    xhr.send();
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                var works = JSON.parse(this.responseText);
                var info = document.getElementById("extrainfo");
                var work = 0;
                for (var i = 0; i < works.length; i++) {
                    if (works[i].id === workId) {
                        work = works[i]
                    }
                }
                var infoText =
                    // '<div class="details__navigation">\n' +
                    // '                    <div class="container">\n' +
                    // '                        <div class="col-xs-4 col-md-3 details__navigation--prevnext">\n' +
                    // '                            <button class="details__navigation--buttons js-prev"> < previous</button>\n' +
                    // '                            <button class="details__navigation--buttons js-next">next ></button>\n' +
                    // '                        </div>\n' +
                    // '                        <div class="col-xs-3 col-md-3 pull-right">\n' +
                    // '                            <button class="details__navigation--buttons details__navigation--all"><i class="fas fa-ellipsis-v"></i><i class="fas fa-bars"></i> show all</button>\n' +
                    // '                        </div>\n' +
                    // '                    </div>\n' +
                    // '                </div>\n' +
                    '<div class="col-xs-12 col-md-6 details__info">\n' +
                    '<div class="details__info--heading">\n' +
                    '<h4 class="details__info--title">' + work.name +
                    '</h4>\n' +
                    '<span class="details__info--filter">' + work.branding +
                    '</span>\n' +
                    '</div>\n' +
                    '<div class="details__info--content">\n' +
                    '<span class="details__info--date">\n' + work.date +
                    '</span>\n' +
                    '<span class="col-md-offset-2">\n' +
                    '<i class="far fa-heart details__info--like"></i>\n' +
                    '<span class="js-output details__info--likeAmount">\n' + work.likes +
                    '</span> likes\n' +
                    '</span>\n' +
                    '<p class="details__info--text">\n' + work.text +
                    '</p>\n' +
                    '</div>\n' +
                    '<div class="details__info--additional">\n' +
                    '<h5 class="details__info--subtitle">role on project</h5>\n' +
                    '<span class="details__info--explanation js-role">\n' + work.role +
                    '</span>\n' +
                    '<h5 class="details__info--subtitle">tags</h5>\n' +
                    '<span class="details__info--explanation js-tags">\n' + work.tags +
                    '</span>\n' +
                    '</div>\n' +
                    '<div>\n' +
                    '<button class="col-xs-6 col-md-2 details__info--share"><i class="fas fa-share-alt"></i> share</button>\n' +
                    '<div class="col-xs-12 col-md-8 details__social">\n' +
                    '<a href="https://www.facebook.com" class="details__social--img details__social--fb"></a>\n' +
                    '<a href="https://plus.google.com/discover" class="details__social--img details__social--google"></a>\n' +
                    '<a href="https://twitter.com/" class="details__social--img details__social--twitter"></a>\n' +
                    '<a href="https://www.linkedin.com" class="details__social--img details__social--linkedin"></a>\n' +
                    '<a href="https://www.dribbble.com" class="details__social--img details__social--dribbble"></a>\n' +
                    '<a href="https://www.pinterest.com/" class="details__social--img details__social--pinterest"></a>\n' +
                    '<a href="https://www.instagram.com/" class="details__social--img details__social--instagram"></a>\n' +
                    '</div>\n' +
                    '</div>\n' +
                    '</div>\n' +
                    '<div class="col-xs-12 col-md-6 details__info">\n' +
                    '<img class="col-xs-12 col-md-12 details__img--main js-img" alt="img" src="' + work.image + ' ' + '">\n' +
                    '<img class="col-xs-3 col-md-3" alt="img" src="' + work.image + ' ' + '">\n' +
                    '<img class="col-xs-3 col-md-3" alt="img" src="' + work.image + ' ' + '">\n' +
                    '<img class="col-xs-3 col-md-3" alt="img" src="' + work.image + ' ' + '">\n' +
                    '<img class="col-xs-3 col-md-3" alt="img" src="' + work.image + ' ' + '">\n' +
                    '</div>\n' +
                    '</div>';


                info.innerHTML = infoText;


            }
        }

}





