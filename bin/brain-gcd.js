#!/usr/bin/env node

import readlineSync from 'readline-sync';
import userNameGreeting from '../src/index.js';

console.log('Find the greatest common divisor of given numbers.');
function brainGCDCheck(counter) {
  if (counter === 0) {
    console.log(`Congratulations, ${userNameGreeting}!`);
    return;
  }
  const randomNumber1 = Math.floor(Math.random() * 100);
  const randomNumber2 = Math.floor(Math.random() * 50);
  const input = readlineSync.question(`Question: ${randomNumber1} ${randomNumber2}\nYour answer:`);
  const divisor = function gcd(x, y) {
    if (y === 0) {
      return x;
    }
    return gcd(y, x % y);
  };

  if (divisor(randomNumber1, randomNumber2) - input !== 0) {
    console.log(`'${input}' is wrong answer ;(. Correct answer was '${divisor(randomNumber1, randomNumber2)}'.`);
    console.log(`Let's try again, ${userNameGreeting}!`);
    return;
  }
  console.log('Correct!');
  brainGCDCheck(counter - 1);
}
brainGCDCheck(3);
