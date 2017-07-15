import * as React from 'react'

export interface TextProps {
  text?: string
  children?: React.ReactNode
}

export function Text(props: TextProps) {
  return (
    <div>{props.text || props.children}</div>
  )
}