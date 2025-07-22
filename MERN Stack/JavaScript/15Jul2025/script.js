let myHeading = document.getElementById("heading")

console.log(myHeading.textContent);

let boxes = document.getElementsByClassName("box")
console.log(boxes[1].textContent); i = 0

for(let i = 0; i<boxes.length;i++){
    console.log("Hello",boxes[i].textContent);
}

let myTag = document.getElementsByTagName("p")
console.log(myTag[0].textContent);


let query = document.querySelector(".box")
console.log(query);
