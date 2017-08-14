import { test } from 'ava'
import * as mockery from 'mockery'
import { stub } from 'sinon'
import { electron, BrowserWindow } from '../test/mock-electron'
import { WindowStateManager } from '../test/mock-window-state-manager'

test.beforeEach(() => {
  mockery.enable({ warnOnUnregistered: false })
})
test.afterEach.always(() => {
  mockery.deregisterAll()
  mockery.disable()
})

test('mocks have coverage :(', t => {
  const win = new WindowStateManager()
  t.is(win.x, 1)
  t.is(win.y, 2)
  t.is(win.width, 3)
  t.is(win.height, 4)
  t.is(win.maximized, true)
  t.is(win.saveState({}), undefined)

  const bw = new BrowserWindow()
  t.is(bw.getSize(), undefined)
  t.is(bw.loadURL(), undefined)
  t.is(bw.maximize(), undefined)
  t.is(bw.show(), undefined)
  t.is(bw.focus(), undefined)
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
  const maximize = stub(BrowserWindow.prototype, 'maximize')
  require('./main-window').createMainWindow(__dirname)
  maximize.restore()

  t.true(maximized.calledOnce)
  t.true(maximize.calledOnce)
})

test('does not maximize unless told by the window state manager', t => {
  const maximized = stub().returns(false)
  stub(WindowStateManager.prototype, 'maximized').get(maximized)

  mockery.registerMock('electron-window-state-manager', WindowStateManager)
  mockery.registerMock('electron', electron)
  const maximize = stub(BrowserWindow.prototype, 'maximize')
  require('./main-window').createMainWindow(__dirname)
  maximize.restore()

  t.true(maximized.calledOnce)
  t.true(maximize.notCalled)
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

test.cb('show the window after we finish loading + delay', t => {
  mockery.registerMock('electron-window-state-manager', WindowStateManager)
  mockery.registerMock('electron', electron)

  const window: BrowserWindow = require('./main-window').createMainWindow(__dirname, 1)
  const showStub = stub(window, 'show')
  const focusStub = stub(window, 'focus')

  window.webContents.emit('did-finish-load')

  setTimeout(() => {
    t.true(showStub.calledOnce)
    t.true(focusStub.calledOnce)
    t.end()
  }, 2)
})
