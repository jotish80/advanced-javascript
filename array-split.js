const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const par = nums.slice(2, 5);
const removed = nums.splice(2,3);
console.log(par);// pauruti dui dik theke kete majkhan theke kata ongsotuku kete neya
console.log (nums);//slice shudhu kete niye dekhai kata ongso tuku, kintu main array ta thik ager moto thake.
console.log(removed);//splice 2 ar 3 remove kore fele kintu tumi chaile inject korte paro kintu jei jaiaga theke kete feleche sei jaigai eshe pore
//splice remove korte paro chaile injecte kora jai same jaigai
const together = nums.join('');
console.log(together);// shob gula array eksathe kore fele. tumi chaile space ba word add korte paro
