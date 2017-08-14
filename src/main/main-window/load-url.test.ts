import { test } from 'ava'
import { stub } from 'sinon'
import { loadURL } from './load-url'

test('loads from storybook', t => {
  const loadStub = stub()
  loadURL({ loadURL: loadStub } as any, 'a', true)
  t.true(loadStub.calledWith('http://localhost:6006'))
})

test('loads from electron', t => {
  const loadStub = stub()
  loadURL({ loadURL: loadStub } as any, 'a', false)

  t.true(loadStub.calledWith('file:///a/out/index.html'))
})
