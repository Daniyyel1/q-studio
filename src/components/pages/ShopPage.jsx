import React, { useState } from 'react'
import { ShopWrapper } from '../styles'
import Search from '../subComponents/Search'
import { Items } from '../../Data';
import BookProducts from '../subComponents/BookProducts';

const ShopPage = () => {

  const [searchValue, setSearchValue] = useState('');

  // function to handle search input

  const handleSearchChange = (val) => {
    setSearchValue(val);
  };

  // function to filter state

  const filteredBooks = searchValue !== "" ?
  Items[1].categorizedBooks?.filter((bookItem) => bookItem.author.toLowerCase().includes(searchValue.toLowerCase()))
  : Items[1].categorizedBooks
  
 

  return (
    <ShopWrapper className='genLayout'>
      
     <Search onChange={handleSearchChange} />

     <div className="book_product_container">
      {filteredBooks?.map((item) => {
        return <BookProducts item={item} />;
      })}
     </div>
    </ShopWrapper>
  )
}

export default ShopPage