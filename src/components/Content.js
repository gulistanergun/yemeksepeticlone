import React from 'react'
import './Content.css';
import banner from '../assets/images/banner.webp';
import ankara from '../assets/images/city/ankara.webp'; 

 function Content() {
  return (
    <>
      <section className='banner'>
        <div className='container'>
            <div className='col-md-12'>
                <h2>Restoran veya Mahalle esnafı iş ortağımız olun</h2>
            </div>
        </div>
        <div className='row'>            
            <img src={banner} alt="Banner" className="banner-img" />
        </div>
        <div className='container info-sinir'>
          <div className='col-md-6 info-box'>
            <h4>Hemen katılın, Yemeksepeti ile satışlarınızı katlamaya başlayın</h4>
            <p>Binlerce yeni kullanıcıya ulaşabilmek ister misiniz? Sadece kendi semtinizdekiler değil, artık çevre semtlerdeki binlerce kullanıcı da işletmenizden sipariş verebilecek. Bir ev, bir plaza, bir işyeri ya da üniversite kampüsü, hizmet vermek istediğiniz kim varsa artık müşteriniz.
              <br />
            Gayet basit! Menünüzü listeliyoruz ve sipariş bilgilerini size ulaştırıyoruz. Sipariş teslimatını dilerseniz kendiniz yapabiliyorsunuz, dilerseniz Yemeksepeti sizin adınıza kullanıcıya ulaştırıyor.
            <br />
            Hemen ailemize katılabilir ve muhteşem avantajlara sahip iş ortaklarımızdan biri olabilirsiniz.</p>
            <button className="btn sigup-btn">Başlayalım</button>
          </div>
        <br/><br/><br/><br/><br/><br/>
        </div>
      </section>

      <section className='card-list'>
        <div className='container'>
          <h2>Türkiyenin Her Şehrindeyiz</h2>
          <div className='row'>
            <div className='col-md-3'>
              <div className='city-card'>
                <img src={ankara} alt="Ankara" className="city-img" />
                <span>Ankara</span>
                </div>
            </div>

            <div className='col-md-3'>
              <div className='city-card'>
                <img src={ankara} alt="Ankara" className="city-img" />
                <span>Ankara</span>
                </div>
            </div>

            <div className='col-md-3'>
              <div className='city-card'>
                <img src={ankara} alt="Ankara" className="city-img" />
                <span>Ankara</span>
                </div>
            </div>

            <div className='col-md-3'>
              <div className='city-card'>
                <img src={ankara} alt="Ankara" className="city-img" />
                <span>Ankara</span>
                </div>
            </div>
          </div>
        </div>
        <br></br><br></br><br></br>
      </section>
    </>
  )
}

export default Content;
