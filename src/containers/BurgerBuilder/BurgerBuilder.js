import React, { Component } from 'react'

import Burger from '../../components/Burger/Burger'
import { ingredients } from '../../components/Burger/Ingredient/Ingredient'

class BurgerBuilder extends Component {
  render = () => {
    return (
      <>
        <Burger ingredients={[
          ingredients.breadTop,
          ingredients.cheese,
          ingredients.meat,
          ingredients.breadBottom
        ]}
        />
        <div>BuildControls</div>
      </>
    )
  }
}

export default BurgerBuilder
