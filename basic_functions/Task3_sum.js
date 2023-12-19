function sumVariableNumbers (...numbers) {
    let result = 0;

for (let number of numbers){
    result += number;
}

return result;
}

const sum = sumVariableNumbers (10, 5, 10);
console.log (sum);