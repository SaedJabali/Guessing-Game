'use strict';

let user = prompt('Hello, can you please enter your name');

alert('You are welcome_' + user);

alert('Shall we play a game but please answer with (yes/y or no/n) ');


let score=0;

function question1(){
  let place = prompt('Do you know where I live?');


  if (place.toLowerCase() === 'yes' || place.toUpperCase() === 'Y') {
    alert('Great ! ');
    score++;
  }
  else if (place.toLowerCase() === 'no' || place.toUpperCase() === 'N') {
    alert('I live in Jordan');
  }
}
question1();


function question2(){
  let sport = prompt('Do i like Football more than Tennis?');


  if (sport.toLowerCase() === 'yes' || sport.toUpperCase() === 'Y') {
    alert('Nah! Tennis is more entertaining');
  }
  else if (sport.toLowerCase() === 'no' || sport.toUpperCase() === 'N') {
    alert('Correct.. I love Tennis');
    score++;
  }
}
question2();


function question3(){

  let pic = prompt('Can i draw?');


  if (pic.toLowerCase() === 'yes' || pic.toUpperCase() === 'Y') {
    alert('Sadly I can not');
  }
  else if (pic.toLowerCase() === 'no' || pic.toUpperCase() === 'N') {
    alert('Correct, I wish I can');
    score++;
  }
}
question3();

function question4(){
  let mind = prompt('Am I smart 😁? Hint:Answer with yes :P');


  if (mind.toLowerCase() === 'yes' || mind.toUpperCase() === 'Y') {
    alert('Good Job');
    score++;
  }
  else if (mind.toLowerCase() === 'no' || mind.toUpperCase() === 'N') {
    alert('I don not take NO for an answer 😆');
  }
}
question4();

function question5(){
  let Where = prompt('Do I like staying home instead of going out?');

  if (Where.toLowerCase() === 'yes' || Where.toUpperCase() === 'Y') {
    alert('Yes! I love watching movies or playing games in the house.');
    score++;
  }
  else if (Where.toLowerCase() === 'no' || Where.toUpperCase() === 'N'); {
    alert('Wrong answer.. going out is tiring 😪.');
  }

}
question5();
function question6(){
  let i = 0;
  let num = Number(prompt('Guess a number from 0 to 10?'));
  while (i < 4) {
    if (num === 5) {
      alert('good');
      score++;
      break;
    }
    else if (num < 5) {
      alert('too low');
      num = Number(prompt('Guess a number from 0 to 10?'));
      i++;
      continue;
    }

    else if (num > 5) {
      alert('too high');
      num = Number(prompt('Guess a number from 0 to 10?'));

      i++;
      continue;
    }
  }

  if (i === 4) {
    alert('you are out of guessing');
  }

}
question6();


let arrMe = ['darksouls', 'lol', 'needforspeed', 'bloodborne'];
function question7(){
  let y = 0;

  let guessGame = prompt('Guess a game.');
  while (guessGame !== arrMe[0] && guessGame !== arrMe[1] && guessGame !== arrMe[2] && guessGame !== arrMe[3] && y < 5) {
    alert( guessGame +'is not one of my games');
    guessGame = prompt('Guess a game.');
    y++;
  }
  if (guessGame === arrMe[0] || guessGame === arrMe[1] || guessGame === arrMe[2] || guessGame === arrMe[3]) {
    alert('Good Guessing. My games are : ' + arrMe);
    score++;
  } else {
    if (y === 5) {
      alert('Sorry you are out of trials. My games are : ' + arrMe);
    }
  }

}
question7();
alert('yuor score is : '+ score);

