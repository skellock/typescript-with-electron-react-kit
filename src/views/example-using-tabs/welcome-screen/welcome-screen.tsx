import * as React from "react"
import { SampleTabs, SampleTabType } from "./sample-tabs"
import { LongTab } from "../long-tab"
import { DogTab } from "../dog-tab"
import { styles, cssProps } from "../../theme"
import Store = require("electron-store")
import { css } from "glamor"

const HIDDEN = cssProps({
  display: "none",
})

// a sample store
const store = new Store()

interface WelcomeScreenState {
  tab: SampleTabType
}

export class WelcomeScreen extends React.Component<{}, WelcomeScreenState> {
  state: WelcomeScreenState = {
    tab: "one",
  }

  componentDidMount() {
    // grab the persisted tab if we have one
    const tab = store.get("tab") || "one"
    this.setState({ tab })
  }

  setTab = (tab: SampleTabType) => {
    // persist the store... pretty trivial example, but ya, it's that easy.
    // Probably not the best idea to hit disk everytime you change a tab, but
    // if you're gunning for a prototype, everything is fair game.
    store.set("tab", tab)
    this.setState({ tab })
  }

  render() {
    return (
      <div id="WelcomeScreen" {...css(styles.column, styles.flex1)}>
        <SampleTabs tab={this.state.tab} onChangeTab={this.setTab} />
        <DogTab style={this.state.tab !== "one" && HIDDEN} />
        <LongTab style={this.state.tab !== "two" && HIDDEN} />
      </div>
    )
  }
}
