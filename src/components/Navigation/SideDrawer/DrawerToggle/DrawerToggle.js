import React from 'react'

import classes from './DrawerToggle.module.css'

const DrawerToggle = ({ toggle }) => {
  return (
    <div className={classes.DrawerToggle} onClick={toggle}>
      <div />
      <div />
      <div />
    </div>
  )
}

export default DrawerToggle
