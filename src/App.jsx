import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import ScrollTop from "./components/ScrollTop";
import "./App.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import pureSurfLogo from "./assets/logos/pure-surf-logo.png";
import maldivesURL from "./assets/maldives.mp4";
import foodURL from "./assets/food.jpg";
import facilitiesURL from "./assets/facilities.jpg";
import roomsURL from "./assets/rooms/room.jpg";
import yogacoursesURL from "./assets/yogacourses.jpg";
import skatingURL from "./assets/skating.jpg";
import snorkelingURL from "./assets/snorkeling.jpeg";
import jeyskyURL from "./assets/jetsky.jpg";
import surfstayURL from "./assets/surfstay.jpg";
import improvementURL from "./assets/improvement.jpg";
import firststepURL from "./assets/firststep.jpg";
import freespiritURL from "./assets/freespirit.jpg";
import sunURL from "./assets/icons/sun.png";
import globeURL from "./assets/icons/globe.png";
import surfURL from "./assets/icons/surf-icon.png";
import packagesURL from "./assets/icons/packages-icon.png";
import seasonURL from "./assets/icons/season-icon.png";
import thumpsupURL from "./assets/icons/thumpsup-icon.png";
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <ScrollTop />
      {/* navbar */}
      <nav
        className="navbar navbar-expand-lg bg-nav-custom px-md-5 py-md-3 fixed-top"
        aria-label="Thirteenth navbar example"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list-ul tx-main-color fs-1"></i>
          </button>
          <div
            className="collapse navbar-collapse d-lg-flex"
          >
            <a
              className="navbar-brand me-0 d-none d-md-block col-lg-2"
              href="#"
            >
              <img src={pureSurfLogo} width={150} alt="logo" />
            </a>
            <ul className="navbar-nav col-lg-8 justify-content-lg-center">
              <li className="nav-item mx-md-3 text-white">
                <a className="nav-link text-reset fs-4 fw-bold tx-orange" href="/surfcourses">
                  SURFING
                </a>
              </li>
              <li className="nav-item mx-md-3 text-white">
                <a className="nav-link text-reset fs-4 fw-bold tx-orange" href="/yogacourses">
                  YOGA
                </a>
              </li>
              <li className="nav-item mx-md-3 text-white">
                <a className="nav-link text-reset fs-4 fw-bold tx-orange" href="/activites">
                  ACTIVITIES
                </a>
              </li>
              <li className="nav-item mx-md-3 text-white">
                <a className="nav-link text-reset fs-4 fw-bold tx-orange" href="/packages">
                  PACKAGES
                </a>
              </li>
              <li className="nav-item mx-md-3 text-white">
                <a className="nav-link text-reset fs-4 fw-bold tx-orange" href="/accomodations">
                  ACCOMMODATIONS
                </a>
              </li>
              {/* <li className="nav-item mx-md-3 text-white">
                <a className="nav-link text-reset fs-4 fw-bold tx-orange" href="#contacts">
                  CONTACTS
                </a>
              </li> */}
            </ul>
            <div className="d-lg-flex col-lg-2 justify-content-lg-end">
              <button id="book-nav" className="btn tx-blue-color fs-4 fw-bold m-0 p-0 tx-orange">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="offcanvas offcanvas-start bg-nav-custom" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <img src={pureSurfLogo} width={100} alt="" />
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
        <ul className="navbar-nav col-lg-8 justify-content-lg-center">
              <li className="nav-item mx-md-3 text-white">
                <a className="nav-link text-reset fs-4 fw-bold tx-orange" href="/surfcourses">
                  SURFING
                </a>
              </li>
              <li className="nav-item mx-md-3 text-white">
                <a className="nav-link text-reset fs-4 fw-bold tx-orange" href="/yogacourses">
                  YOGA
                </a>
              </li>
              <li className="nav-item mx-md-3 text-white">
                <a className="nav-link text-reset fs-4 fw-bold tx-orange" href="/activites">
                  ACTIVITIES
                </a>
              </li>
              <li className="nav-item mx-md-3 text-white">
                <a className="nav-link text-reset fs-4 fw-bold tx-orange" href="/packages">
                  PACKAGES
                </a>
              </li>
              <li className="nav-item mx-md-3 text-white">
                <a className="nav-link text-reset fs-4 fw-bold tx-orange" href="/accomodations">
                  ACCOMMODATIONS
                </a>
              </li>
              {/* <li className="nav-item mx-md-3 text-white">
                <a className="nav-link text-reset fs-4 fw-bold tx-orange" href="#contacts">
                  CONTACTS
                </a>
              </li> */}
            </ul>
            <div className="d-lg-flex col-lg-2 justify-content-lg-end">
              <button id="book-nav" className="btn tx-blue-color fs-4 fw-bold m-0 p-0 tx-orange">
                BOOK NOW
              </button>
            </div>
        </div>
      </div>

      {/* hero */}
      <div className="position-absolute heading">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8 col-md-8 text-center">
              <h1 className="tx-orange display-2">
                The pure magic of Maldives
              </h1>
              <h5 className="fw-bold spacing">
                WELCOME TO PURE BLUE SURF & YOGA RETREAT
              </h5>
            </div>
          </div>
        </div>
      </div>
      <header>
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active first-slide">
              <div className="carousel-caption caption-animated">
                <p className="fw-light m-0 p-0">Follow on our social network</p>
                <i className="bi bi-facebook mx-2 text-secondary"></i>
                <i className="bi bi-instagram mx-2 text-secondary"></i>
                <i className="bi bi-twitter mx-2 text-secondary"></i>
              </div>
            </div>
            <div className="carousel-item second-slide">
              <div className="carousel-caption caption-animated">
                <p className="fw-light m-0 p-0">Direct booking</p>
                <p className="text-secondary small">
                  Book your stay and more activities directly from here, scroll to see more
                </p>
              </div>
            </div>
            <div className="carousel-item third-slide">
              <div className="carousel-caption caption-animated">
                <p className="fw-light m-0 p-0">
                  Discoved the perfection of Maldives
                </p>
                <p className="text-secondary small">
                  Get how we offer yoga retreat, surf and more activites and all kinds of
                  packages
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>
      <div className="container mt-5 pt-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <p className="fs-2 fw-bold spacing">
              PURE BLUE SURF & YOGA RETREAT
            </p>
            <p className="spacing">HIMMAFUSHI , MALDIVES</p>
          </div>
        </div>
        <div className="row align-items-center justify-content-around mb-5">
          <div className="col-10 col-md-5 mb-3">
            <p className="tx-orange fs-1 text-center">
              Live a unique and transformative experience, blending the <br />{" "}
              <span className="tx-main-color tx-main-color">
              ADRENALINE of catching waves with the serenity of yoga
              </span>
            </p>
          </div>
          <div className="col-10 col-md-5 mb-3">
            <p className="fw-light fs-5 text-center text-md-start">
              Welcome to Pure Blue Retreat in the Maldives, where the magic of
              surfing and yoga awaits! Immerse yourself in thrilling waves and
              relaxing yoga sessions on our pristine shores. Our comfy rooms and
              delicious local cuisine add a touch of luxury to your escape. Pure
              Blue is all about the perfect blend of excitement and serenity –
              join us for an easygoing retreat in this tropical paradise!
            </p>
          </div>
        </div>
      </div>

      {/* video section */}
      <div className="container mb-3 mb-3">
        <div className="row align-items-center justify-content-around">
          <div className="col-10 col-md-6 mb-3">
            <video
              src={maldivesURL}
              className="img-fluid"
              autoPlay
              controls
            ></video>
          </div>
          <div className="col-10 col-md-6 mb-3 text-center">
            <div className="row">
              <div className="col-6 mb-3">
                <div className="card w-75 text-center border-0 d-block mx-auto mb-3">
                  <img
                    src={surfURL}
                    width={50}
                    alt="surf icon"
                    className="d-block mx-auto mb-3"
                  />
                  <p className="spacing tx-main-color p-0 m-0">SURFING</p>
                  <p className="p-0 m-0">All kinds of waves</p>
                </div>
              </div>
              <div className="col-6 mb-3">
                <div className="card w-75 text-center border-0 d-block mx-auto mb-3">
                  <img
                    src={thumpsupURL}
                    width={50}
                    alt="surf icon"
                    className="d-block mx-auto mb-3"
                  />
                  <p className="spacing tx-main-color p-0 m-0">VIBES</p>
                  <p className="p-0 m-0">only good vibes</p>
                </div>
              </div>
              <div className="col-6 mb-3">
                <div className="card w-75 text-center border-0 d-block mx-auto mb-3">
                  <img
                    src={seasonURL}
                    width={50}
                    alt="surf icon"
                    className="d-block mx-auto mb-3"
                  />
                  <p className="spacing tx-main-color p-0 m-0">SEASON</p>
                  <p className="p-0 m-0">May - January</p>
                </div>
              </div>
              <div className="col-6 mb-3">
                <div className="card w-75 text-center border-0 d-block mx-auto mb-3">
                  <img
                    src={packagesURL}
                    width={50}
                    alt="surf icon"
                    className="d-block mx-auto mb-3"
                  />
                  <p className="spacing tx-main-color p-0 m-0">PACKAGES</p>
                  <p className="p-0 m-0">Starting from 700€</p>
                </div>
              </div>
            </div>
            <button className="btn-book text-uppercase fw-bold">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* cards packages */}
      <main>
        <section className="py-3 text-center container">
          <div className="row py-lg-5">
            <div className="col-10 col-md-8 mx-auto">
              <p className="lead tx-main-color spacing">PACKAGES</p>
              <p className="display-4 fw-light tx-orange">
                EXPERIENCE THE BEST OF MALDIVES
              </p>
              <p>
              Design for all levels and budget ... <span className="fw-bold tx-main-color">Pure Blue Surf & Yoga retreat</span> provide you the perfect packages for all surfers . Eat, surf, relaxe, Repeat is our Anthem
              </p>
            </div>
          </div>
        </section>
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row">
            <div className="col-12 col-md-4 mb-3">
                <div className="card text-bg-dark border-0 rounded-0 text-center" style={{ height: '22rem', overflow: "hidden"}}>
                  <img
                    src={firststepURL}
                    className="card-img opacity-50"
                    alt="..."
                  />
                  <div className="card-img-overlay d-flex justify-content-center align-items-end">
                    <div>
                      <h5 className="card-title tx-orange h1">FIRST Step</h5>
                      <p className="card-text fw-bold">
                        STARTING FROM 790€ / WEEK
                      </p>
                      <button className="btn-book text-uppercase fw-bold">
                        Info&book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <div className="card text-bg-dark border-0 rounded-0 text-center" style={{ height: '22rem', overflow: "hidden"}}>
                  <img
                    src={improvementURL}
                    className="card-img opacity-50"
                    alt="..."
                  />
                  <div className="card-img-overlay d-flex justify-content-center align-items-end">
                    <div>
                      <h5 className="card-title tx-orange h1">IMPROVEMENT</h5>
                      <p className="card-text fw-bold">
                        STARTING FROM 690€ / WEEK
                      </p>
                      <button className="btn-book text-uppercase fw-bold">
                        Info&book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <div className="card text-bg-dark border-0 rounded-0 text-center" style={{ height: '22rem', overflow: "hidden"}}>
                  <img
                    src={freespiritURL}
                    className="card-img opacity-50"
                    alt="..."
                  />
                  <div className="card-img-overlay d-flex justify-content-center align-items-end">
                    <div>
                      <h5 className="card-title tx-orange h1">Free spirit</h5>
                      <p className="card-text fw-bold"> 
                        STARTING FROM 590€ / WEEK
                      </p>
                      <button className="btn-book text-uppercase fw-bold">
                        Info&book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* what customers */}
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-12 text-center">
            <p className="h3 text-uppercase tx-main-color spacing">
              What customers say
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
              <div className="col-12 col-md-12">
                <div className="card bg-main-color text-white border-0 rounded-0 py-5">
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-8 text-center">
                      <div className="card-body">
                        <blockquote className="blockquote mb-0 tx-orange fs-2">
                          <p>
                            “SURFING IN MALDIVES WAS ALWAYS MY DREAM AND DOING IT
                            WHILE AT PURE BLUE WAS JUST PERFECT FOR ME! THE LOCATION,
                            THE STAFF AND THE SERVICE WERE JUST PERFECT”.
                          </p>
                          <footer className="blockquote-footer text-white mt-3">
                            Jacopo{" "}
                            <cite title="Source Title">from google reviews</cite>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </div>

      {/* surf courses section */}
      <div className="container-fluid bg-surf-courses">
        <div className="row">
          <div className="p-md-5">
            <div className="container py-5">
              <p className="fw-bold tx-main-color spacing">SURF COURSES</p>
              <p className="tx-orange text-white display-3">
                Explore perfect waves
              </p>
              <p className="col-8 col-md-4 text-white">
                Maldives are now getting famous for their world class waves: the gift that the wildest nature offers us is just waiting for you to put a wetsuit on and jump on your board!
              </p>
              <Link to={'/surfcourses'}>
                <button className="btn-book text-uppercase fw-bold">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* accomodation section */}
      <main>
        <section className="py-3 text-center container">
          <div className="row py-lg-5">
            <div className="col-10 col-md-8 mx-auto">
              <p className="lead tx-main-color spacing">ACCOMODATION</p>
              <p className="display-4 fw-light tx-orange">
                OUR RETREAT IN THE HEART OF THE OCEAN
              </p>
              <p>
                Maldives start to be world famous for his world class waves.
                During the season, from march to November the pure nature of
                Maldives gives us constant and all level waves for us to enjoy,
                scored, mastered.
              </p>
            </div>
          </div>
        </section>
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 col-md-4 mb-3">
                <div
                  className="card d-block mx-auto rounded-0 border-0 shadow-sm"
                  style={{ width: "23rem", height: "25rem" }}
                > 
                  <img
                    src={roomsURL}
                    height={250}
                    className="card-img-top rounded-0"
                    alt="rooms"
                  />
                  <div className="card-body text-center">
                    <p className="fs-2 tx-orange">Rooms</p>
                    <p className="card-text">
                    Your calm and relaxing space facing the Ocean: Noah Beach Lodge
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <div
                  className="card d-block mx-auto rounded-0 border-0 shadow-sm"
                  style={{ width: "23rem", height: "25rem" }}
                >
                  <img
                    src={facilitiesURL}
                    height={250}
                    className="card-img-top rounded-0"
                    alt="facilities"
                  />
                  <div className="card-body text-center">
                    <p className="fs-2 tx-orange">Facilities</p>
                    <p className="card-text">
                    Your calm and relaxing space facing the Ocean: Noah Beach Lodge
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <div
                  className="card d-block mx-auto rounded-0 border-0 shadow-sm"
                  style={{ width: "23rem", height: "25rem" }}
                >
                  <img
                    src={foodURL}
                    height={250}
                    className="card-img-top rounded-0"
                    alt="food"
                  />
                  <div className="card-body text-center">
                    <p className="fs-2 tx-orange">Food</p>
                    <p className="card-text">
                    Your calm and relaxing space facing the Ocean: Noah Beach Lodge
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-12 text-center">
                <Link to={'/accomodations'}>
                  <button className="btn-book text-uppercase fw-bold">
                    MORE INFO
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* yoga section */}
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 col-md-6 mb-3">
            <img
              src={yogacoursesURL}
              alt="yoga classes"
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-md-6 mb-3">
            <p className="lead tx-main-color spacing text-center">YOGA</p>
            <p className="display-4 fw-light tx-orange">
              Discover, LEARN, EXPLORE
            </p>
            <p>
            Try yoga at Pure Blue Surf & Yoga Retreat in the Maldives. Our yoga classes are led by experts and are great for everyone, no matter if you&apos;re new to yoga or have done it before. It&apos;s a peaceful way to enjoy your time here.
            </p>
            <p className="fw-bold">How it works</p>
            <ul>
              <li>2 classes a day</li>
              <li>Hatha yoga and Yin</li>
              <li>Certified teacher</li>
            </ul>
            <Link to={'/yogacourses'}>
              <button className="btn-book text-uppercase fw-bold mt-3">
                MORE INFO
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* activities section */}
      <div>
        <section className="py-3 text-center container">
          <div className="row py-lg-5">
            <div className="col-10 col-md-8 mx-auto">
              <p className="lead tx-main-color spacing">ACTIVITIES</p>
              <p className="display-4 fw-light tx-orange text-uppercase">
                Join the NOAH Adventure club
              </p>
              <p>
              We have lots of fun things you can do at Pure Blue. From snorkeling to jet skiing, there&apos;s something for everyone. Explore all the shades of blue with all the activities of the Noah Adventure club
              </p>
            </div>
          </div>
        </section>
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 col-md-4 mb-3">
                <div className="card text-bg-dark border-0 rounded-0 text-center">
                  <img
                    src={skatingURL}

                    className="card-img opacity-50"
                    alt="surf skate"
                  />
                  <div className="card-img-overlay d-flex justify-content-center align-items-end">
                    <div>
                      <h5 className="card-title tx-orange h1">ADDS-ON</h5>
                      <p className="card-text fs-1">Surf Skate</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <div className="card text-bg-dark border-0 rounded-0 text-center">
                  <img
                    src={snorkelingURL}
                    className="card-img opacity-50"
                    alt="snorkelling"
                  />
                  <div className="card-img-overlay d-flex justify-content-center align-items-end">
                    <div>
                      <h5 className="card-title tx-orange h1">Free activity</h5>
                      <p className="card-text fs-1">Snorkelling</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <div className="card text-bg-dark border-0 rounded-0 text-center">
                  <img
                    src={jeyskyURL}
                    className="card-img opacity-50"
                    alt="jetsky"
                  />
                  <div className="card-img-overlay d-flex justify-content-center align-items-end">
                    <div>
                      <h5 className="card-title tx-orange h1">ADDS-ON</h5>
                      <p className="card-text fs-1">Jet Ski</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-12 text-center">
                <Link to={'/activites'}>
                  <button className="btn-book text-uppercase fw-bold">
                    SEE ALL ACTIVITIES
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE carousel */}
        <div className="row">
          <div className="col-12">
            <Swiper
              navigation={true}
              modules={[EffectFade, Navigation]}
              effect={'fade'}
              className="slider"
            >
              <SwiperSlide>
                <div className="container-fluid slide-1">
                  <div className="row">
                    <div className="col-12 col-md-4" style={{
                      position: "absolute", 
                      bottom: "10%",
                      left: "10%"
                    }}>
                       <p className='tx-orange text-white display-5'>AWESOME LIFE AT PURE BLUE</p>
                       <p className=' lead'>
                        <a href="#" className='text-decoration-none text-white'>Follow us on instagram
                        <i className="bi bi-instagram mx-2 text-white"></i>
                        </a>  
                      </p>                       
                    </div>  
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="container-fluid slide-2">
                  <div className="row">
                    <div className="col-12 col-md-4" style={{
                      position: "absolute", 
                      bottom: "10%",
                      left: "10%"
                    }}>
                    <p className='tx-orange text-white display-5'>AWESOME LIFE AT PURE BLUE</p>
                       <p className=' lead'>
                        <a href="#" className='text-decoration-none text-white'>Follow us on instagram
                        <i className="bi bi-instagram mx-2 text-white"></i>
                        </a>  
                      </p>  
                    </div>  
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="container-fluid slide-3">
                  <div className="row">
                    <div className="col-12 col-md-4" style={{
                      position: "absolute", 
                      bottom: "10%",
                      left: "10%"
                    }}>
                    <p className='tx-orange text-white display-5'>AWESOME LIFE AT PURE BLUE</p>
                       <p className=' lead'>
                        <a href="#" className='text-white text-decoration-none'>Follow us on instagram
                        <i className="bi bi-instagram mx-2 text-white"></i>
                        </a>  
                      </p>  
                    </div>  
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

      {/* about us section */}
      <div>
        <section className="py-3 text-center container">
          <div className="row py-lg-5">
            <div className="col-10 col-md-8 mx-auto">
              <p className="lead tx-main-color spacing">ABOUT US</p>
              <p className="display-4 fw-light tx-orange text-uppercase">
                Passionate about the sea
              </p>
              <p>
                Pure Blue surf&yoga retreat and Noah Beach lodge are a young association getting along for the same purpose: giive and a marvelous and affordable trues experiences of surfing 
              </p>
            </div>
          </div>
        </section>
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 col-md-6 mb-3">
                <p className='fw-bold tx-main-color'>What’s a vacation if not the only chance to make a dream something real, that you can feel through your skin, eyes and every sense?</p>
                <p>The Maldives are one of those few places on our beautiful blue planet that has that dreamy aura that makes you doubt they actually exist outside of commercials and medias: colors that not even our wildest imagination can picture, smells of spices and infinite flavours of tropical fruit.
                </p>
                <p> “Maldives” can be defined as the quintessential paradise, an antonomasia that entered our vocabulary to describe that unreachable place of perfection and dream.</p>
                <p className='text-uppercase tx-main-color'>Pure Blue Surf is the step that makes it available and real for you</p>
                <p>And, as if that wasn’t enough, on top of that we offer one of the most beloved and connected-to-nature sport that is becoming a global trend: surfing.
                </p>
                <p>Three surf spots, reachable by boat, that will make your holiday an unstoppable symphony of amusement, emotions and discover.</p>
              </div>
              <div className="col-12 col-md-6 mb-3">
              <p className='tx-main-color'>Our body and our mind, though, also need a moment of stillness, and swimming among our colourful scaled friends that inhabit the pristine waters of the archipelago, is probably the best place to search and find that inner peace.
