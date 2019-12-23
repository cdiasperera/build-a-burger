import React from 'react'

import classes from './Backdrop.module.css'

const Backdrop = ({ show, removeBackdrop }) => {
  return (
    show ? <div onClick={removeBackdrop} className={classes.Backdrop} /> : null
  )
}

export default Backdrop
