import * as React from 'react'
import { CSSProperties } from 'react'
import { spacing, styles, cssProps } from '../..'
import { css, compose } from 'glamor'

export interface ScrollableContentProps {
  children?: React.ReactNode
  style?: CSSProperties | CSSProperties[]
}

const ROOT = compose(
  styles.column,
  styles.flex1,
  cssProps({ padding: spacing.medium, overflowY: 'scroll' }),
)

export function ScrollableContent(props: ScrollableContentProps) {
  return (
    <div {...css(ROOT, props.style)}>
      {props.children}
    </div>
  )
}
