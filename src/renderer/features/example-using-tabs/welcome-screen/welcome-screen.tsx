import * as React from 'react'
import { SampleTabs, SampleTabType } from './sample-tabs'
import { LongTab } from '../long-tab'
import { DogTab } from '../dog-tab'
import { Header } from '../header'
import { styles } from '../../../platform'
import Store = require('electron-store')
import { css } from 'glamor'

// a sample store
const store = new Store()

interface WelcomeScreenState {
  tab: SampleTabType
}

export class WelcomeScreen extends React.Component<{}, WelcomeScreenState> {
  state: WelcomeScreenState = {
    tab: 'one',
  }

  componentDidMount() {
    // grab the persisted tab if we have one
    const tab = store.get('tab') || 'one'
    this.setState({ tab })
  }

  setTab = (tab: SampleTabType) => {
    // persist the store... pretty trivial example, but ya, it's that easy.
    // Probably not the best idea to hit disk everytime you change a tab, but
    // if you're gunning for a prototype, everything is fair game.
    store.set('tab', tab)
    this.setState({ tab })
  }

  render() {
    return (
      <div id='WelcomeScreen' {...css(styles.column, styles.flex1)}>
        <Header />
        <SampleTabs tab={this.state.tab} onChangeTab={this.setTab} />
        {this.state.tab === 'one' && <DogTab />}
        {this.state.tab === 'two' && <LongTab />}
      </div>
    )
  }
}
