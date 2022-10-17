import randomize from '../src/randomize.js';
import gameSequence from '../src/index.js';

const greetingQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function checkPrime(number) {
  if (number === 0 || number === 1) {
    return 'no';
  }
  if (number === 2) {
    return 'yes';
  }
  const row = [2, 3, 5, 7, 11];
  for (let i = 0; i <= row.length;) {
    if (number !== row[i] && number % row[i] === 0) {
      return 'no';
    } i += 1;
  } return 'yes';
}

function brainLogic() {
  const { randomNumber1 } = randomize();
  const question = randomNumber1;
  const rightAnswer = `${checkPrime(randomNumber1)}`;
  return { question, rightAnswer };
}

function startPrimeGame() {
  gameSequence(greetingQuestion, brainLogic);
}

export default startPrimeGame;
