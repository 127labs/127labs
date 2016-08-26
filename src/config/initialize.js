import React from 'react'
import ReactGA from 'react-ga'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from 'config/configure-store'

export default (Component) =>
  function initialize () {
    const store = configureStore({})
    const history = syncHistoryWithStore(browserHistory, store)
    ReactGA.initialize('UA-56128900-3', {debug: process.env.NODE_ENV === 'development'})

    return (
      <Component
        store={store}
        history={history}
        sendToAnalytics={() => {
          ReactGA.set({page: window.location.pathname})
          ReactGA.pageview(window.location.pathname)
        }}
      />
    )
  }
