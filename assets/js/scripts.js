$(function() {
  $('[data-toggle="tooltip"]').tooltip()

  // Play initial animations on page load.
  $(window).on('load', function() {
    window.setTimeout(function() {
      $('body').removeClass('is-preload');
    }, 100);
  });

});

$(function() {
  $('.lazy').Lazy();
});

$('body').scrollspy({
    target: '.resources-sidebar>.sticky-top>ul'
  })

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

// Twitch Widget
(function() {

  var user_name, api_key, twitch_widget;

  user_name = "startbootstrap";
  api_key = "5j0r5b7qb7kro03fvka3o8kbq262wwm";
  twitch_widget = $("#twitch-widget");

  twitch_widget.attr("href", "https://twitch.tv/" + user_name);

  $.getJSON('https://api.twitch.tv/kraken/streams/' + user_name + '?client_id=' + api_key + '&callback=?', function(data) {
    if (data.stream) {
      twitch_widget.html('<div class="py-3 bg-twitch shadow-sm"><div class="container d-flex align-items-center justify-content-center"><span class="badge text-uppercase mr-3 text-white"><i class="fas fa-circle fa-sm text-danger"></i> Live</span> Start Bootstrap is live on Twitch.tv! Click here to watch and to chat with the developer!</div></div>');
    } else {
      twitch_widget.html('');
    }
  });

})();
