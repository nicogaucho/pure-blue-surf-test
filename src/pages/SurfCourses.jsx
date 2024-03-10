import ScrollTop from "../components/ScrollTop";
import style from "../styles/surfcourses.module.css";
import pureSurfLogoWhite from "../assets/logos/pure-surf-logo-white.png";
import skateURL from "../assets/skate.png";
import mapURL from "../assets/map.png";
import Footer from '../components/Footer';

export default function SurfCourses() {
  return (
    <>
      <ScrollTop />
      <div className={style.centerherosurf + " px-4 py-5 text-center"}>
        <img className="d-block mx-auto mb-4 img-fluid mt-5" src={pureSurfLogoWhite} alt="" width={300} />
        <h1 className="display-1 tx-orange text-white my-5">Surf Courses</h1>
      </div>

      <div className="container my-5 py-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <p className="h2 tx-main-color">Pristine waves and stunning tropical scenery.</p>
            <p className="lead">Improve your surfing skills with us at Pure Blue Surf & Yoga Retreat in the Maldives. <br /> Our surf lessons are perfect for people who already know a bit about surfing and want to get better. <br /> It&apos;s a great way to have fun and learn new things!</p>
          </div>
        </div>
        <div className="row mb-5 justify-content-around align-items-center">
          <div className="col-12 col-md-5 mb-5">
            <img src="https://images.unsplash.com/photo-1486890598084-3673ba1808c1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="img-fluid" />
          </div>
          <div className="col-12 col-md-4 mb-5">
            <p className="tx-main-color text-uppercase">Levels</p>
            <p className="tx-orange h1">WAVES FOR ALL LEVELS</p>
            <p className="mt-5 text-start">Wether you are a beginner or an experienced surfer we have all the options for you to enjoy some of the best waves of Maldives and have fun in the blue clear water</p>
          </div>
        </div>
        <div className="row mb-5 justify-content-around align-items-center">
          <div className="col-12 col-md-5 mb-5">
            <img src="https://plus.unsplash.com/premium_photo-1666497934040-ec832d302f13?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGRpdmVzfGVufDB8MHwwfHx8MA%3D%3D" alt="" className="img-fluid" />
          </div>
          <div className="col-12 col-md-4 mb-5 order-md-first">
            <p className="tx-main-color text-uppercase">SPOTS</p>
            <p className="tx-orange h1">SMOOTH AND GLASSY WAVES</p>
            <p className="mt-5">Discover the ultimate surfing haven along this <br /> picturesque coastline. Here, youll find perfect waves that cater to all levels of surfers. From gentle rollers to thrilling tubes, its a dream come true for anyone looking to catch some waves and soak up the sun.</p>
          </div>
        </div>
        <div className="row mb-5 justify-content-around align-items-center">
          <div className="col-12 col-md-5 mb-5">
            <img src={skateURL} alt="" className="img-fluid" />
          </div>
          <div className="col-12 col-md-4 mb-5">
            <p className="tx-main-color text-uppercase">Surf Skate</p>
            <p className="tx-orange h1">Surfing on land</p>
            <p className="mt-5 text-start">
              We will practice surf skating at the nearby skatepark and improve our balance, coordination, and technique. This will translates directly to better performance in real surfing. It&apos;s a great way to sharpen our skills and have fun outside of the water.
            </p>
          </div>
        </div>
        {/* <div className="col-12 mb-5 text-center">
            <button className="btn-book text-uppercase fw-bold mt-5">
                I want to surf!
            </button>
        </div> */}
      </div>

      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <p className="h3 tx-main-color text-uppercase">Main point breaks</p>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12">
            <img src={mapURL} className="img-fluid" alt="" />
          </div>
        </div>
      </div>



      <div className="container">
        <div className="row my-5">
          <div className="col-12 text-center">
            <p className="h3 tx-main-color">WHAT WILL YOU LEARN</p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-12 col-md-6 mb-5">
            <div className="card mb-3 border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">The lineup</h5>
                <p className="card-text">Introduction to the lineup and the written and unwritten rules to follow when surfing in this area.</p>
              </div>
            </div>
            <div className="card mb-3 border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">Surf safety, surf etiquette & priority rules</h5>
                <p className="card-text">We cover topics on how to behave in the water, crowd handling, positioning, pecking order, how to fall, and where to paddle back out without being in danger of hurting yourself or others.</p>
              </div>
            </div>
            <div className="card mb-3 border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">Ocean awareness</h5>
                <p className="card-text">In this course, youll no longer only be in the shallows on the inside sandbank but outside in deeper water. Therefore, well teach you everything you need to know about ocean safety and factors like rips, tides, waves and weather to ensure your safety in the ocean. </p>
              </div>
            </div>
            <div className="card mb-3 border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">Spot guiding</h5>
                <p className="card-text">Throughout the week, the local surf teacher will take you to different spots according to the swell and weather conditions. This means youll learn what spots work best on different tides, swell- and wind directions, so you can spend your time surfing the best spots at the right times.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-5">
          <div className="card mb-3 border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">Individual coaching</h5>
                <p className="card-text">The coach will see what you need to improve and which adjustments are required to take your surfing to the next level. </p>
              </div>
            </div>
            <div className="card mb-3 border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">Surf equipment</h5>
                <p className="card-text">There are many types of boards for different kinds of waves, body types and skillsets. During the course, youll learn more about these. Youll also have the opportunity to try out some different ones.</p>
              </div>
            </div>
            <div className="card mb-3 border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">Surfing green waves</h5>
                <p className="card-text">The goal for this course is to become comfortable catching waves on your own, standing up and surfing down the line, going left and right.</p>
              </div>
            </div>
            <div className="card mb-3 border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">Surfing terms</h5>
                <p className="card-text">Learn the language of surfing and develop a broader understanding of the jargon and culture. </p>
              </div>
            </div>
            <div className="card mb-3 border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">Board control in the lineup</h5>
                <p className="card-text">Well help you refresh and tighten up your lineup game, making sure you know how to position yourself on the board and in the lineup. </p>
              </div>
            </div>
            <div className="card mb-3 border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">Techniques for passing through the waves</h5>
                <p className="card-text">We’ll practice the turtle roll and the duck dive depending on your level. </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
