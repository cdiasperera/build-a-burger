import React from 'react'

import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

const modal = ({ show, children }) => {
  const appliedClasses = [classes.Modal]

  console.log(classes)
  console.log(show)
  // Hide/show modal, using CSS
  if (show) {
    appliedClasses.push(classes.show)
  } else {
    appliedClasses.push(classes.hide)
  }

  return (
    <>
      <Backdrop show={show} />
      <div className={appliedClasses.join(' ')}>
        {children}
      </div>
    </>
  )
}

export default modal
