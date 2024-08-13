import React from 'react'
import { BookShopCardWrapper } from '../styles'

const BookShopCard = ({item}) => {
  return (
    <BookShopCardWrapper>
     

     <img src={item.img} alt='book' />
      
        <div className="wrapperD">
     <span>by {item.author}</span>
     <h2>{item.title}</h2>
     <p>{item.descp}</p>

     <div className="span">
     <h3>${item.newPrice}</h3>
     <h3>${item.oldPrice}</h3>
     </div>

      <button>Shop now</button>
     </div>


    </BookShopCardWrapper>
  )
}

export default BookShopCard