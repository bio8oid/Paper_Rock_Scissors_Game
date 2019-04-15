


// UPDATED VERSION \\



'use strict'; 
(function(){ 

  window.params = {
   output: document.getElementById('output'),
   rounds: document.getElementById('rounds'),
   result: document.getElementById('result'),
   info: document.getElementById('info'),
   modalWon: document.getElementById('won'),
   ilusion: document.getElementById('ilusion'),
   paperButton: document.getElementById('paper-button'),
   rockButton: document.getElementById('rock-button'),
   scisorsButton: document.getElementById('scisors-button'),
   newGameButton: document.getElementById('new-game'),
   randomNumber: 0,
   roundsNumber: 0,
   total: 1,
   scoreX: 0,
   scoreY: 0,
   paper: 1,
   rock: 2,
   scisors: 3,
   progress: []
 };


// Score Counter \\

function oneUpX(){
  params.scoreX++;
  params.result.innerHTML = '<br>' + params.scoreX + ' - ' + params.scoreY;
}
function oneUpY(){
  params.scoreY++;
  params.result.innerHTML = '<br>' + params.scoreX + ' - ' + params.scoreY;
}
function draw(){
  params.result.innerHTML = '<br>' + params.scoreX + ' - ' + params.scoreY;
}
// Clear All Info \\

function clear() {
  params.output.innerHTML= '';
  params.info.innerHTML= '';
  params.modalWon.innerHTML= '';
  params.scoreX = 0;
  params.scoreY = 0;
  params.total = 1;
  params.result.innerHTML= '';
  params.progress.map = [];
  params.progress = [];
}

// Round Downcounter \\

function roundsCountdown(){
  if(params.roundsNumber == params.scoreX || params.roundsNumber == params.scoreY) {

    params.output.innerHTML = '<br> Game over, please press the New Game button!';
    document.getElementById('won').classList.add('headPop');
    document.getElementById('trigger').click();
   

    params.ilusion.classList.add('magic');
    if(params.scoreX === params.scoreY) {
      params.modalWon.innerHTML = '<br> DRAW !!!'; 
    } 
    if(params.scoreX > params.scoreY) {
      params.modalWon.innerHTML = '<br>YOU WON THE ENTIRE GAME !!!'; 
    } 
    if(params.scoreX < params.scoreY) {
      params.modalWon.innerHTML = '<br>YOU LOST THE ENTIRE GAME !!!'; 
    } 

  }

}

// Total Rounds Counter \\

function total() {

  params.info.innerHTML = '<br>' + params.total++;
}

// Results Table Generator \\




// Robo Move \\

function random() {
  params.randomNumber = Math.floor(Math.random() * 3) + 1;
  
}

// Bio Player Move and Results Assess \\

function playerMove(event) {
  random();
  total();


  var attributeHandler = this.getAttribute("data-move");

  if(attributeHandler === "paper") {
   var value = 1;
 }
 if(attributeHandler === "rock") {
   var value = 2;
 }
 if(attributeHandler === "scisors") {
   var value = 3;
 }

 if(value === params.randomNumber) {
  params.output.innerHTML = '<br> DRAW';
  draw();
  roundsCountdown();  
  document.getElementById('trigger').click();
}
if(value === 1 && params.randomNumber === 2) {
  params.output.innerHTML = 'YOU - WON <br> Robo - Lost';
  oneUpX();
  roundsCountdown();
  document.getElementById('trigger').click();
  push();
}
if(value === 1 && params.randomNumber === 3) {
  params.output.innerHTML =  'YOU - Lost <br> Robo - WON';
  oneUpY();
  roundsCountdown();
  document.getElementById('trigger').click();
  push();
}
if(value === 2 && params.randomNumber === 3) {
  params.output.innerHTML = 'YOU - WON <br> Robo - Lost';
  oneUpX();
  roundsCountdown();
  document.getElementById('trigger').click();
  push();
}
if(value === 2 && params.randomNumber === 1) {
  params.output.innerHTML = 'YOU - Lost <br> Robo - WON';
  oneUpY();
  roundsCountdown();
  document.getElementById('trigger').click();
  push();
}
if(value === 3 && params.randomNumber === 1) {
  params.output.innerHTML = 'YOU - WON <br> Robo - Lost';
  oneUpX();
  roundsCountdown();
  document.getElementById('trigger').click();
  push();
}
if(value === 3 && params.randomNumber === 2) {
  params.output.innerHTML = 'YOU - Lost <br> Robo - WON';
  oneUpY();
  roundsCountdown();
  document.getElementById('trigger').click();
  push();
}


console.log(params.progress);

function push() {

  if(params.randomNumber === 1 ) {
   var Robo = "paper";
 }
 if(params.randomNumber === 2 ) {
   var Robo = "rock";
 }
 if(params.randomNumber === 3 ) {
   var Robo = "scisors";
 }

 params.progress.push(
 {
  "id": 'box1', 
  "title": 'You', 
  "content": '<p><br>' + attributeHandler + '</p>',
},
{
  "id": 'box2',
  "title": 'Robo',
  "content": '<p><br>' + Robo + '</p>',
},
{
  "id": 'box3',
  "title": 'Result',
  "content": '<p>' + params.output.innerHTML + '</p>',
},
{
  "id": 'box4',
  "title": 'Score',
  "content":'<p>' + params.result.innerHTML + '</p>',
},
{
  "id": 'box5',
  "title": 'Round',
  "content":'<p>' + params.info.innerHTML + '</p>',
});
}


  function generate(x) { 
    var div = document.createElement('div'); 
    div.id = x.id;
    div.classList.add('box');
    document.getElementById('table').appendChild(div);
   // header generate
   var header = document.createElement('head');
   var headerContent = document.createTextNode(x.title)
   header.appendChild(headerContent);
   document.getElementById(div.id).appendChild(header);
     // paragraph generate
     div.insertAdjacentHTML('beforeend', x.content);
     
   };
params.progress.map(generate);
console.log(params.progress.map);
params.progress.map = [];
//params.progress = [];
//console.log(params.progress.map);
} 


// Buttons \\

var buttons = document.querySelectorAll('.player-move');
for ( var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", playerMove);
}

params.newGameButton.addEventListener('click', function(){
  params.roundsNumber = window.prompt('Enter SCORE winning the GAME :' , '3');
  params.rounds.innerHTML = ' Score ' + params.roundsNumber + ' wins the GAME !  <br><br>';
  params.ilusion.classList.remove('magic');
  clear();
});


// Modals \\


var showModal = function(event){
  event.preventDefault();
  document.querySelectorAll('#modal-overlay > *').forEach(function(event) {
    event.classList.remove('show');
  })
  document.querySelector('#modal-overlay').classList.add('show');
  var argValue = this.getAttribute('href');
  document.querySelector(argValue).classList.add('show');
}

var modalLinks = document.querySelectorAll('.show-modal');
for(var i = 0; i < modalLinks.length; i++){
  modalLinks[i].addEventListener('click', showModal);
  
}

var hideModal = function(event){
  event.preventDefault();
  document.querySelector('#modal-overlay').classList.remove('show');
    
  };
  
  var closeButtons = document.querySelectorAll('.modal .close');
  for(var i = 0; i < closeButtons.length; i++){
    closeButtons[i].addEventListener('click', hideModal);
  }

  document.querySelector('#modal-overlay').addEventListener('click', hideModal);

  var modals = document.querySelectorAll('.modal');
  for(var i = 0; i < modals.length; i++){
    modals[i].addEventListener('click', function(event){
      event.stopPropagation();
    });
  }


})(); 



/*

'use strict';
(function(){ 

var output = document.getElementById('output');
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
var paper = 1;
var rock = 2;
var scisors = 3;


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

/*
var buttons = document.querySelectorAll('.player-move');

for ( var i = 0; i < buttons.length; i++){
  var argValue = buttons[i].getAttribute("data-move");
  buttons[i].addEventListener("click", playerMove(argValue));
}

console.log(argValue);


// Buttons \\

paperButton.addEventListener('click', function(){
  random();
  playerMove(paper);
  roundsCountdown();
});
rockButton.addEventListener('click', function(){  
  random();
  playerMove(rock);
  roundsCountdown();
});
scisorsButton.addEventListener('click', function(){
  random();
  playerMove(scisors);
  roundsCountdown();
}); 


newGame.addEventListener('click', function(){
  roundsNumber = window.prompt('Enter number of rounds you want to play :' , '10');
  rounds.innerHTML =  roundsNumber + ' Rounds';
  ilusion.classList.remove('magic');
  clear();
});


})(); 

*/