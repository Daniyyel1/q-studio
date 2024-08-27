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