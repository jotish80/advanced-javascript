// function doSomething(x,y=4){
//     console.log(y);
// }
// doSomething(3,2);

// var num;
// console.log(num);
// const nums = [3, 4, 5, 6, 7, 8, 9];
// const output = [];

// for(let i = 0; i < nums.length; i++){
//     const elements = nums[i];
//     const result = elements * elements;
//     output.push(result);
// }
// console.log(output);
// const result = nums.map(x => x*x);
// console.log(result);

// const lower = nums.filter(x = x => x<8);
// console.log(lower);
// const search = nums.find(x = x => x<8);
// console.log(search);
// const output = [];
// const students = [
//     {id:10, name: 'sumon'},
//     {id:20, name: 'rajon'},
//     {id:30, name: 'mohon'},
//     {id:40, name: 'spondon'}
// ];
//  const names =students.map(x => x.name);
//  console.log(names);
// if('false'){
//     console.log('i am not false');
// }
// else{
//     console.log('i am false');
// }

// const name = ' ';
//0, '', undefined, null, NaN, false = false
// '0', ' ', [] = truth
// let name = 0;
// let dia name variable declear na korleo dekhabe true

// if(name || name == 0){// condition hobe true
//      console.log('condition is true');
// }
// else {
//     console.log('condition is false');
// }

// const nums = [3,4,5,6,7,8,9];
// const result = nums.map(x => x*x);
// console.log(result);
// const output =[];
// for(let i = 0; i < nums.length; i++){
//     const elements = nums[i];
//     const result = elements*elements;
//    output.push(result);
// }
// console.log(output);
// function square (element){
//     return element*element;
// }
// const result = nums.map(function(element){
//      return element*element;
// // })
// const bigger = nums.filter(x => x > 2);
// console.log(bigger);

const person = {
   firstName: 'jotish',
   lastName: 'sarker',
   getFullName: function(){
       console.log(this.firstName, this.lastName);
   }
}
console.log(person.firstName);