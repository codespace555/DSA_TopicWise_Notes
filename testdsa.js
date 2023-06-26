// replace
let data = [12, 52, 85, 45, 75, 9, 5];
let postion = 2;
let replace = 88;
// for (let i = postion; i < data.length; i++) {
//   data[i] = replace;
//   console.log(data);
//   break;
// }

// insert
for (let i = data.length-1; i > 0; i--) {
  if (i >= postion) {
    data[i + 1] = data[i];
  }
  if (i == postion) {
    data[i] = replace;
  }
  console.log(data);
}
