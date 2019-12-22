import React from 'react'

import classes from './Logo.module.css'
import logoImg from '../../assets/logo512.png'
const logo = ({ className }) => {
  return (
    <div className={[className, classes.Logo].join(' ')}>
      <img src={logoImg} alt='logo' />
    </div>
  )
}

export default logo
