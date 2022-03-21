const students = [
    {id: 1, name:"Anik"},
    {id: 2, name:"Kumar"},
    {id: 3, name:"Das"},
    {id: 4, name:"Prince"},
];

const output = [];

for(let i =0; i<students.length; i++){
    const element = students[i];
    const result = element.name;
    output.push(result);
}

const names = students.map(x => x.name);
const ids = students.map(y => y.id);

console.log(ids);