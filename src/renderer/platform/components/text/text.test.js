const React = require('react')
const { test } = require('ava')
const { create } = require('react-test-renderer')
const { Text } = require('./text')

test('Text can be prop-less.', t => {
  const c = <Text />
  t.snapshot(create(c).toJSON())
})

test('content can be added via a text property', t => {
  const c = <Text text='hi' />
  t.snapshot(create(c).toJSON())
})

test('content can be added via children', t => {
  const c = <Text>hello</Text>
  t.snapshot(create(c).toJSON())
})

test('children have priority over text', t => {
  const c = <Text text='two'>one</Text>
  t.snapshot(create(c).toJSON())
})

test('supports style overrides', t => {
  const c = <Text style={{ fontWeight: 'bold' }}>one</Text>
  t.snapshot(create(c).toJSON())
})
