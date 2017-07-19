import * as React from 'react'
import { Text, FunDog, Logo, CenteredContent } from '../../platform'
import { Tooltip } from 'rebass'

export class DogTab extends React.Component<{}, {}> {
  render() {
    return (
      <CenteredContent>
        <FunDog />
        <Text py={3}>
          Wake up and smell the{' '}
          <Tooltip text="😖 sad.">
            <Text color='teal5' bold>electrons</Text>
          </Tooltip>.
        </Text>
        <Logo />
      </CenteredContent>
    )
  }
}
