import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'
import Auth, { PURPOSES } from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout/Logout'

function App () {
  return (
    <BrowserRouter>
      <Layout>
        <Route path='/' exact component={BurgerBuilder} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/orders' exact component={Orders} />
        <Route
          path={'/' + PURPOSES.signIn} exact
          render={(props) => <Auth {...props} formPurpose={PURPOSES.signIn} />}
        />
        <Route
          path={'/' + PURPOSES.signUp} exact
          render={(props) => <Auth {...props} formPurpose={PURPOSES.signUp} />}
        />
        <Route path='/logout' exact component={Logout} />
      </Layout>
    </BrowserRouter>
  )
}

export default App
