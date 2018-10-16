'use strict';
$( function() {
    var availableTags = [
        "Ut wisi",
        "Lorem",
        "Aliquip",
        "Am emi",
        "construction",
        "engineering",
        "architecture",
        "structural design",
        "civil engineer",
        "industrial",
        "management",
        "mechanical",
        "instagram",
        "Scheme"
    ];
    $('#tags').autocomplete({
        source: availableTags
    });
} );
$(document).ready(function(){
    $('.blog__search--button').click(function(){
        var term = "#";
        var tags = "";
        $('body').removeHighlight();
        if($('#tags').val() != "")
        {
            term += $('#tags').val();
            tags = $('#tags').attr('value');
        }
        $('h6', 'button').highlight(tags);
        location.href = term.toLowerCase();
    });
});
//     $('.blog__isotope').isotope({
//     itemSelector: '.blog__post',
//     masonry: {
//         horizontalOrder: true
//     }
// });



