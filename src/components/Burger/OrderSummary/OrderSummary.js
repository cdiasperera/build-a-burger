import React from 'react'

import Button from '../../UI/Button/Button'

const Summary = ({ ingredients, price, exitCheckout }) => {
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
      <p><strong>Total: {price.toFixed(2)}</strong></p>
      <Button success> Continue to checkout?</Button>
      <Button onClick={exitCheckout} success={false}> Cancel </Button>
    </>
  )
}

export default Summary
