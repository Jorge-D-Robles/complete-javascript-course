const country = 'United States';
const continent = 'North America';
let population = 339500000;
let isIsland = 'United States';
let language;
console.log(country, continent, population, isIsland)
// Data Types

language = 'English';

let halfPop = population / 2;
console.log(halfPop);

population += 1;
console.log(population);
let finland = 6000000;

if (finland > country) {
    console.log('Finland is bigger.');
} else {
   console.log('The U.S. is bigger.')
}

let average = 33000000;

if (average > country) {
    console.log('Average is bigger.');
} else {
   console.log('The U.S. is bigger than the average.')
}

const description = 'Portugal is in Europe, and its 11 million people speak portuguese';

//Coding Challenge

let massMark = 78
let heightMark = 1.69
//John
let massJohn = 92
let heightJohn = 1.95

let markBMI = massMark / (heightMark * heightMark)
let johnBMI = massJohn / (heightJohn * heightJohn)
console.log(markBMI);
console.log(johnBMI);
const markHigherBMI = massMark > massJohn;
console.log(markHigherBMI);
//if/else taking decisions
//
//
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log(`Sarah can start driving. 😂`);
} else {
    const yearsLeft = 18 - age;
    console.log(`No driving for you bitch! You have ${yearsLeft} years left until you can drive.`);
}

//more if/else stuff
if (population > 33000000) {
    console.log(`${country}'s population is above average.`)
} else {
    console.log(`${country}'s population is ${33000000 - population} below average.`)
}