import startCommonGameLogic from '../index.js';
import getRandomNumber from '../number-randomizer.js';

const isEven = (number) => number % 2 === 0;
const gamesDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

function buildRoundsData() {
  const question = getRandomNumber(1, 30);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return { question, rightAnswer };
}

function startEvenGame() {
  startCommonGameLogic(gamesDescription, buildRoundsData);
}
export default startEvenGame;
