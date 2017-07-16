import * as React from 'react'
import icon from './electron-icon.svg'
import { Text } from '..'

const containerStyle = {
  WebkitAppRegion: 'drag',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}
const imageStyle = { width: 80, height: 80, animation: 'spin360 infinite 5s linear' }
const textStyle = { WebkitAppRegion: 'no-drag', fontSize: '0.6rem' }

export function Logo() {
  return (
    <div style={containerStyle}>
      <img draggable={false} src={icon} style={imageStyle} />
      <Text style={textStyle}>Drag the logo to move the window.</Text>
    </div>
  )
}
