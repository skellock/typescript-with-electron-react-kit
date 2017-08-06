import { StateChangeEvent, MotionStates, MotionStateProps } from 'popmotion-react'
import { tween } from 'popmotion'

const DEFAULT_DURATION = 500
const DEFAULT_REVOLUTIONS = 1

export interface SpinAnimationStateProps {
  /** How long does the animation take in milliseconds. (default: 1000) */
  duration?: number
  /** How many spins. (default: 1) */
  revolutions?: number
}

/**
 * Creates the animation states.
 */
export function createSpinStates(props: SpinAnimationStateProps): MotionStates {
  const duration = props.duration || DEFAULT_DURATION
  const forwardAngle = 360 * (props.revolutions || DEFAULT_REVOLUTIONS)

  // a helper function to create the 2 states
  const createState = (to: number) => (e: StateChangeEvent) =>
    tween({
      from: e.value.get(),
      to,
      duration,
      onUpdate: e.value,
    }).start()

  return {
    forward: createState(forwardAngle),
    back: createState(0),
  }
}

/**
 * The function that goes to the next state.
 *
 * @param current The current state.
 */
export function next(current: MotionStateProps) {
  return current.state === 'forward' ? current.setStateTo.back : current.setStateTo.forward
}
