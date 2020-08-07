// const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);
const numbers = [3, 4, 5, 6, 7, 8, 9];

// function square (element){
//     return element * element;
// }

// const square = element => element * element;
// const square = x => x * x;

// const result = numbers.map(function(element){
//     return element * element;
// })
// const result = numbers.map(x => x * x);
//  console.log(result);
// FILTER :  use kora hoy olpo kichu select korar jonno

// const bigger = numbers.filter (x => x < 5);
// console.log(bigger); // boro number khuje ber kore(choto chaile choto khuje ber korbe)

const isThere = numbers.find(x => x> 5);
console.log(isThere); // FIND shudhu prothom number ta khuje ber korbe;
// MAP hoche kono ekta loop er modhe kono ekta elemnte ke niye kichu ekta kora , korar por result hishebe arekta arrray diye dibe
