import React from "react";
import { useLocation } from "react-router-dom";
import Bway from "../subComponents/Bway";
import { Items } from "../../Data";
import BookCard from "../subComponents/BookCard";
import { BookContainer } from "../styles";
import BlogT from "../subComponents/BlogT";
import BookShops from "../subComponents/BookShops";

const Books = () => {
  const location = useLocation();


  return (
    <BookContainer className="genLayout">
      <h1>{location.pathname.replace(/\//g, " ")}</h1>
      <Bway />

      <div className="booksWrapper">
        {Items[0].bookProducts?.map((bookProduct) => {
          return <BookCard item={bookProduct} key={bookProduct.key}/>;
        })}
      </div>

      <BlogT />
      <BookShops />
<<<<<<< HEAD
      <button>Show more</button>
=======
      {/* button code */}
>>>>>>> ffd18461f1f4376f3f501681f193aeb7a5b17556
    </BookContainer>
  );
};

export default Books;
