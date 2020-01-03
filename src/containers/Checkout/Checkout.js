import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import CheckoutSummary from
  '../../components/Order/CheckoutSummary/CheckoutSummary'

import Contact from './Contact/Contact'

class Checkout extends Component {
  render = () => {
    const contactPath =
      this.props.match.path + '/contact'

    return (
      <>
        <CheckoutSummary />
        <Route
          path={contactPath}
          component={Contact}
        />
      </>
    )
  }
}

export default Checkout
