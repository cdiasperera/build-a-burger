import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import axios from '../../../axios'

import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'

import classes from './Contact.module.css'

class Contact extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  handleOrder = async (event) => {
    event.preventDefault()
    this.setState({ loading: true })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'c',
        address: {
          street: 'st',
          postalCode: '0000'
        },
        email: 'test@test.com'
      }
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

  render = () => {
    let form
    if (this.state.loading) {
      form = <Spinner />
    } else {
      form = (
        <>
          <h4>Enter your contact details</h4>
          <form>
            <Input
              label='Name'
              type='text'
              name='name'
              placeholder='Your Name'
            />
            <Input
              label='Email'
              type='email'
              name='email'
              placeholder='Your Email'
            />
            <Input
              label='Street'
              type='text'
              name='street'
              placeholder='Your Street'
            />
            <Input
              label='Postal Code'
              type='text'
              name='postalCode'
              placeholder='Your Postal Code'
            />
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
