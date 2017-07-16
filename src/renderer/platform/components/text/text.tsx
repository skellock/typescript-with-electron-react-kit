import * as React from 'react'

export interface TextProps {
  text?: string
  children?: React.ReactNode
  style?: any
}

export function Text(props: TextProps) {
  return (
    <div style={props.style}>{props.text || props.children}</div>
  )
}