// let head = document.getElementById("heading")
// console.log(head);
// head.textContent = "Hello Shivansh !!"
// head.textContent = "<b>Hello</b> Shivansh !!"  ❌

// head.innerHTML = "<b>Hello</b> Shivansh !!"

// head.outerHTML = "<h1>Hello World</h1>"

// let myPtag = document.getElementById("heading")
// myPtag.style.color = "red"
// myPtag.style.backgroundColor="black"
// myPtag.style.padding = "5px"

let newElement = document.createElement("h3")
newElement.textContent = " This is my new element added by js"


let container = document.getElementById("container")

// container.append(newElement)         //inserts an element at the ending
container.prepend(newElement)           //inserts an element at the beginning

let newElement1 = document.createElement("h1").textContent = "This is my h1 tag"

container.prepend(newElement1)


// if want to insert an element in the middle we can create a id before the line where we can add new line