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
//   a = +prompt(`passarr`);
// }
// let a = 13;
// do {
//   console.log(`not`);
//   a = +prompt(`passarr`);
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
let res;
// FOREACH
// 1
// let arr2 = [];
// let arr1 = [1, 3, 4, 5];
// res = arr1.forEach((value) => {
//   arr2.push(value * 2);
// });
// console.log(arr2);

// 2
// let arr2 = [];
// let arr1 = [1, -3, 4, 5];
// res = arr1.forEach((value) => {
//   if (value > 0) {
//     arr2.push(value);
//   }
// });
// console.log(arr2);

// 3
// let arr2 = [];
// let arr1 = [1, -3, 4, 5];
// res = arr1.forEach((value) => {
//   value = value * 2;
//   arr2.push(value);
// });
// console.log(arr2);

// 4
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// arr.forEach(function (value) {
//   sum = sum + value;
// });
// console.log(sum);

// FILTER

// 1
// let arr2 = [];
// let arr1 = [1, -3, 4, 5];
// res = arr1.filter((value) => {
//   if (value > 0) {
//     arr2.push(value);
//   }
// });
// console.log(arr2);

// 2
// let arr2 = [];
// let arr1 = [1, -3, 4, 5];
// res = arr1.filter((value) => {
//   if (value % 2 == 0) {
//     arr2.push(value);
//   }
// });
// console.log(arr2);

// 3
// let arr2 = [];
// let arr1 = [`not`, `blmpoint`, `btc`, `toncoin`, `usdt`];
// res = arr1.filter((value) => {
//   if (value.length > 5) {
//     arr2.push(value);
//   }
// });
// console.log(arr2);

// 4
// let users18 = [];
// let users = [
//   { name: `Alex`, age: 21 },
//   { name: `Steeve`, age: 15 },
//   { name: `John`, age: 18 },
// ];
// res = users.filter((value, index) => {
//   if (value.age >= 18) {
//     users18.push(value);
//   }
// });
// console.log(users18);

// MAP
// 1
// let arr = [2, 5, 7, 3];
// res = arr.map((value) => {
//   return value * 2;
// });
// console.log(res);

// 2
// let arr = [2, 5, 7, 3];
// res = arr.map((value) => {
//   return value + 5;
// });
// console.log(res);

// 3
// let arr = [`dodge`, `chevrolet`, `corvette`];
// res = arr.map((value) => {
//   return value.toUpperCase();
// });
// console.log(res);

// 4
// let arr = [2, 5, 7, 3];
// res = arr.map((value) => {
//   return value ** 2;
// });
// console.log(res);

// SOME/EVERY

// 1
// let arr = [1, 2, 3, -5];
// res = arr.some((value) => {
//   return value < 0;
// });
// console.log(res);

// 2
// let arr = [`dodge`, `toyota`, `peel`, `tahoe`, `ford mustang`];
// res = arr.some((value) => {
//   return value.length > 10;
// });
// console.log(res);

// 3
// let arr = [1, 2, 3, -5];
// res = arr.every((value) => {
//   return value < 0;
// });
// console.log(res);

// 4

// Umumiy
// 1
// let arr = [2, 4, 1, 5];
// console.log(arr.includes(2));

// 2
// let arr = [2, 4, 1, 5];
// console.log(arr.indexOf(2));

// 3
// let arr = [2, 1, 4, 1, 5];
// console.log(arr.lastIndexOf(1));

// 4
// let arr = [2, 1, 4, 1, 5];
// res = arr.find((value) => {
//   return value >= 4;
// });
// console.log(res);

// 5
// let arr = [2, 1, 4, 1, 5];
// res = arr.findIndex((value) => {
//   return value >= 4;
// });
// console.log(res);

// 6
// let arr = [2, 1, 4, 1, 5];
// res = arr.findLast((value) => {
//   return value >= 4;
// });
// console.log(res);

// 7
// let arr = [2, 1, 4, 1, 5];
// res = arr.findLastIndex((value) => {
//   return value >= 4;
// });
// console.log(res);

// 8
// let arr = [2, 1, 4, 1, 5];
// console.log(arr.reverse());

// 9
// let arr = [2, 1, 4, 1, 5];
// let = arr2 =[]
// res = arr.sort((a, b) => {
//   return b - a;
// });
// console.log(res);

// 10
// let arr = [2, 1, 4, 1, 5];
// res = arr.forEach((value) => {
//   console.log(value * 2);
// });

