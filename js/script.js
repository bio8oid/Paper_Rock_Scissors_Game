
'use strict';
(function () {

  const output = document.getElementById('output');
  const rounds = document.getElementById('rounds');
  const result = document.getElementById('result');
  const info = document.getElementById('info');
  //const table = document.getElementById('table');
  const modalWon = document.getElementById('won');
  const buttonGroup = document.getElementById('button-group');
  const loader = document.getElementById('load');
  //const paperButton = document.getElementById('paper-button');
  //const rockButton = document.getElementById('rock-button');
  //const scissorsButton = document.getElementById('scissors-button');
  const newGameButton = document.getElementById('new-game');
  const startButtonModal = document.getElementById("start");

  window.params = {
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

  // Score Counter \\

  function oneUpX() {
    params.scoreX++;
    result.innerHTML = params.scoreX + ' - ' + params.scoreY;
    params.win = params.inputName;
  }
  function oneUpY() {
    params.scoreY++;
    result.innerHTML = params.scoreX + ' - ' + params.scoreY;
    params.win = 'Robo';
  }
  function draw() {
    result.innerHTML = params.scoreX + ' - ' + params.scoreY;
    params.win = 'Draw';
  }

  // function oneUp() {
  //   if() {
  //     params.scoreX++;
  //     params.win = params.inputName;
  //   }
  //   if() {
  //     params.scoreY++;
  //     params.win = 'Robo';
  //   }
  // else {
  //   params.win = 'Draw';
  // }
  // result.innerHTML = params.scoreX + ' - ' + params.scoreY;
  // }



  // Clear All Info \\

  const clean = () => {
    document.getElementById("name").value = '';
    document.getElementById("win-number").value = '';
    output.innerHTML = '';
    info.innerHTML = '';
    modalWon.innerHTML = '';
    params.scoreX = 0;
    params.scoreY = 0;
    params.total = 1;
    result.innerHTML = '';
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

      output.innerHTML = '<br> GAME OVER <br><br> Please press the New Game button!';
      document.getElementById('won').classList.add('headPop');
      document.getElementById('trigger').click();
      buttonGroup.classList.toggle('hidden');
      newGameButton.classList.toggle('hidden');

      if (params.scoreX === params.scoreY) {
        modalWon.innerHTML = '<br> DRAW !!!';
      }

      if (params.scoreX > params.scoreY) {
        modalWon.innerHTML = '<br>YOU WON THE ENTIRE GAME !!!' + '<br><img class="robo-lost-image" src="./images/robo-lost.webp" alt="robo-lost"></img>';
      }

      if (params.scoreX < params.scoreY) {
        modalWon.innerHTML = '<br>YOU LOST THE ENTIRE GAME !!!' + '<br><img class="robo-won-image" src="./images/robo-won.webp" alt="robo-won"></img>';
      }
    }
  }

  // Total Rounds Counter \\

  function total() {
    info.innerHTML = params.total++;
  }

  // Robo Move \\

  function random() {
    params.randomNumber = Math.floor(Math.random() * 3) + 1;

    switch(params.randomNumber) {
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

  function playerMove(event) {
    const Robo = random()
    random();
    total();

    //  Function Updating Table Record During Game Progress \\ 

    let push = () => {

      // if (params.randomNumber === 1) {
      //   var Robo = "paper";
      // }
      // if (params.randomNumber === 2) {
      //   var Robo = "rock";
      // }
      // if (params.randomNumber === 3) {
      //   var Robo = "scissors";
      // }

      console.log(Robo)
      console.log(event)
      console.log(event.value)

      let tableRow = {
        roundNumber: info.innerHTML,
        bioMove: attributeHandler,
        roboMove: Robo,
        whoWon:  params.win,
        score: result.innerHTML
      }
      params.progress.push(tableRow);
      console.log(params.progress)

      //  Final Modal Table Generator \\

      const headerContent = `<div>Round</div><div>${params.inputName}</div><div>Robo</div><div>Winner</div><div>Score</div>`;
      const header = document.getElementById("header");
      header.innerHTML = headerContent;


      // const headerContent =
      //   `<div>Round</div>
      // <div>${params.inputName}</div>
      // <div>Robo</div>
      // <div>Winner</div>
      // <div>Score</div>`

      // const header = document.getElementById("header");
      // header.innerHTML = headerContent;

      // const tableRow =
      //   `<div class="rtd">
      // <div>${info.innerHTML}</div>
      // <div>${attributeHandler}</div>
      // <div>${attributeHandler}</div>
      // <div>${Robo}</div>
      // <div>${result.innerHTML}</div>
      // </div>`

      // const row = document.getElementById("wrap");
      // row.innerHTML = params.progress.join("");

      // //  Final Modal Table Generator \\



      // params.progress.push(tableRow);

    // }  





    // params.progress.map(item => {

    //   td = `<div>${item.roundNumber}</div><div>${item.bioMove}</div><div>${item.roboMove}</div><div>${item.whoWon}</div><div>${item.score}</div>`

    //   const nodes = document.querySelectorAll(".table-data")
    //   //const td = document.getElementById("wrap");
    //   const content = Object.values(item)
    //   // td.innerHTML = [...content];
    //   console.log(item)
    //   // console.log(td)
    //   // console.log(nodes)
    //   console.log(content)
    //   // console.log(nodes[item.roundNumber].innerHTML=content[item.roundNumber])

    // var tableUpdate = nodes.forEach((node, index) => {
    //           // console.log(node)
    //           // console.log(content[index])
    //           return   node.innerHTML = content[index]
    //           // console.log(node.innerHTML = content[index])
    //         })



    //       console.log(tableUpdate )

    //     params.progress.push(tableUpdate);

    //   console.log(params.progress)

    //.item.node(item.index.content)

    // const row = document.createElement('div')

    // .innerHTML=content
    // console.log(row)


    //const td = document.getElementById(`data-${item.roundNumber}`);
    //const Content = document.createElement('div');
    //td.innerHTML = item.roundNumber;

    //console.log(round)
    //console.log(item.bioMove)
    //console.log(td.innerHTML = item.roundNumber)
    //console.log(round.map(item => item))

    //round.appendChild(item.value);

    //const round = document.getElementById("data-1");
    // const roundContent = document.createElement('div');
    // roundContent.innerHTML = x.roundNumber;

    // })

    // }














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
      console.log(params.progress);
      params.progress = [];
    }










    // const generate = x => {

    //       const round = document.getElementById("data-1");
    //       const roundContent = document.createElement('div');
    //       roundContent.innerHTML = x.roundNumber;
    //       round.appendChild(roundContent);

    //       const you = document.getElementById("data-2");
    //       const youContent = document.createElement('div');
    //       youContent.innerHTML = x.bioMove;
    //       you.appendChild(youContent);

    //       const robo = document.getElementById("data-3");
    //       const roboContent = document.createElement('div');
    //       roboContent.innerHTML = x.roboMove;
    //       robo.appendChild(roboContent);

    //       const winner = document.getElementById("data-4");
    //       const winnerContent = document.createElement('div');
    //       winnerContent.innerHTML = x.whoWon;
    //       winner.appendChild(winnerContent);

    //       const score = document.getElementById("data-5");
    //       const scoreContent = document.createElement('div');
    //       scoreContent.innerHTML = x.score;
    //       score.appendChild(scoreContent);

    //     }




    // params.progress.map(item => {
    //   const divContent = document.createElement('div')
    //       const round = document.querySelectorAll(".table-data")
    //       console.log(round)
    //       console.log(round[item.roundNumber])
    //       console.log(divContent)
    //       console.log(item)
    //     //round[item].appendChild(item.divContent).innerHTML = item.tableRow
    //   })
    //     params.progress = []
    //   }










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

    console.log(this.dataset.move)


    if (value === params.randomNumber) {
      output.innerHTML = '<br> DRAW';
      draw();
      roundsCountdown();
      push();
    }
    if (value === 1 && params.randomNumber === 2) {
      output.innerHTML = '<br>' + params.inputName + ' chose PAPER and WON <br><br> as Robo chose ROCK';
      oneUpX();
      roundsCountdown();
      push();
    }
    if (value === 1 && params.randomNumber === 3) {
      output.innerHTML = '<br>' + params.inputName + ' chose PAPER and LOST <br><br> as Robo chose scissors';
      oneUpY();
      roundsCountdown();
      push();
    }
    if (value === 2 && params.randomNumber === 3) {
      output.innerHTML = '<br>' + params.inputName + ' chose ROCK and WON <br><br> as Robo chose scissors';
      oneUpX();
      roundsCountdown();
      push();
    }
    if (value === 2 && params.randomNumber === 1) {
      output.innerHTML = '<br>' + params.inputName + ' chose ROCK and LOST <br><br> as Robo chose PAPER';
      oneUpY();
      roundsCountdown();
      push();
    }
    if (value === 3 && params.randomNumber === 1) {
      output.innerHTML = '<br>' + params.inputName + ' chose scissors and WON <br><br> as Robo chose PAPER';
      oneUpX();
      roundsCountdown();
      push();
    }
    if (value === 3 && params.randomNumber === 2) {
      output.innerHTML = '<br>' + params.inputName + ' chose scissors and LOST <br><br> as Robo chose ROCK';
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

  newGameButton.addEventListener('click', function () {
    loader.classList.remove('loader');
    document.getElementById('trigger2').click();
    clean();
  });

  startButtonModal.addEventListener('click', function () {
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

  // Click ME Pointer Hide\\

  document.getElementById('scissors-button').onclick = function () {
    document.getElementById('pointer-hand').className = "hidden";
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
