//Variables
var colors = ['#273B09', '#7B904B', '#474056', '#757083', '#A1674A', '#A2C5AC', '#C76D7E', '#9F8082', '#ADBCA5', '#8C5F66', '#9893DA', '#59A96A'];
var currentQuote = '', currentAuthor = '';

function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(response) {
      var r = JSON.parse(response);      
      currentQuote = r.quote;
      currentAuthor = r.author;
      
      if(inIframe()) {
        $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ~ ' + currentAuthor));
      }
      
      $(".quote-text").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('.quote-text').html('\"' + r.quote + '\"<br />' + '~' + r.author);
      });
      
      var color = Math.floor(Math.random() * colors.length);
      
      $("html body").stop().animate({
        backgroundColor: colors[color],
        color: colors[color]
      }, 500);
      
      $(".button").stop().animate({
        backgroundColor: colors[color]
      }, 500);
      
    }
  });
}

$(document).ready(function() {
  getQuote();
  
  $('#new-quote').click(function() {
    $('.quote-text').html('<i class="fa fa-spinner fa-spin"></i>');
    getQuote();
  });
});
