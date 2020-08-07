let bounus = 20; // GLOBAL SCOPE YOU CAN ACCESS FROM OUTSIDE

function sum (first , second){
    let result = first + second+ bonus;// GLOBAL SCOPE CALLING FROM OUTSIDE
    // console.log(bonus); //(LOCAL SCOPE you can access becoz you ar call result inside the function)
    return result;
}
const output = sum(3, 7);
// console.log(result);//(SCOPE GLOBAL) it will give error coz you cant eccess value from out side !
console.log(output);

// let or for blocks : you cant access from outside!
// var : you can access from outside hoest kore fele tainna bair kor hoesting kore!
// hoesting korle pura jinistake upore utheabe na shudhu declartion er part take upore uthabe value jeta set korcho sei ta jaiga moto thakbe
 // let and const onek beshi orginized scope variable braket er vitor thake, 
 // var is more flaxible