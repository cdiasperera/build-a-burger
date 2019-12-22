import React from 'react'
import classes from './BuildControl.module.css'

const INCREMENT = 1
const DECREMENT = -1

const buildControl = ({ disabledDecrement, label, handleAdjustment }) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>
        {label}
      </div>
      <button
        onClick={handleAdjustment.bind(this, DECREMENT)}
        className={classes.Less}
        disabled={disabledDecrement}
      >
          -
      </button>
      <button
        onClick={handleAdjustment.bind(this, INCREMENT)}
        className={classes.More}
      >
        +
      </button>
    </div>
  )
}

export default buildControl
