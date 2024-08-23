import React from 'react';

const Card = ({ image, name }) => {
  return (
    <div className='col-md-3'>
      <div className='city-card'>
        <img src={image} alt={name} className="city-img" />
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Card;