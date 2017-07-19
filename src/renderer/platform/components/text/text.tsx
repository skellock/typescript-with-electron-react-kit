import * as React from 'react'
import { Text } from 'rebass'

export interface TextProps {
  text?: string
  children?: React.ReactNode
  style?: any
}

export function Text(props: TextProps) {
  return (
    <Text {...props}>
      {props.text || props.children}
    </Text>
  )
}
