$(document).ready(function() {
  var steps = 1, score = 0, mode = 0, counter = 0, count = 0;
  var gameArray = [], userArray = [], computerArray = [], circleIDs = [1, 2, 3, 4];
  var gameStarted = false;

  var interval, random;
  
  function end() {
		clearInterval(interval);
		deactivate();
		$("#title").html("Simon Game");		
    $('.circle').html('');
    
    gameStarted = false;
    $('#start').html('Start');
    
		gameArray = []; userArray = []; computerArray = []; steps = 1; counter = 0; count = 0; mode = 0; score = 0;
	}
  
  function deactivate () {
    $("#circle-" + random).removeClass("circle-" + random + "-activated");
	}

	function activate () {    
		$("#circle-" + random).addClass("circle-" + random + "-activated");
	}

	function triggerClick () {
		$("#circle-" + random).trigger('click', function (e) {});    
	}
  
	function setMode () {
		mode = 1;
		$("#title").html("Your Turn");
    $(".circle").prop('disabled', false);
    $('.circle').css('cursor', 'pointer');
	}
  
  function timeout () {
    $(".circle").prop('disabled', true);
    $('.circle').html('');    
		if (steps > 20) {
			alert ("Victory! Congratulations");
		}
		
		$("#title").html("Computer's Turn");
		$("#steps").html(steps);
		$("#score").html(score);
		mode = 0;
		gameArray = computerArray;
		computerArray = [];
		userArray = [];

		interval = setInterval(function () {
			count = 0;
			deactivate();
			random = Math.floor(Math.random() * circleIDs.length) + 1;      
      
			if (gameArray[counter] !== undefined) {
				random = gameArray[counter];
			}
			setTimeout(triggerClick, 500);
			setTimeout(activate, 500);
			counter++;

			if (counter == steps) {
				clearInterval(interval);
				setTimeout(deactivate, 750);
				count = 0;
				setTimeout(setMode, 1000);
			}
		}, 750);    
	}
  
  $(".circle").click(function (e) {    
		var circleID = e.currentTarget.id.substr(7);
    
		function playAudio () {
			var audio = document.getElementById("sound-" + circleID);		
			audio.play();
		}
		playAudio();
    
		if (e.isTrigger) {
			computerArray.push(circleID);
		} else if (mode == 1) {
			userArray.push(circleID);
      $('.circle').html('');
      $('#circle-' + circleID).html('X');
      setTimeout(function() {
         $('#circle-' + circleID).html('');
      }, 500);     
			if (computerArray[count] !== userArray[count]) {
				alert('Ouch you lose!');
				end();
			}
			else {
        console.log('Success');
      }
			count++;
			if (count == computerArray.length) {       
				mode = 0;
				counter = 0;
				steps++;
				score++;
				setTimeout(timeout, 400);
				$("#score").html(score);
			}
		}
	});
    
  $('#start').click(function() {
    if (!gameStarted) {
      gameStarted = true;
      $('#start').html('Reset');
      timeout();
    } else {
      gameStarted = false;
      $('#start').html('Start');
      end();
    }
  });
});
