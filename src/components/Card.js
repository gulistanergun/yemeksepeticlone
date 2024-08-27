import React from 'react';

const Card = ({ image, name }) => {
  return (
    <div className='col-md-3 mb-4'>
      <div className='city-card'>
        <img src={image} alt={name} className="city-img" />
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Card;