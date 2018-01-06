import * as React from "react"
import { MotionValue, MotionStateProps, MotionStates } from "popmotion-react"
import { tween } from "popmotion"

const DEFAULT_DURATION = 500
const DEFAULT_REVOLUTIONS = 1

export interface SpinAnimationProps {
  duration?: number
  revolutions?: number
}

/**
 * Provides a container which will do a barrel roll when clicked.
 */
export class SpinAnimation extends React.PureComponent<SpinAnimationProps, {}> {
  render() {
    const duration = this.props.duration || DEFAULT_DURATION
    const forwardAngle = 360 * (this.props.revolutions || DEFAULT_REVOLUTIONS)

    // istanbul ignore next
    const motionStates: MotionStates = {
      on: ({ value }) => tween({ from: value.get(), to: forwardAngle, duration }).start(value),
      off: ({ value }) => tween({ from: value.get(), to: 0, duration }).start(value),
    }

    return (
      <MotionValue onStateChange={motionStates}>
        {(motionState: MotionStateProps) => (
          <div
            style={{ transform: `rotate(${motionState.v}deg)`, cursor: "pointer" }}
            onClick={
              // istanbul ignore next
              motionState.state === "on" ? motionState.setStateTo.off : motionState.setStateTo.on
            }
          >
            {this.props.children}
          </div>
        )}
      </MotionValue>
    )
  }
}
