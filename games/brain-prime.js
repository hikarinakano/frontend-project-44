import randomize from "../src/randomize.js";
import gameSequence from "../src/index.js";

const greetingQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function brainLogic() {
    const { randomNumber1, _ } = randomize();
    const checkPrime = function () {
        if (randomNumber1 === 0 || randomNumber1 === 1) {
            return 'no';
        }
        else if (randomNumber1 === 2) {
            return 'yes';
        }
        const result = [];
        const row = [2, 3, 5, 7, 11];
        for (let i = 0; i <= row.length; i += 1) {
            if (randomNumber1 !== row[i] && randomNumber1 % row[i] === 0) {
                result.push('no');
            } result.push('yes');
        } if (result.includes('no')) {
            return 'no';
        } return 'yes';
    };
    const question = randomNumber1;
    const rightAnswer = `${checkPrime()}`;
    return { question, rightAnswer };
}

function startPrimeGame() {
    gameSequence(greetingQuestion, brainLogic);
}

export default startPrimeGame;