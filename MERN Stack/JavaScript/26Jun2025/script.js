// let firstValue = 100;
// let secondValue = 50;
// console.log(firstValue>secondValue);
// if(firstValue>secondValue){
//     console.log("Pass");
// } else{
//     console.log(false);
// }



// let marks = 100;
// if (marks >= 90) {
//     console.log("Grade A");
//     console.log("Very Good");
// } else if (marks >= 80) {
//     console.log("Grade B");
// } else if (marks >= 70) {
//     console.log("Grade C");
// } else if (marks >= 60) {
//     console.log("Grade D");
// } else {
//     console.log("Fail");
// }





// let Age = 18;
// let hasDL = true;

let Age = prompt("Enter your age")
let hasDL = confirm("Do you have DL")

if (Age >= 18 && hasDL) {
    console.log("You can ride.");
} else if (Age >= 18 && !hasDL) {
    console.log("You need a drivering license to ride.");
} else {
    console.log("You are not old enough to ride.");
}

let yourNumber = prompt("Enter Your Name");
let ConvetToNumber = Number(yourNumber)
console.log(yourNumber);
console.log(typeof yourNumber);

console.log("200" === 200);