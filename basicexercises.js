// 1 - Write a program to print numbers from 1 - 10 using a for loop

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// 2 - Print even numbers between 1 and 20 using a for loop.

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
};

// 3 - Print the sum of numbers from 1 to 100 using a for loop.

let totalSum = 0;

for (let num = 1; num <=100; num++) {
    totalSum += num;
};

console.log(`The total sum is ${totalSum}`);

// 4 - Calculate and print the factorial of a number using a for loop

// let number = 4;

// for (let i = 1; i<=5; i++) {
//     number *= i;
// };

// console.log(`The factorial of 5 is ${number}`);

// My fist attempt ^

function calculateFactorial (n) {
    if (n < 0) {
        return "Factorials are not returned for negative numbers"
    } else if ( n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1; 
        for (let i = 2; i <= n; i++) {
            result *= i;
          }
          return result;
        }
      };

      const num = 5;
      const result = calculateFactorial(num);
      console.log(`The factorial of ${num} is ${result}`);   

// 5 - Print the multiplication table of a number using a for loop.

let multiplicationNumber = 4;

for (let i = 1; i <= 12; i++) {
    console.log(multiplicationNumber * i);
}

// 6 - Print numbers in reverse order from 10 to 1 using a for loop.

let reverseOrderNumber = 1;

for (let i = 10; i >= 0; i--) {
    console.log(reverseOrderNumber * i);
}

// 7 - Write a program to check if a number is prime using a for loop.

function checkPrime (n) {
    if (n === 1 || n === 0) {
        return "This number cannot be a prime"
    } else {
        for (let i = 1; i < n; i ++) {
            return n % i
        }
}
}

checkPrime(5);
