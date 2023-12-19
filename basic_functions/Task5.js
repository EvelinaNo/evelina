function combineArray(arr1 = [1, 2, 3], arr2 = [4, 5, 6]){
    return [...arr1, ...arr2]
}

const result = combineArray();
console.log(result);