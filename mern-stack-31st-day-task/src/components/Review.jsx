import React from 'react'
import star from "../assets/5star.png"
import "./Review.css"
const Review = ({review}) => {
  return (
    <div className='review'>
        <div className='review1'>  
            <div style={{ display: 'flex', gap: '4px' }}>
             {[1, 2, 3, 4, 5].map((star) => (
            <span
            key={star}
            style={{
            fontSize: '22px',
            lineHeight: '1',
            color: star <= Math.round(review.rating) ? '#FFC633' : '#E0E0E0' 
             }}
             >
             ★
           </span>
          ))}
          </div> 
        <p style={{marginBottom:"10px",marginTop:"4px"}}>{review.rating} /5</p>
        </div>
        <h3 style={{marginBottom:"10px"}}>{review.reviewerName}</h3>
        <p style={{marginBottom:"10px"}}>{review.comment}</p>
    </div>
  )
}

export default Review