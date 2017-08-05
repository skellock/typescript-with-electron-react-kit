import * as React from 'react'
import { CSSProperties } from 'react'
import { spacing } from '../..'

export interface ScrollableContentProps {
  children: React.ReactNode
}

const style: CSSProperties = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  padding: spacing.medium,
  overflowY: 'scroll',
}

export function ScrollableContent(props: ScrollableContentProps) {
  return (
    <div style={style}>
      {props.children}
    </div>
  )
}
