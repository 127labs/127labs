import React from 'react'
import { Router } from 'react-router'
import routes from 'routes'
import initialize from './initialize'
import Providers from './Providers'

function App ({ store, history }) {
  return (
    <Providers store={store}>
      <Router history={history} routes={routes} />
    </Providers>
  )
}

export default initialize(App)
