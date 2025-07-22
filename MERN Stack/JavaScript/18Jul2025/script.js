function action(){
    alert(`Welcome to dom event $ {name}`);
}

let actionButton = document.getElementById("buttonElement")

let head = document.getElementsByTagName("h1")

head[0].addEventListener("dblclick",()=>{
    alert(`Welcome to dom event`);
})