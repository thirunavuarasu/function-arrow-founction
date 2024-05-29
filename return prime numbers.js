const arr = [4, 9, 12, 13, 20];
const primeNumbers = [];
arr.forEach((num) => num % 2 === 1 &&primeNumbers.push(num));
console.log(primeNumbers);