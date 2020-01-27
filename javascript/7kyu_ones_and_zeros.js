const binaryArrayToNumber = arr => {
   let sum = 0;
   for (const [index, element] of arr.reverse().entries()){
     if (element == 1){
       sum += 2**index;
     };
   };
   return sum;
};