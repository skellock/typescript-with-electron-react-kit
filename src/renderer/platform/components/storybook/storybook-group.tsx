import * as React from "react"
import { CSSProperties } from "react"
import { StorybookLabel } from "./storybook-label"

export interface StorybookGroupProps {
  title?: string
  children?: React.ReactNode
}

const style: CSSProperties = {
  paddingBottom: 20,
}

export function StorybookGroup(props: StorybookGroupProps) {
  return (
    <div style={style}>
      <StorybookLabel title={props.title} />
      {props.children}
    </div>
  )
}
