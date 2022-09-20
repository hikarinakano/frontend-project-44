import userName from '../src/cli.js';
import readlineSync from 'readline-sync';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

function check(counter) {
  if (counter === 0) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const randomNumber = Math.floor(Math.random() * 20);
  const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';

  const input = readlineSync.question(`Question: ${randomNumber}\nYour answer:`);
  
    if (input !== isEven) {
      console.log(`'${input}' is wrong answer ;(. Correct answer was '${isEven}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    check(counter - 1);
}

export default check;
