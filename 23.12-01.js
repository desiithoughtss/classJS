//1
const driveAssistance = (age) => {
  if (age < 18) return "The person can't dirve";
  if (age >= 18 && age < 50) return "The person can drive";
  if (age >= 50 && age < 85) return "The person should occasionally drive";
  return "The person should not drive";
};

const result1 = driveAssistance(85);
console.log(result1);

//2
const checkNumber = (num) => {
  return num % 2 === 0 ? "Number is even" : "Number is odd";
};
const result2 = checkNumber(6);
console.log(result2);

//3
const calcPower = (num1, num2) => num1 ** num2;
const result3 = calcPower(2, 3);
console.log(result3);

//4
const leapYear = (year) => {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return "It's leap year";
  }
  return "It's not leap year";
};
const result4 = leapYear(1900);
console.log(result4);
