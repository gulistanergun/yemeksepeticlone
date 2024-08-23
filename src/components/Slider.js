import React from 'react'
import slider from '../assets/images/slider.webp'; 
import './Slider.css';


 function Slider() {
  return (
    <section className='slider'>
            <div className='row'>        
                <div className='col-md-7 slider-left'>
                    <div className='slider-box'>
                        <h1>Yemek ya da market, tüm ihtiyaçların kapında!</h1>
                        <div className='search-box' >
                            <input className='search-input' type="text"  placeholder='Aramak İstediğiniz Şehir'/>
                            <button className="btn sigup-btn">keşfet</button>
                        </div>
                    </div>
                </div>
                <div className='col-md-5'>
                    <span>
                        <img src={slider} alt="Slider" className="slider-img" />
                    </span>
                </div>      
            </div>
    </section>
  )
}

export default Slider;
