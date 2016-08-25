import React from 'react'

function Header ({ bgImg, children }) {
  return (
    <header className='header'>
      <div className='hero hero--dark header__hero section'>
        <img src={require('assets/images/logo.svg')} alt='127 Labs' className='header__logo' />
        { children }
      </div>
      <img src={require('assets/images/caret-down.svg')} alt='Caret Down' className='header__caret-down' />
      <div className='header__slant-left' />
      <div className='header__slant-right' />
    </header>
  )
}

export default Header
