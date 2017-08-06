import * as React from 'react'
import { MotionValue, MotionStates, MotionStateProps } from 'popmotion-react'
import { SpinAnimationStateProps, createSpinStates, next } from './spin-animation-state'

/**
 * Provides a container which will do a barrel roll when clicked.
 */
export class SpinAnimation extends React.PureComponent<SpinAnimationStateProps, {}> {
  animationStates: MotionStates

  componentWillMount() {
    this.animationStates = createSpinStates(this.props)
  }

  componentWillReceiveProps(newProps: SpinAnimationStateProps) {
    this.animationStates = createSpinStates(newProps)
  }

  render() {
    // the view to spin
    // NOTE: This is a function and not a component due to popmotion-react.
    const spinWrapper = (motionState: MotionStateProps) => {
      const props = {
        style: { transform: `rotate(${motionState.v}deg)`, cursor: 'pointer' },
        onClick: next(motionState),
        children: this.props.children,
      }

      return <div {...props} />
    }

    return <MotionValue onStateChange={this.animationStates} children={spinWrapper} />
  }
}
