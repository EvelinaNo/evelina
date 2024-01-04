const originalArray = ["apple", "banana", "cherry"];
function convertArrayToUppercase(array) {
    return array.map(str => str.toUpperCase());
}
const uppercaseArray = convertArrayToUppercase(originalArray);
console.log(uppercaseArray);
