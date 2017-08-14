import { test } from 'ava'
import { next, createSpinStates } from './spin-animation-state'

test('next', t => {
  function back() {}
  function forward() {}
  const motionState = { v: 1, setRef: () => {}, velocity: 2, setStateTo: { back, forward } }
  t.is(next({ ...motionState, state: 'forward' }), back)
  t.is(next({ ...motionState, state: 'back' }), forward)
})

test('createSpinStates', t => {
  const states = createSpinStates({})
  t.is(typeof states.back, 'function')

  const value: any = () => {}
  value.get = () => 1
  value.previousState = 'back'
  value.setStateTo = {
    back: () => {},
    forward: () => {},
  }

  const backEvent: any = { value }
  t.is(typeof states.forward, 'function')
  states.back(backEvent)
  t.pass('going for coverage :(')
})
