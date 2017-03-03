var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];

$(document).ready(function() {
  getChannelInfo();
  $("#all").css("text-decoration", "none");
  
  $(".selector").click(function() {    
    var status = $(this).attr('id');
    
    if (status === "all") {
      $(".online, .offline").removeClass("hidden");
      $("#all").css("text-decoration", "none");
      $("#online").css("text-decoration", "underline");
      $("#offline").css("text-decoration", "underline");
    } else if (status === "online") {
      $(".online").removeClass("hidden");
      $(".offline").addClass("hidden");
       $("#online").css("text-decoration", "none");
       $("#all").css("text-decoration", "underline");
       $("#offline").css("text-decoration", "underline");
    } else {
      $(".offline").removeClass("hidden");
      $(".online").addClass("hidden");
      $("#offline").css("text-decoration", "none");
      $("#all").css("text-decoration", "underline");
      $("#online").css("text-decoration", "underline");
    }
  });
});

function getChannelInfo() {
  channels.forEach(function(channel) {
    function makeURL(type, name) {
      return 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + name + '?callback=?';
    };
    
    $.getJSON(makeURL("streams", channel), function(data) {
      var game, status;
      
      if (data.stream === null) {
        game = "Offline";
        status = "offline";
      } else if (data.stream === undefined) {
        game = "Account Closed";
        status = "offline";
      } else {
        game = data.stream.game;
        status = "online";
      };
      
      $.getJSON(makeURL("channels", channel), function(data) {
        console.log(data);
        var logo = data.logo != null ? data.logo : "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F",
          name = data.display_name != null ? data.display_name : channel,
          description = status === "online" ? ': ' + data.status : "";
          html = '<div class="row ' + status + '">';
          html += '<div class="col-xs-3 col-sm-2" id="icon"><img src="' + logo + '" class="logo"></div>';
          html += '<div class="col-xs-3 col-sm-2" id="name"><a href="' + data.url + '" target="_blank">' + 
          name + '</a></div>';
          html  += '<div class="col-xs-6 col-sm-8" id="streaming">'+ game + '<span class="hidden-xs">' + 
          description + '</span></div>';
          html += '</div>';
          status === "online" ? $("#channels").prepend(html) : $("#channels").append(html);
      });
    });
  });
}
