import React from 'react'
import banner from '../assets/images/banner.webp';
import uygimg  from '../assets/images/uyg-img.webp';
import qr  from '../assets/images/qr.png';
import appstore  from '../assets/images/appstore.png';
import playstore  from '../assets/images/playstore.png';
import huawei  from '../assets/images/huawei.png';
import CardList from './CardList';

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
                <p>Binlerce yeni kullanıcıya ulaşabilmek ister misiniz? Sadece kendi semtinizdekiler değil, artık çevre semtlerdeki binlerce kullanıcı da işletmenizden sipariş verebilecek. Bir ev, bir plaza, bir işyeri ya da üniversite kampüsü, hizmet vermek istediğiniz kim varsa artık müşteriniz.</p>
                <p> Gayet basit! Menünüzü listeliyoruz ve sipariş bilgilerini size ulaştırıyoruz. Sipariş teslimatını dilerseniz kendiniz yapabiliyorsunuz, dilerseniz Yemeksepeti sizin adınıza kullanıcıya ulaştırıyor.</p>
                <p>Hemen ailemize katılabilir ve muhteşem avantajlara sahip iş ortaklarımızdan biri olabilirsiniz.</p>
                <button className="btn sigup-btn">Başlayalım</button>
            </div>
        </div>
      </section>

      <CardList />

      <section className='info-uyg'>
        <div className='container'>
            <div>
              <h2>Mobil uygulamamızı indirin</h2>
            </div>
            <div className='uyg-box row'>
              <div className='col-md-7 uyg-left-box'>
                  <div className='col-12'>
                     <p>Yemek ve market ihtiyaçlarının tamamı için hemen indir!</p>
                     <div className='d-flex'>
                        <div className='qr-img'><img src={qr} alt="Qr"  /></div>
                        <div className='col-8 ps-2 text-white info-text' > 
                          <p>Yemek, hızlı market ya da çevredeki esnaflardan tüm ihtiyaçların dakikalar içinde kapında. Yemeksepeti’ni indir, sepetini oluşturup siparişini ver, online ya da kapıda dilediğin gibi öde.
                          </p>
                        </div>
                    </div>
                      <div className='row mt-4'>
                          <div className='col-md-3  app-box'>
                              <a href="https://apps.apple.com/us/app/yemeksepeti-food-grocery/id373034841?mt=8" target="_blank" rel="noopener noreferrer"><img src={appstore} alt="Appstore" /> </a>
                          </div>
                          <div className='col-md-3  app-box'>
                              <a href="https://play.google.com/store/apps/details?id=com.inovel.app.yemeksepeti" target="_blank" rel="noopener noreferrer"><img src={playstore} alt="PlayStore"/></a>
                          </div>
                          <div className='col-md-3  app-box'>
                              <a href="https://appgallery.huawei.com/app/C101836129" target="_blank" rel="noopener noreferrer"><img src={huawei} alt="Huawei"/></a>
                          </div>
                      </div>
                  </div>
                
              </div>
                <div className='col-md-4 app-img-box'>
                  <img src={uygimg} alt="Uyg-Img" className='app-img' />
                </div>
            </div>
        </div>
      </section>
      
      <section>
        <div className=' container home-info'>
          <p>Türkiye'nin 81 şehri ve KKTC'de, 50 bini aşkın restoran iş ortağımızla, Türkiye’de online yemek siparişi denince ilk akla gelen markayız! Restoran zincirleri başta olmak üzere, civarınızdaki en sevdiğiniz restoranlardan kolayca sipariş verebilirsiniz.</p>          
          <p> Bunun yanında, hızlı market alışverişine ihtiyacınız varsa, Yemeksepeti Market hizmetinizde! Binlerce market ürünü dilediğiniz anda, dakikalar içinde gelsin!
          </p>         
          <p>Restoranınızı seçin, istediğiniz yemekleri sepete ekleyin, online ya da kapıda dilediğiniz gibi ödeyin. Gerisi kolay, siparişiniz hızlıca kapınızda!</p>          
          <p>Yemeksepeti Mahalle de burada! Çevrenizdeki bildiğiniz, güvendiğiniz işletme ve esnaflar; marketten kasaba, şarküteriden manava, balıkçıdan petshopa, tüm kampanyaları ve fırsatlarıyla siparişiniz için hazır.</p>          
          <br/>

          <h4><strong className='color:black'>Yemeksepeti’nde sizi neler bekliyor?</strong></h4>

          <p>
            <ol>
              <li><span className='color-link'>✓</span> Yemek siparişi ya da market alışverişinde onlarca mutfak ve kategori, binlerce çeşit ürün!</li>
              <li> <span className='color-link'>✓</span> Yemek ve market ihtiyaçlarınızda her gün on binlerce indirim!</li>
              <li> <span className='color-link'>✓</span>Online ya da kapıda, dilediğiniz gibi ödeme seçeneği!</li>
              <li> <span className='color-link'>✓</span> Siparişinizle ilgili size her zaman destek olmaya hazır, 7/24 Canlı Yardım ekibi!</li>         
            </ol>
          </p>
          <p>Tek yapmanız gereken ihtiyacınızı düşünmek ve çevrenizdeki seçeneklere göz atmak!</p>
          <b>Yemeksepeti yanında, aklındaysa kapında!</b>
        </div>
      </section>
      <br/><br/>
    
      <section className='mutfak-list'>
        <div className='container '>
          <hr/>
          <h4><strong>Mutfaklar</strong></h4>
          <div className='row'>
            <div className='col-md-3 col-6'>
              <ul className='mutfak-liste'>
                <strong><a href='/'>İstanbul</a></strong>
                <li><a href='/'>Burger</a></li>
                <li><a href='/'>Pizza</a></li>
                <li><a href='/'>Kebap & Türk Mutfağı</a></li>
                <li><a href='/'>Döner</a></li>
                <li><a href='/'>Tost & Sandviç</a></li>
                <li><a href='/'>Tavuk</a></li>
                <li><a href='/'>Pide & Lahmacun</a></li>
                <li><a href='/'>Tatlı</a></li>
              </ul>
            </div>
            <div className='col-md-3 col-6'>
              <ul className='mutfak-liste'>
                <strong><a href='/'>Ankara</a></strong>
                <li><a href='/'>Döner</a></li>
                <li><a href='/'>Burger</a></li>
                <li><a href='/'>Kebap & Türk Mutfağı</a></li>
                <li><a href='/'>Pizza</a></li>
                <li><a href='/'>Çiğ Köfte</a></li>
                <li><a href='/'>Tavuk</a></li>
                <li><a href='/'>Pide & Lahmacun</a></li>
                <li><a href='/'>Tost & Sandviç</a></li>
              </ul>
            </div>
            <div className='col-md-3 col-6'>
              <ul className='mutfak-liste'>
                <strong><a href='/'>İzmir</a></strong>
                <li><a href='/'>Döner</a></li>
                <li><a href='/'>Pizza</a></li>
                <li><a href='/'>Pide & Lahmacun</a></li>
                <li><a href='/'>Burger</a></li>
                <li><a href='/'>Kebap & Türk Mutfağı</a></li>
                <li><a href='/'>Tost & Sandviç</a></li>
                <li><a href='/'>Çiğ Köfte</a></li>
                <li><a href='/'>Tavuk</a></li>
              </ul>
            </div>
            <div className='col-md-3 col-6'>
              <ul className='mutfak-liste'>
                <strong><a href='/'>Antalya</a></strong>              
                <li><a href='/'>Burger</a></li>
                <li><a href='/'>Döner</a></li>
                <li><a href='/'>Kebap & Türk Mutfağı</a></li>
                <li><a href='/'>Pizza</a></li>
                <li><a href='/'>Tost & Sandviç</a></li>
                <li><a href='/'>Çiğ Köfte</a></li>
                <li><a href='/'>Tavuk</a></li>
                <li><a href='/'>Pide & Lahmacun</a></li>              
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className='sehir-list'>
        <div className='container '>
          <hr/>
          <h4><strong>Diğer Şehirler</strong></h4>
          <div className='row'>
            <div className='col-md-3 col-6'>
              <ul className='mutfak-liste'>              
                <li><a href='/'>Adana</a></li>
                <li><a href='/'>Amasya</a></li>
                <li><a href='/'>Bilecik</a></li>
                <li><a href='/'>Burdur</a></li>
                <li><a href='/'>Denizli</a></li>
                <li><a href='/'>Erzincan</a></li>
                <li><a href='/'>Giresun</a></li>
                <li><a href='/'>Isparta</a></li>
                <li><a href='/'>Kayseri</a></li>
                <li><a href='/'>Konya</a></li>
                <li><a href='/'>Kahramanmaraş</a></li>
                <li><a href='/'>Nevşehir</a></li>
                <li><a href='/'>Sakarya</a></li>
                <li><a href='/'>Sivas</a></li>
                <li><a href='/'>Tunceli</a></li>
                <li><a href='/'>Yozgat</a></li>
                <li><a href='/'>Karaman</a></li>
                <li><a href='/'>Bartın</a></li>
                <li><a href='/'>KKTC</a></li>
              </ul>
            </div>
            <div className='col-md-3 col-6'>
              <ul className='mutfak-liste'>              
                <li><a href='/'>Adıyaman</a></li>
                <li><a href='/'>Artvin</a></li>
                <li><a href='/'>Bingöl</a></li>
                <li><a href='/'>Çanakkale</a></li>
                <li><a href='/'>Diyarbakır</a></li>
                <li><a href='/'>Erzurum</a></li>
                <li><a href='/'>Gümüşhane</a></li>
                <li><a href='/'>Mersin</a></li>
                <li><a href='/'>Kırklareli</a></li>
                <li><a href='/'>Kütahya</a></li>
                <li><a href='/'>Mardin</a></li>
                <li><a href='/'>Niğde</a></li>
                <li><a href='/'>Samsun</a></li>
                <li><a href='/'>Tekirdağ</a></li>
                <li><a href='/'>Şanlıurfa</a></li>
                <li><a href='/'>Zonguldak</a></li>
                <li><a href='/'>Kırıkkale</a></li>
                <li><a href='/'>Ardahan</a></li>
                <li><a href='/'>Kilis</a></li>
                <li><a href='/'>Bütün Şehir ve Bölgeler</a></li>
              </ul>
            </div>

            <div className='col-md-3 col-6'>
              <ul className='mutfak-liste'>              
                <li><a href='/'>Afyonkarahisar</a></li>
                <li><a href='/'>Aydın</a></li>
                <li><a href='/'>Bitlis</a></li>
                <li><a href='/'>Çankırı</a></li>
                <li><a href='/'>Edirne</a></li>
                <li><a href='/'>Eskişehir</a></li>
                <li><a href='/'>Hakkari</a></li>
                <li><a href='/'>Kars</a></li>
                <li><a href='/'>Kırşehir</a></li>
                <li><a href='/'>Malatya</a></li>
                <li><a href='/'>Muğla</a></li>
                <li><a href='/'>Ordu</a></li>
                <li><a href='/'>Siirt</a></li>
                <li><a href='/'>Tokat</a></li>
                <li><a href='/'>Uşak</a></li>
                <li><a href='/'>Aksaray</a></li>
                <li><a href='/'>Batman</a></li>
                <li><a href='/'>Iğdır</a></li>
                <li><a href='/'>Osmaniye</a></li>
              </ul>
            </div>

            <div className='col-md-3 col-6'>
              <ul className='mutfak-liste'>              
                <li><a href='/'>Ağrı</a></li>
                <li><a href='/'>Balıkesir</a></li>
                <li><a href='/'>Bolu</a></li>
                <li><a href='/'>Çorum</a></li>
                <li><a href='/'>Elazığ</a></li>
                <li><a href='/'>Gaziantep</a></li>
                <li><a href='/'>Hatay</a></li>
                <li><a href='/'>Kastamonu</a></li>
                <li><a href='/'>Kocaeli</a></li>
                <li><a href='/'>Manisa</a></li>
                <li><a href='/'>Muş</a></li>
                <li><a href='/'>Rize</a></li>
                <li><a href='/'>Sinop</a></li>
                <li><a href='/'>Trabzon</a></li>
                <li><a href='/'>Van</a></li>
                <li><a href='/'>Bayburt</a></li>
                <li><a href='/'>Şırnak</a></li>
                <li><a href='/'>Yalova</a></li>
                <li><a href='/'>Düzce</a></li>
              </ul>
            </div>
            <br />       
            <hr />
          </div>
        </div>
      </section>
      <br/><br/>
    </>
  )
}

export default Content;
