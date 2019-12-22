import React from 'react'

import classes from './Modal.module.css'

const modal = (props) => {
  const appliedClasses = [classes.Modal]

  console.log(classes)
  console.log(props.show)
  // Hide/show modal, using CSS
  if (props.show) {
    appliedClasses.push(classes.show)
  } else {
    appliedClasses.push(classes.hide)
  }

  return (
    <div className={appliedClasses.join(' ')}>
      {props.children}
    </div>
  )
}

export default modal
