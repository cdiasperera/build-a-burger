import React, { Component } from 'react'

import Button from '../../../components/UI/Button/Button'

import classes from './Contact.module.css'

class Contact extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  }

  render = () => {
    return (
      <div className={classes.Contact}>
        <h4>Enter your contact details</h4>
        <form>
          <input type='text' name='name' placeholder='Your Name' />
          <input type='email' name='email' placeholder='Your Email' />
          <input type='text' name='street' placeholder='Your Street' />
          <input type='text' name='postalCode' placeholder='Your Postal Code' />
          <Button success> Order </Button>
        </form>
      </div>
    )
  }
}

export default Contact
