import * as React from 'react'
import { CSSProperties } from 'react'
import { StorybookLabel } from './storybook-label'

export const StorybookGroup: React.StatelessComponent<{ title: string }> = props => {
  const style: CSSProperties = {
    paddingBottom: 20,
  }
  return (
    <div style={style}>
      <StorybookLabel title={props.title} />
      {props.children}
    </div>
  )
}
