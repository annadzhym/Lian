'use strict';
(function ($) {
    $(document).ready(function () {
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