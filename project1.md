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