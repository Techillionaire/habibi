import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
// import { Carousel } from 'react-responsive-carousel';
import "../styles/home.css"
import Meta from '../components/Meta';



const Home = () => {
  return (
    <>
      <Meta title={"Teflon's Lux Haven | Home"} />
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">

          <div className="row d-md-none d-lg-none d-sm-flex">
            <div className="col">
              <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="assets/main-banner-1.jpg" className='img-fluid rounded-3' alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="assets/main-banner-1.jpg" className='img-fluid rounded-3' alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="assets/main-banner-1.jpg" className='img-fluid rounded-3' alt="..." />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

          <div className="row d-none d-md-flex">
            <div className="col-md-6">
            <div className="main-banner position-relative">
                <img src="assets/main-banner-1.jpg" className='img-fluid rounded-3' alt="main banner" />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo. <br/>
                    for 24 mo.
                  </p>
                  <Link className='button fw-bold'>BUY NOW</Link>
                </div>
              </div>
              {/* <div className="main-banner position-relative">
                
                <img src="assets/main-banner-1.jpg" className='img-fluid rounded-3' alt="main banner" />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo. <br/>
                    for 24 mo.
                  </p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div> */}
            </div>
            <div className='col-md-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center row'>
                
                <div className="small-banner position-relative col-6">
                  <img src="assets/catbanner-01.jpg" className='img-fluid rounded-3' alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE</h4>
                    <h5>Laptops Max</h5>
                    <p>From $1699.00 or <br/>
                      $64.62/mo.
                    </p>
                  </div>
                </div>
                
                <div className="small-banner position-relative col-6">
                  <img src="assets/catbanner-03.jpg" className='img-fluid rounded-3' alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy IPad Air</h5>
                    <p>From $599 or <br/>
                      $49.91/mo. for 12mo.
                    </p>
                  </div>
                </div>
                
                <div className="small-banner position-relative col-6">
                  <img src="assets/catbanner-02.jpg" className='img-fluid rounded-3' alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>15% OFF</h4>
                    <h5>Smartwatch 7</h5>
                    <p>Shop the latest band <br/>
                      styles and colors
                    </p>
                  </div>
                </div>
                
                <div className="small-banner position-relative col-6">
                  <img src="assets/catbanner-04.jpg" className='img-fluid rounded-3' alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>FREE ENGRAVING</h4>
                    <h5>AirPods Max</h5>
                    <p>High-fidelity playback & <br/>
                      ultra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex alin-items-center justify-content-between row">
                
                <div className='d-flex align-items-center gap-15 col-sm-6 col-md-4 mt-2 col-lg-2'>
                  <img src="assets/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders above $100</p>
                  </div>
                </div>
                
                <div className='d-flex align-items-center gap-15 col-sm-6 col-md-4 mt-2 col-lg-2'>
                  <img src="assets/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Suprise Offers</h6>
                    <p className='mb-0'>Save up to 25% off</p>
                  </div>
                </div>
                
                <div className='d-flex align-items-center gap-15 col-sm-6 col-md-4 mt-2 col-lg-2'>
                  <img src="assets/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                
                <div className='d-flex align-items-center gap-15 col-sm-6 col-md-4 mt-2 col-lg-2'>
                  <img src="assets/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory direct price</p>
                  </div>
                </div>
                
                <div className='d-flex align-items-center gap-15 col-sm-6 col-md-4 mt-2 col-lg-2'>
                  <img src="assets/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% Protected Payments</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-3 py-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-none d-md-flex">
              <div className="categories row d-flex justify-content-between flex-wrap  align-items-center">
                
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Laptops</h6>
                    <p>8 Items</p>
                  </div>
                  <img src="assets/laptop.jpg" alt="computer" />
                </div>

                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Cameras & Videos</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="assets/camera.jpg" alt="camera" />
                </div>

                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart Television</h6>
                    <p>12 Items</p>
                  </div>
                  <img src="assets/tv.jpg" alt="television" />
                </div>

                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Home Appliances</h6>
                    <p>6 Items</p>
                  </div>
                  <img src="assets/homeapp.jpg" alt="homeapp" />
                </div>

                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Mobiles & Tablets</h6>
                    <p>5 Items</p>
                  </div>
                  <img src="assets/camera.jpg" alt="tab" />
                </div>

                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Headphones</h6>
                    <p>6 Items</p>
                  </div>
                  <img src="assets/headphone.jpg" alt="headphone" />
                </div>

                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Accessories</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="assets/acc.jpg" alt="acc" />
                </div>

                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Portable Speakers</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="assets/speaker.jpg" alt="speaker" />
                </div>

              </div>
            </div>
          </div> 
        </div>
      </section>

      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </section>

      <section className='famous-wrapper py-5 home-wrapper-2'>
        <div className="container-xxl">
          <div className="row ">
            <div className="col-sm-6 col-lg-3 col-12 mt-2">
              <div className="famous-card black  position-relative">
                <img className='img-fluid' src="assets/iwatch1.png" alt="famous" />
                <div className="famous-content position-absolute ">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or $16.62/mo. for 24mo.</p> 
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3 col-12 mt-2">
              <div className="famous-card black  position-relative">
                <img className='img-fluid' src="assets/iwatch1.png" alt="famous" />
                <div className="famous-content position-absolute ">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or $16.62/mo. for 24mo.</p> 
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3 col-12 mt-2">
              <div className="famous-card black  position-relative">
                <img className='img-fluid' src="assets/iwatch1.png" alt="famous" />
                <div className="famous-content position-absolute ">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or $16.62/mo. for 24mo.</p> 
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3 col-12 mt-2">
              <div className="famous-card black  position-relative">
                <img className='img-fluid' src="assets/iwatch1.png" alt="famous" />
                <div className="famous-content position-absolute ">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or $16.62/mo. for 24mo.</p> 
                </div>
              </div>
            </div>

            {/* <div className="col-3">
              <div className="famous-card white position-relative">
                <img className='img-fluid' src="assets/famous2.jpg" alt="famous" />
                <div className="famous-content position-absolute ">
                  <h5 className='text-dark'>Studio Display</h5>
                  <h6 className='text-dark'>600 nits of brightness.</h6>
                  <p className='text-dark'>From $399 or $16.62/mo. for 24mo.</p> 
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card white position-relative">
                <img className='img-fluid' src="assets/famous1.jpg" alt="famous" />
                <div className="famous-content position-absolute ">
                  <h5 className='text-dark'>Smartphones</h5>
                  <h6 className='text-dark'>Smartphone 13.</h6>
                  <p className='text-dark'>Now in Red. From $999.00 or $41.62/mo. for 24mo.</p> 
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card white position-relative">
                <img className='img-fluid' src="assets/famous5.jpg" alt="famous" />
                <div className="famous-content position-absolute ">
                  <h5 className='text-dark'>Home Speakers</h5>
                  <h6 className='text-dark'>Room-filling sound.</h6>
                  <p className='text-dark'>From $699 or $116.58/mo. for 12mo.</p> 
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </section>

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className='container-xxl'>
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct/>
            <SpecialProduct/>
            <SpecialProduct/>
            <SpecialProduct/>
          </div>
        </div>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 ">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </section>

      <section className="marque-wrappe py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className='d-flex'>
                 <div className='mx-4 w-25'>
                    <img src="assets/brand-01.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="assets/brand-02.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="assets/brand-03.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="assets/brand-04.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="assets/brand-05.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="assets/brand-06.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="assets/brand-07.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="assets/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-3 col-12">
            <BlogCard/>
            </div>
            <div className="col-sm-6 col-lg-3 col-12">
            <BlogCard/>
            </div>
            <div className="col-sm-6 col-lg-3 col-12">
            <BlogCard/>
            </div>
            <div className="col-sm-6 col-lg-3 col-12">
            <BlogCard/>
            </div>
          </div>
        </div>
      </section> 
    </>
  )
};

export default Home