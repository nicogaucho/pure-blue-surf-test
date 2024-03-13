import pureSurfLogo from "../assets/logos/pure-surf-logo.png";
import noahLogo from "../assets/logos/noah-logo-bigger.png";

export default function Footer() {
  return (
    <div className="container my-3 py-3">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-3 my-3 align-items-center">
        <div className="col mb-3">
          <p className="tx-orange fs-4 tx-main-color m-0 p-0">partners</p>
          <div className="d-flex">
          <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
            <img src={pureSurfLogo} width={200} alt="" />
          </a>
          <a href="/" className="d-flex align-items-center mb-3 mx-md-3 link-body-emphasis text-decoration-none">
            <img src={noahLogo} width={100} alt="" />
          </a>
          </div>
        </div>

        <div className="col mb-3">

        </div>

        <div className="col mb-3">
          <h5 className="tx-orange tx-main-color">Courses</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Surf courses</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Yoga courses</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">All Packages</a></li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5 className="tx-orange tx-main-color">Other</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About Pure Surf</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Faqs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Careers</a></li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5 className="tx-orange tx-main-color">Contact us</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Phone number: 333 333 333</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Whats app: 333 333 333</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Email: pure-surf@surfing.surf</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}