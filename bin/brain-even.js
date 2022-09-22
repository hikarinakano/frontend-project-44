#!/usr/bin/env node

import userNameGreeting from '../src/index.js';

function brainEvenCheck(counter) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    if (counter === 0) {
      console.log(`Congratulations, ${userNameGreeting}!`);
      return;
    }
    const randomNumber = Math.floor(Math.random() * 20);
    const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';
  
    const input = readlineSync.question(`Question: ${randomNumber}\nYour answer:`);
  
    if (input !== isEven) {
      console.log(`'${input}' is wrong answer ;(. Correct answer was '${isEven}'.`);
      console.log(`Let's try again, ${userNameGreeting}!`);
      return;
    }
    console.log('Correct!');
    brainEvenCheck(counter - 1);
  }
  brainEvenCheck(3);
  
  export {brainEvenCheck };