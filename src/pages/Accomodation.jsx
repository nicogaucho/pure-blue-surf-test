import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import ScrollTop from "../components/ScrollTop";
import style from "../styles/accomodations.module.css";
import pureSurfLogo from "../assets/logos/pure-surf-logo-white.png";
import pureSurf from "../assets/logos/pure-surf-logo.png";
import noahLogo from "../assets/logos/noah-logo-bigger.png";
import Footer from "../components/Footer";
import roomURL from "../assets/rooms/room.jpg";
import room1URL from "../assets/rooms/room1.jpg";
import room2URL from "../assets/rooms/room2.jpg";
import room3URL from "../assets/rooms/room3.jpg";
import foodsectionURL from "../assets/foodsection.jpg";
import lifemaldivesURL from "../assets/lifemaldives.jpg";
// import onlystayPack from "../assets/slide3.jpg";
// import surfPack from "../assets/surf-pack.jpg";
// import yogaPack from "../assets/yoga-pack.jpg";

export default function Accomodation() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <ScrollTop />
      <div className={style.centerheroaccomodations + " px-4 py-5 text-center"}>
        <img className="d-block mx-auto mb-4 img-fluid mt-5" src={pureSurfLogo} alt="" width={300} />
        <h1 className="display-1 tx-orange text-white my-5">
          Accomodation
        </h1>
      </div>

      <div className="container my-5">
        <div className="row mb-3">
          <div className="col-12 text-center">
            <div className="d-flex align-items-center justify-content-center">
              <img src={noahLogo} width={130} alt="logo noah" />
              <div className="text-start ms-3">
                <p className="h3 tx-main-color mt-md-5" >NOAH BEACH HOUSE</p>
                <p className="text-secondary mt-3"> <span className="tx-main-color">Pure Blue</span> has partnered with <span className="tx-main-color">Noah Beach house</span> to provide you the ultimate surfers retreat. <br /> Welcome to <span className="tx-main-color">Noah Beach house</span>, your ultimate surfers retreat nestled on the stunning <br /> island of Himmafushi in the Maldives. Discover our rooms</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <ul className="nav nav-tabs d-flex justify-content-center" id="myTab" role="tablist">
              <li className="nav-item mx-3" role="presentation">
                <button className="nav-link text-dark active text-uppercase fw-bold" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Standard Island view</button>
              </li>
              <li className="nav-item mx-3" role="presentation">
                <button className="nav-link text-dark text-uppercase fw-bold" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Standard Ocean View</button>
              </li>
              <li className="nav-item mx-3" role="presentation">
                <button className="nav-link text-dark text-uppercase fw-bold" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Deluxe Island Viex</button>
              </li>
              <li className="nav-item mx-3" role="presentation">
                <button className="nav-link text-dark text-uppercase fw-bold" id="only-tab" data-bs-toggle="tab" data-bs-target="#only-tab-pane" type="button" role="tab" aria-controls="only-tab-pane" aria-selected="false">Deluxe Ocean View</button>
              </li>
            </ul>   
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                <div className="container p-5">
                  <div className="row mb-5 justify-content-around align-items-center">
                    <div className="col-12 col-md-5 mb-3">
                    <Swiper
                        style={{
                          '--swiper-navigation-color': '#fff',
                          '--swiper-pagination-color': '#fff',
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                      >
                        <SwiperSlide>
                          <img src={roomURL} className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={room1URL} className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={room2URL} className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={room3URL} className="img-fluid" />
                        </SwiperSlide>
                      </Swiper>
                      <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper mt-3"
                      >
                        <SwiperSlide>
                          <img src={roomURL} className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={room1URL} className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={room2URL} className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={room3URL} className="img-fluid" />
                        </SwiperSlide>
                      </Swiper>
                      
                      
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p className="tx-orange h1 tx-blue-color">Standard Island view</p>
                      <p className="text-secondary">maximum 2 beds from 98€</p>
                      <ul>
                        <li className="my-2">Spacious and comfortable accommodation</li>
                        <li className="my-2">Stylish and modern decor</li>
                        <li className="my-2">Plush bedding for a restful night&apos;s sleep</li>
                        <li className="my-2">Ensuite bathroom with luxurious amenities</li>
                        <li className="my-2">Stunning views of the surrounding landscape</li>
                        <li className="my-2">In-room amenities such as TV, mini-fridge, and coffee maker, Air-Condition</li>
                        <li className="my-2">Complimentary Wi-Fi access</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                <div className="container p-5">
                  <div className="row mb-5 justify-content-around align-items-center">
                    <div className="col-12 col-md-5 mb-3">
                    <Swiper
                        style={{
                          '--swiper-navigation-color': '#fff',
                          '--swiper-pagination-color': '#fff',
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                      >
                        <SwiperSlide>
                          <img src={roomURL} className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={room1URL} className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={room2URL} className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={room3URL} className="img-fluid" />
                        </SwiperSlide>
                      </Swiper>
                      <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper mt-3"
                      >
                        <SwiperSlide>
                          <img src={roomURL} className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={room1URL} className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={room2URL} className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={room3URL} className="img-fluid" />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p className="tx-orange h1 tx-blue-color">Standard Ocean View </p>
                      <p className="text-secondary">maximum 2 beds from 114 €</p>
                      <ul>
                        <li className="my-2">Spacious and comfortable accommodation</li>
                        <li className="my-2">Stylish and modern decor</li>
                        <li className="my-2">Plush bedding for a restful night&apos;s sleep</li>
                        <li className="my-2">Ensuite bathroom with luxurious amenities</li>
                        <li className="my-2">Stunning views of the surrounding landscape</li>
                        <li className="my-2">In-room amenities such as TV, mini-fridge, and coffee maker, Air-Condition</li>
                        <li className="my-2">Complimentary Wi-Fi access</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
                <div className="container p-5">
                  <div className="row mb-5 justify-content-around align-items-center">
                    <div className="col-12 col-md-5 mb-3">
                    <Swiper
                        style={{
                          '--swiper-navigation-color': '#fff',
                          '--swiper-pagination-color': '#fff',
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                      >
                        <SwiperSlide>
                          <img src={roomURL} className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={room1URL} className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={room2URL} className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={room3URL} className="img-fluid" />
                        </SwiperSlide>
                      </Swiper>
                      <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper mt-3"
                      >
                        <SwiperSlide>
                          <img src={roomURL} className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={room1URL} className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={room2URL} className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={room3URL} className="img-fluid" />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p className="tx-orange h1 tx-blue-color">Deluxe Island Viex</p>
                      <p className="text-secondary">maximum 3 beds from 124€</p>
                      <ul>
                        <li className="my-2">Spacious and comfortable accommodation</li>
                        <li className="my-2">Stylish and modern decor</li>
                        <li className="my-2">Plush bedding for a restful night&apos;s sleep</li>
                        <li className="my-2">Ensuite bathroom with luxurious amenities</li>
                        <li className="my-2">Stunning views of the surrounding landscape</li>
                        <li className="my-2">In-room amenities such as TV, mini-fridge, and coffee maker, Air-Condition</li>
                        <li className="my-2">Complimentary Wi-Fi access</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="only-tab-pane" role="tabpanel" aria-labelledby="only-tab" tabIndex="0">
                <div className="container p-5">
                  <div className="row mb-5 justify-content-around align-items-center">
                    <div className="col-12 col-md-5 mb-3">
                      <Swiper
                        style={{
                          '--swiper-navigation-color': '#fff',
                          '--swiper-pagination-color': '#fff',
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                      >
                        <SwiperSlide>
                          <img src={roomURL} className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={room1URL} className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={room2URL} className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={room3URL} className="img-fluid" />
                        </SwiperSlide>
                      </Swiper>
                      <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper mt-3"
                      >
                        <SwiperSlide>
                          <img src={roomURL} className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={room1URL} className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={room2URL} className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={room3URL} className="img-fluid" />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p className="tx-orange h1 tx-blue-color">Deluxe Ocean View</p>
                      <p className="text-secondary">maximum 3 beds from 144 €</p>
                      <ul>
                        <li className="my-2">Spacious and comfortable accommodation</li>
                        <li className="my-2">Stylish and modern decor</li>
                        <li className="my-2">Plush bedding for a restful night&apos;s sleep</li>
                        <li className="my-2">Ensuite bathroom with luxurious amenities</li>
                        <li className="my-2">Stunning views of the surrounding landscape</li>
                        <li className="my-2">In-room amenities such as TV, mini-fridge, and coffee maker, Air-Condition</li>
                        <li className="my-2">Complimentary Wi-Fi access</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
        <div className="row mb-3 align-items-center justify-content-around">
          <div className="col-12 col-md-5 mb-5">
            <img src={foodsectionURL} alt="" className="img-fluid" />
          </div>
          <div className="col-12 col-md-5 mb-5 order-md-first">
            <p className="tx-main-color text-uppercase">FOOD</p>
            <p className="tx-orange h1">Experience local food</p>
            <p className="mt-3">We offer a memorable culinary experience in the stunning surroundings of Himmafushi. Our restaurant serves fresh locally sourced ingredients.</p>
            <p className="mt-3">Start your day with a hearty breakfast spread featuring an assortment of freshly baked pastries, tropical fruits, and made-to-order omelets.</p>
            <p className="mt-3">Energize yourself for a day of adventure with our selection of healthy options, including granola bowls and freshly squeezed juices.</p>
            <p className="text-secondary">* Let us know if you have intolerance or allergie, our team will always compose the best healthiest meal for you</p>
          </div>
        </div>
        <div className="row mb-3 align-items-center justify-content-around">
          <div className="col-12 col-md-5 mb-5">
            <img src={lifemaldivesURL} alt="" className="img-fluid" />
          </div>
          <div className="col-12 col-md-5 mb-5">
            <p className="tx-main-color text-uppercase">YOUR DAY</p>
            <p className="tx-orange h1">LIVE THE SURF LIFESTYLE</p>

            <p className="mt-5">Experience the perfect balance of adventure and relaxation and dive into a life of surfing and yoga sessions. Heres what a typical day looks like:</p>
            <ul className="mt-5 text-start">
              <li className="small">6:30 AM - 7:30 AM: Sunrise Yoga</li>
              <li className="small">7:30 AM - 9:30 AM: Breakfast</li>
              <li className="small">9:30 AM - 12:30 PM: Surfing Session</li>
              <li className="small">12:30 PM - 2:00 PM: Lunch</li>
              <li className="small">2:00 PM - 5:00 PM: Free Time</li>
              <li className="small">5:00 PM - 6:00 PM: Sunset Yoga</li>
              <li className="small">7:00 PM - 9:00 PM: Dinner</li>
            </ul>

          </div>
        </div>
      </div>


      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4 m-0 p-0">
            <div className={style.cardaccomodations1 + " card rounded-0 border-0"}></div>
          </div>
          <div className="col-12 col-md-4 m-0 p-0">
            <div className={style.cardaccomodations2 + " card rounded-0 border-0"}></div>
          </div>
          <div className="col-12 col-md-4 m-0 p-0">
            <div className={style.cardaccomodations3 + " card rounded-0 border-0"}></div>
          </div>
        </div>
        <div className="container">
          <div className="row my-5">
            <div className="col-12 text-center">
              <p className="h3 tx-main-color text-uppercase">What is included</p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 col-md-4 mb-5">
              <strong>Welcome to Noah Lodge, your ultimate surfers retreat nestled on the stunning island of Himmafushi in the Maldives.</strong>
              <p>As your gateway to an unforgettable surfing adventure, Noah Lodge offers a blend of comfort, convenience, and breathtaking natural beauty</p>
              <ul>
                <li>
                Cozy and stylishly appointed rooms 
                </li>
                <li>
                Designed with surfers in mind 
                </li>
                <li>
                Modern amenities to  
                </li>
                <li>
                Comfortable stay 
                </li>
                <li>
                Laid-back atmosphere
                </li>
                <li>
                Views of the tropical paradise
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 mb-5">
              <p>We serve delicious meals prepared with fresh, locally sourced ingredients at our onsite restaurant.</p>
              <p>From hearty breakfasts to satisfying dinners, our talented chefs craft a diverse menu that caters to all dietary preferences.</p>
              <p>And dont forget to try our specialty seafood dishes, showcasing the flavors of the Maldives bountiful waters.</p>
            </div>
            <div className="col-12 col-md-4 mb-5 text-center">
              <div className="mb-3">
                <img src={pureSurf} alt="logo pure surf" width={150} />
                <img src={noahLogo} alt="logo noah" width={100} />
              </div>
              <strong>Starting from 500€/week per person</strong>
              <div className="col-12 mb-5 text-center">
                <button className="btn-book text-uppercase fw-bold mt-5">
                    Book now
                </button>
              </div>
              <p className="small text-secondary">If you have any questions about your booking in advance, feel free to send us an individual request to blueconsortium@proton.me</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}