// 1
// let n = 50;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 == 1) {
//     console.log(i ** 2);
//   }
// }

// 2
// let n = 10;
// for (let i = 1; i <= n; i++) {
//   console.log(i ** 3);
// }

// 3

// 4
// let n = 30;
// let sum = 0;
// for (let i = 0; i <= 30; i++) {
//   sum = sum + i ** 2;
// }
// console.log(sum);

// 5
// for (let i = 1; i <= 20; i++) {
//   let couunter = 0;
//   for (let k = 1; k <= i; k++) {
//     if (i % k == 0) {
//       couunter++;
//     }
//     if (couunter == 2) {
//       console.log(i);
//     }
//   }
// }

// 6
// for (let i = 1; i <= 100; i++) {
//   if (i * 2 < 100) {
//     console.log(i * 2);
//   }
// }

// 7
// for (let i = 1; i <= 100; i++) {
//   if (i % 7 === 0 && i % 5 !== 0) {
//     console.log(i);
//   }
// }

// 8
// let n = 24;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   for (let k = 1; k <= n; k++) {
//     if (i % k == 0) {
//       sum = sum + i;
//     }
//   }
// }
// console.log(sum);

// 1
// let a = 70;
// switch (a) {
//   case 1:
//   case 2:
//   case 12:
//     console.log(`qish`);
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log(`bohor`);
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log(`yoz`);
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log(`kuz`);
//     break;
//   default:
//     console.log(`hecqaysi emas`);
//     break;
// }

// 2
// switch (a) {
//   case 90:
//   case 91:
//   case 92:
//   case 93:
//   case 94:
//   case 95:
//   case 96:
//   case 97:
//   case 98:
//   case 99:
//   case 100:
//     console.log(`A`);
//     break;
//   case 70:
//   case 71:
//   case 72:
//   case 73:
//   case 74:
//   case 75:
//   case 76:
//   case 77:
//   case 78:
//   case 79:
//   case 80:
//     console.log(`B`);
//     break;
//   case 60:
//   case 61:
//   case 62:
//   case 63:
//   case 64:
//   case 65:
//   case 66:
//   case 67:
//   case 68:
//   case 69:
//   case 70:
//     console.log(`B`);
//     break;
//   default:
//     if (a > 100) {
//       console.log(`A`);
//     } else if (a < 60) {
//       console.log(`F`);
//     }
// }

// 3
// function helloMyFreind(time) {
//   if (time >= 5 && time < 12) {
//     return "Xayrli tong";
//   } else if (time >= 12 && time < 17) {
//     return "Xayrli kun";
//   } else if (time >= 17 && time < 21) {
//     return "Xayrli kech";
//   } else {
//     return "Xayrli tun";
//   }
// }
// console.log(helloMyFreind(8));

// 4
// let a = 13;
// while (a > 12 && a < 12) {
//   console.log(`not`);
//   a = +prompt(`password`);
// }
// let a = 13;
// do {
//   console.log(`not`);
//   a = +prompt(`password`);
// } while (a > 12 && a < 12);

// 5
// let a = 5;
// while (a <= 20) {
//   if (a % 2 == 0) {
//     console.log(a);
//   }
//   a++;
// }
// do {
//   if (a % 2 == 0) {
//     console.log(a);
//   }
//   a++;
// } while (a <= 20);

// 6

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
// console.log(sum);

// 1
// let arr = [2, 2, 3];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
// console.log(sum);

// 2
// let result = [5, 8, 2, 10, 3];
// function bigIndex(arr) {
//   if (arr.length === 0) {
//     return undefined;
//   }
//   let big = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > big) {
//       big = arr[i];
//     }
//   }
//   return big;
// }
// console.log(bigIndex(result));

// 3
// let result = [5, 8, 2, 10, 3];
// function bigIndex(arr) {
//   if (arr.length === 0) {
//     return undefined;
//   }
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }
// console.log(bigIndex(result));

// 4
// let arr = [1, -2, 4, -5];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     arr[i] = arr[i] - arr[i] - arr[i];
//   }
// }
// console.log(arr);

