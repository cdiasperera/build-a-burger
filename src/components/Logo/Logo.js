import React from 'react'

import classes from './Logo.module.css'
import logoImg from '../../assets/logo512.png'
const logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logoImg} alt='logo' />
    </div>
  )
}

export default logo
