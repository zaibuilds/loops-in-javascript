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