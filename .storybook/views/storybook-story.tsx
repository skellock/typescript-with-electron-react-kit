import * as React from "react"
import { CSSProperties } from "react"

const style: CSSProperties = {
  paddingLeft: 20,
  paddingRight: 20,
}

export interface StorybookStoryProps {
  children: React.ReactNode
}

export function StorybookStory(props: StorybookStoryProps) {
  return <div style={style}>{props.children}</div>
}
