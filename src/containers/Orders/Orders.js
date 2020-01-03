import React, { Component } from 'react'

import axios from '../../axios'

import Order from '../../components/Order/Order'
import Spinner from '../../components/UI/Spinner/Spinner'

class Orders extends Component {
  state = {
    orders: {},
    loading: true
  }

  componentDidMount = async () => {
    try {
      this.setState({ loading: true })
      const orders = (await axios.get('/orders.json')).data
      this.setState({ orders: orders, loading: false })
    } catch (err) {
      console.log(err)
      this.setState({ loading: false })
    }
  }

  render = () => {
    let page = null
    if (this.state.loading) {
      page = <Spinner />
    } else {
      const orders = []
      for (const [key, value] of Object.entries(this.state.orders)) {
        orders.push(
          <Order
            key={key}
            price={value.price}
            ingredients={value.ingredients}
          />
        )
      }
      page = orders
    }

    return (
      <>
        {page}
      </>
    )
  }
}

export default Orders
