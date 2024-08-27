import React from 'react'
import { BookProductWrapper} from '../styles'
import { Link } from 'react-router-dom'

const BookProduct = ({book}) => {
  return (
    <BookProductWrapper>
    <img src={book.img} alt="book" className='bookImg'/>

    
    <div className="wrapperD">
      <span>-by {book.author}</span>
      <h2>{book.title}</h2>
      <p>{book.descp}</p>

      <div className="span">
        <h3>${book.newPrice}</h3>
        <h3>${book.oldPrice}</h3>
      </div>

      <Link to='/shop'>
        <button>Shop now</button>
      </Link>
    </div>
  </BookProductWrapper>
  )
}

export default BookProduct