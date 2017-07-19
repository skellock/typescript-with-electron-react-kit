import * as React from 'react'
import { Flex } from 'rebass'

export interface ScrollableContentProps {
  children: React.ReactNode
}

const style = { overflowY: 'scroll' }

export function ScrollableContent(props: ScrollableContentProps) {
  return (
    <Flex flex={1} p={3} column style={style}>
      {props.children}
    </Flex>
  )
}
