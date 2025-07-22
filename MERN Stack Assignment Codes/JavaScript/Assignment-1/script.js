//1. Variable Practice
let full_name = "Omm Prakash Parida";
console.log("My Name is", full_name);

const birthyear = 2005;
console.log("My Birth Year is", birthyear);

var favoriteColor = "Black";
console.log("My Favorite Color is", favoriteColor);

// let full_name = "Omm Prakash Parida";                            //SyntaxError: Identifier 'full_name' has already been declared
// console.log("My Name is", full_name);

// const birthyear = 2005;                                          //SyntaxError: Identifier 'birthyear' has already been declared
// console.log("My Birth Year is", birthyear);

// var favoriteColor = "Black";
// console.log("My Favorite Color is", favoriteColor);


//2. Data Types and typeof Operator
let favoriteQuote = "It's not the goodbye that hurts, but the flashbacks that follow";
console.log(typeof favoriteQuote);

let luckyNumber = 7;
console.log(typeof luckyNumber);

let isStudent = false;
console.log(typeof isStudent);

let unknown;
console.log(typeof unknown);

let emptyBucket = null;
console.log(typeof emptyBucket);



//3. Arrays and Objects
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);

let person = {
    name: "Omm",
    age: 20,
    isEmployed: false
};
console.log(person);

console.log(typeof fruits); 
console.log(typeof person);


//4. Basic Arithmetic Operations
let x = 7;
let y = 18;

// ➕ Addition
let sum = x + y;
console.log("Addition:", sum);

// ➖ Subtraction
let difference = x - y;
console.log("Subtraction:", difference); 

// ✖️ Multiplication
let Multiplication = x * y;
console.log("Multiplication:", Multiplication);

// ➗ Division
let Division = x / y;
console.log("Division:", Division); 

// 🧮 Modulus
let Modulus = x % y;
console.log("Modulus:", Modulus);