<<<<<<< HEAD
import React from 'react'
import { BookShopCardWrapper } from '../styles'
import { Link } from 'react-router-dom'
=======
import React from "react";
import { BookShopCardWrapper } from "../styles";
import { Link } from "react-router-dom";
>>>>>>> ffd18461f1f4376f3f501681f193aeb7a5b17556

const BookShopCard = ({ item }) => {
  return (
    <BookShopCardWrapper>
      <img src={item.img} alt="book" />

      
<<<<<<< HEAD
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
=======
      <div className="wrapperD">
        <span>by {item.author}</span>
        <h2>{item.title}</h2>
        <p>{item.descp}</p>

        <div className="span">
          <h3>${item.newPrice}</h3>
          <h3>${item.oldPrice}</h3>
        </div>

        <Link to='/shop'>
          <button>Shop now</button>
        </Link>
      </div>
>>>>>>> ffd18461f1f4376f3f501681f193aeb7a5b17556
    </BookShopCardWrapper>
  );
};

export default BookShopCard;

