import { test } from 'ava'
import { stub } from 'sinon'
import * as mockery from 'mockery'

const platformStub = stub(process, 'platform')

test.beforeEach(() => {
  mockery.enable({ warnOnUnregistered: false })
})
test.afterEach.always(() => {
  mockery.deregisterAll()
  mockery.disable()
  platformStub.restore()
})

test('saves window state', t => {
  const bindStub = stub()
  const unbindStub = stub()

  mockery.registerMock('mousetrap', {
    bind: bindStub,
    unbind: unbindStub,
  })
  const { bindKey, unbindKey } = require('./keyboard')
  bindKey('shift+1', bindStub, 'keyup')
  unbindKey('shift+2', 'keyup')

  t.true(bindStub.calledWith('shift+1', bindStub, 'keyup'))
  t.true(unbindStub.calledWith('shift+2', 'keyup'))
})

test('control/command on a mac', t => {
  platformStub.get(() => 'darwin')
  delete require.cache[require.resolve('./keyboard')]
  const { commandOrControlKey } = require('./keyboard')
  t.is(commandOrControlKey, 'command')
})

test('control/command on a non-mac', t => {
  platformStub.get(() => 'linux')

  // ugh, kill me.
  delete require.cache[require.resolve('./keyboard')]

  const { commandOrControlKey } = require('./keyboard')
  t.is(commandOrControlKey, 'ctrl')
})
