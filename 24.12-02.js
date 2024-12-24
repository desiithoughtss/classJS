// const add = (a, b) => {
//   return a + b;
// };
// const sum = add(2, 3);
// console.log(sum);

// console.log(sum(2,3)); const sum = add;

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [...arr1, ...arr2];
let arr4 = arr1.concat(arr2);
let arr5 = [arr1, arr2];
let arr6 = [arr1 + arr2];
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);

let newArr = [1, 2, 3, 4, 5];
let [a, b, ...c] = newArr;
console.log(a);
console.log(b);
console.log(c);

// 1
const users = [
  { firstName: "john", lastName: "Biden", age: 26 },
  { firstName: "jimmy", lastName: "cob", age: 75 },
  { firstName: "sam", lastName: "lewis", age: 50 },
  { firstName: "Ronald", lastName: "Mathew", age: 26 },
];
let firstName = [];
users.map((user) => firstName.push(user.firstName));
console.log(firstName);

//2
const simpleArray = [1, 2, 3, 4, 5];
let squaredArray = [];
simpleArray.map((num) => squaredArray.push(num ** 2));
console.log(squaredArray);
