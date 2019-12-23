import React from 'react'

import NavItems from '../NavItems/NavItems'
import Logo from '../../Logo/Logo'
import Backdrop from '../../UI/Backdrop/Backdrop'
import classes from './SideDrawer.module.css'

const SideDrawer = ({ show, toggle }) => {
  // CSS class that positions the sideDrawer out of frame (or not)
  let locationClass = null
  if (show) {
    locationClass = classes.Open
  } else {
    locationClass = classes.Close
  }

  return (
    <>
      <Backdrop show={show} removeBackdrop={toggle} />
      <div className={[classes.SideDrawer, locationClass].join(' ')}>
        <div>
          <Logo className={classes.Logo} />
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    </>
  )
}

export default SideDrawer
