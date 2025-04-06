// var x, y, z;
// x = 10;
// y = 3;
// z = x - y;
// console.log(z);

// let price = 50;
// let quantity = 3;
// let finalValue = price * quantity;
// console.log(`final value is -> ${finalValue}`);
// let discountedValue = finalValue / 10;
// console.log(`discounted value is -> ${discountedValue}`);
// let finalPrice = finalValue - discountedValue;
// console.log(`final price is -> ${finalPrice}`);

// let mathsMarks = 80;
// let physicsMarks = 70;
// let chemistryMarks = 50;
// let finalMarks = mathsMarks + physicsMarks + chemistryMarks;
// console.log(`final marks -> ${finalMarks}`);
// // console.log(typeof finalMarks);
// let totalMarks = 300;
// let percentage = (finalMarks / 300) * 100;
// percentage >= 50 ? console.log("pass") : console.log("fail");

// let unit = 950;
// let price;
// let bill;
// if (unit <= 200) {
//   price = 0;
//   bill = price * unit;
// } else if (unit <= 500) {
//   price = 1;
//   bill = (unit - 200) * price;
// } else if (unit <= 900) {
//   price = 2;
//   bill = (unit - 500) * price + 300;
// } else {
//   price = 3;
//   bill = (unit - 900) * price + 1100;
// }
// console.log(bill);

// const a = 7;
// const b = 9;
// const c = 3;
// const arr = [a, b, c].sort();
// console.log(arr);

// const hour1 = 3;
// const min1 = 50;
// const hour2 = 4;
// const min2 = 10;
// const entry = hour1 * 60 + min1;
// const exit = hour2 * 60 + min2;
// const minsDiff = exit - entry;
// const hourAns = Math.floor(minsDiff / 60);
// const minsAns = minsDiff % 60;
// console.log(`${hourAns}hours, ${minsAns}mins`);

// const pMarks = 80;
// const cMaks = 80;
// const mMarks = 30;

// pMarks <= 30 || cMaks <= 30 || mMarks <= 30
//   ? console.log("fail")
//   : console.log("pass");

// for (let i = 0; i < 10; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// console.log("----------------------");

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// console.log("----------------------");

// for (let i = 5; i < 50; i += 5) {
//   console.log(i);
// }

// console.log("----------------------");

// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) {
//     console.log(1);
//   } else {
//     console.log(0);
//   }
// }

// console.log("----------------------");

// for (let i = 1; i < 10; i++) {
//   console.log(i * i);
// }

// console.log("----------------------");

// let num = 0;
// for (let i = 1; i < 20; i++) {
//   num = num + i;
//   console.log(num);
// }

// console.log("----------------------");

// let count = 1;
// for (let i = 1; i < 10; i++) {
//   count = count * i;
//   console.log(count);
// }

// console.log("----------------------");

// for (let i = 1; i < 100000; i = i * 10) {
//   console.log(i * 10);
// }

// console.log("----------------------");

// for (let i = 1; i < 10; i++) {
//   console.log(i * i - 1);
// }

// console.log("----------------------");

