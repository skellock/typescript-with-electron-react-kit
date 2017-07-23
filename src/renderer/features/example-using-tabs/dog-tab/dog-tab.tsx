import * as React from 'react'
import { CSSProperties } from 'react'
import { Text, CenteredContent, spacing } from '../../../platform'
import { FunDog } from '../fun-dog/fun-dog'
import { Logo } from '../logo/logo'

const TEXT_STYLE: CSSProperties = {
  paddingTop: spacing.medium,
  paddingBottom: spacing.medium
}

export class DogTab extends React.Component<{}, {}> {
  render() {
    return (
      <CenteredContent>
        <FunDog />
        <Text style={TEXT_STYLE}>Wake up and smell the electrons.</Text>
        <Logo />
      </CenteredContent>
    )
  }
}