// 11
// let arr = [2, 1, -4, 1, 5];
// let arr2 = [];
// res = arr.filter((value) => {
//   if (value > 0) {
//     arr2.push(value);
//   }
// });
// console.log(arr2);

// 12
// let arr = [2, 1, -4, 1, 5];
// res = arr.map((value) => {
//   return value ** 2;
// });
// console.log(res);

// 13
// let arr = [2, 1, -4, 1, 5];
// res = arr.some((value) => {
//   return value < 0;
// });
// console.log(res);

// 14
// let arr = [2, 1, -4, 1, 5];
// res = arr.every((value) => {
//   return value > 0;
// });
// console.log(res);

// 15
// let arr = [2, 1, -4, 1, 5];
// res = arr.filter((value) => {
//   if (value * 3 > 10) {
//     return value * 3;
//   }
// });
// console.log(res);

// const car = [
//   { name: "Matiz", year: 2020, weight: 1250 },
//   { name: "Spark", year: 2010, weight: 1250 },
//   { name: "buggati", year: 2005, weight: 3250 },
//   { name: "Tank", year: 2007, weight: 10000 },
// ];
// let sum = 0;
// res = car.filter((value) => {
//   if (value.weight >= 2000) {
//     return (sum += value.weight);
//   }
// });
// console.log(sum);

// let sum = 0;
// function sumOfArray(arr1, arr2, arr3) {
//   res = arr1.forEach((value) => {
//     sum += value;
//   });
//   res += arr2.forEach((value) => {
//     sum += value;
//   });
//   res += arr3.forEach((value) => {
//     sum += value;
//   });
//   return sum;
// }
// console.log(sumOfArray([2, 4, 5], [3, 6, 4], [2, 5, 3]));

//

// let user = {
//   name: `pomidorchik`,
//   age: 15,
//   family: {
//     mom: `ogurchik`,
//     father: `kartoshkin`,
//     aboutFamily: function () {
//       console.log(this);
//     },
//   },
//   about: function () {
//     console.log(`i'm pomidorchik`);
//   },
// };
// user.family.aboutFamily();

//

// let str = `       bombo klab      `;
// console.log(str.length);
// console.log(str.charAt(2));
// console.log(str.at(4));
// console.log(str.charCodeAt(9));
// console.log(str.slice(2, 4));
// console.log(str.substring(2, 4));
// console.log(str.substr(0, 4));
// console.log(str.trimEnd());

// 1
// let str = `str`;
// res = (str) => {
//   return str.at(-1);
// };
// console.log(res(str));

// 2
// let str = `str`;
// res = (str) => {
//   return str.at(str.length / 2);
// };
// console.log(res(str));

// 3
// let str = `str`;
// res = (str) => {
//   return str.charCodeAt(0);
// };
// console.log(res(str));

// 4
// let str = `sweg`;
// function getStringLengthDescription(str) {
//   if (str.length >= 10) {
//     console.log(`Uzoq string`);
//   } else {
//     console.log(`Qisqa string`);
//   }
// }
// getStringLengthDescription(str);

// 5
// let str = `sweg`;
// function getCharCodes(str) {
//   for (let i = 0; i < str.length; i++) {
//     console.log(str.charCodeAt(i));
//   }
// }
// getCharCodes(str);

// 1
// let index = ` string`;
// function getFirstThreeChars(str) {
//   return str.slice(1, 4);
// }
// console.log(getFirstThreeChars(index));

// 2
// let index = `string messenger`;
// function getLastFiveChars(str) {
//   return str.slice(str.length - 5, str.length);
// }
// console.log(getLastFiveChars(index));

// 3
// let index = `string messenger`;
// function getLastFiveChars(str) {
//   return str.slice(str.length / 2 - 2, str.length / 2 + 3);
// }
// console.log(getLastFiveChars(index));

// 4
// let index = `string messenger`;
// function getThreeCharsFromFifthIndex(str) {
//   return str.slice(6, 9);
// }
// console.log(getThreeCharsFromFifthIndex(index));

// 5
// let index = `string messenger`;
// function getFirstTenChars(str) {
//   return str.slice(0, 10);
// }
// console.log(getFirstTenChars(index));

// 6
// let index = `string messenger`;
// function getLastThreeChars(str) {
//   return str.slice(str.length - 3, str.length);
// }
// console.log(getLastThreeChars(index));

