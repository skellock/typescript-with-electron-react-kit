import * as React from 'react'
import { Text } from 'rebass'

export interface TextProps {
  text?: string
  children?: React.ReactNode
  style?: any
}

export function Text(props: TextProps) {
  const { text, children, style, ...rest } = props
  return (
    <Text style={style} {...rest}>
      {children || text}
    </Text>
  )
}
