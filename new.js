class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const smartPerson = new Person('jotish', 'sarker', 20000);// NEW DIYE NOTUN CLASS THEKE OBJECT BANANO
console.log(smartPerson);
const cleverPerson = new Person ('mobarok', 'hossain', 30000);
console.log(cleverPerson);
// MONE RAKHTE HOBE CLASS TOIRI KORTE GELE CLASS NAME ER PROTHOM OKKHON BORO HATER HOBE
//TARPOR SECOND BRACKET DIYE CONSTRUCTOR PORE (PARAMETER), TARPOR PARAMETER ONUJAI THIS.FIRSTNAME OR SOMTHING
