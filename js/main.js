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


