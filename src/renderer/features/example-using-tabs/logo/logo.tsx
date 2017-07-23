import * as React from 'react'
import { CSSProperties } from 'react'
import icon from './electron-icon.svg'

const style: CSSProperties = { width: 80, height: 80, animation: 'spin360 infinite 5s linear' }

export function Logo() {
  return <img draggable={false} src={icon} style={style} />
}
