//1. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//2. Print numbers from 10 to 1 (reverse order)
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//3. Print even numbers from 1 to 20
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

//4. Print odd numbers from 1 to 20
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}


//5. Print all numbers divisible by 5 from 1 to 50
for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}


//6. Print all numbers divisible by 3 between 1 and 100
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}


//7. Print the square of numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}


//8. Print the multiplication table of any number (e.g., 7)
let num = 7;
for (let i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + (num * i));
}

//9. Find the sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Sum:", sum);

//10. Find the factorial of a number (e.g., 5!)
let numb = 5;
let factorial = 1;
for (let i = 1; i <= numb; i++) {
  factorial *= i;
}
console.log("Factorial of " + numb + " is " + factorial);
