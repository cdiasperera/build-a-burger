import React from 'react'
import classes from './BuildControl.module.css'

const INCREMENT = 1
const DECREMENT = -1

const buildControl = (props) => {
  let disabledDecrement = false
  if (props.disabledDecrement) {
    disabledDecrement = true
  }

  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>
        {props.label}
      </div>
      <button
        onClick={props.handleAdjustment.bind(this, DECREMENT)}
        className={classes.Less}
        disabled={disabledDecrement}
      >
          -
      </button>
      <button
        onClick={props.handleAdjustment.bind(this, INCREMENT)}
        className={classes.More}
      >
        +
      </button>
    </div>
  )
}

export default buildControl
