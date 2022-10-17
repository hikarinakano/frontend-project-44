function randomize() {
    const randomNumber1 = Math.floor(Math.random() * 30);
    const randomNumber2 = Math.floor(Math.random() * 20);
    return { randomNumber1, randomNumber2 };
}

export default randomize;