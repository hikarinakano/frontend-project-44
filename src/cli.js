import readlineSync from 'readline-sync';
function greeting (name) {
const userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');}

export { greeting };
