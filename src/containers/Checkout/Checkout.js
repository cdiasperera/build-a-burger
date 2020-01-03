import React, { Component } from 'react'

import CheckoutSummary from
  '../../components/Order/CheckoutSummary/CheckoutSummary'

class Checkout extends Component {
  state = {
    ingredients: {
      Salad: 1,
      Meat: 1,
      Cheese: 1,
      Bacon: 1
    }
  }

  render = () => {
    return (
      <>
        <CheckoutSummary ingredients={this.state.ingredients} />
      </>
    )
  }
}

export default Checkout
