const nums = [1,2,3,4,5,6,7,8,9];
const part = nums.slice(2, 6); // its start with index end with index 

const remove = nums.splice(2, 3, 44, 55); // its start with index and end with how many index delete count and also put some new index
// console.log(remove);
// console.log(nums);

const together = nums.join(", "); // whit join can joined all element or index in one ny one.
console.log(together);