import React from 'react'
import "./FoodItem.css"

const FoodItem = (id, name, price, description) => {
  return (
    <div className='food-item'>
        <div className="food-item-image-container">
            <img src="image" alt="img" className="food-item-image" />
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-disc">{description}</p>
            <p className="food-item-price">{price}</p>
        </div>
    </div>
  )
}

export default FoodItem
