// on for loop
let data = [25, 4, 8, 75, 7, 8, 5, 58, 5];
let data1 = [25, 4, 8, 75, 7, 8, 5, 58, 5];
let data3 = [];

for (let i = 0; i < data.length; i++) {
  data3[i] = data[i];
}

for (let i = 0; i < data1.length; i++) {
  data3[data1.length + i] = data1[i];
}

console.log(data3);

// on while loop
let array1 = [1, 3, 5, 7, 9, 11, 12];
let array2 = [2, 4, 6, 8, 10];
let array3 = [];
let a1 = 0;
let a2 = 0;
let a3 = 0;
while (a1 < array1.length && a2 < array2.length) {
  if (array1[a1] < array2[a2]) {
    array3[a3] = array1[a1];
    a1++;
  } else {
    array3[a3] = array2[a2];
    a2++;
  }
  a3++;

  while (a1 < array1.length) {
    array3[a3] = array1[a1];
    a1++;
    a3++;
  }
}
console.log(array3);
