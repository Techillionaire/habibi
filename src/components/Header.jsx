import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch } from "react-icons/bs"
import "../styles/header.css"

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className="col-6">
              <p className='text-end text-white mb-0'>Hotline: <a className='text-white' href="tel:+2348102350810">+(234) 810-235-0810 </a> </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-mid-strip py-2">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-2">
              <h2>
                <Link className='text-white'>Shoppers</Link>
              </h2>
            </div>

            <div className="col-5">
              <div className="input-group">
                <input type="text" className="form-control p-2" placeholder="Search product here" aria-label="Search product here" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch className='fs-6' />
                </span>
              </div>
            </div>

            <div className="col-5 ">
              <div className="header-mid-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="./assets/compare.svg" alt="compare" />
                    <p className='mb-0'>Compare <br /> Products</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="./assets/wishlist.svg" alt="wishlist" />
                    <p className='mb-0'>Favorite <br /> wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="./assets/user.svg" alt="user" />
                    <p className='mb-0'>Login <br /> My Account</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="./assets/cart.svg" alt="" />
                    <div className='d-flex flex-column'>
                      <span className="badge bg-white text-dark">0</span>
                      <p className='mb-0'>$0.0</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom-strip py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">

              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="./assets/menu.svg" className='menu-img me-2' alt="" />
                      <span className='menu-text me-2'> Shop Categories</span>
                    </button>
                    <ul class="dropdown-menu rounded-0 mt-2">
                      <li><Link className="dropdown-item text-white" to="/">Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="/">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="/">Something else here</Link></li>
                    </ul>
                  </div>
                </div>

                <div className='menu-links'>
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="nav-link" to={`/`}>Home</NavLink>
                    <NavLink className="nav-link" to={`/store`}>Our Store</NavLink>
                    <NavLink className="nav-link" to={`/blog`}>Blogs</NavLink>
                    <NavLink className="nav-link" to={`/contact`}>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header