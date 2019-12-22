import React from 'react'

import classes from './Backdrop.module.css'

const backdrop = ({ show }) => {
  return (
    show ? <div className={classes} /> : null
  )
}

export default backdrop
