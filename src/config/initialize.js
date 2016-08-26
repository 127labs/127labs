import React from 'react'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from 'config/configure-store'

export default (Component) =>
  function initialize () {
    const store = configureStore({})
    const history = syncHistoryWithStore(browserHistory, store)
    window.ga('create', 'UA-56128900-3', 'auto')

    history.listen(function (location) {
      const page = `${location.pathname}${location.search}`

      window.ga('set', 'page', page)
      window.ga('send', 'pageview')

      if (process.env.NODE_ENV !== 'production') {
        console.log('[GA] Sent Page View', page)
      }
    })

    return (
      <Component
        store={store}
        history={history}
      />
    )
  }
