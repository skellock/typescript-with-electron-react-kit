import * as React from 'react'
import { CSSProperties } from 'react'

const style: CSSProperties = {
  paddingLeft: 20,
  paddingRight: 20,
}

export const StorybookStory: React.StatelessComponent<{}> = props =>
  <div style={style}>
    {props.children}
  </div>
