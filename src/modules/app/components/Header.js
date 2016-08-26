import React from 'react'
import Parallax from './Parallax'

function Header ({ children }) {
  return (
    <header className='header'>
      <div className='hero hero--dark header__hero section'>
        <img src={require('assets/images/logo.svg')} alt='127 Labs' className='header__logo' />
        { children }
      </div>
      <img src={require('assets/images/caret-down.svg')} alt='Caret Down' className='header__caret-down' />
      <Parallax />
      <div className='slant slant--left' />
      <div className='slant slant--right' />
    </header>
  )
}

export default Header
