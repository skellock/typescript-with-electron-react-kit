import * as React from 'react'

const icon = require('./electron-icon.svg')
const style = {
  width: 80,
  height: 80,
  marginTop: -80,
  paddingBottom: 20,
  animation: 'spin360 infinite 5s linear'
}

export function Logo() {
  return <img src={icon} style={style} />
}
