import * as React from 'react'
import { CSSProperties } from 'react'

const textStyle: CSSProperties = {
  marginLeft: -20,
  color: '#3d3d3d',
  borderBottom: '1px solid #eee',
  paddingBottom: 5,
  marginBottom: 5,
  fontFamily: 'Helvetica Neue',
  fontSize: 14,
}

export const StorybookLabel: React.StatelessComponent<{ title: string }> = props =>
  <p style={textStyle}>
    {props.title}
  </p>
