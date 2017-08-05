import * as React from 'react'
import { CSSProperties } from 'react'
import { fonts, fontSizes } from '../..'

export interface TextProps {
  text?: string
  children?: React.ReactNode
  style?: any
}

const ROOT_STYLE: CSSProperties = {
  fontSize: fontSizes.default,
  fontFamily: fonts.default,
  padding: 0,
  margin: 0,
}

export function Text(props: TextProps) {
  const style: CSSProperties = {
    ...ROOT_STYLE,
    ...props.style,
  }
  return (
    <p style={style}>
      {props.children || props.text}
    </p>
  )
}
