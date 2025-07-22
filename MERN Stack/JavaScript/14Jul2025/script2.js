// Advanced: School Class System 🎓📘
// Create a classRoom object with:
// students : an array of student objects.
// Method addStudent(studentObj) to add a student.
// Method getStudentByName(name) to return student details.
// Method updateMarks(name, newMarks) to update marks.

let classRoom = {
    students: [
        { name: "Omm", roll: 7, mark: 85 },
        { name: "Saiswasti", roll: 11, mark: 95 },
        { name: "Shivansh", roll: 15, mark: 75 },
    ],
    addStudent: function (studentObj) {
        this.students.push(studentObj)
    },
    getStudentByName: (name) => {
        return classRoom.students.find((ele) => {
            return ele.name === name
        })
    },
    updateMarks:function (name, newMarks){
        let value = classRoom.students.find((ele) => {
            return ele.name === name
        })

        let res = value.mark = newMarks
        return classRoom.students
    }
}

classRoom.addStudent({name:"Nibedita",roll:35,mark:100})
console.log(classRoom.students);

// console.log(classRoom.getStudentByName("Nibedita"));

console.log(classRoom.updateMarks("Saiswasti",87));