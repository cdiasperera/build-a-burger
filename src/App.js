import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'

function App () {
  return (
    <BrowserRouter>
      <Layout>
        <Route path='/' exact component={BurgerBuilder} />
        <Route path='/checkout' exact component={Checkout} />
        <Route path='/orders' exact component={Orders} />
      </Layout>
    </BrowserRouter>
  )
}

export default App
