function concatenateArrays (arr1, arr2) {
return [...arr1, ...arr2];
}
const concatenatedArray = concatenateArrays([1, 2, 3], [4, 5, 6]);
console.log(concatenatedArray);