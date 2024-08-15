import React from "react";

const Search = ({onChange}) => {

  const handleChange = (e) => {
    onChange(e.target.value);
  };


  return (
    <div className="searchInput">
      <input
        type="search"
        placeholder="search for a book.."
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
