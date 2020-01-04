import React from 'react'

import classes from './Input.module.css'

const Input = ({ label, inputType, ...rest }) => {
  let inputElement = null
  switch (inputType) {
    case ('input'):
      inputElement = <input {...rest} />
      break
    case ('textarea'):
      inputElement = <textarea {...rest} />
      break
    default:
      inputElement = <input {... rest} />
  }

  return (
    <div className={classes.Input}>
      <div className={classes.inputGroup}>
        <label>
          {label}
        </label>
        {inputElement}
      </div>
    </div>
  )
}

export default Input
