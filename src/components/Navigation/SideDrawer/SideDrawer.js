import React from 'react'

import NavItems from '../NavItems/NavItems'
import Logo from '../../Logo/Logo'

import classes from './SideDrawer.module.css'

const sideDrawer = () => {
  return (
    <div className={classes.SideDrawer}>
      <div>
        <Logo className={classes.Logo} />
      </div>
      <nav>
        <NavItems />
      </nav>
    </div>
  )
}

export default sideDrawer
