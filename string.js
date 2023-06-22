let array = [25, -78, 45, 25, 78, 36, 48];
for (let i = 0; i < array.length; i++) {

    for (let n = 0; n < i; n++) {
   console.log(array)
        
     if (array[i] < array[n]) {
        let temp = array[i];
        array[i] = array[n];
        array[n] = temp;

     }
        
    }
   }
   console.log(array)
