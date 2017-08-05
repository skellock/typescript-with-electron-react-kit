import * as React from 'react'
import dogImage from './fun-dog.jpg'
import { cssProps } from '../../../platform'
import { css } from 'glamor'

const ROOT = cssProps({
  width: 300,
  borderStyle: 'solid',
  borderWidth: 1,
})

export function FunDog() {
  return <img draggable={false} src={dogImage} {...css(ROOT)} />
}
