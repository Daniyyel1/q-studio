import React from 'react'
import { useLocation } from 'react-router-dom'
import Trending from '../subComponents/Trending'
import BlogT from '../subComponents/BlogT';

const Blog = () => {

const location = useLocation();

  return (
    <div className='blog genLayout'>

      <h1>{location.pathname.replace(/\//g, " ")}</h1>
      <Trending />
      <BlogT />
      <button>Show more</button>
    </div>
  )
}

export default Blog