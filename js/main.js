'use strict';

let user = prompt('Hello, can you please enter your name');

console.log('I asked the user about his name');
alert('You are welcome_' + user);

alert('Shall we play a game but please answer with (yes/y or no/n) ');



let place = prompt('Do you know where I live?');


if (place.toLowerCase() === 'yes' || place.toUpperCase() === 'Y') {
  alert('Great ! ');
}
else if (place.toLowerCase() === 'no' || place.toUpperCase() === 'N') {
  alert('I live in Jordan');
}

let sport = prompt('Do i like Football more than Tennis?');


if (sport.toLowerCase() === 'yes' || sport.toUpperCase() === 'Y') {
  alert('Nah! Tennis is more entertaining');
}
else if (sport.toLowerCase() === 'no' || sport.toUpperCase() === 'N') {
  alert('Correct.. I love Tennis');
}


let pic = prompt('Can i draw?');


if (pic.toLowerCase() === 'yes' || pic.toUpperCase() === 'Y') {
  alert('Sadly I can not');
}
else if (pic.toLowerCase() === 'no' || pic.toUpperCase() === 'N') {
  alert('Correct, I wish I can');
}


let mind = prompt('Am I smart 😁? Hint:Answer with yes :P');


if (mind.toLowerCase() === 'yes' || mind.toUpperCase() === 'Y') {
  alert('Good Job');
}
else if (mind.toLowerCase() === 'no' || mind.toUpperCase() === 'N') {
  alert('I don not take NO for an answer 😆');
}

let Where = prompt('Do I like staying home instead of going out?');

if (Where.toLowerCase() === 'yes' || Where.toUpperCase() === 'Y') {
  alert('Yes! I love watching movies or playing games in the house.');
}
else if (Where.toLowerCase() === 'no' || Where.toUpperCase() === 'N'); {
  alert('Wrong answer.. going out is tiring 😪.');
}


let i = 0;
let num = Number(prompt('Guess a number from 0 to 10?'));
while (i < 4) {
  if (num === 5) {
    alert('good');
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





let y = 0;
let arrMe = ['darksouls', 'lol', 'needforspeed', 'bloodborne'];
let guessGame = prompt('Guess a game.');
while (guessGame !== arrMe[0] && guessGame !== arrMe[1] && guessGame !== arrMe[2] && guessGame !== arrMe[3] && y < 5) {
  alert( guessGame +'is not one of my games');
  guessGame = prompt('Guess a game.');
  y++;
}
if (guessGame === arrMe[0] || guessGame === arrMe[1] || guessGame === arrMe[2] || guessGame === arrMe[3]) {
  alert('Good Guessing. My games are : ' + arrMe);
} else {
  if (y === 5) {
    alert('Sorry you are out of trials. My games are : ' + arrMe);
  }
}


let score = 0;
if (place.toLocaleLowerCase() === 'no' || place.toLocaleLowerCase() === 'n') {
  score++;
}
if (sport.toLocaleLowerCase() === 'yes' || sport.toLocaleLowerCase() === 'y') {
  score++;
}
if (pic.toLocaleLowerCase() === 'yes' || pic.toLocaleLowerCase() === 'y') {
  score++;

  if (mind.toLocaleLowerCase() === 'no' || mind.toLocaleLowerCase() === 'n') {
    score++;
  }
  if (Where.toLocaleLowerCase() === 'yes' || Where.toLocaleLowerCase() === 'y') {
    score++;
  }
  if (num === '5') {
    score++;
  }
  if (guessGame === arrMe[0] || guessGame === arrMe[1] || guessGame === arrMe[2] || guessGame === arrMe[3]) {
    score++;
  }
  alert('You have answered ' + score + ' correct answeres out of 7.');
  alert('Thank you ' + user + ' Hope you enjoed the game.');
}
