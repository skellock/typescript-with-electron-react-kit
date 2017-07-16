import * as React from 'react'
import icon from './electron-icon.svg'

const style = {
  width: 80,
  height: 80,
  animation: 'spin360 infinite 5s linear'
}

export function Logo() {
  return <img src={icon} style={style} />
}
