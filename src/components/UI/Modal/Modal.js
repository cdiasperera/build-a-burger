import React from 'react'

import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

const modal = ({ show, children, exitCheckout }) => {
  const appliedClasses = [classes.Modal]

  // Hide/show modal, using CSS
  if (show) {
    appliedClasses.push(classes.show)
  } else {
    appliedClasses.push(classes.hide)
  }

  return (
    <>
      <Backdrop show={show} removeBackdrop={exitCheckout} />
      <div className={appliedClasses.join(' ')}>
        {children}
      </div>
    </>
  )
}

export default modal
