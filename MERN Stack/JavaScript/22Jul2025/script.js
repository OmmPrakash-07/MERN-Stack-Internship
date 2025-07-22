let greet = document.getElementById("greeting")
let input = document.getElementById("nameInput")
let save = document.getElementById("saveBtn")

const getData = localStorage.getItem("userName")

if(getData){
    greet.innerHTML=`Welcome back ${getData}`
}

save.addEventListener("click",()=>{
    let name = input.value

    if(name){
        localStorage.setItem("userName",name)
        greet.textContent = name
        input.value = "";
    }
})