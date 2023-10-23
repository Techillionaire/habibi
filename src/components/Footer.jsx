import React from 'react'
import "../styles/footer.css"
import { Link } from 'react-router-dom'
import { FaXTwitter, FaFacebook, FaPinterest, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className='py-3 footer1'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-7">
              <div className="footer-top d-flex align-items-center gap-30">
                <img src="./assets/newsletter.png" alt="newsletter" />
                <h4 className="text-white mb-0">Sign Up for Newsletter</h4>
              </div>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input type="text" className="form-control p-1" placeholder="Your email address" aria-label="Your email address" aria-describedby="basic-addon2" />
                <span className="input-group-text subscribe" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-3'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-4">
              <h5 className='text-white mb-2'>Contact Us</h5>
              <p className="text-secondary">Teflon Luxury Haven</p>
              <p className="text-secondary">14 Maryland Cresent, Maryland, Ikeja 100211, Lagos, Nigeria.</p>
              <p className="text-secondary">+(234) 810-235-0810</p>
              <p className="text-secondary">shop@teflonlux.com</p>
              <div className="footer-icon-container d-flex justify-content-start">
                <div>
                  <FaXTwitter className='footer-icon fs-3 me-4 p-1 rounded-circle text-white bg-secondary'/>
                </div>
                <div>
                  <FaFacebook className='footer-icon fs-3 me-4 p-1 rounded-circle text-white bg-secondary'/>
                </div>
                <div>
                  <FaPinterest className='footer-icon fs-3 me-4 p-1 rounded-circle text-white bg-secondary'/>
                </div>
                <div>
                  <FaInstagram className='footer-icon fs-3 me-4 p-1 rounded-circle text-white bg-secondary'/>
                </div>
                <div>
                  <FaYoutube className='footer-icon fs-3 me-4 p-1 rounded-circle text-white bg-secondary'/>  
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-6 col-md-4">
              <h5 className='text-white mb-2'>Information</h5>
              <div className="footer-links ">
                <Link className='text-secondary fw-normal fs-6 mb-1 py-1 d-block' to="/">Privacy Policy</Link>
                <Link className='text-secondary fw-normal fs-6 mb-1 py-1 d-block' to="/">Refund Policy</Link>
                <Link className='text-secondary fw-normal fs-6 mb-1 py-1 d-block' to="/">Shipping Policy</Link>
                <Link className='text-secondary fw-normal fs-6 mb-1 py-1 d-block' to="/">Terms & Conditions</Link>
                <Link className='text-secondary fw-normal fs-6 mb-1 py-1 d-block' to="/">Blogs</Link>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-6 col-md-4">
              <h5 className='text-white mb-2'>Account</h5>
              <div className="footer-links ">
                <Link className='text-secondary fw-normal fs-6 mb-1 py-1 d-block' to="/">Search</Link>
                <Link className='text-secondary fw-normal fs-6 mb-1 py-1 d-block' to="/">About Us</Link>
                <Link className='text-secondary fw-normal fs-6 mb-1 py-1 d-block' to="/">FAQ</Link>
                <Link className='text-secondary fw-normal fs-6 mb-1 py-1 d-block' to="/">Contact</Link>
                <Link className='text-secondary fw-normal fs-6 mb-1 py-1 d-block' to="/">Size Chart</Link>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-6 col-md-6"> 
              <h5 className='text-white mb-2'>Quick Links</h5>
              <div className="footer-links">
                <Link className='text-secondary fw-normal fs-6 mb-1 py-1 d-block' to="/">Scented Candles</Link>
                <Link className='text-secondary fw-normal fs-6 mb-1 py-1 d-block' to="/">Art Works</Link>
                <Link className='text-secondary fw-normal fs-6 mb-1 py-1 d-block' to="/">Luxury Jewelries</Link>
                <Link className='text-secondary fw-normal fs-6 mb-1 py-1 d-block' to="/">Skin Care Products</Link>
                <Link className='text-secondary fw-normal fs-6 mb-1 py-1 d-block' to="/">Beauty Accessories</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <h5 className='text-white mb-2'>Our App</h5>
              <p className="text-secondary">
                Download our App and get extra 10% discount on your first Order...!
              </p>
              <div className="footer-img-container row">
                <Link to={`/`} className='col-6 m-1'>
                  <img className='footer-img' src="./assets/google.png" alt="" />
                </Link>
                <Link to={`/`} className='col-6 m-1'>
                  <img className='footer-img' src="./assets/app.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-3 footer3'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} Powered by Techillionaire Inc.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer