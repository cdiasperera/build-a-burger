import React from 'react'

const summary = (props) => {
  const ingredientSummary = []

  for (const ingredient in props.ingredients) {
    const amount = props.ingredients[ingredient]
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
      <p>Total: {props.price.toFixed(2)}</p>
      <button> Continue to checkout?</button>
    </>
  )
}

export default summary
