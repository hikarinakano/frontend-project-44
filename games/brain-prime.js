import randomize from '../src/randomize.js';
import gameSequence from '../src/index.js';

const greetingQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function brainLogic() {
  const { randomNumber1 } = randomize();
  function checkPrime() {
    if (randomNumber1 === 0 || randomNumber1 === 1) {
      return 'no';
    }
    if (randomNumber1 === 2) {
      return 'yes';
    }
    const row = [2, 3, 5, 7, 11];
    for (let i = 0; i <= row.length;) {
      if (randomNumber1 !== row[i] && randomNumber1 % row[i] === 0) {
        return 'no';
      } i += 1;
    } return 'yes';
  }
  const question = randomNumber1;
  const rightAnswer = `${checkPrime()}`;
  return { question, rightAnswer };
}

function startPrimeGame() {
  gameSequence(greetingQuestion, brainLogic);
}

export default startPrimeGame;
