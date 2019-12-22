import React from 'react'

const summary = ({ ingredients, price }) => {
  const ingredientSummary = []

  for (const ingredient in ingredients) {
    const amount = ingredients[ingredient]
    if (amount > 0) {
      ingredientSummary.push(
        <li key={ingredient}>
          {ingredient}: x{amount}
        </li>
      )
    }
  }
  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <hr />
      <p>Total: {price.toFixed(2)}</p>
      <button> Continue to checkout?</button>
    </>
  )
}

export default summary
