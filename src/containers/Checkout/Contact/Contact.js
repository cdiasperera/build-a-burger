import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import camelCase from '../../../helper/camelCase'
import axios from '../../../axios'

import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'

import classes from './Contact.module.css'

class Contact extends Component {
  state = {
    name: { value: '', valid: false, shouldValidate: false },
    email: { value: '', valid: false, shouldValidate: false },
    street: { value: '', valid: false, shouldValidate: false },
    postalCode: { value: '', valid: false, shouldValidate: false },
    formValid: false,
    loading: false
  }

  componentDidUpdate = () => {
    const { formValid, loading, ...formLabels } = { ...this.state }
    let isFormValid = true
    for (const prop in formLabels) {
      if (!this.state[prop].valid) {
        isFormValid = false
      }
    }
    if (this.state.formValid !== isFormValid) {
      this.setState({ formValid: isFormValid })
    }
  }

  createOrderFormObject = (elementType, label, type, rules) => {
    return {
      elementType: elementType,
      elementConfig: {
        label: label,
        name: camelCase(label),
        type: type,
        placeholder: 'Your ' + label
      },
      rules: rules
    }
  }

  ORDER_FORM = {
    name: this.createOrderFormObject(
      'input', 'Name', 'text',
      { required: true }),
    street: this.createOrderFormObject(
      'input', 'Street', 'text',
      { required: true }),
    postalCode: this.createOrderFormObject(
      'input', 'Postal Code', 'text',
      { required: true }),
    email: this.createOrderFormObject(
      'input', 'Email', 'email',
      {
        required: true,
        isEmail: true
      })
  }

  checkRules = (value, rules) => {
    if (rules.required) {
      if (!value.length > 0) {
        return false
      }
    }

    if (rules.isEmail) {
      // Make sure that the @ separates the domain and local-part and that the
      // email doesn't end with an @
      if (
        value.match(/[^@]+/g).length !== 2 ||
        value.charAt(value.length - 1) === '@') {
        return false
      }
    }
    // Passed on the rules, can return true
    return true
  }

  handleOrder = async (event) => {
    event.preventDefault()
    this.setState({ loading: true })
    const { loading, ...contactData } = { ...this.state }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      contact: contactData
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

  handleChange = (event) => {
    const newDataState = {
      value: event.target.value,
      valid: this.checkRules(
        event.target.value,
        this.ORDER_FORM[event.target.name].rules
      ),
      shouldValidate: true
    }
    this.setState({ [event.target.name]: newDataState })
  }

  render = () => {
    const inputs = []
    for (const key in this.ORDER_FORM) {
      const input = this.ORDER_FORM[key]
      inputs.push(
        <Input
          key={input.elementConfig.name}
          inputType={input.elementType}
          isValid={this.state[key].valid}
          shouldValidate={this.state[key].shouldValidate}
          value={this.state[key].value}
          onChange={this.handleChange}
          {...input.elementConfig}
        />
      )
    }

    let form
    if (this.state.loading) {
      form = <Spinner />
    } else {
      form = (
        <>
          <h4>Enter your contact details</h4>
          <form onSubmit={this.handleOrder}>
            {inputs}
            <Button disabled={!this.state.formValid} success> Order </Button>
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

const mapStateToProps = state => ({
  ingredients: state.order.ingredients,
  price: state.order.price
})

export default withRouter(connect(mapStateToProps)(Contact))
