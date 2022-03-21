let bonus = 20;

function add(first, second){
    let result = first + second+ bonus;
    if(result >30){
        let price = "Price is: " + 30;
        console.log(price);
    }
    return result;
}

const output = add(12,15);
// console.log(output);