import * as React from 'react'
import { CSSProperties } from 'react'

export interface CenteredContentProps {
  children: React.ReactNode
}

const style: CSSProperties = {
  overflow: 'hidden',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

export function CenteredContent(props: CenteredContentProps) {
  return (
    <div style={style}>
      {props.children}
    </div>
  )
}
