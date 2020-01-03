import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Logo.module.css'
import logoImg from '../../assets/logo512.png'
const Logo = ({ className }) => {
  return (
    <Link to='/'>
      <div className={[className, classes.Logo].join(' ')}>
        <img src={logoImg} alt='logo' />
      </div>
    </Link>
  )
}

export default Logo
