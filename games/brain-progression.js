import randomize from "../src/randomize.js";
import gameSequence from "../src/index.js";

const greetingQuestion = 'What number is missing in the progression?';

function brainLogic() {
    const { randomNumber1, randomNumber2 } = randomize();
    const progression = function createProgression(a, b) {
        const result = [];
        for (let i = 0, k = 1; k <= 10; i += 1, k += 1) {
            result.push(a + b * i);
        }
        return result;
    }
    const rightAnswer = `${progression(randomNumber1, randomNumber2)[Math.floor(Math.random() * 10)]}`;
    const question = progression(randomNumber1, randomNumber2).join(' ').replace(`${rightAnswer}`, '..');
    return { question, rightAnswer };
};

function startProgressionGame() {
    gameSequence(greetingQuestion, brainLogic)
}

export default startProgressionGame;