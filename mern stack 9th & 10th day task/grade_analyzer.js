const students = [
    {
        name: "Hamza",
        marks: [85, 90, 95],   
    },
    {
        name: "Usman",
        marks: [80, 70, 90]
    },
    {
        name: "Asad",
        marks: [70, 76, 90]
    },
    {
        name: "Ali",
        marks: [60, 76, 55]
    }
];
const totalAverageOfStudents = students.map((student) => {
    const totalMarks = student.marks.reduce((acc, currval) => {
        return acc + currval;
    }, 0);

    return {
        ...student, 
        average: totalMarks / student.marks.length
    }; 

});

// console.log(totalAverageOfStudents);

const topScorer=students.reduce((topStudent, currentStudent) => {
    return currentStudent.average>topStudent.average ? currentStudent : topStudent
})
// console.log(topScorer)


const passedStudents=totalAverageOfStudents.filter((std)=>{
    return std.average>=50 
})
console.log(passedStudents)