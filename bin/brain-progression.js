#!/usr/bin/env node

import readlineSync from 'readline-sync';
import userNameGreeting from '../src/index.js';

console.log('What is the result of the expression?');
function brainProgressionCheck(counter) {
   
    if (counter === 0) {
      console.log(`Congratulations, ${userNameGreeting}!`);
      return;
    }
    
    const randomNumber1 = Math.floor(Math.random() * 10);
    const randomNumber2 = Math.floor(Math.random() * 20);
    const progression = function createProgression(a,b) {
        let result = [];
        for (var i = 0, k = 1; k <= 10; i+=1, k+=1) {
          result.push(a+b*i)  
        }
        return result
    }
    const randomElement = progression(randomNumber1,randomNumber2)[Math.floor(Math.random() * 10)];
    const str = progression(randomNumber1,randomNumber2).join(" ").replace(`${randomElement}`,"..")
    const input = readlineSync.question(`Question: ${str}\nYour answer:`);
    if (`${randomElement}` !== input) {
      console.log(`'${input}' is wrong answer ;(. Correct answer was '${randomElement}'.`);
      console.log(`Let's try again, ${userNameGreeting}!`);
      return;
    }
    console.log('Correct!');
    brainProgressionCheck(counter - 1);
  }
  brainProgressionCheck(3);
  
  