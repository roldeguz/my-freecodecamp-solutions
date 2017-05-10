$(document).ready(function() {    
  var sessionLength = 25, breakLength = 5, timeRemaining = sessionLength * 60, isSession = true,
      isPaused = true,
      getFormattedTime = function() {
        var m = Math.floor(timeRemaining / 60),
          s = (timeRemaining - m * 60);
        return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
      };
  
  var interval = null;
  
  $('#session_length').text(sessionLength);
  $('#break_length').text(breakLength);
  $('#type').html('pomodoro');
  $('#timer').html(sessionLength + ':00');
  
  $('#dec_session').click(function() {
    var current = parseInt($('#session_length').text());
    
    if (current == 1)
       return false;
    
    current--;
    $('#session_length').text(current);
    
    sessionLength = current;    
    $('#timer').html(sessionLength + ':00');
  });
  
  $('#inc_session').click(function() {
    var current = parseInt($('#session_length').text());        
    
    current++;
    $('#session_length').text(current);
    
    sessionLength = current;    
    $('#timer').html(sessionLength + ':00');
  });
  
  $('#dec_break').click(function() {
    var current = parseInt($('#break_length').text());
    
    if (current == 1)
       return false;
    
    current--;
    breakLength = current;
    $('#break_length').text(breakLength);
  });
  
  $('#inc_break').click(function() {
    var current = parseInt($('#break_length').text());
    
    current++;
    breakLength = current;
    $('#break_length').text(breakLength);
  });
  
  $('#play').click(function() {
    if (isPaused) {
      start();        
    }
  });
  
  $('#stop').click(function() {
    if (!isPaused) {
      pause();
    }
  });
  
  $('#reset').click(function() {
    reset();
  });
  
  var start = function() {
      interval = setInterval(function() {
        if (timeRemaining > 0) {
          timeRemaining--;
          $('#timer').text(getFormattedTime());
        } else
          next();
      }, 1000);
      isPaused = false;
      isSession = !isSession;      
      next();      
  };
  
  var pause = function() {
    isPaused = true;
    clearInterval(interval);
  };
  
  var next = function() {
      if (isSession) {        
        timeRemaining = breakLength * 60;       
        isSession = false;
        $('#type').html('break');
      } else {        
        isSession = true;
        timeRemaining = sessionLength * 60;      
        $('#type').html('session');
      }
  };  
  
  var reset = function () {
    sessionLength = 25; 
    breakLength = 5; 
    timeRemaining = sessionLength * 60;
    isSession = true;
    isPaused = true;
    $('#session_length').text(sessionLength);
    $('#break_length').text(breakLength);
    $('#type').html('pomodoro');
    $('#timer').html(sessionLength + ':00');
    clearInterval(interval);
  }
});
