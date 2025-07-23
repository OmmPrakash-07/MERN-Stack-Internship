//1: DOM Manipulation (Creating and Styling Elements)
let parent=document.createElement("p")
parent.textContent= "This paragraph was created using javascript."

parent.style.color="lightgreen"
parent.style.margin="10px"
parent.style.fontSize="50px";

let element=document.getElementById("parent");
element.append(parent)

//2: Using innerHTML and outerHTML
let parent1=document.createElement("h3");
let element1=document.getElementById("parent");

element1.prepend(parent1)
parent1.innerHTML="<span>Dynamic Heading</span>"
parent1.outerHTML="<h2>This H3 is replaced by H2.</h2>"

//3: JSON Data with Map and Filter
const products = [
{ id: 1, name: "LED Bulb", price: 150, inStock: true },
{ id: 2, name: "Solar Panel", price: 12000, inStock: false },
{ id: 3, name: "Smart Switch", price: 900, inStock: true },
{ id: 4, name: "Battery Pack", price: 3000, inStock: false },
];

let inStock=products.filter((p)=>{
    return p.inStock
})
console.log(inStock);


let productNames=products.map((ele)=>{
    return ele.name
})
console.log(productNames);