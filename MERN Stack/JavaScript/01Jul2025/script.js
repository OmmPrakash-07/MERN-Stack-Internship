let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i
}
console.log(sum);


let fact = 1;
let num = 5;
for (let i = 5; i >= 1; i--) {
    fact = fact * i
}
console.log(fact);



//while Loop
// Charging a phone Until 100%

let batery = 20
while (batery <= 100) {
    console.log(`Batery at ${batery}`);
    batery++;
}
console.log("Charging Completed");

let battery = 20
while (battery <= 100) {
    console.log(`Battery at ${battery}`);
    battery += 20;
}
console.log("Charging Completed ");


//Elevator going up until 5th Floor. using while loop js

let floor = 1;
while (floor <= 5) {
    // console.log("Elevator is on floor: " + floor);
    console.log(`Elevator is on floor: ${floor}`);
    floor++;
}
console.log("Elevator has reached the 5th floor.");


//do...while Loop

// let correctPin = "123456";
// let enterPin;

// do {
//     enterPin = prompt("Enter your pin here")
//     console.log(enterPin);
// } while (enterPin !== correctPin)
//     alert("Access denied!");

// console.log("Access granted!!");


let correctPin = "123456";
let enterPin;

do {
    enterPin = prompt("Enter your pin here");
    if (enterPin !== correctPin) {
        alert("Access denied!");
    }else{
        alert("Access granted!!");
    }
} while (enterPin !== correctPin);