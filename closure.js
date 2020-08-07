function stopWatch (){
   let count = 0;
   return function(){
    count++;
    return count;
   }
}

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock2());
 // kono ekta function er vitore jodi arekta function thake 2nd function jodi use kori ba return kori  taile ekta closed environment toiri kore fele ebong nijera ekta external variable reference kore!
 // thatjsdude website e search korte hobe clear koar jonnno.
 