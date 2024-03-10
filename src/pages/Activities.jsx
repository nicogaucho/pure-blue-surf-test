import ScrollTop from "../components/ScrollTop";
import style from "../styles/activities.module.css";
import pureSurfLogo from "../assets/logos/pure-surf-logo-white.png";
import snorkelURL from "../assets/snorkel.jpg";
import kayakingURL from "../assets/kayaking.jpg";
import jetskyURL from "../assets/jetskyhero.jpg";
import fishingURL from "../assets/fishing.jpg";
import sandbankURL from "../assets/slide1.jpeg";
import yogaURL from "../assets/yogacourses.jpg";
import skateURL from "../assets/skate.png";
import Footer from '../components/Footer';

export default function Activities() {


  return (
    <>
      <ScrollTop />
      <div className={style.centerheroaactivities + " px-4 py-5 text-center"}>
        <img className="d-block mx-auto mb-4 img-fluid mt-5" src={pureSurfLogo} alt="" width={300} />
        <h1 className="display-1 tx-orange text-white my-5">Activities</h1>
      </div>

      <div id="explore" className="container my-5 py-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="tx-orange display-4 tx-blue-color">Explore more about our activities</h2>
          </div>      
        </div>
        <div className="row mb-5">
          <div className="col-12">
            <ul className="nav nav-tabs d-flex justify-content-center" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link text-dark active spacing text-uppercase fw-bold" id="home-tab" data-bs-toggle="tab" data-bs-target="#snorkel-tab-pane" type="button" role="tab" aria-controls="snorkel-tab-pane" aria-selected="true">snorkeling</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link text-dark spacing text-uppercase fw-bold" id="kayak" data-bs-toggle="tab" data-bs-target="#kayak-pane" type="button" role="tab" aria-controls="kayak-pane" aria-selected="false">Kayaking</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link text-dark spacing text-uppercase fw-bold" id="jetsky" data-bs-toggle="tab" data-bs-target="#jetsky-pane" type="button" role="tab" aria-controls="jetsky-pane" aria-selected="false">Jet sky</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link text-dark spacing text-uppercase fw-bold" id="fishing" data-bs-toggle="tab" data-bs-target="#fishing-pane" type="button" role="tab" aria-controls="fishing-pane" aria-selected="false">Fishing</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link text-dark spacing text-uppercase fw-bold" id="sand-bank" data-bs-toggle="tab" data-bs-target="#sand-bank-pane" type="button" role="tab" aria-controls="sand-bank-pane" aria-selected="false">SAND BANK CHILL</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link text-dark spacing text-uppercase fw-bold" id="yoga" data-bs-toggle="tab" data-bs-target="#yoga-pane" type="button" role="tab" aria-controls="yoga-pane" aria-selected="false">SURF&YOGA</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link text-dark spacing text-uppercase fw-bold" id="skate" data-bs-toggle="tab" data-bs-target="#skate-pane" type="button" role="tab" aria-controls="skate-pane" aria-selected="false">SURF SKate</button>
              </li>
            </ul>   
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="snorkel-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                <div className="container p-5">
                  <div className="row justify-content-around align-items-center">
                    <div className="col-12 col-md-5 mb-3">
                      <img src={snorkelURL} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p className="tx-orange h1 tx-blue-color">snorkeling</p>
                      <p className="lead tx-main-color">Overview</p>
                      <p className="text-secondary">Snorkeling in the Maldives is like stepping into an underwater wonderland. You&apos;ll see colorful fish and coral reefs, sea turtles and maybe even rays gliding gracefully. With clear water, you can see everything easily, making each snorkeling trip a magical experience.</p>
                      <p className="lead tx-main-color">How to do it</p>
                      <p className="text-secondary">You can ask the equipment at your arrival or participate to organized snorkeling trips for added price</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="kayak-pane" role="tabpanel" aria-labelledby="kayak" tabIndex="0">
                <div className="container p-5">
                  <div className="row justify-content-around align-items-center">
                    <div className="col-12 col-md-5 mb-3">
                      <img src={kayakingURL} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p className="tx-orange h1 tx-blue-color">Kayaking</p>
                      <p className="lead tx-main-color">Overview</p>
                      <p className="text-secondary">Kayaking in the Maldives is an exciting way to explore its pristine waters. Glide through the turquoise sea, feeling the gentle breeze on your face as you paddle along. You&apos;ll have the chance to navigate hidden coves, secluded beaches, and stunning coastlines, all while taking in the breathtaking beauty of the Maldivian scenery.</p>
                      <p className="lead tx-main-color">How to do it</p>
                      <p className="text-secondary">Cruise in a clear blue water with the Kayak Cruise Trip of 2 hours.</p>
                      <ul>
                        <li>3 People or more $20 per person</li>
                        <li>2 People $25 per person</li>
                        <li>1 Person $40</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="jetsky-pane" role="tabpanel" aria-labelledby="jetsky" tabIndex="0">
                <div className="container p-5">
                  <div className="row justify-content-around align-items-center">
                    <div className="col-12 col-md-5 mb-3">
                      <img src={jetskyURL} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p className="tx-orange h1 tx-blue-color">JetSky</p>
                      <p className="lead tx-main-color">Overview</p>
                      <p className="text-secondary">Jet skiing across the sparkling waters of Maldives is an exhilarating adventure that you can&apos;t miss! Imagine feeling the wind in your hair and the thrill of speed while riding in pristine clear waters. With the vast expanse of open water surrounding you, you&apos;ll have plenty of space to explore and enjoy the freedom of the ocean.</p>
                      <p className="lead tx-main-color">How to do it</p>
                      <p className="text-secondary">
                      Jet ski your way around the scenic waters.. 
                      </p>
                      <ul>
                        <li>3 People or more $35 per person</li>
                        <li>2 People $40 per person</li>
                        <li>1 Person $80</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="fishing-pane" role="tabpanel" aria-labelledby="fishing" tabIndex="0">
                <div className="container p-5">
                  <div className="row justify-content-around align-items-center">
                    <div className="col-12 col-md-5 mb-3">
                      <img src={fishingURL} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p className="tx-orange h1 tx-blue-color">Fishing</p>
                      <p className="lead tx-main-color">Overview</p>  
                      <p className="text-secondary">Join the Noah Fishing Club. From colorful reef fish to powerful game fish like tuna and marlin, there&apos;s always something biting in the Maldivian waters. With the warm sun on your face and the gentle lapping of waves, fishing here is not just about the catch – it&apos;s about the whole experience of being out on the water, enjoying nature, and making memories that last a lifetime.</p>
                      <p className="lead tx-main-color">How to do it</p>
                      <p className="text-secondary">Enjoy a serene sunset while catching your most beautiful fish. <br /> Duration: 4 hours.</p>
                      <ul>
                        <li>3 People or more $25 per person</li>
                        <li>2 People $75 per person</li>
                        <li>1 Person $150</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="sand-bank-pane" role="tabpanel" aria-labelledby="sand-back-tab" tabIndex="0">
                <div className="container p-5">
                  <div className="row justify-content-around align-items-center">
                    <div className="col-12 col-md-5 mb-3">
                      <img src={sandbankURL} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p className="tx-orange h1 tx-blue-color">Sand bank chill</p>
                      <p className="lead tx-main-color">Overview</p>  
                      <p className="text-secondary">A sandbank excursion in the Maldives is like discovering your own private paradise. Picture yourself on a pristine stretch of golden sand surrounded by crystal-clear turquoise waters. It&apos;s the perfect spot to soak up the sun, go for a swim, or simply relax and take in the breathtaking beauty of your surroundings. Whether you&apos;re travelling with friends, family, or solo, this activity it&apos;s an experience you&apos;ll treasure forever.</p>
                      <p className="lead tx-main-color">How to do it</p>
                      <p className="text-secondary">You can add this activity on at time of reservation or directly in the house at your arrival. <br /> Duration: 2 hours.</p>
                      <ul>
                        <li>3 People or more $20 per person</li>
                        <li>2 People $25 per person</li>
                        <li>1 Person $50</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="yoga-pane" role="tabpanel" aria-labelledby="sand-back-tab" tabIndex="0">
                <div className="container p-5">
                  <div className="row justify-content-around">
                    <div className="col-12 col-md-5 mb-3 mt-md-5">
                      <img src={yogaURL} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p className="tx-orange h1 tx-blue-color">SURF&YOGA ULTRA EXCURSION</p>
                      <p className="lead tx-main-color">Surf Ultra</p>  
                      <p className="text-secondary">Improve your surfing with personalized video analysis, surf safaris to new spots, Surfskate classes, and dedicated coaching sessions to master your surf skills.</p>
                      <p className="lead tx-main-color">How to do it</p>
                      <p className="text-secondary">You can add this activity on at time of reservation or directly in the house at your arrival.  <br /> Duration: 2 hours.daily.</p>
                      <ul>
                        <li>3 People or more $80 per person</li>
                        <li>2 People $100 per person</li>
                        <li>1 Person $150</li>
                      </ul>
                      <p className="lead tx-main-color">Yoga Ultra</p>  
                      <p className="text-secondary">Enjoy additional guided sessions, personalized coaching, and exclusive workshops to deepen your practice and find inner peace in the beautiful Maldives.</p>
                      <p className="lead tx-main-color">How to do it</p>
                      <p className="text-secondary">You can add this activity on at time of reservation or directly in the house at your arrival.</p>
                      <ul>
                        <li>3 People or more $45 per person</li>
                        <li>2 People $50 per person</li>
                        <li>1 Person $60</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="skate-pane" role="tabpanel" aria-labelledby="sand-back-tab" tabIndex="0">
                <div className="container p-5">
                  <div className="row justify-content-around align-items-center">
                    <div className="col-12 col-md-5 mb-3">
                      <img src={skateURL} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p className="tx-orange h1 tx-blue-color">Surf skate</p>
                      <p className="lead tx-main-color">Overview</p>  
                      <p className="text-secondary">A sandbank excursion in the Maldives is like discovering your own privat</p>
                      <p className="lead tx-main-color">How to do it</p>
                      <p className="text-secondary">You can add this activity on at time of reservation or directly in the house at your arrival. <br /> Duration: 2 hours.</p>
                      <ul>
                        <li>3 People or more $20 per person</li>
                        <li>2 People $25 per person</li>
                        <li>1 Person $50</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4 m-0 p-0">
            <div className={style.cardaactivities1 + " card rounded-0 border-0"}></div>
          </div>
          <div className="col-12 col-md-4 m-0 p-0">
            <div className={style.cardaactivities2 + " card rounded-0 border-0"}></div>
          </div>
          <div className="col-12 col-md-4 m-0 p-0">
            <div className={style.cardaactivities3 + " card rounded-0 border-0"}></div>
          </div>
        </div>
        <div className="container my-5 py-4">
          <div className="row my-5">
            <div className="col-12 text-center">
              <p className="display-4 tx-main-color tx-orange text-uppercase">Do you wanna try one of our activity?</p>
              <p className="lead">It&apos;s simple, you only need to click the button below <br /> and add one of those amazing activities in your holiday package. </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 text-center">
              <button className="btn-book text-uppercase fw-bold">
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

