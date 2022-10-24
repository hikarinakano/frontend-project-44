import startCommonGameLogic from '../index.js';
import getRandomNumber from '../number-randomizer.js';

const arrOfOperations = ['+', '-', '*'];

function makeOperation(number1, number2, operation) {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
  }

}

const gamesDescription = 'What is the result of the expression?';

function buildRoundsData() {
  const randomNumber1 = getRandomNumber(1, 20);
  const randomNumber2 = getRandomNumber(1, 10);
  const randomOperationNum = getRandomNumber(0, (arrOfOperations.length - 1));
  const randomOperation = arrOfOperations[randomOperationNum];
  const rightAnswer = String(makeOperation(randomNumber1, randomNumber2, randomOperation));
  const question = `${randomNumber1} ${randomOperation} ${randomNumber2}`;

  return { question, rightAnswer };
}
function startCalcGame() {
  startCommonGameLogic(gamesDescription, buildRoundsData);
}
export default startCalcGame;
