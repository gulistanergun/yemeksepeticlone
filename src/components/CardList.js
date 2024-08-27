import React from 'react';
import CityCard from './Card';
import citiesData from '../data/cities.json';
import ankara from '../assets/images/city/ankara.webp';
import istanbul from '../assets/images/city/istanbul.webp';
import izmir from '../assets/images/city/izmir.webp';
import bursa from '../assets/images/city/bursa.webp';
import antalya from '../assets/images/city/antalya.webp';



const imageMapping = {
  'ankara.webp': ankara,
  'istanbul.webp': istanbul,
  'izmir.webp': izmir,
  'bursa.webp': bursa,
  'antalya.webp': antalya
};

const CardList = () => {
  return (
    <section className='card-list '>
      <div className='container'>
        <h2>Türkiyenin Her Şehrindeyiz</h2>
        <div className='row'>
          {citiesData.map((city) => (
            <CityCard
              key={city.id}
              name={city.name}
              image={imageMapping[city.image]}
            />
          ))}
        </div>
      </div>
      <br /><br /><br />
    </section>
  );
};

export default CardList;

