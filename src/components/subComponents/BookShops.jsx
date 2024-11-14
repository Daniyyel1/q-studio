import React from "react";
import { Items } from "../../Data";
import BookShopCard from "./BookShopCard";
import Button from "./Button";

const BookShops = () => {
  return (
    <div className="bookShopWrapper">
      {Items[1].categorizedBooks?.map((categorizedBook) => {
        return <BookShopCard item={categorizedBook} />;
      })}

      <Button />
    </div>
  );
};

export default BookShops;
