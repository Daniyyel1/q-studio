import React from 'react'
import { BookCardWrapper } from '../styles'

const BookCard = ({item}) => {
  return (
    <BookCardWrapper>
        <img src={item.img} alt="book" />

        <h1>{item.title}</h1>
        <span>by {item.author}</span>

        <button>buy for ${item.price}</button>
    </BookCardWrapper>
  )
}

export default BookCard