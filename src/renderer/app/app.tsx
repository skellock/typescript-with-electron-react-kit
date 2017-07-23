import * as React from 'react'
import { CSSProperties } from 'react'
import { WelcomeScreen } from '../features'

// this is in place to claim 100% of the viewport and not scroll.
const rootStyle: CSSProperties = { overflow: 'hidden', height: '100vh', display: 'flex' }

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <div style={rootStyle}>
        <WelcomeScreen />
      </div>
    )
  }
}
