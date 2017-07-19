import * as React from 'react'
import dogImage from './fun-dog.jpg'
import { Image } from 'rebass'

const style = { width: 300, borderStyle: 'solid', borderWidth: 1 }

export function FunDog() {
  return <Image draggable={false} src={dogImage} style={style} />
}
