/* AI just picks random empty cell; nothing fancy, can be improved though */

var player = 0;
var letter = '';
var turn = '';
var moves = 0;
var score = {"X": 0, "O": 0};
var SIZE = 3;

var wins = [7, 56, 448, 73, 146, 292, 273, 84];
var finish = false;
var AIsMove = false;

$(document).ready(function() {  
  $('.options').click(function() {
    var id = $(this).attr("id");
    if (id === '1p-opt') {
      player = 1;
    } else if (id === '2p-opt') {
      player = 2;
    } else if (id === 'x-opt') {
      letter = 'X';
    } else if (id === 'o-opt') {
      letter = 'O';
    } else {
      restart();
      return;
    }
    
    turn = letter;
    
    if (player > 0 && letter === '') {
      $('#player-options').hide();
      $('#letter-options').show();
    } else if (player > 0 && letter !== '') {
      $('#player-options').hide();
      $('#letter-options').hide();
      $('#restartDiv').show();
      $('#board').show();
    }
  });
  
  restart = function () {
    player = 0;
    letter = '';
    turn = '';
    moves = 0;
    score = {"X": 0, "O": 0};
    SIZE = 3;
    
    AIsMove = false;
    finish = false;
    
    $('#player-options').show();
    $('#letter-options').hide();
    $('#resultDiv').hide();
    $('#restartDiv').hide();
    $('.cell').html('');
    $('#board').hide();
  };
  
  reset = function() {
    turn = letter;
    moves = 0;
    score = {"X": 0, "O": 0};
    SIZE = 3;   
    
    AIsMove = false;
    finish = false;
    
    setTimeout(function() {
      $('#message').html('');
      $('.cell').html('');      
    }, 2000);
  }
  
  win = function (score) {
    for (var i = 0; i < wins.length; i += 1) {
      if ((wins[i] & score) === wins[i]) {
        return true;
      }
    }
    
    return false;
  };
  
  check = function() {
    if (win(score[turn])) {
       $('#resultDiv').show();
       $('#message').html(turn + " wins!");      
       finish = true;              
    } else if (moves === SIZE * SIZE) {
       $('#resultDiv').show();
       $('#message').html("It's a draw.");              
       finish = true;              
    }
    
    return finish;
  }
    
  set = function() {
    if ($.trim($(this).html()) !== '' || (player == 1 && AIsMove)) {
      return;
    }
        
    $(this).html(turn);
    moves += 1;
    score[turn] += parseInt($(this).data("indicator"));    
        
    if (!check()) {
      turn = turn === "X" ? "O" : "X";
    
      // vs AI  
      if (player == 1) {
        var madeMove = false;
        AIsMove = true;
        setTimeout(function() {
          while (!madeMove) {
            var randomNum = Math.floor((Math.random()*9));

            if ($.trim($('#c' + randomNum).html()) === '' && randomNum > 0) {          
              $('#c' + randomNum).html(turn);
              moves += 1;
              score[turn] += parseInt($('#c' + randomNum).data("indicator"));           

              if (!check()) {
                turn = turn === "X" ? "O" : "X";
                AIsMove = false;
                madeMove = true;
              } else {
                reset();                
                madeMove = true;
              }
            }            
          }
        }, 2000);
      }    
    } else {
      reset();
    }
  };
  
  $('.cell').click(set);
});
