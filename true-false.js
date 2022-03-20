//falsy:
//false if variable declare to a false than it falsy.
// 0 if variable == 0 than its falsy.
// "" if variable declare a empty string than its falsy.
// undefined if variable not declare anything than its falsy.
// null if variable declare null than its falsy.
// NaN if variable declare not a number than also be a falsy.


//Truthy:

// "0", " ", [], {}.... all are truthy.


const age ='0';

if(age){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}