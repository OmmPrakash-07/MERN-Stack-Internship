//  Part 1: Select Element & View Content
let myinfo = document.getElementById("info")
console.log(myinfo);

myinfo.textContent = "In a world that's constantly evolving, staying adaptable and open to change is the key to growth and success.";
console.log(myinfo.textContent);


//  Part 2: Access Using Class Name, Tag Name, and Query Selectors
let dataElement = document.getElementsByClassName("data")[0];
console.log(dataElement);
dataElement.textContent = "Changed data text";

let headingElement = document.getElementsByTagName("h1")[0];
console.log(headingElement);
headingElement.textContent = "Changed heading";

let mainText = document.querySelector("#main-text");
console.log(mainText);
mainText.textContent = "Changed main text";


// Part 3: Input Field – Set & Get Value
let input = document.getElementById("userEmail");
console.log(input.value);
input.value = "user@newdomain.com";


// Part 4: JSON + Logical Operation Questions
const students = [
    { name: "Amit", age: 21, course: "JavaScript", score: 80 },
    { name: "Priya", age: 22, course: "Python", score: 95 },
    { name: "Rahul", age: 23, course: "Java", score: 70 }
];

// 1. Print all student names
students.map((s) => {
    console.log(s.name);
})

// 2. Find students with score above 75.
const highScorers = students.filter(student => student.score > 75);

console.log("Students with score above 75:");
highScorers.forEach(student => {
    console.log(student.name + " - " + student.score);
});

// 3. Count how many students are in the "Python" course.
const pythonStudents = students.filter(student => student.course === "Python");
console.log("Number of Python students:", pythonStudents.length);

// 4. Find the highest scoring student.
let topStudent = students[0];

for (let i = 1; i < students.length; i++) {
    if (students[i].score > topStudent.score) {
        topStudent = students[i];
    }
}

console.log("Top student is:", topStudent.name, "with score:", topStudent.score);
