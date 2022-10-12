#!/usr/bin/env node

import readlineSync from 'readline-sync';
import userNameGreeting from '../src/index.js';
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

function brainPrimeCheck(counter) {
  if (counter === 0) {
    console.log(`Congratulations, ${userNameGreeting}!`);
    return;
  }
  const randomNumber1 = Math.floor(Math.random() * 100);
  const fun = function(){
    if (randomNumber1 === 0 || randomNumber1 === 1 || randomNumber1 % 2 === 0) {
        return 'no'
    }
    let result = [];
    let row = [3,5,7,11] 
    for (let i = 0; i <= row.length; i+=1){
        if (randomNumber1 % row[i] === 0) {
           result.push('no')
        } result.push('yes')
    } if (result.includes('no')){
        return 'no'
    } return 'yes';
  }     

  const input = readlineSync.question(`Question: ${randomNumber1} \nYour answer:`);
  if (input !== `${fun()}`) {
    console.log(`'${input}' is wrong answer ;(. Correct answer was '${fun()}'.`);
    console.log(`Let's try again, ${userNameGreeting}!`);
    return;
  }
  console.log('Correct!');
  brainPrimeCheck(counter - 1);
}
brainPrimeCheck(3);