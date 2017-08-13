import { test } from 'ava'
import * as mockery from 'mockery'
import { stub } from 'sinon'
import { electron, BrowserWindow } from '../test/mock-electron'
import { WindowStateManager } from '../test/mock-window-state-manager'

test.beforeEach(() => mockery.enable({ warnOnUnregistered: false }))
test.afterEach(() => {
  mockery.deregisterAll()
  mockery.disable()
})

test('reads from window state', t => {
  // two step process for the getters :(
  const width = stub()
  const height = stub()
  const x = stub()
  const y = stub()
  stub(WindowStateManager.prototype, 'width').get(width)
  stub(WindowStateManager.prototype, 'height').get(height)
  stub(WindowStateManager.prototype, 'x').get(x)
  stub(WindowStateManager.prototype, 'y').get(y)

  // hijack the 3rd parties
  mockery.registerMock('electron-window-state-manager', WindowStateManager)
  mockery.registerMock('electron', electron)

  // now we can create our window
  require('./main-window').createMainWindow(__dirname)

  // did our mocks get called?
  t.true(width.calledOnce)
  t.true(height.calledOnce)
  t.true(x.calledOnce)
  t.true(y.calledOnce)
})

test('maximizes if told by the window state manager', t => {
  const maximized = stub().returns(true)
  stub(WindowStateManager.prototype, 'maximized').get(maximized)

  mockery.registerMock('electron-window-state-manager', WindowStateManager)
  mockery.registerMock('electron', electron)

  require('./main-window').createMainWindow(__dirname)

  t.true(maximized.calledOnce)
})

test('saves window state', t => {
  const saveState = stub(WindowStateManager.prototype, 'saveState')

  mockery.registerMock('electron-window-state-manager', WindowStateManager)
  mockery.registerMock('electron', electron)

  const window: BrowserWindow = require('./main-window').createMainWindow(__dirname)
  window.emit('close')
  window.emit('move')
  window.emit('resize')

  t.is(saveState.callCount, 3)
})
