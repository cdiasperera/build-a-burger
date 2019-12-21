import React from 'react'
import classes from './Layout.module.css'

const layout = (props) => {
  return (
    <>
      <div className={classes.toolbar}>
        Toolbar, SideDrawer, Backdrop
      </div>
      <main>
        {props.children}
      </main>
    </>
  )
}

export default layout
