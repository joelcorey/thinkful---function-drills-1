'use strict';

function createGreeting(name, age) {
  const yearOfBirth = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age}. I was born in ${yearOfBirth}.`;
}

function getYearOfBirth(age, currentYear = 2019){
  return currentYear - age;
}

const greeting1 = createGreeting('Joel', 35);

console.log(greeting1);