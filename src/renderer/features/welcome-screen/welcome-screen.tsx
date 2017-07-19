import * as React from 'react'
import { SampleTabs, SampleTabType } from './sample-tabs'
import { LongTab, DogTab } from '..'
import { Flex } from 'rebass'
import { Header } from './header'

interface WelcomeScreenState {
  tab: SampleTabType
}

export class WelcomeScreen extends React.Component<{}, WelcomeScreenState> {
  state: WelcomeScreenState = {
    tab: 'one'
  }

  setTab = (tab: SampleTabType) => {
    this.setState({ tab })
  }

  render() {
    return (
      <Flex column flex={1}>
        <Header />
        <SampleTabs tab={this.state.tab} onChangeTab={this.setTab} />
        {this.state.tab === 'one' && <DogTab />}
        {this.state.tab === 'two' && <LongTab />}
      </Flex>
    )
  }
}
