import * as React from 'react'
import { test } from 'ava'
import { create } from 'react-test-renderer'
import { CenteredContent } from './centered-content'

test('has children', t => {
  const c = (
    <CenteredContent>
      <p>hi</p>
    </CenteredContent>
  )
  t.snapshot(create(c).toJSON())
})
