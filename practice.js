function doSomething(x,y=4){
    console.log(y);
}
doSomething(3,2);

var num;
console.log(num);
const nums = [3, 4, 5, 6, 7, 8, 9];
const output = [];

for(let i = 0; i < nums.length; i++){
    const elements = nums[i];
    const result = elements * elements;
    output.push(result);
}
console.log(output);
const result = nums.map(x => x*x);
console.log(result);

const lower = nums.filter(x = x => x<8);
console.log(lower);
const search = nums.find(x = x => x<8);
console.log(search);
const output = [];
const students = [
    {id:10, name: 'sumon'},
    {id:20, name: 'rajon'},
    {id:30, name: 'mohon'},
    {id:40, name: 'spondon'}
];
 const names =students.map(x => x.name);
 console.log(names);
if('false'){
    console.log('i am not false');
}
else{
    console.log('i am false');
}