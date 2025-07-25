const employee = {
    name: "Rohit",
    age: 28,
    department: {
        name: "Engineering",
        location: "Delhi",
    },
    skills: ["JavaScript", "React", "Node.js"]
};

// Destructuring
const { name, age } = employee;
const { department: { name: deptName, location } } = employee;
const [firstSkill, secondSkill] = employee.skills;

console.log(name); // Rohit
console.log(age);  // 28
console.log(deptName); // Engineering
console.log(location); // Delhi
console.log(firstSkill); // JavaScript
console.log(secondSkill); // React
