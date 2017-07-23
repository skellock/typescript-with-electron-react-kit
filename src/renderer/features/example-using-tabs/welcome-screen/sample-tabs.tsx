import * as React from 'react'
import { CSSProperties } from 'react'
import { Tab, bindKey, unbindKey, spacing, colors } from '../../../platform'
import { isMac } from '../../../../shared'

export type SampleTabType = 'one' | 'two' | 'three'

export interface SampleTabsProps {
  tab: SampleTabType
  onChangeTab: (tab: SampleTabType) => void
}

const commandOrControl = isMac ? 'command' : 'ctrl'
const KEY_1 = `${commandOrControl}+1`
const KEY_2 = `${commandOrControl}+2`
const KEY_3 = `${commandOrControl}+3`

const ROOT_STYLE: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  WebkitAppRegion: 'drag',
  paddingLeft: spacing.medium,
  paddingRight: spacing.medium,
  backgroundColor: colors.headerBg
}

export class SampleTabs extends React.PureComponent<SampleTabsProps, {}> {
  changeTab1 = () => this.props.onChangeTab('one')
  changeTab2 = () => this.props.onChangeTab('two')
  changeTab3 = () => this.props.onChangeTab('three')

  componentDidMount() {
    bindKey(KEY_1, this.changeTab1)
    bindKey(KEY_2, this.changeTab2)
    bindKey(KEY_3, this.changeTab3)
  }

  componentWillUnmount() {
    unbindKey(KEY_1)
    unbindKey(KEY_2)
    unbindKey(KEY_3)
  }

  render() {
    const { tab } = this.props
    return (
      <div style={ROOT_STYLE}>
        <Tab first onClick={this.changeTab1} active={tab === 'one'} text="Random Dog" />
        <Tab onClick={this.changeTab2} active={tab === 'two'} text="Long Content" />
        <Tab onClick={this.changeTab3} active={tab === 'three'} text="Empty" />
      </div>
    )
  }
}
