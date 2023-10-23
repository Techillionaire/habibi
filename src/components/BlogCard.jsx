import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/blogCard.css"

const BlogCard = () => {
return (
        <div className="blog-card mt-2">
            <div className='card-image'>
                <img src="assets/blog-1.jpg" className='img-fluid w-100' alt="blog" />
            </div>
            <div className='blog-content'>
                <p className='date'>1 Dec, 2022  </p>
                <h5 className="title">A beautiful sunday morning renaissance</h5>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ex optio voluptas porro unde harum?</p>
                <Link to="/" className="button fw-bold">
                    Read More
                </Link>
            </div>
        </div>
  )
}

export default BlogCard