import * as React from 'react'
import { CSSProperties } from 'react'
import { colors, spacing, fontSizes, Text } from '../..'

export interface TabProps {
  text: string
  active?: boolean
  style?: CSSProperties
  onClick: () => void
  first?: boolean
}

const ROOT_STYLE: CSSProperties = {
  display: 'flex',
  paddingTop: spacing.small,
  paddingBottom: spacing.small,
  marginLeft: spacing.small,
  marginRight: spacing.small,
  cursor: 'pointer',
  WebkitAppRegion: 'no-drag',
  fontSize: fontSizes.default,
}

const ACTIVE_STYLE: CSSProperties = {
  color: colors.primary,
  borderBottom: colors.primary,
  borderBottomWidth: 2,
  borderBottomStyle: 'solid',
}

const FIRST_STYLE: CSSProperties = { marginLeft: 0 }

export function Tab(props: TabProps) {
  const style: CSSProperties = {
    ...ROOT_STYLE,
    ...props.active ? ACTIVE_STYLE : null,
    ...props.first ? FIRST_STYLE : null,
    ...props.style,
  }
  return (
    <div style={style} onClick={props.onClick}>
      <Text text={props.text} />
    </div>
  )
}
