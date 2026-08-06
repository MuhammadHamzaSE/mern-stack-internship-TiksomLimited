import React from 'react'

const StudentCard = (props) => {
  return (
    <div>
      <img src={props.img} alt={props.name} width={150}/>
      <p>Name : {props.name}  </p>
      <p>Roll No : {props.roll_no}</p>
      <p>CGPA : {props.cgpa} </p>
      <p>Department : {props.department}  </p>
    </div>
  )
}
export default StudentCard
