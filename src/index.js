import readlineSync from 'readline-sync';

function startCommonGameLogic(greetingQuestion, passVariables) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(greetingQuestion);

  const gameRoundsAmount = 3;

  for (let round = 1; round <= gameRoundsAmount; round += 1) {
    const { question, rightAnswer } = passVariables();
    console.log(`Question: ${question}`);
    const userInput = readlineSync.question('Your answer:');
    if (userInput !== rightAnswer) {
      console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}

export default startCommonGameLogic;
