import * as React from 'react'
import { cssProps, animations } from '../../../platform'
import icon from './electron-icon.svg'
import { css } from 'glamor'

const ROOT = cssProps({
  width: 80,
  height: 80,
  animation: `${animations.spin360} infinite 5s linear`,
})

export function Logo() {
  return <img draggable={false} src={icon} {...css(ROOT)} />
}
