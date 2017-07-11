$('body').scrollspy({ target: '.sb-sidebar>.sticky-top>ul' })

// Modal Customiaztion for Search Modal

$(".modal-search").on('show.bs.modal', function() {
    setTimeout(function() {
        $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
    }, 0);
});
$(".modal-search").on('hidden.bs.modal', function() {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
});
$('#searchModal').on('shown.bs.modal', function() {
    $('#search_box').focus();
})

// Configure the Search Plugin

$(function() {
    $('#search-query').lunrSearch({
        indexUrl: '/js/index.json', // url for the .json file containing search index data
        results: '#search-results', // selector for containing search results element
        template: '#search-results-template', // selector for Mustache.js template
        titleMsg: '<h2>Search results<h2>', // message attached in front of results (can be empty)
        emptyMsg: '<p>Nothing found.</p>' // shown message if search returns no results
    });
});

// Twitter Widget
! function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, "script", "twitter-wjs");

// Google Analytics Tracking Script
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-38417733-17', 'startbootstrap.com');
ga('send', 'pageview');
