import React, { Component } from 'react'

import createAuthFormObject from '../../helper/createFormObject'
import checkRules from '../../helper/checkRules'

import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'

import classes from './Auth.module.css'

class Auth extends Component {
  state = {
    email: { value: '', valid: false, shouldValidate: false },
    password: { value: '', valid: false, shouldValidate: false }
  }

  AUTH_FORM = {
    email: createAuthFormObject(
      'input', 'Email', 'email',
      {
        required: true,
        isEmail: true
      }),
    password: createAuthFormObject(
      'input', 'Password', 'password',
      {
        required: true,
        minLength: 6
      }
    )
  }

  handleChange = (event) => {
    const newDataState = {
      value: event.target.value,
      valid: checkRules(
        event.target.value,
        this.AUTH_FORM[event.target.name].rules
      ),
      shouldValidate: true
    }
    this.setState({ [event.target.name]: newDataState })
  }

  render = () => {
    const inputs = []
    for (const key in this.AUTH_FORM) {
      const input = this.AUTH_FORM[key]
      inputs.push(
        (
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
      )
    }
    return (
      <div className={classes.Auth}>
        <form>
          {inputs}
          <Button disabled={!this.state.formValid} success> Submit </Button>
        </form>
      </div>
    )
  }
}

export default Auth