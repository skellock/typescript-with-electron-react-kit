import * as React from 'react'
import dogImage from './fun-dog.jpg'
import { cssProps, colors } from '../../../platform'
import { css } from 'glamor'

const ROOT = cssProps({
  width: 300,
  borderStyle: 'solid',
  borderWidth: 2,
  borderColor: colors.line,
  borderRadius: 4,
})

export function FunDog() {
  return <img draggable={false} src={dogImage} {...css(ROOT)} />
}
