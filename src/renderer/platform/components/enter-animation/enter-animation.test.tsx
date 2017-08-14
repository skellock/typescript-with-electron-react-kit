import * as React from 'react'
import { test } from 'ava'
import { create } from 'react-test-renderer'
import { EnterAnimation } from './enter-animation'

test('grow', t => {
  const c = (
    <EnterAnimation animation='grow'>
      <p>hi</p>
    </EnterAnimation>
  )
  t.snapshot(create(c).toJSON())
})

test('slide', t => {
  const c = (
    <EnterAnimation animation='slide'>
      <p>hi</p>
    </EnterAnimation>
  )
  t.snapshot(create(c).toJSON())
})
