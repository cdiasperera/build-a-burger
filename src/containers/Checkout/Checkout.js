import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import CheckoutSummary from
  '../../components/Order/CheckoutSummary/CheckoutSummary'

import Contact from './Contact/Contact'

class Checkout extends Component {
  getIngredientsFromQuery = (search) => {
    if (!search) {
      return {}
    }

    const query = new URLSearchParams(search)
    const ingredients = {}
    for (const param of query.entries()) {
      ingredients[param[0]] = param[1]
    }
    return ingredients
  }

  getSearchFromURL = (url) => {
    if (url === '') {
      return null
    }
    return url.match(/^\?[^/]*/)[0]
  }

  render = () => {
    const search = this.getSearchFromURL(this.props.location.search)
    const ingredients = this.getIngredientsFromQuery(search)
    const contactPath =
      this.props.match.path + '/contact'

    return (
      <>
        <CheckoutSummary ingredients={ingredients} />
        <Route
          path={contactPath}
          render={() => {
            return <Contact ingredients={ingredients} />
          }}
        />
      </>
    )
  }
}

export default Checkout
