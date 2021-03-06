import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from '../../axios'

import Order from '../../components/Order/Order'
import Spinner from '../../components/UI/Spinner/Spinner'

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

class Orders extends Component {
  state = {
    orders: {},
    loading: true
  }

  componentDidMount = async () => {
    try {
      this.setState({ loading: true })
      const orders = (await axios.get('/orders.json?auth=' +
        this.props.token)).data
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
      for (const key in this.state.orders) {
        const value = this.state.orders[key]
        console.log(value)
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

const mapStateToProps = state => ({
  token: state.auth.token
})
export default withErrorHandler(connect(mapStateToProps)(Orders), axios)
