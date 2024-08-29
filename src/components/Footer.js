import React from 'react';
import guvendamga  from '../assets/images/guvendamga.png';
import indir  from '../assets/images/indir.jpeg';
import logo from '../assets/images/logo.png'; 
import deliveryhero from '../assets/images/deliveryhero.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faXTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

 function Footer() {
  return (
    <>
      <section>
        <div className='container footer-legal'>
          <div className='row'>
            <div className=' d-flex justify-content-end align-items-center'>
              <a href="https://guvendamgasi.org.tr/"> <div className=''><img src={guvendamga} alt="Guvendamga"  /></div></a>
              <a href="https://www.eticaret.gov.tr/"> <div className='indir-img'><img src={indir} alt="indir"  /></div></a>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div className='footer-content'>
          <div className='container'>
            <hr />
            <div className='row footer-list mt-4'>
              <div className='col-md-3'>
                  <span>© Yemeksepeti</span>
              </div>
              <div className='col-md-3'>
                <ul>
                  <li><a href="/">Yardım Merkezi</a></li>
                  <li><a href="/">Çerez Politikası</a></li>
                  <li><a href="/">Kurumsal Site</a></li>
                  <li><a href="/">Bilgi Toplumu Hizmetleri</a></li>                            
                </ul>
              </div>
              <div className='col-md-3'>
                <ul>
                  <li><a href="/">Kullanım Koşulları </a></li>
                  <li><a href="/">İletişim </a></li>
                  <li><a href="/">Aydınlatma Metni </a></li>
                  <li><a href="/">Yemek Sapeti App İndir </a></li>
                </ul>
              </div>
              <div className='col-md-3'>
                <ul>
                    <li><a href="/">S.S.S ve İşlem Rehberi </a></li>
                    <li><a href="/">İş Ortağımız Olun</a></li>
                    <li><a href="/">Kişisel Verilerin Korunması ve İşlenmesi ve Gizlilik Politikası</a></li>
                    <li><a href="/">Türkiyedeki tüm Şehirler</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /> <br /> 
      <section>
        <div className='container'>
          <div className='row '>
            <div className='col-md-6 d-flex align-items-center'>
              <span>
                <img src={logo} alt="Logo" className="logo-img" />
              </span>
              <span>
                <img src={deliveryhero} alt="deliveryhero" className="logo-img"/>
              </span>
            </div>
            <div className='col-md-6'>
              <ul className='social-box d-flex justify-content-end'>
                <li><a href="https://www.linkedin.com/company/yemeksepeti" className='btn'> <FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                <li><a href="https://www.instagram.com/yemeksepeti/" className='btn'> <FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="https://www.facebook.com/Yemeksepeti" className='btn'> <FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li><a href="https://x.com/yemeksepeti" className='btn'> <FontAwesomeIcon icon={faXTwitter} /></a></li>
              </ul>          
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer;