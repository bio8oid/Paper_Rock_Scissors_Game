'use strict';
(function () {

  const output = document.getElementById('output');
  const rounds = document.getElementById('rounds');
  const result = document.getElementById('result');
  const info = document.getElementById('info');
  const modalWon = document.getElementById('won');
  const buttonGroup = document.getElementById('button-group');
  const loader = document.getElementById('load');
  const loaderWrap = document.getElementById('loader-wrap');
  const newGameButton = document.getElementById('new-game');
  const startButtonModal = document.getElementById("start");

  window.params = {
    inputName: undefined,
    inputRound: undefined,
    win: undefined,
    roundsNumber: 0,
    total: 1,
    bioScore: 0,
    roboScore: 0,
    progress: []
  };

  // Score Counter \\

  const scoreForBio = () => {
    params.bioScore++;
    result.innerHTML = params.bioScore + ' - ' + params.roboScore;
    params.win = params.inputName;
  }
  const scoreForRobo = () => {
    params.roboScore++;
    result.innerHTML = params.bioScore + ' - ' + params.roboScore;
    params.win = 'Robo';
  }
  const draw = () => {
    result.innerHTML = params.bioScore + ' - ' + params.roboScore;
    params.win = 'Draw';
  }

  // Reset All Info \\

  const clean = () => {
    output.innerHTML = '';
    info.innerHTML = '';
    result.innerHTML = '';
    modalWon.innerHTML = '';
    params.bioScore = 0;
    params.roboScore = 0;
    params.total = 1;
    params.progress = [];
  }

  // Round Downcounter and Information Display Handler \\

  const roundsCountdown = () => {
    if (params.inputRound == params.bioScore || params.inputRound == params.roboScore) {

      output.innerHTML = '<br> GAME OVER <br><br> Please press the New Game button!';
      document.getElementById('won').classList.add('headPop');
      document.getElementById('trigger').click();
      buttonGroup.classList.toggle('hidden');
      newGameButton.classList.toggle('hidden');

      if (params.bioScore === params.roboScore) {
        modalWon.innerHTML = '<br> DRAW !!!';
      }
      if (params.bioScore > params.roboScore) {
        modalWon.innerHTML = '<br>YOU WON THE ENTIRE GAME !!!' + '<br><img class="robo-lost-image" src="./images/robo-lost.webp" alt="robo-lost"></img>';
      }
      if (params.bioScore < params.roboScore) {
        modalWon.innerHTML = '<br>YOU LOST THE ENTIRE GAME !!!' + '<br><img class="robo-won-image" src="./images/robo-won.webp" alt="robo-won"></img>';
      }
    }
  }

  // Total Rounds Counter \\

  const total = () => {
    info.innerHTML = params.total++;
  }

  // Robo Move \\

  const random = () => {
    const draw = Math.floor(Math.random() * 3) + 1;

    switch (draw) {
      case 1:
        return 'paper';
        break;
      case 2:
        return 'rock';
        break;
      case 3:
        return 'scissors';
        break;
    }
  }

  // Bio Player Move and Results Assess \\

  const playerMove = event => {
    const robo = random()
    const bio = event.target.getAttribute("data-move");
    random();
    total();

    if (bio === robo) {
      output.innerHTML = '<br> DRAW';
      draw();
    }
    else if ((bio === "paper" && robo === "rock") || (bio === "scissors" && robo === "paper") || (bio === "rock" && robo === "scissors")) {
      output.innerHTML = `<br><span>${params.inputName}</span> chose <span>${bio}</span> and WON <br><br> as Robo chose <span>${robo}</span>`;
      scoreForBio();
    }
    else if ((bio === "paper" && robo === "scissors") || (bio === "rock" && robo === "paper") || (bio === "scissors" && robo === "rock")) {
      output.innerHTML = `<br><span>${params.inputName}</span> chose <span>${bio}</span> and LOST <br><br> as Robo chose <span>${robo}</span>`;
      scoreForRobo();
    }

    //  Function Updating Table Record During Game Progress \\ 

    let push = () => {

      const headerContent =
        `<div>Round</div>
      <div>${params.inputName}</div>
      <div>Robo</div>
      <div>Winner</div>
      <div>Score</div>`

      const header = document.getElementById("header");
      header.innerHTML = headerContent;

      const tableRow =
        `<div class="table-row-elements">
      <div>${info.innerHTML}</div>
      <div>${bio}</div>
      <div>${robo}</div>
      <div>${params.win}</div>
      <div>${result.innerHTML}</div>
      </div>`

      const row = document.getElementById("wrap");
      params.progress.push(tableRow);
      row.innerHTML = params.progress.join("");
    }
    roundsCountdown();
    push();
  }

  // Buttons \\

  const choiceButtons = document.querySelectorAll('.player-move');
  for (const button of choiceButtons) {
    button.addEventListener("click", playerMove);
  }

  newGameButton.addEventListener('click', (event) => {
    loader.classList.remove('loader');
    loaderWrap.classList.remove('loader-wrap');
    document.getElementById('trigger2').click();
    // document.querySelector('#modal-overlay').classList.add('show');
    // document.querySelector('#modal-two').classList.add('show');
    clean();
  });

  startButtonModal.addEventListener('click', () => {
    params.inputName = document.getElementById("name").value;
    params.inputRound = document.getElementById("win-number").value;
    rounds.innerHTML = ' Score ' + params.inputRound + ' wins the GAME !  <br><br>';
    if (params.inputName.length && params.inputRound > 0) {
      hideModal();
      newGameButton.classList.toggle('hidden');
      buttonGroup.classList.remove('hidden');
    }
    else {
      window.alert('Enter your name and number of winning rounds')
    }
  })

  // Click ME Hand Pointer Hide \\

  document.getElementById('scissors-button').onclick = () => {
    document.getElementById('pointer-hand').className = "hidden";
  }

  // Modals \\

  const showModal = event => {
    event.preventDefault();
    document.querySelectorAll('#modal-overlay > *').forEach((event) => {
      event.classList.remove('show');
    })
    document.querySelector('#modal-overlay').classList.add('show');
    const argValue = event.target.hash;
    document.querySelector(argValue).classList.add('show');
  }

  const modalLinks = document.querySelectorAll('.show-modal');
  for (const link of modalLinks) {
    link.addEventListener('click', showModal);
  }

  const hideModal = () => {
    event.preventDefault();
    document.querySelector('#modal-overlay').classList.remove('show');
  };

  const closeButtons = document.querySelectorAll('.modal .close');
  for (const button of closeButtons) {
    button.addEventListener('click', hideModal);
  }
  
  document.querySelector('#modal-overlay').addEventListener('click', hideModal);

  const modals = document.querySelectorAll('.modal');
  for (const modal of modals) {
    modal.addEventListener('click', event => {
      event.stopPropagation();
    });
  }
})();