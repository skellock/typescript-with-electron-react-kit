import * as React from 'react'
import { test } from 'ava'
import { create } from 'react-test-renderer'
import { ScrollableContent } from './scrollable-content'

test('has children', t => {
  const c = (
    <ScrollableContent>
      <p>hi</p>
    </ScrollableContent>
  )
  t.snapshot(create(c).toJSON())
})
