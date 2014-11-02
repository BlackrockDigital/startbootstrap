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
                        var f = $('.cta-mail').outerHeight(true),
                            g = $('footer').outerHeight(true);
                        return this.bottom = f + g
                    }
                }
            })
        }, 100), setTimeout(function() {
            a(".bs-top").affix()
        }, 100)
    })
}(jQuery);
