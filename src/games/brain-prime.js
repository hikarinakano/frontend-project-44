import getRandomNumber from '../number-randomizer.js';
import startCommonGameLogic from '../index.js';

const greetingQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function checkifPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  } return true;
}

function passVariables() {
  const randomNumber = getRandomNumber(0, 50);
  const question = randomNumber;
  const rightAnswer = checkifPrime(randomNumber) ? 'yes' : 'no';

  return { question, rightAnswer };
}

function startPrimeGame() {
  startCommonGameLogic(greetingQuestion, passVariables);
}

export default startPrimeGame;
