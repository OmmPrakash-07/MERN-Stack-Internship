//1.

console.log((true || false) && (10 == "10"));


//2.

console.log((false && true) || !(true && 100 == 100));


//3.

let x = 5;

console.log((x === "5") || (x != 4 && x == 5));


//4.

let loggedIn = false;

let isAdmin = true;

console.log((loggedIn && isAdmin) || !(!loggedIn && !isAdmin));


//5.

let age = 18;

console.log((age >= 18) && (age !== "18"));


//6.

console.log(("5" === 5) || (5 != "5"));


//7.

let isAvailable = true;

let isSold = false;

console.log(!isSold && isAvailable && (10 === 10));


//8.

let score = 85; console.log(score >= 50 ? "Pass" : "Fail");


//9.

let user = "admin"; console.log(user === "admin" ? "Welcome, Admin" : "Access Denied");


//10.

let agee = 16; let message = agee >= 18 ? "Adult" : "Minor"; console.log(message);


//11.

let a = 10; let b = 20; console.log(a > b ? a : b);


//12.

let temperature = 30; console.log(temperature > 25 ? "Hot" : "Cool");