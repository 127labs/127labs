import React from 'react'

function Header ({ bgImg, children }) {
  return (
    <header className='header'>
      <img src={require('assets/images/parallax-header-layer-0.svg')} className='header__parallax-layer header__parallax-layer--0'/>
      <img src={require('assets/images/parallax-header-layer-1.svg')} className='header__parallax-layer header__parallax-layer--1'/>
      <img src={require('assets/images/parallax-header-layer-2.svg')} className='header__parallax-layer header__parallax-layer--2'/>
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
