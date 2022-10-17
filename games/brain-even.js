import gameSequence from '../src/index.js';


const greetingQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
function brainLogic() {
    var question = Math.floor(Math.random() * 20);
    const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
    return { question, rightAnswer };
}


function startEvenGame() {
    gameSequence(greetingQuestion, brainLogic)
}
export default startEvenGame;