// 7
// let index = `string messenger`;
// function getSubstringFromSecondIndex(str) {
//   return str.substring(2, str.length);
// }
// console.log(getSubstringFromSecondIndex(index));

// 1
// function convertToUpperCase(str) {
//   str = "Hello World!";
//   let result = str.toUpperCase();
//   console.log(result);
// }
// convertToUpperCase();

// 2
// function convertToLowerCase(str) {
//   str = "Hello World!";
//   let result = str.toLowerCase();
//   console.log(result);
// }
// convertToLowerCase();

// 3
// let index1 = `sixty `;
// let index2 = `nine`;
// function concatStrings(str1, str2) {
//   return str1.concat(str2);
// }
// console.log(concatStrings(index1, index2));

// 4
// let index2 = `     nine                                       `;
// function trimString(str) {
//   return str.trim();
// }
// console.log(trimString(index2));

// 5
// let index = ``;
// function trimString(str) {
//   return str.trim();
// }
// console.log(trimString(index));

// 6
// let index = `string`;
// function padStringEnd(str) {
//   return str.padEnd(4);
// }
// console.log(padStringEnd)

// 7
// let index1 = `sixty `;
// function trimEndStrings(str1) {
//   return str1.trimEnd();
// }
// console.log(EndStrings(index1));

// 8
// let index1 = `sixty `;
// function trimStartStrings(str1) {
//   return str1.trimStart();
// }
// console.log(trimStartStrings(index1));

// 9
// let index1 = `sixty `;
// function trimStartStrings(str1) {
//   return str1.trimStart();
// }
// console.log(trimStartStrings(index1));

// 10
// let index = `dimik     `;
// function padStringWithSpacesEnd(str) {
//   return str.padEnd();
// }
// console.log(padStringWithSpacesEnd(index));

// 1
// let index = `peach `;
// let num = 12;
// function repeatString(str, num) {
//   return str.repeat(num);
// }
// console.log(repeatString(index, num));

// 2
// let str = `apple peach`;
// function replaceAppleWithOrange(str) {
//   return str.replace(`apple`, `orange`);
// }
// console.log(replaceAppleWithOrange(str));

// 3
// let str = `a b c`;
// function replaceFirstSmallAToBigA(str) {
//   return str.replace(`a`, `A`);
// }
// console.log(replaceFirstSmallAToBigA(str));

// 4
// let str = `dog cat cat kapibara`;
// function replaceAllCatsWithDogs(str) {
//   return str.replaceAll(`cat`, `dog`);
// }
// console.log(replaceAllCatsWithDogs(str));

// 5
// let str = `ae born care`;
// function replaceAllSmallEToBigE(str) {
//   return str.replaceAll(`e`, `E`);
// }
// console.log(replaceAllSmallEToBigE(str));

// 6
// let arr = `Array`;
// function splitBySpaces(str) {
//   return str.split(" ");
// }
// console.log(splitBySpaces(arr));

// 7
// let arr = `Array, string`;
// function splitByCommas(str) {
//   return str.split(",");
// }
// console.log(splitByCommas(arr));

// 8
// let arr = `Array, string`;
// function splitByEachCharacter(str) {
//   return str.split("");
// }
// console.log(splitByEachCharacter(arr));

// 9
// let arr = `Array, string,`;
// function splitByDelimiter(str) {
//   return str.split(`,`);
// }
// console.log(splitByDelimiter(arr));

// 10
// let arr = `Array, string,`;
// function processString(str) {
//   return str.replaceAll(`a`, `*`).split("");
// }
// console.log(processString(arr));

// 1
// let arr = `Array string`;
// function processString(str = ``) {
//   return `${str.toUpperCase().split("")}`;
// }
// console.log(processString(arr));

// 2
// let arr1 = [`string`, `arr`];
// function joinArrayWithLength(arr = ``) {
//   let length1 = arr[0].length;
//   let lendth2 = arr[1].length;
//   arr.toString();
//   console.log(arr, length1, lendth2);
// }
// joinArrayWithLength(arr1);

// 3
// let arr = [`big`, `String`];
// function cleanArrayToString(str) {
//   let res = str[0] + str[1];
//   return res.trim();
// }
// console.log(cleanArrayToString(arr));

