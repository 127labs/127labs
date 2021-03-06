import React from 'react'
import { Motion, spring } from 'react-motion'

class Parallax extends React.PureComponent {
  state = {
    layers: [
      {
        image: require('assets/images/parallax-header-0.svg'),
        xSensitivity: -0.1,
        ySensitivity: -0.1,
        style: {
          x: spring(0),
          y: spring(0)
        }
      },
      {
        image: require('assets/images/parallax-header-1.svg'),
        xSensitivity: -0.085,
        ySensitivity: -0.085,
        style: {
          x: spring(0),
          y: spring(0)
        }
      },
      {
        image: require('assets/images/parallax-header-2.svg'),
        xSensitivity: -0.045,
        ySensitivity: -0.045,
        style: {
          x: spring(0),
          y: spring(0)
        }
      },
      {
        image: require('assets/images/parallax-header-3.svg'),
        xSensitivity: -0.065,
        ySensitivity: -0.065,
        style: {
          x: spring(0),
          y: spring(0)
        }
      },
      {
        image: require('assets/images/parallax-header-4.svg'),
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
    window.addEventListener('touchmove', (e) => this.handleTouchMove(e))
  }

  componentWillUnmount () {
    window.removeEventListener('mousemove', (e) => this.handleMouseMove(e))
    window.removeEventListener('touchmove', (e) => this.handleTouchMove(e))
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

  handleTouchMove ({ touches }) {
    this.handleMouseMove({ x: touches[0].pageX, y: touches[0].pageY })
  }

  render () {
    return (
      <section className='parallax'>
        {
          this.state.layers.map((layer, index) =>
            <Motion
              key={index}
              style={layer.style}
            >
              {
                ({ x, y }) =>
                  <div
                    className='parallax__layer'
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
      </section>
    )
  }
}

export default Parallax
