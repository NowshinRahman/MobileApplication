import React from 'react'
import './styles.css'

// HW: Apply CSS styling
export default function IngredientsList(props) {
  const {ingredients} = props

  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ingred, index) => (
          <li key={index}>
            <span className="measure">{index.measure}</span>
            </li>
        ))}
      </ul>
    </div>
  )
}
