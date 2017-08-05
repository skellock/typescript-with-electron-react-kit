import * as React from 'react'
import { Text, spacing, colors, fontSizes, styles, cssProps } from '../../../platform'
import { isMac } from '../../../../shared'
import { remote } from 'electron'
import { compose } from 'glamor'

const ROOT = compose(
  styles.windowDrag,
  cssProps({
    textAlign: 'center',
    paddingTop: spacing.verySmall,
    backgroundColor: colors.headerBg,
    fontSize: fontSizes.small,
  }),
)

const title = remote.require('../package.json').name

export function Header() {
  if (isMac()) {
    return (
      <Text style={ROOT}>
        {title}
      </Text>
    )
  } else {
    return null
  }
}
