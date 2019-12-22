import React from 'react'

import Toolbar from '../Navigation/Toolbar/Toolbar'

import classes from './Layout.module.css'

const layout = ({ children }) => {
  return (
    <>
      <Toolbar />
      <main className={classes.Content}>
        {children}
      </main>
    </>
  )
}

export default layout
