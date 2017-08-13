import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Text } from './index'

storiesOf('Text', module).add('default', () => <Text>Hello World!</Text>).add('with children', () =>
  <Text>
    <strong>I am STRONG</strong>
  </Text>,
)
