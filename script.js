'use strict';

/*console.log(document.querySelector('.message').textContent); // selecting  'message' class, then read textContent property of the element
//Set content of the element:
document.querySelector('.message').textContent = 'Correct number! ';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23; // for the input field to get an actual value, we use 'value' property
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1; //  Math.random() gives a float number between 0 and 1 (not including 1)
let score = 20; // initial score
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//document.querySelector('.number').textCo//ntent = secretNumber;

//Handling Click events
//A function is just a value, so you can pass it as an argument
document.querySelector('.check').addEventListener('click', function () {
  // first parameter of the addEventListener()= type of the method
  //***NOTE: use 'check' instead of 'btn check' */
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess); //Whenever you read sth from user, its type is string

  //There is no input
  if (!guess) {
    displayMessage('No number!');
  }
  //when player wins
  else if (guess === secretNumber) {
    displayMessage('Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    //Manipulting CSS style in Javascript
    document.querySelector('body').style.backgroundColor = '#60b347'; //change background color of the whole page
    document.querySelector('.number').style.width = '30rem'; //Anytime in Javascript we change a style, we need a string

    //setting highScore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
    /* document.querySelector('.message').textContent =
      guess > secretNumber ? 'Too hight!' : 'Too low!';
      */
    displayMessage(guess > secretNumber ? 'Too hight!' : 'Too low!');
  } // lost
  else {
    score--;
    document.querySelector('.score').textContent = 0;
    displayMessage('You lost!');
  }
});

//Handling reset functionality when user clicks on 'Again'
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
});