// 5
// let arr = [1, 2, 4, 7, 4];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] * 2;
// }
// console.log(arr);

// 6
// let arr = [3, 6, 7, 4];
// let deleted = [];
// for (let i; i < arr.length; i++) {
//   if (arr[i] % 2 == 1) {
//     deleted.push(arr[i]);
//   }
// }
// console.log(deleted);

// 7
// let arr = [3, 6, 7, 4];
// let deleted = [];
// for (let i; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     deleted.push(arr[i]);
//   }
// }
// console.log(deleted);

// 8
// let arr = [1, 3, 5, 6];
// if (arr.includes(3)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 9
// let arr = [1, 2, 5, 3];
// console.log(arr.reverse());

// 10
// let arr = [1, 6, -2, 4, -3];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     arr2.push(arr[i]);
//   }
// }
// console.log(arr2);

// 11
// let arr = [1, 6, -2, 4, -3];
// for (let i = 0; i < arr.length; i++) {
//   arr[i]++;
// }
// console.log(arr);

// 12
// let arr = [1, 2, 3, 4];
// console.log(arr.indexOf(2));

// 13

// 14
// let arr = [1, 6, -2, 4, -3];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     arr2.push(arr[i]);
//   }
// }
// console.log(arr2);

// 15
// let arr = [1, 6, -2, 4, -3];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     arr2.push(arr[i]);
//   }
// }
// console.log(arr2);

// 16
// let arr = [1, 6, -2, 4, -3];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = `${arr[i]}`;
// }
// console.log(`${arr}`);

// 17
// let arr = [1, 6, -2, 4, -3];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] ** 2;
// }
// console.log(arr);

// 18
// let arr = [1, 6, -2, 4, -3];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   arr2.push(arr[i]);
// }
// console.log(arr2);

// 1
// function func(arg = []) {
//   let i = 5;
//   let k = 0;
//   while (i > arg.length) {
//     k++;
//     arg.push(k);
//   }
// }
// console.log(func());

// 2
// let arr = [1, 3, 4];
// arr.push(1, 2, 4);
// arr.pop();
// console.log(`${arr}`);

// 3
// let arr = [2, 4, 1];
// arr.unshift(2, 4, 2, 5);
// console.log(arr.reverse());

// 4
// let arr = [2, 4, 1];
// arr.unshift(2, 3);
// arr.shift();
// console.log(`${arr}`);

// 5
// let arr = [1, 4, 2, 5, 2];
// arr.pop();
// let sum = 0;
// for (const i of arr) {
//   sum = sum + i;
// }
// console.log(sum);

// 6
// let arr = [1, 2, 4, 6, 9];
// arr.push(1);
// arr.at(-1);
// console.log(arr);

// 7
// let arr1 = [1, 4, 6, 2, 6];
// arr1.unshift(5);
// let arr2 = [];
// arr2.splice(0, -1,  arr1);
// console.log(arr2.reverse());

// 8
// let arr = [4, 1, 2, 3];
// arr.shift();
// console.log(arr.join(`_`));

// 9
// let arr = [1, 3, 6, 2, 4];
// arr.push(2, 4);
// arr.unshift(3);
// console.log(arr.reverse().toString());

// 10
// let arr = [2, 4, 2, 5, 6];
// arr.pop();
// arr.shift();
// console.log(arr.reverse().toString());

// 11
// let arr = [2, 4, 2, 5, 6];
// console.log(arr.reverse().toString());
// arr.join(``);
// console.log(arr.length);

// 12
// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];
// let conarr = arr1.concat(arr2);
// let sliced = conarr.slice(1, conarr.length - 1);
// let result = sliced.length;
// console.log(result);

// 13
// let arr = [1, 4, 2, 5, 2, 5];
// arr.splice(2, 5);
// console.log(arr.join(`_`));
// console.log(arr.length);

// 14
// let arr = [1, 4, 2, 5, 7, 5, 3, 5, 3];
// arr.splice(3, arr.length - 1);
// console.log(arr.reverse());

// 15
