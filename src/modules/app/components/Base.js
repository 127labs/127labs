import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Base ({ children }) {
  return (
    <main className='main'>
      <Header>
        <h1>Our Best Practices At Your Disposal</h1>
      </Header>
      {children}
      <Footer>
        <a href='#' className='btn btn--outline-light text--uppercase'>Send Us An Inquiry</a>
      </Footer>
    </main>
  )
}

export default Base
