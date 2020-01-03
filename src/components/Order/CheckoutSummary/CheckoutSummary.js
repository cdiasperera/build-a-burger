import React from 'react'
import { withRouter } from 'react-router-dom'

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

import classes from './CheckoutSummary.module.css'

const CheckoutSummary = ({ history, location }) => {
  const handleClick = () => {
  }

  const handleCancel = () => {
    history.goBack()
  }

  const ingredients = getIngredientsFromQuery(location.search)

  return (
    <div className={classes.CheckoutSummary}>
      <h1>Enjoy!</h1>
      <div className={classes.Burger}>
        <Burger ingredients={ingredients} />
      </div>
      <Button onClick={handleCancel}> Cancel </Button>
      <Button onClick={handleClick} success> Coninute </Button>
    </div>
  )
}

const getIngredientsFromQuery = (search) => {
  const query = new URLSearchParams(search)
  const ingredients = {}
  for (const param of query.entries()) {
    ingredients[param[0]] = param[1]
  }
  return ingredients
}

export default withRouter(CheckoutSummary)
