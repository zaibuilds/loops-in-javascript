// 1 - Write a program to print numbers from 1 - 10 using a for loop

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// 2 - Print even numbers between 1 and 20 using a for loop.

// for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// };

// 3 - Print the sum of numbers from 1 to 100 using a for loop.

// let totalSum = 0;

// for (let num = 1; num <=100; num++) {
//     totalSum += num;
// };

// console.log(`The total sum is ${totalSum}`);

// 4 - Calculate and print the factorial of a number using a for loop

// let number = 4;

// for (let i = 1; i<=5; i++) {
//     number *= i;
// };

// console.log(`The factorial of 5 is ${number}`);

// My first attempt ^

// function calculateFactorial (n) {
//     if (n < 0) {
//         return "Factorials are not returned for negative numbers"
//     } else if ( n === 0 || n === 1) {
//         return 1;
//     } else {
//         let result = 1; 
//         for (let i = 2; i <= n; i++) {
//             result *= i;
//           }
//           return result;
//         }
//       };

//       const num = 5;
//       const result = calculateFactorial(num);
//       console.log(`The factorial of ${num} is ${result}`);   

// 5 - Print the multiplication table of a number using a for loop.

// let multiplicationNumber = 4;

// for (let i = 1; i <= 12; i++) {
//     console.log(multiplicationNumber * i);
// }

// // 6 - Print numbers in reverse order from 10 to 1 using a for loop.

// let reverseOrderNumber = 1;

// for (let i = 10; i >= 0; i--) {
//     console.log(reverseOrderNumber * i);
// }

// 7 - Write a program to check if a number is prime using a for loop.

// My attempt 1
// function checkPrime (n) {
//     if (n === 1 || n === 0) {
//         console.log("This cannot be a prime number")
//     } else {
//         for (let i = 1; i < n; i ++) {
//            if (n % i === 1) {
//             console.log("This is a prime number")
//            }
//         }
// }
// }
// checkPrime(21);


// ChatGPT

// function isPrime(num) {
//     // Handle special cases for 0 and 1
//     if (num <= 1) {
//       return false;
//     }
  
//     // Check for divisibility from 2 to the square root of the number
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false; // It's not a prime number
//       }
//     }
  
//     return true; // It's a prime number
//   }
  
//   // Example usage:
//   let num = 17;
//   if (isPrime(num)) {
//     console.log(`${num} is a prime number.`);
//   } else {
//     console.log(`${num} is not a prime number.`);
//   }




  /* In this code:
  
  We define a function called isPrime that takes a number as an argument.
  We handle special cases for numbers less than or equal to 1, as they are not prime by definition.
  We use a for loop to check for divisibility of the given number by all integers from 2 up to the square root of the number.
  If we find any divisor between 2 and the square root, the number is not prime, and we return false.
  If no divisors are found in the loop, we return true, indicating that the number is prime.
  You can replace the const num value with the number you want to check for primality. */
  
  
  // My second attempt

  // function checkPrime(number) {
  //   // Handle special cases 1 and 0

  //    if (number <= 1) {
  //       return false;
  //    }

  //   // Check for divisibility from 2 to the square root of the number

  //    for (let i = 2; i < Math.sqrt(number); i++) {
  //       if (number % i === 0) {
  //           return false;  // It's not a prime number
  //       }
  //    }

  //    return true; // It is a prime number
  // }
  
   // Example usage:
  // let number = 23;
  // if (isPrime(number)) {
  //   console.log(`${number} is a prime number.`);
  // } else {
  //   console.log(`${number} is not a prime number.`);
  // }
  
// 8 - Print the Fibonacci series using a for loop.

function printFibonacci(n) {
  let fib = [];
  fib[0] = 0;
  fib[1] = 1;

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  for (let i = 0; i < n; i++) {
    console.log(fib[i]);
  }
}

// Specify the number of Fibonacci numbers you want to print
const n = 6;
printFibonacci(n);