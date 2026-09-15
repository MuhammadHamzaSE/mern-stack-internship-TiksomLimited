import React from 'react';
import "./Customer.css";
import star from "../assets/5star.png";
import CommentSection from './CommentSection';

const Customer = () => {
  const user = [
    {
      id: 1,
      name: "Sarah M.",
      description: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations Finding clothes ."
    },
    {
      id: 2,
      name: "Alex K.",
      description: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a wide variety of tastes."
    },
    {
      id: 3,
      name: "James L.",
      description: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also of top-notch quality."
    }
  ];

  return (
    <div className='customer-section' id='customer-section'>
      <div className='comments'>
        <h1>OUR HAPPY CUSTOMERS</h1>
      </div>
      <div className='data'>
        {user.map((data) => (
          <CommentSection key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Customer;