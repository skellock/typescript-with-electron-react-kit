import * as React from 'react'
import { CSSProperties } from 'react'
import { Text, spacing, colors, fontSizes } from '../../../platform'
import { isMac } from '../../../../shared'
import { remote } from 'electron'

const ROOT_STYLE: CSSProperties = {
  WebkitAppRegion: 'drag',
  textAlign: 'center',
  paddingTop: spacing.verySmall,
  backgroundColor: colors.headerBg,
  fontSize: fontSizes.small
}

const title = remote.require('../package.json').name

export function Header() {
  if (isMac()) {
    return (
      <Text style={ROOT_STYLE}>
        {title}
      </Text>
    )
  } else {
    return null
  }
}
