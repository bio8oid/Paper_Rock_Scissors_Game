
'use strict';
(function () {

  window.params = {
    output: document.getElementById('output'),
    rounds: document.getElementById('rounds'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    table: document.getElementById('table'),
    modalWon: document.getElementById('won'),
    ilusion: document.getElementById('ilusion'),
    paperButton: document.getElementById('paper-button'),
    rockButton: document.getElementById('rock-button'),
    scissorsButton: document.getElementById('scissors-button'),
    newGameButton: document.getElementById('new-game'),
    startButtonModal: document.getElementById("start"),
    inputName: undefined,
    inputRound: undefined,
    win: undefined,
    randomNumber: 0,
    roundsNumber: 0,
    total: 1,
    scoreX: 0,
    scoreY: 0,
    paper: 1,
    rock: 2,
    scissors: 3,
    progress: []
  };

  window.onload = function () {
    params.ilusion.classList.add('magic');
  };

  // Score Counter \\

  function oneUpX() {
    params.scoreX++;
    params.result.innerHTML = params.scoreX + ' - ' + params.scoreY;
    params.win = params.inputName;
  }
  function oneUpY() {
    params.scoreY++;
    params.result.innerHTML = params.scoreX + ' - ' + params.scoreY;
    params.win = 'Robo';
  }
  function draw() {
    params.result.innerHTML = params.scoreX + ' - ' + params.scoreY;
    params.win = 'Draw';
  }

  // Clear All Info \\

  const clean = () => {
    document.getElementById("name").value = '';
    document.getElementById("win-number").value = '';
    params.output.innerHTML = '';
    params.info.innerHTML = '';
    params.modalWon.innerHTML = '';
    params.scoreX = 0;
    params.scoreY = 0;
    params.total = 1;
    params.result.innerHTML = '';
    params.progress = [];
    document.getElementById("data-1").innerHTML = '';
    document.getElementById("data-2").innerHTML = '';
    document.getElementById("data-3").innerHTML = '';
    document.getElementById("data-4").innerHTML = '';
    document.getElementById("data-5").innerHTML = '';

  }

  // Round Downcounter \\

  function roundsCountdown() {
    if (params.inputRound == params.scoreX || params.inputRound == params.scoreY) {

      params.output.innerHTML = '<br> GAME OVER <br><br> Please press the New Game button!';
      document.getElementById('won').classList.add('headPop');
      document.getElementById('trigger').click();

      params.ilusion.classList.add('magic');
      if (params.scoreX === params.scoreY) {
        params.modalWon.innerHTML = '<br> DRAW !!!';
      }
      if (params.scoreX > params.scoreY) {
        params.modalWon.innerHTML = '<br>YOU WON THE ENTIRE GAME !!!' + '<br><img class="robo-lost" src="https://media.giphy.com/media/N8wR1WZobKXaE/source.gif" alt="robo-lost"></img>';
      }
      if (params.scoreX < params.scoreY) {
        params.modalWon.innerHTML = '<br>YOU LOST THE ENTIRE GAME !!!' + '<br><img class="robo-won" src="https://media.giphy.com/media/1flAwtHCYosL6LWnHr/giphy.gif" alt="robo-lost"></img>';
      }
    }
  }

  // Total Rounds Counter \\

  function total() {
    params.info.innerHTML = params.total++;
  }

  // Robo Move \\

  function random() {
    params.randomNumber = Math.floor(Math.random() * 3) + 1;
  }

  // Bio Player Move and Results Assess \\

  function playerMove(event) {
    random();
    total();

    //  Function Updating Table Record During Game Progress \\ 

    let push = () => {

      if (params.randomNumber === 1) {
        var Robo = "paper";
      }
      if (params.randomNumber === 2) {
        var Robo = "rock";
      }
      if (params.randomNumber === 3) {
        var Robo = "scissors";
      }

      let tableRow = {
        roundNumber: params.info.innerHTML,
        bioMove: attributeHandler,
        roboMove: Robo,
        whoWon:  params.win,
        score: params.result.innerHTML
      }
      params.progress.push(tableRow);

      //  Final Modal Table Generator \\

      const headerContent = '<div>Round</div>' + '<div>' + params.inputName + '</div>' + '<div>Robo</div>' + '<div>Winner</div>' + '<div>Score</div>';
      const header = document.getElementById("header");
      header.innerHTML = headerContent;

       const generate = x => {

          const round = document.getElementById("data-1");
          const roundContent = document.createElement('div');
          roundContent.innerHTML = x.roundNumber;
          round.appendChild(roundContent);

          const you = document.getElementById("data-2");
          const youContent = document.createElement('div');
          youContent.innerHTML = x.bioMove;
          you.appendChild(youContent);

          const robo = document.getElementById("data-3");
          const roboContent = document.createElement('div');
          roboContent.innerHTML = x.roboMove;
          robo.appendChild(roboContent);

          const winner = document.getElementById("data-4");
          const winnerContent = document.createElement('div');
          winnerContent.innerHTML = x.whoWon;
          winner.appendChild(winnerContent);

          const score = document.getElementById("data-5");
          const scoreContent = document.createElement('div');
          scoreContent.innerHTML = x.score;
          score.appendChild(scoreContent);
        }
      params.progress.map(generate);
      params.progress = [];
    }

    // Pass info from buttons and compute result \\

    var attributeHandler = this.getAttribute("data-move");

    if (attributeHandler === "paper") {
      var value = 1;
    }
    if (attributeHandler === "rock") {
      var value = 2;
    }
    if (attributeHandler === "scissors") {
      var value = 3;
    }

    if (value === params.randomNumber) {
      params.output.innerHTML = '<br> DRAW';
      draw();
      roundsCountdown();
      push();
    }
    if (value === 1 && params.randomNumber === 2) {
      params.output.innerHTML = '<br>' + params.inputName + ' chose PAPER and WON <br><br> as Robo chose ROCK';
      oneUpX();
      roundsCountdown();
      push();
    }
    if (value === 1 && params.randomNumber === 3) {
      params.output.innerHTML = '<br>' + params.inputName + ' chose PAPER and LOST <br><br> as Robo chose scissors';
      oneUpY();
      roundsCountdown();
      push();
    }
    if (value === 2 && params.randomNumber === 3) {
      params.output.innerHTML = '<br>' + params.inputName + ' chose ROCK and WON <br><br> as Robo chose scissors';
      oneUpX();
      roundsCountdown();
      push();
    }
    if (value === 2 && params.randomNumber === 1) {
      params.output.innerHTML = '<br>' + params.inputName + ' chose ROCK and LOST <br><br> as Robo chose PAPER';
      oneUpY();
      roundsCountdown();
      push();
    }
    if (value === 3 && params.randomNumber === 1) {
      params.output.innerHTML = '<br>' + params.inputName + ' chose scissors and WON <br><br> as Robo chose PAPER';
      oneUpX();
      roundsCountdown();
      push();
    }
    if (value === 3 && params.randomNumber === 2) {
      params.output.innerHTML = '<br>' + params.inputName + ' chose scissors and LOST <br><br> as Robo chose ROCK';
      oneUpY();
      roundsCountdown();
      push();
    }
  }

  // Buttons \\

  var choiceButtons = document.querySelectorAll('.player-move');
  for (var i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener("click", playerMove);
  }

  params.newGameButton.addEventListener('click', function () {
    document.getElementById('trigger2').click();
    clean();
  });

    params.startButtonModal.addEventListener('click', function () {
    params.inputName = document.getElementById("name").value;
    params.inputRound = document.getElementById("win-number").value;
    params.rounds.innerHTML = ' Score ' + params.inputRound + ' wins the GAME !  <br><br>';
    if (params.inputName.length && params.inputRound > 0) {
      hideModal();
      params.ilusion.classList.remove('magic');
    }
    else {
      window.alert('Enter your name and number of winning rounds')
    }
  })

// Click ME \\

document.getElementById('scissors-button').onclick = function() {
   document.getElementById('click').className = "hidden";
}


  // Modals \\

  var showModal = function (event) {
    event.preventDefault();
    document.querySelectorAll('#modal-overlay > *').forEach(function (event) {
      event.classList.remove('show');
    })
    document.querySelector('#modal-overlay').classList.add('show');
    var argValue = this.getAttribute('href');
    document.querySelector(argValue).classList.add('show');
  }

  var modalLinks = document.querySelectorAll('.show-modal');
  for (var i = 0; i < modalLinks.length; i++) {
    modalLinks[i].addEventListener('click', showModal);
  }

  var hideModal = function () {
    event.preventDefault();
    document.querySelector('#modal-overlay').classList.remove('show');
  };

  var closeButtons = document.querySelectorAll('.modal .close');
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', hideModal);
  }

  document.querySelector('#modal-overlay').addEventListener('click', hideModal);

  var modals = document.querySelectorAll('.modal');
  for (var i = 0; i < modals.length; i++) {
    modals[i].addEventListener('click', function (event) {
      event.stopPropagation();
    });
  }

})(); 
