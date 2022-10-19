import getRandomNumber from '../number-randomizer.js';
import startCommonGameLogic from '../index.js';

const greetingQuestion = 'What number is missing in the progression?';

function createProgression(number, commonDifference) {
  const result = [];
  for (let i = 0, progressionCount = 1; progressionCount <= 10; i += 1, progressionCount += 1) {
    result.push(number + commonDifference * i);
  }
  return result;
}

function passVariables() {
  const randomNumber = getRandomNumber(1, 30);
  const commonDifference = getRandomNumber(1, 20);
  const randomOfTen = getRandomNumber(0, 9);
  const rightAnswer = String(createProgression(randomNumber, commonDifference)[randomOfTen]);
  const question = createProgression(randomNumber, commonDifference).join(' ').replace(rightAnswer, '..');
  return { question, rightAnswer };
}

function startProgressionGame() {
  startCommonGameLogic(greetingQuestion, passVariables);
}

export default startProgressionGame;
