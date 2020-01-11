import React from 'react'
import { connect } from 'react-redux'

import NavItem from './NavItem/NavItem'
import { PURPOSES } from '../../../containers/Auth/Auth'

import classes from './NavItems.module.css'

const NavItems = ({ userId }) => {
  let authLinks = null
  if (userId) {
    authLinks = <NavItem link='/logout'>Logout</NavItem>
  } else {
    authLinks = (
      <>
        <NavItem link={'/' + PURPOSES.signIn}>Sign In</NavItem>
        <NavItem link={'/' + PURPOSES.signUp}>Sign Up</NavItem>
      </>
    )
  }

  return (
    <ul className={classes.NavItems}>
      <NavItem link='/'>Burger Builder</NavItem>
      <NavItem link='/orders'>Orders</NavItem>
      {authLinks}
    </ul>
  )
}

const mapStateToProps = state => ({
  userId: state.auth.userId
})

export default connect(mapStateToProps)(NavItems)
