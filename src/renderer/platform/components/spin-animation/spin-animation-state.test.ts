import { next, createSpinStates } from './spin-animation-state'

test('next', () => {
  function back() {}
  function forward() {}
  const motionState = { v: 1, setRef: () => {}, velocity: 2, setStateTo: { back, forward } }
  expect(next({ ...motionState, state: 'forward' })).toBe(back)
  expect(next({ ...motionState, state: 'back' })).toBe(forward)
})

test('createSpinStates', () => {
  const states = createSpinStates({})
  expect(typeof states.forward).toBe('function')
  expect(typeof states.back).toBe('function')

  const forwardResults: any = states.forward({ value: { get: () => 1 } } as any)
  expect(forwardResults.current).toBe(1)

  const backResults: any = states.back({ value: { get: () => 1 } } as any)
  expect(backResults.current).toBe(1)

  const value: any = () => {}
  value.get = () => 1
  value.previousState = 'back'
  value.setStateTo = {
    back: () => {},
    forward: () => {},
  }

  const backEvent: any = { value }
  expect(typeof states.forward).toBe('function')
  states.back(backEvent)
})
