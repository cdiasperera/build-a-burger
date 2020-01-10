import React, { Component } from 'react'
import { connect } from 'react-redux'

import createAuthFormObject from '../../helper/createFormObject'
import checkRules from '../../helper/checkRules'

import { auth } from '../../store/actions/auth'

import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import Spinner from '../../components/UI/Spinner/Spinner'
import classes from './Auth.module.css'

const PURPOSES = {
  signIn: 'signIn',
  signUp: 'signUp'
}

class Auth extends Component {
  state = {
    email: { value: '', valid: false, shouldValidate: false },
    password: { value: '', valid: false, shouldValidate: false },
    formValid: true,
    formPurpose: PURPOSES.signIn
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

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onAuth(
      this.state.email.value,
      this.state.password.value,
      this.state.formPurpose)
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

    let buttonText = ''
    if (this.state.formPurpose === PURPOSES.signIn) {
      buttonText = 'Sign In'
    } else {
      buttonText = 'Sign Up'
    }

    let page = null
    if (this.props.loading) {
      page = <Spinner />
    } else {
      let errorMessage = null
      if (this.props.error) {
        console.log(this.props.error)
        errorMessage = <p>{this.props.error.message}</p>
      }
      page = (
        <>
          {errorMessage}
          <form onSubmit={this.handleSubmit}>
            {inputs}
            <Button disabled={!this.state.formValid} success>
              {buttonText}
            </Button>
          </form>
        </>
      )
    }

    return (
      <div className={classes.Auth}>
        {page}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  error: state.auth.error
})

const mapDispatchToProps = dispatch => {
  const onAuth = (email, password, method) => {
    dispatch(auth(email, password, method))
  }
  return {
    onAuth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
export { PURPOSES }
