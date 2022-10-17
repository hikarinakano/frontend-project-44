import readlineSync from 'readline-sync'

function gameSequence(greetingQuestion, brainLogic) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi ${name}!`);
  console.log(greetingQuestion)

  for (let round = 1; round <= 3; round += 1) {
    const { question, rightAnswer } = brainLogic();
    const userInput = readlineSync.question(`Question: ${question}\nYour answer:`);
    if (userInput !== rightAnswer) {
      console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');

  }
  console.log(`Congratulations, ${name}!`);
}

export default gameSequence;