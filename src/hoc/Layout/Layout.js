import React, { Component } from 'react'

import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import classes from './Layout.module.css'

class Layout extends Component {
  state = {
    showSideDrawer: false
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
