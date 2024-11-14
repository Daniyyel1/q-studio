import React from "react";
import { useLocation, Link } from "react-router-dom";
import Bway from "../subComponents/Bway";
import { Items } from "../../Data";
import BookCard from "../subComponents/BookCard";
import { BookContainer } from "../styles";
import BlogT from "../subComponents/BlogT";
import BookShops from "../subComponents/BookShops";
import Categories from "../subComponents/Categories";

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

      <Categories>
        <Link to="#">View all</Link>
        <Link to="#">Self-education</Link>
        <Link to="#">Psychology</Link>
        <Link to="#">Business</Link>
        <Link to="#">Novel</Link>
        <Link to="#">Art</Link>
      </Categories>

      {/* <BlogT /> */}
      <BookShops />
    </BookContainer>
  );
};

export default Books;
