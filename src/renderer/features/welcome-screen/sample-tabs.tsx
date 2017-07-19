import * as React from 'react'
import { Tabs, TabItem } from 'rebass'
import { bindKey, unbindKey } from '../../platform'

export type SampleTabType = 'one' | 'two' | 'three'

export interface SampleTabsProps {
  tab: SampleTabType
  onChangeTab: (tab: SampleTabType) => void
}

const style = { WebkitAppRegion: 'drag' }
const tabStyle = { cursor: 'pointer', WebkitAppRegion: 'no-drag' }

export class SampleTabs extends React.PureComponent<SampleTabsProps, {}> {
  tab1 = () => this.props.onChangeTab('one')
  tab2 = () => this.props.onChangeTab('two')
  tab3 = () => this.props.onChangeTab('three')

  componentDidMount() {
    bindKey('command+1', () => this.tab1())
    bindKey('command+2', () => this.tab2())
    bindKey('command+3', () => this.tab3())
  }

  componentWillUnmount() {
    unbindKey('command+1')
    unbindKey('command+2')
    unbindKey('command+3')
  }

  render() {
    const isTab1 = this.props.tab === 'one'
    const isTab2 = this.props.tab === 'two'
    const isTab3 = this.props.tab === 'three'
    return (
      <Tabs px={3} bg="gray1" style={style}>
        <TabItem style={tabStyle} onClick={() => this.tab1()} active={isTab1}>
          Random Dog
        </TabItem>
        <TabItem style={tabStyle} onClick={() => this.tab2()} active={isTab2}>
          Long Content
        </TabItem>
        <TabItem style={tabStyle} onClick={() => this.tab3()} active={isTab3}>
          Empty
        </TabItem>
      </Tabs>
    )
  }
}
