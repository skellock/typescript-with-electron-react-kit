import { test } from 'ava'
import * as mockery from 'mockery'
import { stub } from 'sinon'
import { electron, BrowserWindow } from '../test/mock-electron'
import { WindowStateManager } from '../test/mock-window-state-manager'

test.beforeEach(() => {
  mockery.enable({ warnOnUnregistered: false })
})

test.after.always(() => mockery.disable())

test('reads from the window state manager', t => {
  // stub the getters of window state manager
  const width = stub()
  const height = stub()
  const x = stub()
  const y = stub()

  // stubbed this one with a value to drive thru a branch in that code
  const maximized = stub().returns(true)

  // override the getters of the window state manager
  stub(WindowStateManager.prototype, 'width').get(width)
  stub(WindowStateManager.prototype, 'height').get(height)
  stub(WindowStateManager.prototype, 'x').get(x)
  stub(WindowStateManager.prototype, 'y').get(y)
  stub(WindowStateManager.prototype, 'maximized').get(maximized)

  const saveState = stub(WindowStateManager.prototype, 'saveState')

  // mock up the libraries
  mockery.registerMock('electron-window-state-manager', WindowStateManager)
  mockery.registerMock('electron', { ...electron, BrowserWindow })

  // now bring in our library
  const window: BrowserWindow = require('./main-window').createMainWindow(__dirname)

  // window state manager mocks all fired?
  t.true(maximized.calledOnce)
  t.true(width.calledOnce)
  t.true(height.calledOnce)
  t.true(x.calledOnce)
  t.true(y.calledOnce)
  t.true(maximized.calledOnce)

  // manually trigger the WindowStateManager to save on the known events
  window.emit('close')
  window.emit('move')
  window.emit('resize')
  t.is(saveState.callCount, 3)
})
