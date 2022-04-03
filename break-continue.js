const num = [1,-2,3,-4,5,-6,7,8,9];

for(let i = 0; i < num.length; i++){
    
    if(num[i] > 5){
        break;  // if break condition is true than loop is stop.
    }
    // console.log(num[i]);
}

for(let i = 0; i < num.length; i++){
    
    if(num[i] < 0){
        continue;  //if continue condition is true than loop skip the value and go with another value.
    }
    console.log(num[i]);
}