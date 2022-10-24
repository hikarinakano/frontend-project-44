import getRandomNumber from '../number-randomizer.js';
import startCommonGameLogic from '../index.js';

const gamesDescription = 'What number is missing in the progression?';

const progressionLength = 10;

function createProgression(firstNumOfProgression, commonDifference) {
  const result = [];
  for (let i = 1; i <= progressionLength; i += 1) {
    result.push(firstNumOfProgression + commonDifference * i);
  }
  return result;
}

function buildRoundsData() {
  const randomNumber = getRandomNumber(1, 30);
  const commonDifference = getRandomNumber(1, 20);
  const newProgression = createProgression(randomNumber, commonDifference);
  const randomNumOfProgressionLength = getRandomNumber(0, (newProgression.length - 1));
  const rightAnswer = String(newProgression[randomNumOfProgressionLength]);
  const question = newProgression.join(' ').replace(rightAnswer, '..');
  return { question, rightAnswer };
}

function startProgressionGame() {
  startCommonGameLogic(gamesDescription, buildRoundsData);
}

export default startProgressionGame;
