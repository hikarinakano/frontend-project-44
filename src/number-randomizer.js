// function that randomizes numbers from min(including) and max(including)

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default getRandomNumber;
