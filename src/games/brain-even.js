import startCommonGameLogic from '../index.js';
import getRandomNumber from '../number-randomizer.js';

function isEven(number) {
  return number % 2 === 0;
}

const greetingQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

function passEvenVariables() {
  const question = getRandomNumber(1, 30);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return { question, rightAnswer };
}

function startEvenGame() {
  startCommonGameLogic(greetingQuestion, passEvenVariables);
}
export default startEvenGame;
