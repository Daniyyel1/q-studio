import React from "react";
import { Items } from "../../Data";
import BookShopCard from "./BookShopCard";

const BookShops = () => {
  return (
    <div className="booksWrapper">
      {Items[0].bookProducts?.map((bookProduct) => {
        return <BookShopCard item={bookProduct} key={bookProduct.key} />;
      })}
    </div>
  );
};

export default BookShops;
