import React, { useContext } from 'react'
import { BookCardWrapper } from '../styles'
import BookContext from '../../contexts/BookContext';

const BookCard = ({item}) => {
  const { addToCart } = useContext(BookContext);
  return (
    <BookCardWrapper key={item.id}>
        <img src={item.img} alt="book" />

        <h1>{item.title}</h1>
        <span>by {item.author}</span>

        <button onClick={() => addToCart(item)}>buy for ${item.price}</button>
    </BookCardWrapper>
  )
}

export default BookCard