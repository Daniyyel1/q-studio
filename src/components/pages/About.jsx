import React, { useEffect, useState } from 'react'
import Axios from "axios"
import FoodCard from '../subComponents/FoodCard'


const About = () => {
  const[foods, setFoods] = useState([])

  const ApiUrl = "https://www.themealdb.com/api/json/v1/1/categories.php"

  // function to make api call 

  const fetchFoods = async () => {
    try {
      const response = await Axios.get(ApiUrl);
      setFoods(response.data.categories)
    } catch (error) {
      // Handle error
      throw error
    }
  }

useEffect(() => {
  fetchFoods()
}, [])

  return (
    <div>
      {
        foods.map((food) => {
          return (
            <div className="foodWrapper">
              <FoodCard food= {food} key={food.idCategory} />
            </div>
          )
        })
      }
    </div>
  )
}

export default About