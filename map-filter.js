const numbers = [3,5,7,9,11,13,15];

// const output = [];

// for(let i =0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// function square (element){
//     return element * element;
// }

// numbers.map(function(element, index, array){
//     console.log(element, index, array);
// })

// const result = numbers.map(function(element){
//     return element * element;
// })

// const square = element => element * element;
// const square = x => x*x;

// const result = numbers.map(x => x*x);.... map 

const bigger = numbers.filter(x => x > 10); // This is filter using arrow function. filter give result in array also if result is not found by the condition.

const isThere = numbers.find(x => x > 10); // This is find using arrow function.find give just one element if his condition is true. 


console.log(isThere);