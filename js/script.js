'use strict';

var output = document.getElementById('greeter-output');
var rounds = document.getElementById('rounds');
var result = document.getElementById('result');
var info = document.getElementById('info');
var ilusion = document.getElementById('ilusion');
var paperButton = document.getElementById('paper-button');
var rockButton = document.getElementById('rock-button');
var scisorsButton = document.getElementById('scisors-button');
var newGame = document.getElementById('new-game');
var randomNumber;
var roundsNumber;
var scoreX = 0;
var scoreY = 0;

// Score Counter \\

function oneUpX(){
  scoreX++;
  result.innerHTML = '<br>' + scoreX + ' - ' + scoreY;
}
function oneUpY(){
	scoreY++;
  result.innerHTML = '<br>' + scoreX + ' - ' + scoreY;
}

// Clear All Info \\

function clear() {
  output.innerHTML= '';
  info.innerHTML= '';
  scoreX = 0;
  scoreY = 0;
  result.innerHTML= '';
}

// Round Downcounter \\

function roundsCountdown(){
  roundsNumber--;
  rounds.innerHTML =  roundsNumber + ' Rounds left';  
  if(roundsNumber === 0) {
    output.innerHTML = '<br> Game over, please press the New Game button!';
    ilusion.classList.add('magic');
    if(scoreX === scoreY) {
    info.innerHTML = '<br> DRAW !!!'; 
  } 
    if(scoreX > scoreY) {
    info.innerHTML = '<br>YOU WON THE ENTIRE GAME !!!'; 
  } 
    if(scoreX < scoreY) {
    info.innerHTML = '<br>YOU LOST THE ENTIRE GAME !!!'; 
  } 
 }
}

// Robo Move \\

function random() {
randomNumber = Math.floor(Math.random() * 3) + 1;
}

// Bio Player Move \\

var playerMove = function(value) {
  if(value === randomNumber) {
    output.innerHTML = '<br> DRAW';
  }
  if(value === 1 && randomNumber === 2) {
    output.innerHTML = '<br> YOU WON: you played PAPER, Robo played ROCK';
    oneUpX();
  }
  if(value === 1 && randomNumber === 3) {
    output.innerHTML = '<br> YOU LOST: you played PAPER, Robo played SCISORS';
     oneUpY();
  }
  if(value === 2 && randomNumber === 3) {
    output.innerHTML = '<br> YOU WON: you played ROCK, Robo played SCISORS';
    oneUpX();
  }
  if(value === 2 && randomNumber === 1) {
    output.innerHTML = '<br> YOU LOST: you played ROCK, Robo played PAPER';
    oneUpY();
  }
  if(value === 3 && randomNumber === 1) {
    output.innerHTML = '<br> YOU WON: you played SCISORS, Robo played PAPER';
    oneUpX();
  }
  if(value === 3 && randomNumber === 2) {
    output.innerHTML = '<br> YOU LOST: you played SCISORS, Robo played ROCK';
    oneUpY();
  }
}

// Buttons \\

paperButton.addEventListener('click', function(){
  var value = 1;
  random();
  playerMove(value);
  roundsCountdown();
});
rockButton.addEventListener('click', function(){  
  var value = 2;
  random();
  playerMove(value);
  roundsCountdown();
});
scisorsButton.addEventListener('click', function(){
	var value = 3;
  random();
  playerMove(value);
  roundsCountdown();
});
newGame.addEventListener('click', function(){
  roundsNumber = window.prompt('Enter number of rounds you want to play :' , '10');
  rounds.innerHTML =  roundsNumber + ' Rounds';
  ilusion.classList.remove('magic');
  clear();
});