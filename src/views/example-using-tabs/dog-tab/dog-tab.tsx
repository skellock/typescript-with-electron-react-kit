import * as React from "react"
import { CSSProperties } from "react"
import { spacing, cssProps } from "../../theme"
import { Text } from "../../shared/text"
import { CenteredContent } from "../../shared/centered-content"
import { FunDog } from "../fun-dog"
import { Logo } from "../logo"

const TEXT_STYLE = cssProps({})

const DOG_STYLE = cssProps({
  marginTop: spacing.medium,
  marginBottom: spacing.medium,
})

export interface DogTabProps {
  style?: CSSProperties | CSSProperties[] | null | false
}

export class DogTab extends React.PureComponent<DogTabProps, {}> {
  render() {
    return (
      <CenteredContent style={this.props.style}>
        <Text style={TEXT_STYLE}>Do a barrel roll.</Text>
        <FunDog style={DOG_STYLE} />
        <Logo />
      </CenteredContent>
    )
  }
}