// for (let i = 1; i < 100000; i = i * 10 + 1) {
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i == 4) {
//     break;
//   }
//   console.log(i);
// }

// const date = new Date();
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// function syncTimeout() {
//   let startTime = Date.now();
//   while (Date.now() - startTime < 5000) {
//     continue;
//   }
//   console.log("this would be running after 5 seconds ");
// }

// syncTimeout();

// function asyncTimeout() {
//   console.log("---");
//   setTimeout(() => {
//     console.log("this woould be running after 10 seconds");
//   }, 5000);
// }
// asyncTimeout();

// let count = 1;
// function counter() {
//   console.log(count);
//   count++;
//   setTimeout(counter, 1000);
// }
// counter();

// const a = 10;
// const b = 7;
// const c = 3;
// if (a > b && a > c) {
//   console.log("a is greater");
// } else if (b > a && b > c) {
//   console.log("b is greater");
// } else {
//   console.log("c is greater");
// }

// function checkTheLargest(a, b, c) {
//   a > b && a > c
//     ? console.log("a is greater")
//     : b > a && b > c
//     ? console.log("b is greater")
//     : console.log("c is greater");
// }

// checkTheLargest(10, 7, 3);

// for (let i = -1; i >= -10; i--) {
//   console.log(i);
// }

// const a = 2;
// const b = 7;
// const c = 3;

// if (a > b && a > c) {
//   console.log("a is highest");
//   if (b > c) {
//     console.log("b is the middle");
//     console.log("c is the lowest");
//   } else {
//     console.log("c is the middle");
//     console.log("b is the lowest");
//   }
// } else if (b > c && b > a) {
//   console.log("b is highest");
//   if (a > c) {
//     console.log("a is the middle");
//     console.log("c is the lowest");
//   } else {
//     console.log("c is the middle");
//     console.log("a is the lowest");
//   }
// } else {
//   console.log("c is highest");
//   if (a > b) {
//     console.log("a is the middle");
//     console.log("b is the lowest");
//   } else {
//     console.log("b is the middle");
//     console.log("a is the lowest");
//   }
// }

// let a = 10;
// let b = 5;

// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a);
// console.log(b);

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// var a = 10;
// if (true) {
//   var a = 11;
//   a++;
//   console.log(a);
// }
// console.log(a);

// let a = 10;
// if (true) {
//   let a = 10;
//   a++;
//   console.log(a);
// }
// console.log(a);

// const value = "abc";
// for (let i = value.length - 1; i >= 0; i--) {
//   console.log(value.charAt(i));
// }

// for (let i = "abc".length - 1; i >= 0; i--) console.log("abc"[i]);

// console.log("abc".split("").reverse().join(""));

// console.log("we      are   learning the js".split(/\s+/).length);

// const value = "we are learning the js";
// let words = 1;
// for (let i = 0; i < value.length; i++) {
//   if (value.charAt(i) === " ") {
//     words++;
//   }
// }
// console.log(words);

// const value = "We Are Learning JS";
// const vowels = "aeiou";
// let count = 0;
// for (let i = 0; i < value.length; i++) {
//   if (vowels.includes(value[i].toLocaleLowerCase())) {
//     count++;
//   }
// }
// console.log(count);

// let count1 = 0;
// for (let x of value.toLowerCase()) {
//   if (vowels.includes(x)) {
//     count1++;
//   }
// }

// console.log(count1);

// let username = "admin";
// let password = "12345";

// if (username === "admin" && password === "12345") {
//   console.log("Welcome Admin");
// } else if (username !== "admin" && password !== "12345") {
//   console.log("Your username and password is incorrect ");
// } else if (username !== "admin") {
//   console.log("Your username is incorrect");
// } else if (password !== "12345") {
//   console.log("Your password is incorrect");
// }

// function switchCase(num) {
//   switch (num) {
//     case "one":
//       console.log("this is number 1");
//       break;
//     case 2:
//       console.log("this is number 2");
//       break;
//     case 3:
//       console.log("this is number 3");
//       break;
//     default:
//       console.log("please input number bw 1-3");
//   }
// }

// switchCase("one");

// let value = 999;
// do {
//   console.log(value);
//   value++;
// } while (value > 99);

// const sal = [100, 200, 300, 400, 500];
// sal.push(600);

// const ans = sal.pop();
// console.log(ans);

// for (let i = 0; i < sal.length; i++) {
//   console.log(sal[i]);
// }

// for (let i = 0; i < sal.length; i++) {
//   console.log(sal[i] + 10);
// }

// delete sal[0];
// sal[0] = " ";
// sal.shift();
// sal.unshift(100);

// const sal = [400, 200, 150, 190, 340];
// sal.sort();
// // sal.sort((a, b) => a - b);
// // sal.sort((a, b) => b - a);

// console.log(sal.slice(-2));
// // console.log(sal.splice(0, 2));
// console.log(sal.includes(150))
// console.log(sal);
// sal.forEach((salary) => console.log(salary));

// const hobbies = ["book", "coding", "travel", "business", "guitar"];
// console.log(hobbies.sort());
// console.log(hobbies.length);

// const students = [88, 90, 73, 58, 34, 96, 55, 80];
// // console.log(students.map((student) => student));
// const ans = students.map((student) => console.log(student));
// console.log(ans);
// console.log(Math.max(...students));

// for (let i = 1; i <= 3; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// 9 > 3 ? console.log("true") : console.log("false");

// function timer() {
//   setInterval(() => {
//     let hours = new Date().getHours();
//     let minutes = new Date().getMinutes();
//     let seconds = new Date().getSeconds();
//     let clock = `${hours}:${minutes}:${seconds}`;
//     console.log(clock);
//   }, 1000);
// }

// timer();

// function checkNum(num) {
//   num % 2 === 0 ? console.log("Even") : console.log("Odd");
// }
// checkNum(9);

// for (let i = 0; i <= 3; i++) {
//   let row = "";
//   for (let j = 3; j > i; j--) {
//     row += j;
//   }
//   console.log(row);
// }

// const person = {
//   name: "abc",
//   number: "9",
//   city: "city",
// };

// const jsonPerson = JSON.stringify(person);
// console.log(jsonPerson);
// console.log(JSON.parse(jsonPerson));

// for (let value of jsonPerson) {
//   console.log(value);
// }

// for (let value of jsonPerson) {
//   console.log(value);
// }

// const student = [
//   {
//     name: "bbb",
//     number: 9,
//   },
//   {
//     name: "bbb",
//     number: 99,
//   },
// ];

// const jsonStudent = JSON.stringify(student);
// console.log(jsonStudent);

// console.log(JSON.parse(jsonStudent));

// student.forEach((value) => {
//   console.log(`${value.name}, ${value.number}`);
// });

// const arr = [99, 32, 254, 34653, 22, 112, 87, 9];
// console.log(arr.sort((a, b) => a - b));
// console.log(arr.sort((a, b) => b - a));

// let data = [
//   {
//     id: 1,
//     name: "John Doe",
//     email: "john@example.com",
//     age: 30,
//     city: "New York",
//     amt: 200,
//   },
//   {
//     id: 2,
//     name: "Alice Smith",
//     email: "alice@example.com",
//     age: 25,
//     city: "Los Angeles",
//     amt: 300,
//   },
//   {
//     id: 3,
//     name: "New New",
//     email: "new@example.com",
//     age: 21,
//     city: "Los Angeles",
//     amt: 500,
//   },
// ];

// console.log(JSON.stringify(data));

// console.log(
//   data
//     .filter((value) => {
//       return value.city === "New York";
//     })
//     .map((value) => value.name)
// );

// data
//   .filter((value) => {
//     return value.city === "New York";
//   })
//   .forEach((value) => console.log(value.name));

// data.map((value) => {
//   if (value.city === "New York") {
//     console.log(value.name);
//   }
// });

// const oneMoreData = {
//   id: 4,
//   name: "New New",
//   email: "new1@example.com",
//   age: 30,
//   city: "Los Angeles",
//   amt: 500,
// };

// const finalData = [...data, oneMoreData];
// console.log(finalData);

// const jio = [
//   {
//     programName: "Jio Entertainment",
//     expenses: 50000,
//     date: "2025-01-20",
//     views: 250000,
//     revenue: 100000,
//   },
//   {
//     programName: "Jio News",
//     expenses: 30000,
//     date: "2025-01-18",
//     views: 180000,
//     revenue: 70000,
//   },
//   {
//     programName: "Jio Sports",
//     expenses: 80000,
//     date: "2025-01-15",
//     views: 400000,
//     revenue: 150000,
//   },
//   {
//     programName: "Jio Music",
//     expenses: 45000,
//     date: "2025-01-12",
//     views: 220000,
//     revenue: 90000,
//   },
//   {
//     programName: "Jio Education",
//     expenses: 60000,
//     date: "2025-01-10",
//     views: 300000,
//     revenue: 120000,
//   },
// ];

// //jio revenue
// const totalRevenue = jio.reduce((totalRevenue, value) => {
//   return totalRevenue + value.revenue;
// }, 0);
// console.log(totalRevenue);

// //jio expenses
// const totalExpenses = jio.reduce((totalExpenses, value) => {
//   return totalExpenses + value.expenses;
// }, 0);
// console.log(totalExpenses);

// //jio income
// const jioIncome = totalRevenue - totalExpenses;
// console.log(jioIncome);

// // top 2 programms
// const topTwo = jio
//   .sort((a, b) => b.revenue - a.revenue)
//   .slice(0, 2)
//   .map((value) => value.programName);
// console.log(topTwo);

// // longest views wise
// const mostViewedChannel = jio
//   .sort((a, b) => b.views - a.views)
//   .map((value) => {
//     return value.programName;
//   });
// console.log(mostViewedChannel);

// // per programm income
// const perProgramIncome = jio.map((value) => {
//   return `${value.programName}- ${value.revenue - value.expenses}`;
// });
// console.log(perProgramIncome);

// // last week most viewed program
// // console.log(jio[0].date.split("-")[2]);
// const todayDate = new Date().getDate();
// // console.log(typeof todayDate);
// const lastWeekMostViewed = jio
//   .filter((value) => {
//     const date = parseInt(value.date.split("-")[2]);
//     return date <= todayDate - 7;
//   })
//   .sort((a, b) => {
//     return b.views - a.views;
//   })
//   .slice(0, 1)
//   .map((value) => value.programName);
// console.log(lastWeekMostViewed);



// const arr = [7, 7, 8, 8, 9, 6, 9, 6, 7, 9, 7];

// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 6) {
//     newArr.push(i);
//     arr.splice(i,1, 7)
//   }
//   if(arr[i]===9){
//     arr.splice(i, 1, 10)
//   }
  
//   if(arr[i] === 7  && !newArr.includes(i)){
//     arr.splice(i, 1, 8)
//   }

// }

// console.log(arr);
// console.log(newArr)
