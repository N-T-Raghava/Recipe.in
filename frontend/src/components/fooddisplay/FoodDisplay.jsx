import React, { useContext } from 'react'
import "./FoodDisplay.css"
import FoodItem from '../fooditem/FoodItem'
import { StoreContext } from '../../context/Storecontext'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

    const filteredList = category === "All"
    ? food_list
    : food_list.filter(item => item.category === category);

  return (
    <div className='food-display' id="food-display">
      <h2>Top Dishes !</h2>
      <div className="food-display-list">
        {food_list.map((item) => {
            return <FoodItem key={item._id} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
