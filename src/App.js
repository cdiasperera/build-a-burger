import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'
import Auth from './containers/Auth/Auth'

function App () {
  return (
    <BrowserRouter>
      <Layout>
        <Route path='/' exact component={BurgerBuilder} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/orders' exact component={Orders} />
        <Route path='/Auth' exact component={Auth} />
      </Layout>
    </BrowserRouter>
  )
}

export default App
