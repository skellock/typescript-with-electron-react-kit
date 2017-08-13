import { test } from 'ava'
import { stub } from 'sinon'
import { isLinux, isMac, isWindows } from './platform'

const platformStub = stub(process, 'platform')

test.afterEach.always(() => {
  platformStub.restore()
})

test('detects linux', t => {
  platformStub.get(() => 'linux')
  t.true(isLinux())
})

test('detects windows', t => {
  platformStub.get(() => 'win32')
  t.true(isWindows())
})

test('detects mac', t => {
  platformStub.get(() => 'darwin')
  t.true(isMac())
})
