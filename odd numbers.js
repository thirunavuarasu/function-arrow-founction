const arr = [1 , 2, 4, 9, 12, 13, 20];
const oddNumbers = [];
arr.forEach((num) => num % 2 === 1 && oddNumbers.push(num));
console.log(oddNumbers);