import * as React from 'react'
// Just until this ships:
// https://github.com/fuse-box/fuse-box/pull/672
// 
// then we can drop the '* as'
import * as icon from './electron-icon.svg'

const style = {
  width: 80,
  height: 80,
  animation: 'spin360 infinite 5s linear'
}

export function Logo() {
  return <img src={icon} style={style} />
}
