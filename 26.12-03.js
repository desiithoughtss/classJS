let obj1 = {
  a: 1,
  b: 2,
};

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

((a = 1, b = "a") => console.log(a + b))();
((a, b) => console.log(a + b))(2, 3);

let arr = [1, 2, 3, 4, 5];
let newArr = [];
console.log(arr.map((value) => value * value));
arr.map((val) => newArr.push(val * val));
console.log(newArr);
console.log(arr.map((val, index) => val * index));

let arr1 = [
  {
    id: 1,
    marks: 20,
  },
  {
    id: 2,
    marks: 60,
  },
  {
    id: 3,
    marks: 50,
  },
  {
    id: 4,
    marks: 10,
  },
];

// let new1 = arr1.map((val) => val.makrs).map((value) => (value += 10));
let new1 = arr1.map((val) =>
  console.log(`The marks for ${val.id} is = ${val.marks + 10}`)
);
console.log(arr1);

// let new2 = arr1.map((val, index) =>
//   console.log(`The marks for ${index + 1} is = ${(val.marks += 10)}`)
// );

//1
const users = [
  { firstName: "john", lastName: "Biden", age: 26 },
  { firstName: "jimmy", lastName: "cob", age: 75 },
  { firstName: "sam", lastName: "lewis", age: 50 },
  { firstName: "Ronald", lastName: "Mathew", age: 26 },
];
const fullName = users.map((user) => {
  return `${user.firstName} ${user.lastName}`;
});
console.log(fullName);

//2
const anotherArray = users.reduce((acc, user) => {
  acc[user.age] = (acc[user.age] || 0) + 1;
  return acc;
}, {});

/* const ageFrequency = {};

for (const user of users) {
  // Increment frequency for each age
  ageFrequency[user.age] = (ageFrequency[user.age] || 0) + 1;
} */

console.log(anotherArray);

//3
let students = [
  { name: "Smith", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "John", rollNumber: 16, marks: 35 },
  { name: "Tiger", rollNumber: 7, marks: 55 },
];

let newStudents = students.filter((student) => {
  student.marks > 60 && student.rollNumber > 15;
  return student;
});

console.log(newStudents);

//4
const marksSum = students.reduce((acc, marks) => {
  return (acc = +acc + marks.marks);
}, 0);

console.log(marksSum);

//5
const firstNameArray = users
  .filter((user) => {
    return user.age > 30;
  })
  .map((user) => {
    return user.firstName;
  });

console.log(firstNameArray);

//6
const studentName = students
  .filter((student) => student.marks > 60)
  .map((student) => student.name);
console.log(studentName);

//7
/* const totalMarks = students
  .map((student) => {
    if (student.marks < 60) {
      student.marks + 20;
    }
    return student;
  })
  .filter((student) => student.marks > 60)
  .reduce((acc, student) => {
    return acc + student.marks;
  }, 0);
console.log(totalMarks); */

const totalMarks = students
  .map((student) => {
    const updatedStudent = { ...student };
    if (updatedStudent.marks < 60) {
      updatedStudent.marks += 20;
    }
    return updatedStudent;
  })
  .filter((student) => student.marks > 60)
  .reduce((acc, student) => acc + student.marks, 0);

console.log(totalMarks);
console.log(students);
