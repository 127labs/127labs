import React from 'react'
import Header from './Header'

function Home ({ isPinging, $actions }) {
  return (
    <div className='home'>
      <Header>
        <h1>Our Best Practices At Your Disposal</h1>
      </Header>
    </div>
  )
}

export default Home
