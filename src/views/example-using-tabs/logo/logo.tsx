import * as React from "react"
import { CSSProperties } from "react"
import { cssProps, animations } from "../../theme"
const icon = require("./electron-icon.svg")
import { css } from "glamor"

const ROOT = css(
  cssProps({
    width: 80,
    height: 80,
    animation: `${animations.spin360} infinite 5s linear`,
  }),
)

export interface LogoProps {
  style?: CSSProperties | CSSProperties[] | null | false
}

export function Logo(props: LogoProps) {
  const style = css(ROOT, props.style)

  return <img draggable={false} src={icon} {...style} />
}
