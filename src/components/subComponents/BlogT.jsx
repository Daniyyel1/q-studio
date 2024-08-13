import React from 'react'
import { BlogWrapper } from '../styles'
import { Link } from 'react-router-dom'
import lambo from '../../assets/lambo.jpg'
import BlogCard from './BlogCard'
import { Items } from "../../Data";

const BlogT = () => {
  return (
    <BlogWrapper>
        <div className="blogT">
        <Link to="#">View all</Link>
        <Link to="#">Fashion</Link>
        <Link to="#">Culture</Link>
        <Link to="#">Business</Link>
        <Link to="#">Opinion</Link>
        <Link to="#">Art</Link>
        </div>
        
         <div className="blogTWrapper">
           {Items[3].categorizedBlogs?.map((categorizedBlog) =>{
            return <BlogCard item={categorizedBlog} key={categorizedBlog} />;
           })} 
         </div>

    </BlogWrapper>
  )
}

export default BlogT