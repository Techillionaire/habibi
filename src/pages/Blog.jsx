import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import "../styles/blog.css"
import BlogCard from '../components/BlogCard'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <>
        <Meta title={'Blogs'} />
        <BreadCrumb title='Blogs' />
        <div className="blog-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Find By Categories</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li><Link to={`/`} className='text-secondary'>Home</Link></li>
                                        <li><Link to={`/store`} className='text-secondary'>Store</Link></li>
                                        <li><Link to={`/blog`} className='text-secondary'>Blogs</Link></li>
                                        <li><Link to={`/contact`} className='text-secondary'>Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-6">
                                <BlogCard />
                                <BlogCard />
                            </div>
                            <div className="col-6">
                              <BlogCard />
                              <BlogCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blog