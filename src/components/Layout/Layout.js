import React from 'react'

import classes from './Layout.module.css'

const layout = ({ children }) => {
  return (
    <>
      <div className={classes.toolbar}>
        Toolbar, SideDrawer, Backdrop
      </div>
      <main>
        {children}
      </main>
    </>
  )
}

export default layout
