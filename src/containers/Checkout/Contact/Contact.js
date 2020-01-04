import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import camelCase from '../../../helper/camelCase'
import axios from '../../../axios'

import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'

import classes from './Contact.module.css'

class Contact extends Component {
  state = {
    loading: false
  }

  createOrderFormObject = (elementType, label, type) => {
    return {
      elementType: elementType,
      elementConfig: {
        label: label,
        name: camelCase(label),
        type: type,
        placeholder: 'Your ' + label
      }
    }
  }

  ORDER_FORM = {
    name: this.createOrderFormObject('input', 'Name', 'text'),
    street: this.createOrderFormObject('input', 'Street', 'text'),
    postalCode: this.createOrderFormObject('input', 'Postal Code', 'text'),
    email: this.createOrderFormObject('input', 'Email', 'email')
  }

  handleOrder = async (event) => {
    event.preventDefault()
    this.setState({ loading: true })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price
    }
    try {
      await axios.post('/orders.json', order)
      this.setState({ loading: false })
    } catch (err) {
      this.setState({ loading: false })
      console.log(err)
    }
    this.props.history.push('/')
  }

  generateInputs = () => {
    const inputs = []
    for (const key in this.ORDER_FORM) {
      const input = this.ORDER_FORM[key]
      inputs.push(
        <Input
          key={input.elementConfig.name}
          inputType={input.elementType}
          label={input.elementConfig.label}
          type={input.elementConfig.type}
          name={input.elementConfig.name}
          placeholder={input.elementConfig.placeholder}
        />
      )
    }
    return inputs
  }

  inputs = this.generateInputs()

  render = () => {
    let form
    if (this.state.loading) {
      form = <Spinner />
    } else {
      form = (
        <>
          <h4>Enter your contact details</h4>
          <form>
            {this.inputs}
            <Button success onClick={this.handleOrder}> Order </Button>
          </form>
        </>
      )
    }

    return (
      <div className={classes.Contact}>
        {form}
      </div>
    )
  }
}

export default withRouter(Contact)
