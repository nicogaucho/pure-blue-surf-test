import ScrollTop from "../components/ScrollTop";
import style from "../styles/packages.module.css";
import pureSurfLogoWhite from "../assets/logos/pure-surf-logo-white.png";
import firststepURL from "../assets/firststep.jpg";
import improvementURL from "../assets/improvement.jpg";
import freespiritURL from "../assets/surf-pack.jpg";
import Footer from '../components/Footer';

export default function Packages() {
  return (
    <>
      <ScrollTop />
      <div className={style.centerheropackage + " px-4 py-5 text-center"}>
        <img className="d-block mx-auto mb-4 img-fluid mt-5" src={pureSurfLogoWhite} alt="" width={300} />
        <h1 className="display-1 tx-orange text-white my-5">All Packages</h1>
      </div>

      <div id="plans" className="container my-5 py-5">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8">
            <header className="mb-5">
              <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                <p className="h2 tx-main-color">
                  Compare plans
                </p>
                <p className="lead">
                  Find your ideal package at Pure Blue Surf & Yoga Retreat in the Maldives. Whether you crave for adventure, relaxation, or yoga, we have the perfect option for you.
                </p>
              </div>
            </header>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table border align-middle">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">FIRST STEP</th>
                <th scope="col">IMPROVEMENT</th>
                <th scope="col">FREE SPIRIT</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-info">
                <th scope="row">General Info</th>
                <td>
                  Perfect for learning the basics of surfing while relaxing with yoga classes
                </td>
                <td>score great waves, train turns and flow. Stretch and connect with yoga</td>
                <td>
                enjoy the bliss and peace of Maldives while discovering the local culture and wonderful landscapes
                </td>
              </tr>
              <tr className="table-light">
                <th scope="row">What’s Included</th>
                <td>
                  <ul>
                    <li>2 sessions of surfing / day</li>
                    <li>Accommodation 6 nights</li>
                    <li>All meals ( breakfast, lunch, dinner )</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>2 sessions of surfing / day</li>
                    <li>Accommodation 6 nights</li>
                    <li>All meals ( breakfast, lunch, dinner )</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>2 sessions of surfing / day</li>
                    <li>Accommodation 6 nights</li>
                    <li>All meals ( breakfast, lunch, dinner )</li>
                  </ul>
                </td>
              </tr>
              <tr className="table-info">
                <th scope="row">Accomodation</th>
                <td>Private Room</td>
                <td>Private Room</td>
                <td>Private Room</td>
              </tr>
              <tr className="table-light">
                <th scope="row">Prices</th>
                <td>790€ / week</td>
                <td>690€ / week</td>
                <td>590€ / week</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="explore" className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="tx-orange display-4 tx-blue-color">Explore more about our packages</h2>
          </div>      
        </div>
        <div className="row mb-5">
          <div className="col-12">
            <ul className="nav nav-tabs d-flex justify-content-center" id="myTab" role="tablist">
              <li className="nav-item mx-3" role="presentation">
                <button className="nav-link text-dark active spacing text-uppercase fw-bold" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">FIRST STEP</button>
              </li>
              <li className="nav-item mx-3" role="presentation">
                <button className="nav-link text-dark spacing text-uppercase fw-bold" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">IMPROVEMENT</button>
              </li>
              <li className="nav-item mx-3" role="presentation">
                <button className="nav-link text-dark spacing text-uppercase fw-bold" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">FREE SPIRIT</button>
              </li>
            </ul>   
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                <div className="container p-5">
                  <div className="row mb-5 justify-content-around align-items-center">
                    <div className="col-12 col-md-5 mb-3">
                      <img src={firststepURL} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p className="tx-orange h1 tx-blue-color">First step</p>
                      <p className="lead tx-main-color">Overview</p>
                      <p className="text-secondary">Dive into the ultimate surfing getaway with our Surf & Stay package at Pure Blue Surf & Yoga Retreat in the Maldives. Spend your days riding the waves and soaking up the sun, then retreat to our comfortable accommodation for a restful night&apos;s sleep. With expert surf instructors guiding you through exhilarating sessions and luxurious amenities awaiting your return, this package offers the perfect blend of adventure and relaxation. Whether you&apos;re a seasoned surfer or just starting out, our Surf & Stay package promises an unforgettable escape to paradise.</p>
                    </div>
                  </div>
                  <div className="row mb-5 justify-content-around">
                    <div className="col-12 col-md-3 mb-5">
                      <p className="text-uppercase tx-main-color lead">A typical day</p>
                      <ul>
                        <li>
                          <strong>07.30</strong> – Healthy breakfast (or later if surfing at dawn before breakfast).  
                        </li>
                        <li>
                          <strong>08.45</strong> – Discuss the surf conditions and options for the day. 
                        </li>
                        <li>
                          <strong>09.00</strong> – Choosing the surf spot and off to ride epic waves.  
                        </li>
                        <li>
                          <strong>12.30</strong> – Lunch time.
                        </li>
                        <li>
                          <strong>13.30</strong> – Another surf or two. 
                        </li>
                        <li>
                          <strong>17.30</strong> – Sunset Yoga (optional). 
                        </li>
                        <li>
                          <strong>19.30</strong> – Dinner.
                        </li>
                      </ul>
                      <p className="text-secondary small">*Keep in mind that this is just a general outline of what a day of surf guiding might look like. Each day can vary depending on factors like the weather, the waves, and what the group or individual wants to do.*  </p>
                    </div>
                    <div className="col-12 col-md-3 mb-5">
                      <p className="text-uppercase tx-main-color lead">what is included</p>
                      <ul>
                        <li>2 Yoga Classes</li>
                        <li>Surf theory before class</li>
                        <li>5 surf class for beginner</li>
                        <li>boat trip to the beginner spot</li>
                        <li>surf and equipement (booth, leash ...)</li>
                        <li>Introduction to surf skate class , 2 per week</li>
                        <li>Photo and video analysis</li>
                        <li>Surf culture and behavior</li>
                      </ul>
                    </div>
                    <div className="col-12 col-md-3 mb-5">
                      <p className="text-uppercase tx-main-color lead">FOOD & ACCOMMODATION</p>
                      <p>At Pure Blue Surf & Yoga Retreat in the Maldives, you&apos;ll enjoy tasty meals and cozy rooms. Our delicious food is made with fresh ingredients, and our rooms are comfy and relaxing. You can customize both your meals and your room to suit your preferences.</p>
                      <div className="mt-5">
                        <p><strong>From 700 €</strong> per person / Week</p>
                        <button className="btn-book text-uppercase fw-bold">
                          Book now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                <div className="container p-5">
                  <div className="row mb-5 justify-content-around align-items-center">
                    <div className="col-12 col-md-5 mb-3">
                      <img src={improvementURL} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p className="tx-orange h1 tx-blue-color">Yoga + Stay</p>
                      <p className="lead tx-main-color">Overview</p>
                      <p className="text-secondary">Experience serenity throughout your day with our Yoga & Stay package at Pure Blue Surf & Yoga Retreat in the Maldives. Wake up to invigorating Hatha yoga sessions in the morning, followed by tranquil Yin yoga classes in the evening. Coupled with comfortable accommodation and delicious meals, it&apos;s the perfect blend of relaxation and rejuvenation amidst the stunning backdrop of the Maldivian coast.</p>
                    </div>
                  </div>
                  <div className="row mb-5 justify-content-around">
                    <div className="col-12 col-md-3 mb-5">
                      <p className="text-uppercase tx-main-color lead">A typical day</p>
                      <ul>
                        <li>
                          <strong>07.30</strong> – Hatha Yoga session. 
                        </li>
                        <li>
                          <strong>08.45</strong> – Healthy breakfast. 
                        </li>
                        <li>
                          <strong>09.00</strong> – Time for experiencing the island and enjoy the beach.  
                        </li>
                        <li>
                          <strong>12.30</strong> – Lunch time.
                        </li>
                        <li>
                          <strong>17.30</strong> – Sunset Yin Yoga. 
                        </li>
                        <li>
                          <strong>19.30</strong> – Dinner.
                        </li>
                      </ul>
                      <p className="text-secondary small">*Keep in mind that this is just a general outline of what a day of surf guiding might look like. Each day can vary depending on factors like the weather, the waves, and what the group or individual wants to do.*  </p>
                    </div>
                    <div className="col-12 col-md-3 mb-5">
                      <p className="text-uppercase tx-main-color lead">what is included</p>
                      <ul>
                        <li>2 Yoga Classes</li>
                        <li>Surf guiding for each lesson class 5 a week</li>
                        <li>Surf skate class before surf class</li>
                        <li>2/3 boat trip a week to Sultan and Honkeys waves</li>
                        <li>2 personal and intimate video and photo analyse a week</li>
                        <li>Surfboard rental</li>
                      </ul>
                    </div>
                    <div className="col-12 col-md-3 mb-5">
                      <p className="text-uppercase tx-main-color lead">FOOD & ACCOMMODATION</p>
                      <p>At Pure Blue Surf & Yoga Retreat in the Maldives, you&apos;ll enjoy tasty meals and cozy rooms. Our delicious food is made with fresh ingredients, and our rooms are comfy and relaxing. You can customize both your meals and your room to suit your preferences.</p>
                      <div className="mt-5">
                        <p><strong>From 650 €</strong> per person / Week</p>
                        <button className="btn-book text-uppercase fw-bold">
                          Book now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
                <div className="container p-5">
                  <div className="row mb-5 justify-content-around align-items-center">
                    <div className="col-12 col-md-5 mb-3">
                      <img src={freespiritURL} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p className="tx-orange h1 tx-blue-color">Free spirit</p>
                      <p className="lead tx-main-color">Overview</p>
                      <p className="text-secondary">The perfect blend of adventure and relaxation with our Surf & Yoga + Stay package at Pure Blue Surf & Yoga Retreat. Perfect for those seeking the thrill of surfing and the tranquility of yoga, this package offers expert surf instruction,  yoga sessions focused on muscle relaxation and flexibility, and accommodation in the stunning island scenery. Experience the best of both worlds as you choose to live an unforgettable journey of wellness and adventure in paradise.</p>
                    </div>
                  </div>
                  <div className="row mb-5 justify-content-around">
                    <div className="col-12 col-md-3 mb-5">
                      <p className="text-uppercase tx-main-color lead">A typical day</p>
                      <ul>
                        <li>
                          <strong>07.30</strong> – Hatha Yoga session.  
                        </li>
                        <li>
                          <strong>08.45</strong> – Healthy breakfast. 
                        </li>
                        <li>
                          <strong>09.00</strong> – Choosing the surf spot and off to ride epic waves.  
                        </li>
                        <li>
                          <strong>12.30</strong> – Lunch time.
                        </li>
                        <li>
                          <strong>13.30</strong> – Another surf or two. 
                        </li>
                        <li>
                          <strong>17.30</strong> – Sunset Yin Yoga. 
                        </li>
                        <li>
                          <strong>19.30</strong> – Dinner.
                        </li>
                      </ul>
                      <p className="text-secondary small">*Keep in mind that this is just a general outline of what a day of surf guiding might look like. Each day can vary depending on factors like the weather, the waves, and what the group or individual wants to do.*  </p>
                    </div>
                    <div className="col-12 col-md-3 mb-5">
                      <p className="text-uppercase tx-main-color lead">what is included</p>
                      <ul>

                        <li>Choose schedule as you want</li>
                        <li>Accomodation and food, be free to upgrade your package with ours many activities</li>
                        <li className="text-secondary">* Surfboard not included</li>
                      </ul>
                    </div>
                    <div className="col-12 col-md-3 mb-5">
                      <p className="text-uppercase tx-main-color lead">FOOD & ACCOMMODATION</p>
                      <p>At Pure Blue Surf & Yoga Retreat in the Maldives, you&apos;ll enjoy tasty meals and cozy rooms. Our delicious food is made with fresh ingredients, and our rooms are comfy and relaxing. You can customize both your meals and your room to suit your preferences.</p>
                      <div className="mt-5">
                        <p><strong>From 850 €</strong> per person / Week</p>
                        <button className="btn-book text-uppercase fw-bold">
                          Book now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
