import * as React from 'react'
import { CSSProperties } from 'react'
import { colors, spacing, fontSizes, Text, styles, cssProps } from '../..'
import { css, compose } from 'glamor'

export interface TabProps {
  text: string
  active?: boolean
  style?: CSSProperties | CSSProperties[]
  onClick: () => void
}

const BASE = compose(
  styles.noWindowDrag,
  cssProps({
    cursor: 'pointer',
    padding: spacing.small,
    fontSize: fontSizes.default,
  }),
)

const ACTIVE = cssProps({
  color: colors.primary,
  borderBottom: colors.primary,
  borderBottomWidth: 2,
  borderBottomStyle: 'solid',
})

/**
 * A tab component that you click on.  Not the tab panel.
 */
export function Tab(props: TabProps) {
  // work out the styles
  const styleProps = css(BASE, props.active && ACTIVE, props.style)

  return (
    <div {...styleProps} onClick={props.onClick}>
      <Text text={props.text} />
    </div>
  )
}
