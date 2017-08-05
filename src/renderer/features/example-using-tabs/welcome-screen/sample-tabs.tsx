import * as React from 'react'
import {
  Tab,
  bindKey,
  unbindKey,
  spacing,
  colors,
  styles,
  cssProps,
  commandOrControlKey,
} from '../../../platform'
import { css, compose } from 'glamor'

export type SampleTabType = 'one' | 'two' | 'three'

export interface SampleTabsProps {
  tab: SampleTabType
  onChangeTab: (tab: SampleTabType) => void
}

const KEY_1 = `${commandOrControlKey}+1`
const KEY_2 = `${commandOrControlKey}+2`
const KEY_3 = `${commandOrControlKey}+3`

const ROOT = compose(
  styles.row,
  cssProps({
    paddingLeft: spacing.medium,
    paddingRight: spacing.medium,
    backgroundColor: colors.headerBg,
  }),
)

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
      <div {...css(ROOT)}>
        <Tab onClick={this.changeTab1} active={tab === 'one'} text='Random Dog' />
        <Tab onClick={this.changeTab2} active={tab === 'two'} text='Long Content' />
        <Tab onClick={this.changeTab3} active={tab === 'three'} text='Empty' />
      </div>
    )
  }
}
