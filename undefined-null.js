let pakhi; //if declare this type of variable than its result undefined.
function add(num1, num2){
    console.log(num1 + num2);
    return
} //..............................if under function did not provided return or after return did not declare variable it also be a undefined.

function add(num1, num2){
    console.log(num1, num2);
}
const result = add(12);

const premik ={name:"premik purush", phone: 4542127}; 
console.log(premik.gf); //... when i didnot declare value in object but want those output or call it than its result be undefined.

let fun = undefined;
console.log(fun); //..........  if i declare a variable result is undefine than it also be undefined, but don't did this it is not for good developer sign.
