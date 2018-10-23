'use strict';
(function ($) {
    $(document).ready(function () {
        //Clear fields function
        function clearAll() {
            $('.js-name').val('');
            $('.js-email').val('');
            $('.js-message').val('');
            // var inputArea =  $('.contact__form--inputs');
            // inputArea.val('');
        }

//Store Data
        $(".js-button").click(function(e) {
            var name = $('.js-name').val();
            var email = $('.js-email').val();
            var message = $('.js-message').val();

            //Check if Key or Value is empty
            if ($.trim(name) == '' || $.trim(email) == ''|| $.trim(message) == '') {
                $('.js-notice').text('Please fill the form');
            }

            //If not empty then store data
            else {
                localStorage.setItem('Author', name);
                localStorage.setItem('Address', email);
                localStorage.setItem('Message', message);
                clearAll();
                $('.js-notice').text(
                    'Data saved. ' + name +
                    ' thank you for your message. We will contact you via address '
                    + email + ' as soon as possible.'
                );
            }
        });

        // MAP
        var elMap = $('.contact__map')[0];
        var place = {lat: 40.6722643, lng: -73.8350836};
        var mymap = new google.maps.Map(elMap, {
            zoom: 15,
            center: place,
        });
        var marker = new google.maps.Marker({
            position: place,
            map: mymap,
            // icon: "./img/favicon.png",
        });
        var info = '<div class="contact__map--infowindow">' +
            '<div class="contact__map--text contact__map--title">MULTIX BIG WORDPRESS THEME</div>' +
            '<div class="contact__map--text contact__map--address">110-00 Rockaway Blvd ' +
            '<br> South Ozone Park, NY 11420</div>' +
            '</div>';
        var infowindow = new google.maps.InfoWindow({
            content: info
        });
        infowindow.open(mymap, marker);
    });
})(jQuery);