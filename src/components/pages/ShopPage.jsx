import React, { useState } from "react";
import { ShopWrapper } from "../styles";
import Search from "../subComponents/Search";
import { Items } from "../../Data";
import BookProduct from "../subComponents/BookProduct";

const ShopPage = () => {
  const [searchValue, setSearchValue] = useState("");

  // function to handle search input
  const handleSearchChange = (val) => {
    setSearchValue(val);
  };

  // function to filter state 
  const filteredBooks = searchValue !== "" ?
  Items[1].categorizedBooks?.filter((bookItem) => bookItem.author.toLowerCase().includes(searchValue.toLowerCase()))
  :  Items[1].categorizedBooks


  return (
    <ShopWrapper className="genLayout">
      <Search onChange={handleSearchChange} />

      {/* map book list */}

      <div className="book_product_container">
        {filteredBooks?.map((book) => {
          return <BookProduct book={book} />;
        })}
      </div>
    </ShopWrapper>
  );
};

export default ShopPage;
