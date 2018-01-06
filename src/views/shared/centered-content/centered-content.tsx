import * as React from "react"
import { CSSProperties } from "react"
import { cssProps, styles } from "../../theme"
import { compose, css } from "glamor"

export interface CenteredContentProps {
  children: React.ReactNode
  style?: CSSProperties | CSSProperties[] | false | null
}

const BASE = compose(
  styles.flex1,
  styles.column,
  cssProps({
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  }),
)

export function CenteredContent(props: CenteredContentProps) {
  return <div {...css(BASE, props.style)}>{props.children}</div>
}
