'use strict';

function createGreeting(name, age) {
  if (name === undefined || age === undefined || name === null || age === null) {
  	throw new Error('Name or age is not defined');
  }
  if (typeof name !== 'string' || typeof age !== 'number') {
  	throw new TypeError();
  }
  let yearOfBirth = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age}. I was born in ${yearOfBirth}.`;
}

function getYearOfBirth(age, currentYear = 2019){
  if (age <= 0){
    throw new Error('Age can not be negative');
  }
  return currentYear - age;
}

let greeting1;

try {
  greeting1 = createGreeting('Joel', 35);
} catch (err) {
  console.log(err);
}

console.log(greeting1);