import * as React from 'react'
import { Tabs, TabItem } from 'rebass'

export type SampleTabType = 'one' | 'two' | 'three'
export interface SampleTabsProps {
  tab: SampleTabType
  onChangeTab: (tab: SampleTabType) => void
}

const style = { WebkitAppRegion: 'drag' }
const tabStyle = { cursor: 'pointer', WebkitAppRegion: 'no-drag' }

export function SampleTabs(props: SampleTabsProps) {
  return (
    <Tabs px={3} bg="gray1" style={style}>
      <TabItem
        style={tabStyle}
        onClick={() => props.onChangeTab('one')}
        active={props.tab === 'one'}
      >
        Random Dog
      </TabItem>
      <TabItem
        style={tabStyle}
        onClick={() => props.onChangeTab('two')}
        active={props.tab === 'two'}
      >
        Long Content
      </TabItem>
      <TabItem
        style={tabStyle}
        onClick={() => props.onChangeTab('three')}
        active={props.tab === 'three'}
      >
        Empty
      </TabItem>
    </Tabs>
  )
}
