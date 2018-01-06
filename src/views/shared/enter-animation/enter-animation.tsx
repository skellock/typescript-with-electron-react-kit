import * as React from "react"
import { cssProps } from "../../theme"
import { css } from "glamor"

interface EnterAnimationState {
  mounted?: boolean
}

export interface EnterAnimationProps {
  children?: React.ReactNode
  /** the type of animation */
  animation?: "grow" | "slide"
  /** how long to wait in milliseconds before starting */
  delay?: number
  /** how fast to complete the animation in milliseconds */
  speed?: number
  /** how far vertically to slide */
  y?: number
}

const DEFAULT_SPEED = 250
const DEFAULT_DELAY = 0

const SCALE_FROM = `scale(0.01, 0.01)`

const FINISH = cssProps({ transform: `translate(0, 0) scale(1, 1)` })

export class EnterAnimation extends React.Component<EnterAnimationProps, EnterAnimationState> {
  state: EnterAnimationState = {}

  // istanbul ignore next
  componentDidMount() {
    setTimeout(() => this.setState({ mounted: true }), 1)
  }

  render() {
    // values
    const { mounted } = this.state
    const { speed = DEFAULT_SPEED, delay = DEFAULT_DELAY, animation, y = 0 } = this.props

    // css properties
    let transform: string

    switch (animation) {
      case "slide":
        transform = `translate(0, ${y}px)`
        break

      // grow
      default:
        transform = SCALE_FROM
        break
    }

    const transition = `transform ${speed}ms ${delay}ms`

    // style props
    const starting = css(cssProps({ transform, transition }))
    // istanbul ignore next
    const finishing = css(mounted && FINISH)

    return (
      <div {...starting} {...finishing}>
        {this.props.children}
      </div>
    )
  }
}
