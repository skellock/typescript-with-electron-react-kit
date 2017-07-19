import * as React from 'react'
import { Text, FunDog, Logo, CenteredContent } from '../../platform'

export class DogTab extends React.Component<{}, {}> {
  render() {
    return (
      <CenteredContent>
        <FunDog />
        <Text py={3}>Wake up and smell the electrons.</Text>
        <Logo />
      </CenteredContent>
    )
  }
}
