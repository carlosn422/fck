import * as React from 'react'
const AMOUNT = 250
const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight

interface Props {
  className?: string
}

const PALETTE = ['#F8E71C', '#E379F9', '#50E3C2', '#72C3FA', '#F2B599']

const createParticle = (profile, { width, height }, index) => {
  const { random, sin } = Math
  const palette = profile.palette
  return {
    init() {
      this.x = random() * width
      this.y = random() * -0.5 * height
      this.deltaX = random() * -1 + random()
      this.deltaY = 4.5 + random() * 5
      this.color = palette[Math.floor(Math.random() * palette.length)]
      this.radius = 0.5 + random() * 4
      this.opacity = 1
      this.deltaOpacity = -(index / AMOUNT)
      this.tilt = Math.floor(Math.random() * 10) - 10
      this.tiltAngle = Math.random() * 0.07 + 0.1
      this.tiltAngleIncremental = 0.15 * random()
      return this
    }
  }
}

const generateParticles = (profile, amount, bounds) => {
  var particles = new Array()

  while (amount--) {
    let particle = createParticle(profile, bounds, amount)

    particle.init()
    particles.push(particle)
  }

  return particles
}

class Confetti extends React.Component<Props> {
  ctx: any
  canvas: object

  animationId: number

  animate(particles: any) {
    this.animationId = window.requestAnimationFrame(
      this.draw.bind(this, particles)
    )
  }
  draw(particles: any) {
    const ctx = this.ctx
    const width = WIDTH
    const height = HEIGHT

    if (ctx) {
      // Clear the canvas context before updating and animating the particles.
      ctx.clearRect(0, 0, width, height)

      // Updates the particle values before (re) drawing to create an animation on the canvas.
      particles.forEach((particle, index) => {
        const {
          deltaX,
          deltaY,
          color,
          radius,
          opacity,
          deltaOpacity
        } = particle

        // Update particle values before animating.
        particle.x += deltaX
        particle.y += deltaY
        particle.tiltAngle += particle.tiltAngleIncremental * 1.5
        particle.tilt = Math.sin(particle.tiltAngle - index / 3) * 15

        // Style the particles.
        ctx.globalAlpha = particle.opacity

        // Animate the particles.
        ctx.beginPath()

        ctx.lineWidth = particle.radius * 2
        ctx.strokeStyle = particle.color
        ctx.moveTo(particle.x + particle.tilt + particle.radius, particle.y)
        ctx.lineTo(
          particle.x + particle.tilt,
          particle.y + particle.tilt + particle.radius
        )

        ctx.stroke()
        ctx.closePath()

        // Re initialize the particle when it falls out of the view port.
        if (particle.y > height) {
          // particle.init()
        }
      })

      this.animate(particles)
    }
  }

  componentDidMount() {
    const profile = { palette: PALETTE }
    const particles = generateParticles(profile, AMOUNT, {
      width: WIDTH,
      height: HEIGHT
    })

    this.animate(particles)
    setTimeout(() => {
      window.cancelAnimationFrame(this.animationId)
      this.ctx.clearRect(0, 0, WIDTH, HEIGHT)
      const canvasEl = document.querySelector('canvas')
      if (canvasEl !== null) {
        canvasEl.style.display = 'none'
      }
    }, 10000)
  }
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <canvas
        className={`confetti-canvas ${this.props.className}`}
        width={WIDTH}
        height={HEIGHT}
        ref={canvas => {
          if (canvas) {
            this.canvas = canvas
            this.ctx = canvas.getContext('2d')
          }
        }}
      />
    )
  }
}
export default Confetti
