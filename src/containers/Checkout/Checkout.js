import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import CheckoutSummary from
  '../../components/Order/CheckoutSummary/CheckoutSummary'

import Contact from './Contact/Contact'

class Checkout extends Component {
  getParamsFromQuery = (search) => {
    if (!search) {
      return {}
    }

    const query = new URLSearchParams(search)
    const ingredients = {}
    const price = {}
    for (const param of query.entries()) {
      if (param[0] === 'price') {
        price[param[0]] = param[1]
      }
      ingredients[param[0]] = param[1]
    }
    return { ...ingredients, ...price }
  }

  getSearchFromURL = (url) => {
    if (url === '') {
      return null
    }
    return url.match(/^\?[^/]*/)[0]
  }

  render = () => {
    const search = this.getSearchFromURL(this.props.location.search)
    const { ingredients, price } = this.getParamsFromQuery(search)
    const contactPath =
      this.props.match.path + '/contact'

    return (
      <>
        <CheckoutSummary ingredients={ingredients} />
        <Route
          path={contactPath}
          render={() => {
            return <Contact price={price} ingredients={ingredients} />
          }}
        />
      </>
    )
  }
}

export default Checkout
