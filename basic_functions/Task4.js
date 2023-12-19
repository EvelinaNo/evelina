function arrayDestruct(numbers) {
    const [a, b, c] = numbers;
    return [a, b, c]
}

const numbersArray = [1, 2, 3];
const result = arrayDestruct(numbersArray);
console.log(result);