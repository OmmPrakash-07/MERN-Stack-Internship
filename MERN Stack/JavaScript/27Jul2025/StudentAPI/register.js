const studentForm = document.getElementById("studentForm")

studentForm.addEventListener("submit",async(e)=>{
    e.preventDefault()

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const college = document.getElementById("college").value;
    const description = document.getElementById("description").value;
    try {
        const response = await fetch("https://crudapp-m2nk.onrender.com/api/products",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({name,email,college,description})
        })
        console.log(response);
        if(response.ok){
            alert("Student added successfully")
            studentForm.reset()
        }
    } catch (error) {
        console.log("error",error);
    }
})