import * as React from 'react'
import { test } from 'ava'
import { create } from 'react-test-renderer'
import { Tab } from './tab'

test('active', t => {
  const c = <Tab active text='tabby' onClick={() => true} />
  t.snapshot(create(c).toJSON())
})

test('inactive', t => {
  const c = <Tab text='tabby' onClick={() => true} />
  t.snapshot(create(c).toJSON())
})
