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

  handleMouseMove ({ currentTarget: target, pageY: y, pageX: x }) {
    const width = target.clientWidth / 2
    const height = target.clientHeight / 2

    this.setState((state, props) => {
      return {
        layers: state.layers.map((layer) => ({
          ...layer,
          style: this.layerStyleReducer({
            layer,
            height,
            width,
            x,
            y
          })
        }))
      }
    })
  }

  layerStyleReducer ({ layer, width, height, x, y }) {
    return Object.keys(layer.style).reduce((acc, key) => {
      switch (key) {
        case 'top':
          if (y < height) {
            acc.top = layer.step
          } else {
            acc.top = 0
          }
          return acc

        case 'bottom':
          if (y > height) {
            acc.bottom = layer.step
          } else {
            acc.bottom = 0
          }
          return acc

        case 'left':
          if (x < width) {
            acc.left = layer.step
          } else {
            acc.left = 0
          }
          return acc

        case 'right':
          if (x > width) {
            acc.right = layer.step
          } else {
            acc.right = 0
          }
          return acc
      }
    }, {...layer.style})
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
