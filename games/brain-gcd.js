import gameSequence from "../src/index.js";
import randomize from "../src/randomize.js";

const greetingQuestion = 'Find the greatest common divisor of given numbers.';
function brainLogic() {
    const { randomNumber1, randomNumber2 } = randomize();
    const question = `${randomNumber1} ${randomNumber2} `;

    const rightAnswer = `${gcd(randomNumber1, randomNumber2)}`;

    return { question, rightAnswer };
}

function gcd(first, second) {

    if (second === 0) {
        return first;
    }
    return gcd(second, first % second);
};

function startGcdGame() {
    gameSequence(greetingQuestion, brainLogic);
}

export default startGcdGame;
