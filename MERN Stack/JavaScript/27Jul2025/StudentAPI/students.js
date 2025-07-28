const studentsList = document.getElementById("studentsList") //div tag

async function fetchStudentsData(){
    try {
        const response = await fetch("https://crudapp-m2nk.onrender.com/api/products");
        console.log("response",response);
        
        const students = await response.json()
        console.log("students",students);

        // const students = [
        //     {
        //         name:"biwajit",
        //         college:"gec",
        //         email:"biswa@gmail.com"
        //     }
        // ]

        students.forEach((element)=>{
            const studentDiv = document.createElement("div") //<div class="student"></div>
            studentDiv.setAttribute("class","student")
            // studentDiv.setAttribute("id","students")
            studentDiv.innerHTML =`
                <div>
                    <span>ID:${element._id}</span>
                    <span>Name:${element.name}</span>
                    <span>email:${element.email}</span>
                    <span>college:${element.college}</span>
                    <span>description:${element.description}</span>
                </div>

                <div class="student-actions">
                    <button class="edit" onclick="editStudent('${element._id}')">Edit</button>
                    <button class="delete" onclick="DeleteData('${element._id}')">Delete</button>
                </div>
            `
            studentsList.append(studentDiv)
        })
    } catch (error) {
        console.log(error);
    }
}

fetchStudentsData();


async function editStudent(anyId){
    const name = prompt("Enter your name")
    const email = prompt("Enter your email")
    const college = prompt("Enter your college")
    const description = prompt("Enter your description")

    try {
        const response = await fetch(`https://crudapp-m2nk.onrender.com/api/products/${anyId}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({name,email,college,description})
        })

        if(response.ok){
            alert("Your data updated successfully");
        }
    } catch (error) {
        console.log(error);
    }
}

async function DeleteData(remove){
    try {
        const response =await fetch (`https://crudapp-m2nk.onrender.com/api/products/${remove}`,{
            method:"DELETE",
        })
        if(response.ok){
            alert("Student data deleted successfully");
        }
    } catch (error) {
        
    }
}