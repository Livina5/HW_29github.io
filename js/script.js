let textHelloMessage;
console.log(textHelloMessage);

textHelloMessage = 'Hello World!';
console.log(textHelloMessage);

let namePerson = prompt('Enter your first and last name');
console.log(namePerson);
console.log(`Hello ${namePerson}`);
// let 1namePerson = prompt('Enter your first and last name');
// let name-person = prompt('Enter your first and last name');

let agePerson = prompt('Enter your year of birth');
console.log(agePerson);
const currentYear = 2025;
let resultAge = currentYear - agePerson;
console.log(resultAge);

let lengthSquare = prompt('What is the length of the side of the square?');
console.log(lengthSquare);
let resultLength = lengthSquare * 4;
console.log(resultLength);

let amountDollar = prompt('Enter the amount in dollars');
console.log(amountDollar);
const exchangeRateEuro = 0.97;
let resultAmoutEuro = amountDollar * exchangeRateEuro;
console.log(`${resultAmoutEuro} euro`);

let distanceCity = prompt('Enter the distance in kilometers between two cities(km)');
console.log(distanceCity);
distanceCity = parseFloat(distanceCity);
let timeDrive = prompt('Enter how many hours you want to arrive(hour)');
console.log(timeDrive);
timeDrive = parseFloat(timeDrive);
let resultSpeed = distanceCity / timeDrive;
console.log(`You need to move ${resultSpeed} km/hour`);

let radius = prompt('Enter the radius of the circle');
console.log(radius);
const valueP = 3.14;
let resultArea = valueP * radius * radius;
console.log(resultArea);



