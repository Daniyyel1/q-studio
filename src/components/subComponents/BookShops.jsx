import React from "react";
import { Items } from "../../Data";
import BookShopCard from "./BookShopCard";

const BookShops = () => {
  return (
    <div className="bookShopWrapper">
      {Items[1].categorizedBooks?.map((categorizedBook) => {
        return <BookShopCard item={categorizedBook} key={categorizedBook.key} />;
      })}
    </div>
  );
};

export default BookShops;
