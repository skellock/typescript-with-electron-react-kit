import * as React from 'react'
import { Text, Logo } from '../platform'

const appStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100vw',
  overflow: 'hidden',
  backgroundColor: 'rebeccapurple',
  color: 'white',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: "'Avenir Next', sans-serif",
  fontSize: '1.5rem',
  userSelect: 'none',
  cursor: 'default'
}

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <div style={appStyle}>
        <Logo />
        <Text>Wake up and smell the electrons.</Text>
      </div>
    )
  }
}
