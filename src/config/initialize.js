import React from 'react'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from 'config/configure-store'

export default (Component) =>
  function initialize () {
    const store = configureStore({})
    const history = syncHistoryWithStore(browserHistory, store)

    return (
      <Component
        store={store}
        history={history}
        sendToAnalytics={() => {
          window.ga('send', 'pageview', window.location.pathname)
        }}
      />
    )
  }
