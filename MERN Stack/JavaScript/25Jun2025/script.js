// console.log(5 * "abc"); // NaN

// let result = (7 > "text") * 2;
// console.log(result); // NaN

// console.log(100<= "omm");

// let verify = false;
// console.log((false && false) && (verify && 100 == 100));

let verify = true;
console.log((true && true) && (verify && 100 == 100)); 

console.log(false);

console.log((false && true) || (verify && 100 == 100));

let = "hi"
console.log(!(200==100 || "hi===hi") || (!(true && true) && (10>5)));

if(10=="100" || false){
    console.log("Pass");
} else {
    console.log("Fail");
}

if(true){
    console.log("Pass");
} else {
    console.log("Fail");
}

//if-else Statement
// let age = 20;
// if (age >= 18) {
//     console.log("you are eligible to vote.");
// } else {
//     console.log("you are not eligible to vote.");
// }


//Ternary Operator (? :)
let age = 20;
console.log(age>=15 ? "you are eligible to vote." : "you are not eligible to vote.");