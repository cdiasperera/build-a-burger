import React from 'react'

import classes from './Button.module.css'

const Button = ({ onClick, children, success }) => {
  let className
  if (success) {
    className = [classes.Button, classes.Success].join(' ')
  } else {
    className = [classes.Button, classes.Danger].join(' ')
  }
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
