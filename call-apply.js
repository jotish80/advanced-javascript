 const normalPerson = {
     firstName: 'jotish',
     lastName: 'sarker',
     salary: 15000,
     getFullName: function(){
         console.log(this.firstName + this.lastName);
     },
     chargeBill: function(amount, tips, kaffara){
         console.log(this);
         this.salary = this.salary - amount - tips - kaffara;
         return this.salary;
     }
 }
 const boyatiPerson ={
     firstName: 'kuddus',
     lastName: 'boyati',
     salary: 10000
 }
 const fokirPerson ={
    firstName: 'lalmiah',
    lastName: 'fokir',
    salary: 20000
}
//normalPerson.chargeBill();
// const boyatiBill = normalPerson.chargeBill.bind(boyatiPerson);
// boyatiBill(1000);
// boyatiBill(1000);
// console.log(boyatiPerson.salary);

// const fokirBill = normalPerson.chargeBill.bind(fokirPerson);
// fokirBill(1000);
// console.log(fokirPerson.salary);

// normalPerson.chargeBill.call(fokirPerson, 1000, 1000, 1000);
// console.log( fokirPerson.salary);
 
normalPerson.chargeBill.apply(boyatiPerson, [1000, 1000, 500]);
console.log(boyatiPerson.salary);