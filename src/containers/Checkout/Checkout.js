import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import CheckoutSummary from
  '../../components/Order/CheckoutSummary/CheckoutSummary'

import Contact from './Contact/Contact'

class Checkout extends Component {
  render = () => {
    const ingredients = this.props.ingredients
    const contactPath = this.props.match.path + '/contact'

    let page = null
    if (ingredients) {
      page = (
        <>
          <CheckoutSummary ingredients={ingredients} />
          <Route
            path={contactPath}
            render={() => <Contact />}
          />
        </>
      )
    } else {
      page = (<Redirect to='/' />)
    }
    return page
  }
}

const mapStateToProps = state => ({
  ingredients: state.builder.ingredients
})

export default connect(mapStateToProps)(Checkout)
