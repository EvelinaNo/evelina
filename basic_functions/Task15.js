const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
   setTimeout(() => {
console.log(element)
   }, (i+1) * 1000
   )
}