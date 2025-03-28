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
