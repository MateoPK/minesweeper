var sayName = function(x, y, z) {
  console.log('My name is ' + this.name + ' and I know ' + x + y + z);
};

var languages = ['JavaScript', 'Ruby', 'Python'];

var bitch = {
  name: 'Stacey',
  age: 34
};

sayName.apply(bitch, languages);


/********************** ternary operators. in lesson with if/else(c0ntrol flow)***
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');


let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");
**********************************************/
/*
let moonPhase = 'full';

if (moonPhase === 'full') {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}

switch (moonPhase) {
  case 'full':
    console.log('Howl!');
    break;
  case 'mostly full':
    console.log('Arms and legs getting hairier!');
    break;
  case 'mostly new':
    console.log('Back on two feet');
    break;
  default:
    console.log('Invalid moon phase');
    break;
} */
// ***************************************
/*

let userQuestion = '';
let randomNumber = Math.floor(Math.random() * 4);
let eightBall = '';

switch (randomNumber) {
  case 1:
    console.log('It is Certain');
    break;
    case 2:
      console.log('It is so');
      break;
      case 3:
        console.log('Eat balls');
        break;
        case 4:
          console.log('cum on me');
          break;
            case  'Invalid item' :
            console.log('SYC!');
}

console.log(userQuestion);
console.log(eightBall); */

// **************************************************************8

/*let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(" ");

for (let storyIndex = 0; )


let myPlaces = ['Houston', 'Sioux Falls', 'Phoenix'];

let friendPlaces = ['Sioux Falls', 'Missoula', 'Buffalo'];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
		if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
      console.log(myPlaces[myPlacesIndex]);
    }
  }
} */


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
const input = 'doggie is your best friend man';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }

  if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i]);
  }
}

console.log(resultArray.join('').toUpperCase()); */
