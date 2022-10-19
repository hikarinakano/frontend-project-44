import startCommonGameLogic from '../index.js';
import getRandomNumber from '../number-randomizer.js';

function greatestCommonDivisor(first, second) {
  if (second === 0) {
    return first;
  }
  return greatestCommonDivisor(second, first % second);
}

const greetingQuestion = 'Find the greatest common divisor of given numbers.';

function passVariables() {
  const randomNumber1 = getRandomNumber(1, 20);
  const randomNumber2 = getRandomNumber(1, 30);
  const question = `${randomNumber1} ${randomNumber2} `;

  const rightAnswer = String(greatestCommonDivisor(randomNumber1, randomNumber2));

  return { question, rightAnswer };
}

function startGcdGame() {
  startCommonGameLogic(greetingQuestion, passVariables);
}

export default startGcdGame;
