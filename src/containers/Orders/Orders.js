import React, { Component } from 'react'

import Order from '../../components/Order/Order'

class Orders extends Component {
  ingredients = {
    Salad: 1,
    Meat: 1,
    Bacon: 1,
    Cheese: 1
  }

  price = '0'
  render = () => {
    return (
      <Order price={this.price} ingredients={this.ingredients} />
    )
  }
}

export default Orders
