import * as React from 'react'
import { Text, Logo, FunDog } from '../platform'
// import * as log from 'electron-log'

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

const textStyle = {
  paddingTop: 20,
  paddingBottom: 20
}

export class App extends React.Component<{}, {}> {

  componentWillMount () {
    // log.debug('example of logging')
  }

  componentDidMount () {
    // log.info('more logging')
  }

  render() {
    return (
      <div style={appStyle}>
        <Logo />
        <Text style={textStyle}>Wake up and smell the electrons.</Text>
        <FunDog />
      </div>
    )
  }
}
