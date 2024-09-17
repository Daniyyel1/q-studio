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
          return <BookCard item={bookProduct} />;
        })}
      </div>

      <BlogT />
      <BookShops />
      {/* button code */}
    </BookContainer>
  );
};

export default Books;
