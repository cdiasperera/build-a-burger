import ACTIONS from '../actions/actionTypes'
import {
  INGREDIENT_LIST
} from '../../components/Burger/Ingredient/Ingredient'
import { calculateCost } from '../../components/Burger/Burger'

const initialState = {
  ingredients: {
    [INGREDIENT_LIST.salad]: 0,
    [INGREDIENT_LIST.cheese]: 0,
    [INGREDIENT_LIST.bacon]: 0,
    [INGREDIENT_LIST.meat]: 0
  }
}

initialState.price = calculateCost(initialState.ingredients)

const adjustIngredients = (prevState, ingredient, adjustType) => {
  const ingredients = { ...prevState.ingredients }
  ingredients[INGREDIENT_LIST[ingredient]] += adjustType

  if (ingredients[INGREDIENT_LIST[ingredient]] < 1) {
    ingredients[INGREDIENT_LIST[ingredient]] = 0
  }

  // Determine the new price. Convert it to two decimal places
  const price = calculateCost(ingredients)

  return { ingredients, price }
}

const orderReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case (ACTIONS.ORDER): {
      const { ingredients, price } = adjustIngredients(
        prevState, action.ingredient, action.adjustType
      )
      return { ...prevState, ingredients, price }
    }
    case (ACTIONS.INIT):
      return {
        ...prevState,
        ingredients: action.ingredients,
        price: action.price
      }
    default:
      return prevState
  }
}

export default orderReducer
