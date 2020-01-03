import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
function App () {
  return (
    <BrowserRouter>
      <Layout>
        <Route path='/' exact component={BurgerBuilder} />
        <Route path='/checkout' component={Checkout} />
      </Layout>
    </BrowserRouter>
  )
}

export default App
