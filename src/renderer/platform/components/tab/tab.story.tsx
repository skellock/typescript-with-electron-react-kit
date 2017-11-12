import * as React from 'react'
import { StorybookStory as Story, StorybookGroup as Group } from '../storybook'

import { storiesOf } from '@storybook/react'
import { Tab } from './index'
import { Value } from 'react-powerplug'

storiesOf('Tab', module).add('Tab', () => (
  <Story>
    <Group title='inactive'>
      <Value initial='three'>
        {({ value, setValue }) => (
          <div style={{ flexDirection: 'row', display: 'flex' }}>
            <Tab text='One' active={value === 'one'} onClick={() => setValue('one')} />
            <Tab text='Two' active={value === 'two'} onClick={() => setValue('two')} />
            <Tab text='Three' active={value === 'three'} onClick={() => setValue('three')} />
            <Tab text='Four' active={value === 'four'} onClick={() => setValue('four')} />
          </div>
        )}
      </Value>
    </Group>
  </Story>
))