// 4
// let arr = `stringArr`;
// function stringToUnicodeArray(str) {
//   str.split("");
//   for (const i of str) {
//     console.log(i.charCodeAt());
//   }
// }
// stringToUnicodeArray(arr);

// 5
// let str = `stirng`;
// function includesCat(str = ``) {
//   return str.includes(`cat`);
// }
// console.log(includesCat(str));

// 6
// let str = `stirng`;
// function includes2024(str = ``) {
//   return str.includes(`2024`);
// }
// console.log(includes2024(str));

// IIFE

// 1
// (function () {
//   console.log(`hello`);
// })();

// function consoleHello() {
//   return `hello `;
// }
// function resOfConsoleHello() {
//   return consoleHello() + `world`;
// }
// console.log(resOfConsoleHello());

// res = (function () {
//   let result = `hello world`;
//   return result;
// })();

// console.log(res);

// (function () {
//   let sum = 0;
// })();

// 2
// PURE FUNC
// let arr = [1, 4, 2, 5];
// function couplearrOfArr(arg) {
//   let result = arg.filter((value) => value % 2 === 0);
//   return result;
// }
// console.log(couplearrOfArr(arr));

// function sumOfArr(arr) {
//   let res = arr.reduce((acc, value) => acc + value, 0);
//   return res;
// }
// console.log(sumOfArr([1, 4, 2, 5]));

// function arr5Value(num = 6) {
//   return num ** 5;
// }
// console.log(arr5Value());

// "Pure function" (oddiy funksiya) JavaScript va boshqa dasturlash tillarida amaliyotda juda muhim muddat hisoblanadi. Bu funksiya quyidagi ikkita asosiy xususiyatga ega bo'lishi kerak:

// 1
//  Tasir etmaslik (Side-effect-free): Funksiya dastlabki kiritilgan argumentlarni o'zgartirmasligi kerak va boshqa funksiyalar yoki tizim resurslariga ta'sir ko'rsatmasligi kerak (masalan, fayllarni o'zgartirish, global o'zgaruvchilarni o'zgartirish va hokazo).

// 2
// Qaytish qiymatlarining aniq bo'lishi (Deterministic): Berilgan bir xolat uchun funksiya har doim bir vaqtning o'zida bir vaqtda o'zgaruvchi natijalarni qaytarishi kerak. Buning ma'noni, funksiya bir xolat uchun har doim bir vaqtning o'zida bir vaqtda o'zgaruvchi qaytaradi.

// CALLBACK
// let num = 1;
// doSomething(() => {
//   num = 2;
// });
// console.log(num);
//
// console.log(`Через секунду напечатаю Привет`);
// setTimeout(
//   function (greeting) {
//     console.log(` ${greeting})`);
//   },
//   1000,
//   "Привет"
// );
//
// Callback funksiyalar, aslida, boshqa funksiyaga argument sifatida uzatilgan funksiya bo'lib, bitta operatsiya tugaganda avtomatik ravishda ishga tushadi. Bu funksiyalar oddiy funksiyalardan farqli ravishda bo'lib, ular o'zgaruvchilar orqali olinadi va ularni ishga tushirish uchun funksiya ichida chaqiriladi.

// RECURSION
// function recurse(n) {
//   if (n < 1) {
//     return;
//   }
//   console.log(n);
//   recurse(n - 1);
// }
// recurse(100);

// function sumOfArray(arr, i = 0) {
//   if (i >= arr.length) {
//     return 0;
//   }
//   return arr[i] + sumOfArray(arr, i + 1);
// }
// console.log(sumOfArray([10, 20, 30]));

// function recurse(n, n2) {
//   if (n < 1) {
//     return;
//   }
//   console.log(n2 ** n);
//   recurse(n - 1, n2);
// }
// recurse(5, 6);

// function recurse(n, n2, sum = 0) {
//   if (n < 1) {
//     return;
//   } else {
//     sum = sum + n2 ** n;
//     recurse(n - 1, n2, sum);
//   }
//   console.log(sum);
// }
// recurse(5, 6);

// OBJECT
// let obj = {
//   name: `Zhitel__gigachad`,
//   chikibambunies: 14,
//   cows: 6,
//   peegs: 16,
//   vilagers: 3,
// };
// for (const key in obj) {
//   let res = obj[key];
//   console.log(key, `:`, res);
// }

// let sum = 0;
// let obj = {
//   chikibambunies: 14,
//   cows: 6,
//   peegs: 16,
//   vilagers: 3,
// };
// for (const key in obj) {
//   let res = obj[key];
//   sum += res;
// }
// console.log(sum);

