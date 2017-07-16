import * as React from 'react'
import dogImage from './fun-dog.jpg'

const style = {
  width: 200,
  borderStyle: 'solid',
  borderWidth: 4,
  borderColor: 'white'
}

export function FunDog() {
  return (
    <img
      draggable={false}
      src={dogImage}
      style={style}
      alt="Photo by Braydon Anderson on Unsplash"
    />
  )
}
