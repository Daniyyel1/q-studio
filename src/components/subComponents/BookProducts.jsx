import React from 'react'
import { Link } from 'react-router-dom'
import { BookProductWrapper } from '../styles'

const BookProducts = ({item}) => {
  return (
    <BookProductWrapper>
        
     
        <img src={item.img} alt='book' className='bookImg' />
      
      <div className="wrapperD">
   <span>by {item.author}</span>
   <h2>{item.title}</h2>
   <p>{item.descp}</p>

   <div className="span">
   <h3>${item.newPrice}</h3>
   <h3>${item.oldPrice}</h3>
   </div>
       <Link to="/shoppage">
    <button>Shop now</button>
    </Link>
   </div>

    </BookProductWrapper>
  )
}

export default BookProducts