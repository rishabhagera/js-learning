#project related to Dom
##project link


##peoject 1 solutiobn code
'''javascript 
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

'''


##project 2 solution 
'''
const form = document.querySelector('form');

// if height is declared here, then empty values will be taken from the form because when the JavaScript reads the file, it would be at the start

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0 || height === '') {
    results.innerHTML = `Please provide a valid height ${height}`;
  } else if (isNaN(weight) || weight <= 0 || weight === '') {
    results.innerHTML = `Please provide a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      results.innerHTML += '<br>Underweight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML += '<br>Normal weight';
    } else {
      results.innerHTML += '<br>Overweight';
    }
  }
});
'''



##project 3
'''
const clock = document.getElementById('clock')

//let date = new Date();

setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

'''



##project 4
'''
// Generate a random number between 1 and 100
let randomnumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const gussesLot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numguess = 1;
let playgame = true;

if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); // Don't send the data anywhere
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number!');
  } else if (guess < 1) {
    alert('Please enter a number between 1-100');
  } else if (guess > 100) {
    alert('Please enter a number between 1-100!');
  } else {
    prevGuess.push(guess);
    if (numguess === 11) {
      displayGuess(guess);
      displaymessage(`Game Over. Random Number Was ${randomnumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomnumber) {
    displaymessage(`You guessed it right!`);
    endGame();
  } else if (guess < randomnumber) {
    displaymessage('Number is TOO LOW');
  } else if (guess > randomnumber) {
    displaymessage('Number is TOO HIGH');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  gussesLot.innerHTML += `${guess} `;
  numguess++;
  remaining.innerHTML = `${11 - numguess}`; // Fixed string interpolation
}

function displaymessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`; // Fixed string interpolation
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button'); // Fixed typo in classList
  p.innerHTML = '<h2 id="newgame">Start New Game</h2>';
  startOver.appendChild(p);
  playgame = false;

  // New game button functionality
  const newgamebutton = document.querySelector('#newgame');
  newgamebutton.addEventListener('click', function (e) {
    randomnumber = parseInt(Math.random() * 100 + 1); // Reset random number
    prevGuess = [];
    numguess = 1;
    gussesLot.innerHTML = '';
    remaining.innerHTML = `${11 - numguess}`; // Reset remaining guesses
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playgame = true;
  });
}
'''


##project 5

'''
const insert = document.getElementById('insert');
//console.log(insert);

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class ="color">
  <table>
  <tr>
    <th>Key</th>
    <th>Key-code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `;
});

'''

##project 6
'''
// generate a random color

const randomcolor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  console.log(randomcolor());
  
  const startchangeInColor = function () {
    //intervalId = setInterval(changeInColor, 1000);
    if (!intervalId) {
      intervalId = setInterval(changeInColor, 1000);
    }
    function changeInColor() {
      document.body.style.backgroundColor = randomcolor();
    }
  };
  
  const StopColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  document.querySelector('#start').addEventListener('click', startchangeInColor);
  document.querySelector('#stop').addEventListener('click', StopColor);
  
'''
