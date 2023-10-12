import React from 'react'
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Store from './pages/Store'
import Blog from './pages/Blog'
import Fetch from './components/Fetch'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={`/`} element={<Layout />}>
            <Route  index element={<Home />}/>
            <Route path={`/about`} element={<About />}/>
            <Route path={`/blog`} element={<Blog />}/>
            <Route path={`/contact`} element={<Contact />}/>
            <Route path={`/store`} element={<Store />}/>
            <Route path={`/fetch`} element={<Fetch />}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App