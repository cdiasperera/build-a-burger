import React from 'react'

import classes from './Input.module.css'

const Input = ({ label, inputType, isValid, shouldValidate, ...rest }) => {
  let inputElement = null

  let validStateClass = null
  if (shouldValidate) {
    if (isValid) {
      validStateClass = classes.Valid
    } else {
      validStateClass = classes.Invalid
    }
  }

  const props = { className: validStateClass, ...rest }
  switch (inputType) {
    case ('input'):
      inputElement = <input {...props} />
      break
    case ('textarea'):
      inputElement = <textarea {...props} />
      break
    default:
      inputElement = <input {...props} />
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
