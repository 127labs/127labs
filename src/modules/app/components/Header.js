import React from 'react'
import { Motion, spring } from 'react-motion'

class Header extends React.Component {
  state = {
    layers: [
      {
        image: require('assets/images/parallax-header-layer-0.svg'),
        style: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        },
        step: 15
      },
      {
        image: require('assets/images/parallax-header-layer-1.svg'),
        style: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        },
        step: 10
      },
      {
        image: require('assets/images/parallax-header-layer-2.svg'),
        style: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        },
        step: 5
      }
    ]
  }

  handleMouseMove (e) {
    const sensitivity = 0.02
    const x = sensitivity * e.pageX + (e.currentTarget.clientHeight * 0.1)
    const y = sensitivity * e.pageY + (e.currentTarget.clientWidth * 0.05)

    this.setState((state, props) => {
      return {
        layers: state.layers.map((layer) => ({
          ...layer,
          style: {
            top: y,
            left: x
          }
        }))
      }
    })
  }

  getStyle (index) {
    return Object.keys(this.state.layers[index].style).reduce((acc, key) => {
      acc[key] = spring(this.state.layers[index].style[key], [150, 15])
      return acc
    }, {})
  }

  render () {
    return (
      <header className='header' onMouseMove={(e) => this.handleMouseMove(e)}>
        {
          this.state.layers.map((layer, index) =>
            <Motion
              key={index}
              defaultStyle={layer.style}
              style={this.getStyle(index)}
            >
              {
                (interpolatedStyle) =>
                  <img
                    src={layer.image}
                    className='header__parallax-layer'
                    style={interpolatedStyle}
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
        <div className='header__slant-left' />
        <div className='header__slant-right' />
      </header>
    )
  }
}

export default Header
