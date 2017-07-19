import * as React from 'react'
import { Text, CenteredContent } from '../../../platform'
import { FunDog } from '../fun-dog/fun-dog'
import { Logo } from '../logo/logo'

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
