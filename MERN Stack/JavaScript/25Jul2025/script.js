let Teacher = {
    name: "Biswajeet",
    age: 24,
    contact: 98364876,
    address: {
        data: {
            mail: "@gmail.com"
        }
    }
}

// Object Destructuring with default value
let { name: userName, phone = 7777, age, contact, address: { data: { mail } } } = Teacher;

// Output in Console
console.log(phone);
console.log(mail);

// Also show in HTML
document.getElementById("phone").innerText = "Phone: " + phone;
document.getElementById("mail").innerText = "Mail: " + mail;
