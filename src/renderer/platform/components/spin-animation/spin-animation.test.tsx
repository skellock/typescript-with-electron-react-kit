import * as React from 'react'
import { test } from 'ava'
import { create } from 'react-test-renderer'
import { SpinAnimation } from './spin-animation'
import { SpinAnimationStateProps } from './spin-animation-state'

test('render', t => {
  const c = (
    <SpinAnimation>
      <p>hi</p>
    </SpinAnimation>
  )
  t.snapshot(create(c).toJSON())
})

test('willReceiveNewProps', t => {
  const c = (
    <SpinAnimation>
      <p>hi</p>
    </SpinAnimation>
  )
  const instance = create(c)
  const newProps: SpinAnimationStateProps = { duration: 1, revolutions: 2 }
  t.truthy(instance.getInstance().props.children)
  instance.getInstance().componentWillReceiveProps(newProps)
})
