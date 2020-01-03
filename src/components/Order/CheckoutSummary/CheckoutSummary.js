import React from 'react'
import { withRouter } from 'react-router-dom'

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

import classes from './CheckoutSummary.module.css'

const CheckoutSummary = ({ history, location, ingredients }) => {
  const handleClick = () => {
    const continuePath = '/checkout/contact' + location.search
    console.log(continuePath)
    history.push(continuePath)
  }

  const handleCancel = () => {
    history.goBack()
  }

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

export default withRouter(CheckoutSummary)
