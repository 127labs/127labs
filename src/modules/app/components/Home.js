import React from 'react'
import Header from './Header'

function Home ({ isPinging, $actions }) {
  return (
    <section className='home'>
      <Header bgImg='https://unsplash.it/1920/1080'>
        <h1>Our Best Practices At Your Disposal</h1>
      </Header>
    </section>
  )
}

export default Home
