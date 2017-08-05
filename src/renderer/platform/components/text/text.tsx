import * as React from 'react'
import { CSSProperties } from 'react'
import { fonts, fontSizes, cssProps } from '../..'
import { css } from 'glamor'

export interface TextProps {
  text?: string
  children?: React.ReactNode
  style?: CSSProperties | CSSProperties[]
}

const STYLE = cssProps({
  fontSize: fontSizes.default,
  fontFamily: fonts.default,
  padding: 0,
  margin: 0,
})

export function Text(props: TextProps) {
  const styleProps = css(STYLE, props.style)
  return (
    <p {...styleProps}>
      {props.children || props.text}
    </p>
  )
}
