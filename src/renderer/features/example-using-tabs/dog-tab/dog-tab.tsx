import * as React from 'react'
import { CSSProperties } from 'react'
import { Text, CenteredContent, spacing, cssProps } from '../../../platform'
import { FunDog } from '../fun-dog'
import { Logo } from '../logo'

const TEXT_STYLE = cssProps({
  paddingTop: spacing.medium,
  paddingBottom: spacing.medium,
})
export interface DogTabProps {
  style?: CSSProperties | CSSProperties[] | null | false
}

export class DogTab extends React.PureComponent<DogTabProps, {}> {
  render() {
    return (
      <CenteredContent style={this.props.style}>
        <Text style={TEXT_STYLE}>Do a barrel roll.</Text>
        <FunDog />
        <Logo />
      </CenteredContent>
    )
  }
}
