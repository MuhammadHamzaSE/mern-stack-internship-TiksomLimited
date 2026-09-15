import React from 'react'
import tick from "../assets/tick.png"
import star from "../assets/5star.png"
import "./CommentSection.css"
const CommentSection = ({data}) => {
  return (
    <div>
        <div className='commentcard'>
            <img src={star} alt="" style={{marginBottom:"10px"}} />
            <div style={{display:'flex' , gap:"5px" ,marginBottom:"10px"}}>
            <h3>{data.name}</h3>
            <img src={tick} alt="" style={{height:"15px", width:"15px"}} />
            </div>
            <p className='descr'>{data.description}</p>
        </div>
    </div>
  )
}

export default CommentSection
