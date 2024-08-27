import React from 'react';
import guvendamga  from '../assets/images/guvendamga.png';
import indir  from '../assets/images/indir.jpeg';
import './Footer.css';

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
                <div className='row'>
                    <div className='col-md-3'>
                        <span>© Yemeksepeti</span>
                    </div>
                    <div className='col-md-3'>
                        <ul>
                            <li><a href="">Yardım Merkezi</a></li>
                            <li>Çerez Politikası</li>
                            <li>Kurumsal Site</li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <br /> <br /> <br /> <br />
    </>
  )
}

export default Footer;