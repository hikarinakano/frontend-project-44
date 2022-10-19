import startCommonGameLogic from '../index.js';
import getRandomNumber from '../number-randomizer.js';

function makeOperation(number1, number2, operation) {
  if (operation === '+') {
    return number1 + number2;
  } if (operation === '-') {
    return number1 - number2;
  }
  return number1 * number2;
}

const greetingQuestion = 'What is the result of the expression?';

function passVariables() {
  const randomNumber1 = getRandomNumber(1, 20);
  const randomNumber2 = getRandomNumber(1, 10);
  const randomOperationNum = getRandomNumber(0, 2);
  const arrOfOperations = ['+', '-', '*'];
  const randomOperation = arrOfOperations.at(randomOperationNum);
  const rightAnswer = String(makeOperation(randomNumber1, randomNumber2, randomOperation));
  const question = `${randomNumber1} ${randomOperation} ${randomNumber2}`;

  return { question, rightAnswer };
}
function startCalcGame() {
  startCommonGameLogic(greetingQuestion, passVariables);
}
export default startCalcGame;