</p>
                <p className='tx-main-color'>And again, something else that makes Pure Blue Surf the perfect destination for this “real life dream” is that it’s located on a small local island, because we make of sustainability our core value, because we believe in giving back as much as we can to the local population, as they offer to us all of these amazing features that enrich our experience.

                </p>
                <p> When we say reachable, we mean it not just in a metaphorical sense, but also in the most practical way: reaching our corner of paradise from the International Airport of Malè couldn’t be easier, thanks to the renewed connections</p>
                <p className=''>When you’re discovering Asia, the continent that is the cradle of civilization, with the wildest nature and sea wildlife, you can’t miss out on Maldives: this archipelago is waiting for you and it’s just one step away, at Pure Blue Surf.</p>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-12 col-md-4 mb-3 text-center">
                <img src={thumpsupURL} width={50} alt="" />
                <span className='ms-3'>14 day free cancellation & free rebooking</span>
              </div>  
              <div className="col-12 col-md-4 mb-3 text-center">
                <img src={sunURL} width={50} alt="" />
                <span className='ms-3'>Good vibe only</span>
              </div>
              <div className="col-12 col-md-4 mb-3 text-center">
                <img src={globeURL} width={50} alt="" />
                <span className='ms-3'>Global team / great quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* form contact */}               
      <Contact />
                  
      <Footer />

    </div>
  );
}

export default App;
