import getRandomNumber from '../number-randomizer.js';
import startCommonGameLogic from '../index.js';

const gamesDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  } return true;
}

function buildRoundsData() {
  const randomNumber = getRandomNumber(0, 50);
  const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return { question: randomNumber, rightAnswer };
}

function startPrimeGame() {
  startCommonGameLogic(gamesDescription, buildRoundsData);
}

export default startPrimeGame;