// let obj = {
//   name: `Zhitel__gigachad`,
//   chikibambunies: 14,
//   cows: 6,
//   peegs: 16,
//   vilagers: 3,
// };
// let result = [];
// for (const key in obj) {
//   let res = obj[key];
//   result.push(key, res);
// }
// console.log(result);

// 1
// let arr = [1, 4, 2, 5, 6];
// let centerOfArray = arr.length / 2;
// function threeItems(arr, center) {
//   return arr.slice(center - 1, center + 2);
// }
// console.log(threeItems(arr, centerOfArray));

// 2

// 3
// let arr1 = [1, 3, 1, 2, 5];
// let arr2 = [1, 4, 2, 5];
// let arr3 = [5, 8, 4, 9];
// function threeArraies(arr1, arr2, arr3) {
//   return arr2.concat(arr3, arr1);
// }
// console.log(threeArraies(arr1, arr2, arr3));

// 4
// let arr = [1, 4, 2, 5];
// let n = 3;
// function indexOfNum(arr, n) {
// // indexOf boolean bolmagani uchun includes ishlatdim
//   if (arr.includes(n)) {
//     return n ** 3;
//   } else {
//     return false;
//   }
// }
// console.log(indexOfNum(arr, n));

// 5
// let arr = [2, 4, 2, 5];
// let n = 2;
// (function (arr, n) {
//   console.log(arr.lastIndexOf(n));
// })(arr, n);

// 6
// let arr1 = [1, 3, 6, 9];
// let arr2 = [1, 2, 3, 4];
// let index = 3;
// (function (arr1, arr2, n) {
//   if (arr1.includes(n) && arr2.includes(n)) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// })(arr1, arr2, index);

// 7
// let arr = [1, 4, 2, 5];
// let n = 3;
// function indexOfNum(arr, n) {
//   return arr.includes(n);
// }
// console.log(indexOfNum(arr, n));

// 5-OY 1-DARS
// 1
// let fruits = ["apple", "banana", "grape", "orange", "kiwi", "pear"];
// let filteredFruits = fruits.filter((arr) => arr.length <= 5);
// let result = filteredFruits.map(
//   (arr) => arr.charAt(0).toUpperCase() + arr.slice(1)
// );
// console.log(result);

// 2
// let students = [
//   { name: "Maha", age: 19 },
//   { name: "Dimik", age: 22 },
//   { name: "Bob", age: 43 },
// ];
// let result = students.find((student) => student.age > 20);
// if (result) {
//   let res = result.name.charAt(0).toUpperCase() + result.name.slice(1);
//   console.log(res);
// } else {
//   console.log(false);
// }

// 3
// let vegetables = [
//   { name: "Peper", price: 120 },
//   { name: "Tomato", price: 80 },
//   { name: "Patato", price: 150 },
//   { name: "Cucumber", price: 90 },
// ];

// res = vegetables
//   .filter((value) => value.price > 100)
//   .reduce((acc, value) => acc + value.price, 0);
// console.log(res);

// 4
// (function (arr) {
//   let trueTrue = arr.every((number) => number > 0);
//   let BigNum = arr.some((number) => number > 100);
//   if (trueTrue) {
//     if (BigNum) {
//       console.log(true, true);
//     } else {
//       console.log(true);
//     }
//   } else {
//     console.log(false);
//   }
// })([15, 30, 200]);

// 5
// let arr = [1, 2, 3, 4, 5];
// function res(arr) {
//   let squaredArray = [];
//   arr.forEach((element) => {
//     let square = element * element;
//     squaredArray.push(square);
//   });
//   return squaredArray;
// }
// function consoleArr(arr) {
//   arr.forEach((element) => {
//     console.log(element);
//   });
// }
// consoleArr(res(arr));

// 6
// let students = [
//   { name: "nekto", salary: 1800 },
//   { name: "Pomi", salary: 2200 },
//   { name: "Zhitel", salary: 1900 },
//   { name: "Alexandr", salary: 1500 },
// ];
// function calculateTotalSalary(students) {
//   let res = students.filter((employee) => employee.salary < 2000);
//   let result = res
//     .map((employee) => employee.salary * 1.1)
//     .reduce((sum, value) => sum + value, 0);

//   return result;
// }
// console.log(calculateTotalSalary(students));
