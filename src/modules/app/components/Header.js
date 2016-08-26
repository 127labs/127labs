import React from 'react'
import { Motion, spring } from 'react-motion'

class Header extends React.Component {
  state = {
    layers: [
      {
        image: require('assets/images/alt/parallax-header-0.svg'),
        xSensitivity: -0.1,
        ySensitivity: -0.1,
        style: {
          x: spring(0),
          y: spring(0)
        }
      },
      {
        image: require('assets/images/alt/parallax-header-1.svg'),
        xSensitivity: -0.085,
        ySensitivity: -0.085,
        style: {
          x: spring(0),
          y: spring(0)
        }
      },
      {
        image: require('assets/images/alt/parallax-header-2.svg'),
        xSensitivity: -0.045,
        ySensitivity: -0.045,
        style: {
          x: spring(0),
          y: spring(0)
        }
      },
      {
        image: require('assets/images/alt/parallax-header-3.svg'),
        xSensitivity: -0.065,
        ySensitivity: -0.065,
        style: {
          x: spring(0),
          y: spring(0)
        }
      },
      {
        image: require('assets/images/alt/parallax-header-4.svg'),
        xSensitivity: -0.025,
        ySensitivity: -0.025,
        style: {
          x: spring(0),
          y: spring(0)
        }
      }
    ]
  }

  componentDidMount () {
    window.addEventListener('mousemove', (e) => this.handleMouseMove(e))
  }

  componentWillUnmount () {
    window.removeEventListener('mousemove', (e) => this.handleMouseMove(e))
  }

  handleMouseMove ({ x, y }) {
    x -= window.innerWidth / 2
    y -= window.innerHeight / 2

    this.setState((state, props) => ({
      layers: state.layers.map((layer) => ({
        ...layer,
        style: {
          x: spring(x * layer.xSensitivity),
          y: spring(y * layer.ySensitivity)
        }
      }))
    }))
  }

  render () {
    return (
      <header className='header'>
        {
          this.state.layers.map((layer, index) =>
            <Motion
              key={index}
              style={layer.style}
            >
              {
                ({ x, y }) =>
                  <div
                    className='header__parallax-layer'
                    style={{
                      backgroundImage: `url(${layer.image})`,
                      transform: `translate3d(${x}px, ${y}px, 0px)`,
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden'
                    }}
                  />
              }
            </Motion>
          )
        }
        <div className='hero hero--dark header__hero section'>
          <img src={require('assets/images/logo.svg')} alt='127 Labs' className='header__logo' />
          { this.props.children }
        </div>
        <img src={require('assets/images/caret-down.svg')} alt='Caret Down' className='header__caret-down' />
        <div className='slant slant--left' />
        <div className='slant slant--right' />
      </header>
    )
  }
}

export default Header
