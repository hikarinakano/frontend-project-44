import gameSequence from '../src/index.js';
import randomize from '../src/randomize.js';

const greetingQuestion = 'What is the result of the expression?';

function brainLogic() {
  const { randomNumber1, randomNumber2 } = randomize();
  const question = `${randomNumber1} + ${randomNumber2}`;
  const rightAnswer = `${randomNumber1 + randomNumber2}`;
  return { question, rightAnswer };
}
function startCalcGame() {
  gameSequence(greetingQuestion, brainLogic);
}
export default startCalcGame;
