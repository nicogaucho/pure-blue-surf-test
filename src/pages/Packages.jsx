import ScrollTop from "../components/ScrollTop";
import style from "../styles/packages.module.css";
import pureSurfLogoWhite from "../assets/logos/pure-surf-logo-white.png";
import onlystayPack from "../assets/slide3.jpg";
import surfPack from "../assets/surf-pack.jpg";
import yogaPack from "../assets/yoga-pack.jpg";
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
                <th scope="col">Surf + Stay</th>
                <th scope="col">Yoga + Stay</th>
                <th scope="col">Surf + Yoga + Stay</th>
                <th scope="col">Only Stay</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-info">
                <th scope="row">General Info</th>
                <td>
                  Perfect for surfing and having some time off to relax and
                  enjoy Maldives
                </td>
                <td>Full immersion of Yoga and relaxation mode</td>
                <td>
                  Don’t miss a thing and dive deep into physical activities and
                  mental and body relaxation
                </td>
                <td>
                  Just relax and reset in the amazing atmosphere of Noah Beach
                  Lodge
                </td>
              </tr>
              <tr className="table-light">
                <th scope="row">What’s Included</th>
                <td>
                  <ul>
                    <li>2 sessions of surfing / day</li>
                    <li>Breakfast</li>
                    <li>Dinner</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>2 sessions of surfing / day</li>
                    <li>Breakfast</li>
                    <li>Dinner</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>2 sessions of surfing / day</li>
                    <li>Breakfast</li>
                    <li>Dinner</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>2 sessions of surfing / day</li>
                    <li>Breakfast</li>
                    <li>Dinner</li>
                  </ul>
                </td>
              </tr>
              <tr className="table-info">
                <th scope="row">Accomodation</th>
                <td>Private Room</td>
                <td>Private Room</td>
                <td>Private Room</td>
                <td>Private Room</td>
              </tr>
              <tr className="table-light">
                <th scope="row">Prices</th>
                <td>700€ / week</td>
                <td>650€ / week</td>
                <td>850€ / week</td>
                <td>500€ / week</td>
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
                <button className="nav-link text-dark active spacing text-uppercase fw-bold" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">surf + stay</button>
              </li>
              <li className="nav-item mx-3" role="presentation">
                <button className="nav-link text-dark spacing text-uppercase fw-bold" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">yoga + stay</button>
              </li>
              <li className="nav-item mx-3" role="presentation">
                <button className="nav-link text-dark spacing text-uppercase fw-bold" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">surf + yoga + stay</button>
              </li>
              <li className="nav-item mx-3" role="presentation">
                <button className="nav-link text-dark spacing text-uppercase fw-bold" id="only-tab" data-bs-toggle="tab" data-bs-target="#only-tab-pane" type="button" role="tab" aria-controls="only-tab-pane" aria-selected="false">Only stay</button>
              </li>
            </ul>   
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                <div className="container p-5">
                  <div className="row mb-5 justify-content-around align-items-center">
                    <div className="col-12 col-md-5 mb-3">
                      <img src={surfPack} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p className="tx-orange h1 tx-blue-color">Surf + Stay</p>
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
                        <li>
                        Surf classes and transportation provided, with equipment rental available for convenience.
                        </li>
                        <li>
                        Accommodation and meals included in your chosen room.
                        </li>
                        <li>
                        Complimentary transfer from Himmafushi port to Noah Beach House, with optional airport transfer for an additional fee.
                        </li>
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
                      <img src={yogaPack} className="img-fluid" alt="" />
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
                        <li>
                        Two Yoga classes a day with certified teacher in the beautiful Maldivian atmosphere.
                        </li>
                        <li>
                        Accommodation and meals included in your chosen room.
                        </li>
                        <li>
                        Complimentary transfer from Himmafushi port to Noah Beach House, with optional airport transfer for an additional fee.
                        </li>
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
                      <img src="https://images.unsplash.com/photo-1611852794579-57e09deec14b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1cmYlMjB5b2dhfGVufDB8fDB8fHww" className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p className="tx-orange h1 tx-blue-color">Surf + Yoga + Stay</p>
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
                        <li>
                        Surf classes and transportation provided, with equipment rental available for convenience.
                        </li>
                        <li>
                        Two Yoga classes a day with certified teacher in the beautiful Maldivian atmosphere.
                        </li>
                        <li>
                        Accommodation and meals included in your chosen room.
                        </li>
                        <li>
                        Complimentary transfer from Himmafushi port to Noah Beach House, with optional airport transfer for an additional fee.
                        </li>
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
              <div className="tab-pane fade" id="only-tab-pane" role="tabpanel" aria-labelledby="only-tab" tabIndex="0">
                <div className="container p-5">
                  <div className="row mb-5 justify-content-around align-items-center">
                    <div className="col-12 col-md-5 mb-3">
                      <img src={onlystayPack} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p className="tx-orange h1 tx-blue-color">Only Stay</p>
                      <p className="lead tx-main-color">Overview</p>  
                      <p className="text-secondary">Experience the ultimate relaxation with our Stay Only package. With plenty of time to enjoy the variety of activities, you&apos;ll have the freedom to explore the island at your own pace. Whether you choose to lounge on the beach, go for a thrilling snorkeling excursions, or simply soak in the serene surroundings, our package offers the perfect opportunity to recharge amidst the beauty of the Maldives</p>
                    </div>
                  </div>
                  <div className="row mb-5 justify-content-around">
                    <div className="col-12 col-md-3 mb-5">
                      <p className="text-uppercase tx-main-color lead">A typical day</p>
                      <ul>
                        <li>
                          <strong>07.30</strong> – Healthy breakfast.
                        </li>
                        <li>
                          <strong>09.00</strong> – Time to explore the island or join activities.
                        </li>
                        <li>
                          <strong>12.30</strong> – Lunch time.
                        </li>
                        <li>
                          <strong>13.30</strong> – Free time for activities.
                        </li>
                        <li>
                          <strong>17.30</strong> – Sunset Yoga. 
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
                        <li>
                        Free activities to choose at the arrival
                        </li>
                        <li>
                        Accommodation and meals included in your chosen room.
                        </li>
                        <li>
                        Complimentary transfer from Himmafushi port to Noah Beach House, with optional airport transfer for an additional fee.
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-md-3 mb-5">
                      <p className="text-uppercase tx-main-color lead">FOOD & ACCOMMODATION</p>
                      <p>At Pure Blue Surf & Yoga Retreat in the Maldives, you&apos;ll enjoy tasty meals and cozy rooms. Our delicious food is made with fresh ingredients, and our rooms are comfy and relaxing. You can customize both your meals and your room to suit your preferences.</p>
                      <div className="mt-5">
                        <p><strong>From 500 €</strong> per person / Week</p>
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
