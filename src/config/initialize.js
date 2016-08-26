import React from 'react'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from 'config/configure-store'

export default (Component) =>
  function initialize () {
    const store = configureStore({})
    const history = syncHistoryWithStore(browserHistory, store)

    history.listen(function (location) {
      window.ga('send', 'pageview', location.pathname)
      if (process.env.NODE_ENV !== 'production') {
        console.log('[GA] Sent Page View', location.pathname)
      }
    })

    return (
      <Component
        store={store}
        history={history}
      />
    )
  }
