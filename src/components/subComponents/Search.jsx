<<<<<<< HEAD
import React from 'react'

const Search = ({onChange}) => {

   const handleChange = (e) =>{
      onChange(e.target.value);
   }

  return (
    
     <div className='searchInput'>
        <input type='text' placeholder='search' onChange={handleChange} />
     </div>    
    
  )
}

export default Search
=======
import React from "react";

const Search = ({onChange}) => {

  const handleChange = (e) => {
    onChange(e.target.value);
  };


  return (
    <div className="searchInput">

      <input
        type="search"
        placeholder="Search for a book.."
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
>>>>>>> ffd18461f1f4376f3f501681f193aeb7a5b17556
