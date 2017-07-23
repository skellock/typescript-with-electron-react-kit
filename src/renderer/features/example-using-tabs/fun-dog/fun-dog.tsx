import * as React from 'react'
import dogImage from './fun-dog.jpg'

const style = { width: 300, borderStyle: 'solid', borderWidth: 1 }

export function FunDog() {
  return <img draggable={false} src={dogImage} style={style} />
}
