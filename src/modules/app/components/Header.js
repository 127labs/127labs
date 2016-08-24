import React from 'react'

function Header ({ bgImg, children }) {
  return (
    <header className='header'>
      <div className='hero header__hero' style={{backgroundImage: `url(${bgImg})`}}>
        { children }
      </div>
    </header>
  )
}

export default Header
