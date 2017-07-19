import * as React from 'react'
import { Text } from '../../platform'
import { remote } from 'electron'

const style = { WebkitAppRegion: 'drag' }

const title = remote.require('../package.json').name

export function Header() {
  return (
    <Text center pt={1} fontSize={1} bg="gray1" style={style}>
      {title}
    </Text>
  )
}
