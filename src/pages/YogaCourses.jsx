import ScrollTop from "../components/ScrollTop";
import style from "../styles/yogacourses.module.css";
import pureSurfLogo from "../assets/logos/pure-surf-logo-white.png";
import yogaPackURL from "../assets/yoga-pack.jpg";
import Footer from '../components/Footer';

export default function YogaCourses() {
  return (
    <>
      <ScrollTop />
      <div className={style.centerheroyoga + " px-4 py-5 text-center"}>
        <img className="d-block mx-auto mb-4 img-fluid mt-5" src={pureSurfLogo} alt="" width={300} />
        <h1 className="display-1 tx-orange text-white my-5">Yoga Courses</h1>
      </div>

      <div className="container my-5 pt-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <p className="h3 tx-main-color">Practicing yoga in the serene beauty of the Maldives</p>
            <p className="text-secondary">Practicing yoga in the serene beauty of the Maldives is a blissful experience that rejuvenates both body and soul. <br /> With every stretch and pose immersed in the beauty of this paradise, you will experience a <br /> perfect blend of relaxation and tranquillity.</p>
          </div>
        </div>
        <div className="row mb-5 justify-content-around align-items-center">
          <div className="col-12 col-md-5 mb-5">
            <img src={yogaPackURL} alt="" className="img-fluid" />
          </div>
          <div className="col-12 col-md-5 mb-5">
            <p className="tx-main-color text-uppercase">MORNING YOGA</p>
            <p className="tx-orange h1">Ingite your inner fire</p>
            <p className="mt-5">Start your day right with our morning classes at Pure Blue Surf & Yoga Retreat. These classes are all about moving and breathing to help you wake up and feel energized. It&apos;s perfect way to start the day</p>
          </div>
        </div>
        <div className="row mb-5 justify-content-around align-items-center">
          <div className="col-12 col-md-5 mb-5">
            <img src="https://images.unsplash.com/photo-1584936964770-7d9a3cd21143?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHlvZ2F8ZW58MHwwfDB8fHww" alt="" className="img-fluid" />
          </div>
          <div className="col-12 col-md-5 mb-5 order-md-first">
            <p className="tx-main-color text-uppercase">EVENING YOGA</p>
            <p className="tx-orange h1">PURE RELAXATION</p>
            <p className="mt-5">Relax and unwind with our evening yin classes. These classes are slow and gentle, with lots of stretching and breathing. It&apos;s a great way to end your day and feel calm and peaceful.</p>
          </div>
        </div>
      </div>


      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4 m-0 p-0">
            <div className={style.cardyoga1 + " card rounded-0 border-0"}></div>
          </div>
          <div className="col-12 col-md-4 m-0 p-0">
            <div className={style.cardyoga2 + " card rounded-0 border-0"}></div>
          </div>
          <div className="col-12 col-md-4 m-0 p-0">
            <div className={style.cardyoga3 + " card rounded-0 border-0"}></div>
          </div>
        </div>
        <div className="container">
          <div className="row my-5">
            <div className="col-12 text-center">
              <p className="h3 tx-main-color">YOGA SESSIONS</p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 col-md-4 mb-5">
              <strong>Two daily yoga sessions await in the Maldives: a revitalizing Hatha practice in the morning and a soothing Yin session in the evening.</strong>
              <p>Designed for all levels, each session unfolds amidst the stunning backdrop of the island paradise, promising a blend of rejuvenation and relaxation for body and mind.</p>
              <div className="mt-5">
                <p className="tx-main-color fw-bold">Our day looks like this:</p>
                <ul>
                  <li>07.30 – Hatha Yoga session. </li>
                  <li>08.45 – Healthy breakfast. </li>
                  <li>09.00 – Choosing the surf spot and off to ride epic waves.</li>
                  <li>12.30 – Lunch time.</li>
                  <li>13.30 – Another surf or enjoy our many activities. </li>
                  <li>17.30 – Sunset Yin Yoga . </li>
                  <li>19.30 – Dinner.</li>
                </ul>
                </div>
            </div>
            <div className="col-12 col-md-6 mb-5">
              <ul>
                <li className="mb-4">
                The pure blue concept revolves around two core elements: yoga and surfing. 
                </li>
                <li className="mb-4">
                Our team comprises internationally accredited coaches with extensive professional experience. Each package at any of our locations comes with 10 complimentary yoga lessons. 
                </li>
                <li className="mb-4">
                Our yoga styles vary, but typically include: Morning Activating Yoga and Evening Regenerative Yoga sessions.  
                </li>
                <li className="mb-4">
                Our program caters to individuals of all proficiency levels. 
                </li>
                <li className="mb-4">
                Sessions are personalized to address your specific requirements, ensuring a unique experience tailored to you.
                </li>
                <button className="btn-book text-uppercase fw-bold mt-5">
                  Book now
                </button>
              </ul>
            </div>
          </div>
          </div>
      </div>

      <Footer />
    </>
  )
}
