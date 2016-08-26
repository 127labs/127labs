import React from 'react'
import Parallax from './Parallax'

function Footer ({ children }) {
  return (
    <footer className='footer'>
      <div className='section flex flex--jc-center flex--ai-center' style={{position: 'relative', zIndex: 2}}>
        {children}
      </div>
      <Parallax />
    </footer>
  )
}

export default Footer
