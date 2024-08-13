import React from 'react'
import { BlogCardWrapper } from '../styles'

const BlogCard = ({item}) => {
  return (
    <BlogCardWrapper>
     <img src={item.img} alt='car' />

     <div className="blogCardContent">
     <span>by {item.author}</span>
     <h3>{item.title}</h3>
     <p>{item.desp}</p>
     <span>{item.date}</span>

     </div>
 
    </BlogCardWrapper>
  )
}

export default BlogCard