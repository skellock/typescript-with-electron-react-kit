import * as React from 'react'
import { Flex } from 'rebass'

export interface CenteredContentProps {
  children: React.ReactNode
}

const style = { overflow: 'hidden' }

export function CenteredContent(props: CenteredContentProps) {
  return (
    <Flex flex={1} column align="center" justify="center" style={style}>
      {props.children}
    </Flex>
  )
}
