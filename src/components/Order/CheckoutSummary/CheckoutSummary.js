import React from 'react'

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

import classes from './CheckoutSummary.module.css'

const CheckoutSummary = ({ ingredients }) => {
  const handleClick = () => {
    console.log(ingredients)
  }

  return (
    <div className={classes.CheckoutSummary}>
      <h1>Enjoy!</h1>
      <div className={classes.Burger}>
        <Burger ingredients={ingredients} />
      </div>
      <Button onClick={handleClick}> Cancel </Button>
      <Button onClick={handleClick} success> Coninute </Button>
    </div>
  )
}

export default CheckoutSummary
