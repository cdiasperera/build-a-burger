import React, { Component } from 'react'

import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import classes from './Layout.module.css'

class Layout extends Component {
  state = {
    showSideDrawer: true
  }

  toggleDrawer = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }

  render = () => {
    return (
      <>
        <Toolbar toggleDrawer={this.toggleDrawer} />
        <SideDrawer
          show={this.state.showSideDrawer}
          toggle={this.toggleDrawer}
        />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </>
    )
  }
}

export default Layout
