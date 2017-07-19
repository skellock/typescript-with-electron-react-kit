import * as React from 'react'
import { theme } from '../platform'
import { Provider } from 'rebass'
import { WelcomeScreen } from '../features'

// this is in place to claim 100% of the viewport and not scroll.
const rootStyle: React.CSSProperties = {
  overflow: 'hidden',
  height: '100vh',
  display: 'flex'
}

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider theme={theme}>
        <div style={rootStyle}>
          <WelcomeScreen />
        </div>
      </Provider>
    )
  }
}
