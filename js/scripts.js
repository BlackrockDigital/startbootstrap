/*!
 * Modified version of the JavaScript for Bootstrap's docs (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 * Used for the Start Bootstrap Resources Page Menu Bar (http://startbootstrap.com/bootstrap-resources/).
 */
! function(a) {
    a(function() {
        if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
            var b = document.createElement("style");
            b.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")), document.querySelector("head").appendChild(b)
        } {
            var c = a(window),
                d = a(document.body);
            a(".navbar").outerHeight(!0) + 10
        }
        d.scrollspy({
            target: ".bs-docs-sidebar"
        }), c.on("load", function() {
            d.scrollspy("refresh")
        }), a(".bs-docs-container [href=#]").click(function(a) {
            a.preventDefault()
        }), setTimeout(function() {
            var b = a(".bs-docs-sidebar");
            b.affix({
                offset: {
                    top: function() {
                        var c = b.offset().top,
                            d = parseInt(b.children(0).css("margin-top"), 10),
                            e = a(".bs-docs-nav").height();
                        return this.top = c - e - d
                    },
                    bottom: function() {
                        var f = $('footer').outerHeight(true);
                        return this.bottom = f + 30
                    }
                }
            })
        }, 100), setTimeout(function() {
            a(".bs-top").affix()
        }, 100)
    })
}(jQuery);

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
