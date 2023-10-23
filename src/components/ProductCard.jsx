/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable eqeqeq */
import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import '../styles/productCard.css'

const ProductCard = (props) => {
    const {grid} = props
    let location = useLocation();
    
  return (
   <>
 
    <div className= {` ${location.pathname == "/store" ? `gr-${grid}` : "col-sm-6 col-lg-3 col-12 "} `}>
        <Link className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link>
                <img src="assets/wish.svg" alt="wishlist"/>
                </Link>
            </div>
            <div className="product-image">
                <img src="assets/watch.jpg" className='img-fluid' alt="product image" />
                <img src="assets/iwatch1.png" className='img-fluid short' alt="product image" />
            </div>
            <div className="product-details">
                <h6 className='brand'>Havels</h6>
                <h5 className='product-title'>
                    Kids headphones bulk 10 pack multi colored for students
                </h5>
                <ReactStars
                    count={5}
                    size={20}
                    value={3}
                    edit= {false}
                    activeColor="#ffd700"
                />
                <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius repudiandae cupiditate laborum aut similique animi ipsa natus obcaecati nobis impedit ullam enim, a soluta ipsam ut eos vero nihil at!</p>
                <p className='price'>$100.00</p>
            </div>
            <div className="action-bar position-absolute">
                <div className='d-flex flex-column'>
                    <Link>
                        <img src="assets/prodcompare.svg" alt="compare" />
                    </Link>
                    <Link>
                        <img src="assets/view.svg" alt="view" />
                    </Link>
                    <Link>
                        <img src="assets/add-cart.svg" alt="add cart" />
                    </Link>
                </div>
            </div>
        </Link>
    </div>

    {/* <div className= {` ${location.pathname =="/store" ? `gr-${grid}` : "col-3"} `}>
        <Link className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link>
                <img src="assets/wish.svg" alt="wishlist"/>
                </Link>
            </div>
            <div className="product-image">
                <img src="assets/watch.jpg" className='img-fluid' alt="product image" />
                <img src="assets/iwatch1.png" className='img-fluid short' alt="product image" />
            </div>
            <div className="product-details">
                <h6 className='brand'>Havels</h6>
                <h5 className='product-title'>
                    Kids headphones bulk 10 pack multi colored for students
                </h5>
                <ReactStars
                    count={5}
                    size={20}
                    value={3}
                    edit= {false}
                    activeColor="#ffd700"
                />
                <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius repudiandae cupiditate laborum aut similique animi ipsa natus obcaecati nobis impedit ullam enim, a soluta ipsam ut eos vero nihil at!</p>
                <p className='price'>$100.00</p>
            </div>
            <div className="action-bar position-absolute">
                <div className='d-flex flex-column'>
                    <Link>
                        <img src="assets/prodcompare.svg" alt="compare" />
                    </Link>
                    <Link>
                        <img src="assets/view.svg" alt="view" />
                    </Link>
                    <Link>
                        <img src="assets/add-cart.svg" alt="add cart" />
                    </Link>
                </div>
            </div>
        </Link>
    </div> */}
   </>
    
  )
}  

export default ProductCard