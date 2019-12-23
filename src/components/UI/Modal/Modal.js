import React, { Component } from 'react'

import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    return this.props.show !== nextProps.show
  }

  render = () => {
    const appliedClasses = [classes.Modal]

    // Hide/show modal, using CSS
    if (this.props.show) {
      appliedClasses.push(classes.show)
    } else {
      appliedClasses.push(classes.hide)
    }
    return (
      <>
        <Backdrop
          show={this.props.show}
          removeBackdrop={this.props.exitCheckout}
        />
        <div className={appliedClasses.join(' ')}>
          {this.props.children}
        </div>
      </>
    )
  }
}

export default Modal
