function generateRandomNumberInRange() {
    return Math.floor(Math.random() * 100) + 1;
}

const randomNumber = generateRandomNumberInRange();
console.log(randomNumber);