#!/usr/bin/env node

import userNameGreeting from '../src/index.js'
import readlineSync from 'readline-sync';


function brainCalcCheck(counter) {
    if (counter === 0) {
      console.log(`Congratulations, ${userNameGreeting}!`);
      return;
    }
    console.log('What is the result of the expression?');
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 50);
    const input = readlineSync.question(`Question: ${randomNumber1} + ${randomNumber2}\nYour answer:`);
    const whatIsSum = randomNumber1 + randomNumber2;
    if (whatIsSum - input !== 0) {
      console.log(`'${input}' is wrong answer ;(. Correct answer was '${whatIsSum}'.`);
      console.log(`Let's try again, ${userNameGreeting}!`);
      return;
    }
    console.log('Correct!');
    brainCalcCheck(counter - 1);
  }
  brainCalcCheck(3);