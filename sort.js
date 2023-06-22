var nums = [10, 5, 40, 25, -3412,4212, -107.578, 97.453];

function sortNumber(a,b){
   return a - b;
}

console.log( nums.sort(sortNumber) );