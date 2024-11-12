import React from 'react'

const FoodCard = ({food}) => {
  return (
    <div>
        <img src={food.strCategoryThumb} alt="food image" />
        
        <h1>{food.strCategory}</h1>
    </div>
  )
}

export default FoodCard