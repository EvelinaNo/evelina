const numbers = [1, 2, 3];

 function calculateArraySum(numbers, callback) {
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return callback(sum);
 }

 function squareSum(sum) {
    return sum * sum;
}

const result = calculateArraySum([1, 2, 3], squareSum);
console.log(result);