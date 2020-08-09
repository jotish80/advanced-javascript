
let name = 'kuddus';
function add (num1, num2){
     let result = num1 + num2;
    console.log('name inside local scope', name);
    function double (num){
        return num * 2;
    }
    let total = double(result);
    return total;
}
console.log('name outside global scope', name);
let sum = add(12, 13);
console.log(sum);
console.log('result outside global scope', result);

