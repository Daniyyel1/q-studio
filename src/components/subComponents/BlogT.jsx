import React from 'react'
import { BlogWrapper } from '../styles'
import lambo from '../../assets/lambo.jpg'
import BlogCard from './BlogCard'
import { Items } from "../../Data"

const BlogT = () => {
  return (
    <BlogWrapper>        
         <div className="">
           {Items[3].categorizedBlogs?.map((categorizedBlog) => {
            return <BlogCard item={categorizedBlog} key={categorizedBlog} />;
           })} 
         </div>

           
    </BlogWrapper>
  )
}

export default BlogT