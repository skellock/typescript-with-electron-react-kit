import * as React from "react"
import { CSSProperties } from "react"
import { colors } from "../../theme"
import { SpinAnimation } from "../../shared/spin-animation"
import { css } from "glamor"
const dogImage = require("./fun-dog.jpg")

const IMAGE = css({
  width: 400,
  borderStyle: "solid",
  borderWidth: 2,
  borderColor: colors.line,
  borderRadius: 4,
  transition: `all 150ms`,
  "&:hover": {
    borderColor: colors.sentiment.highlight,
  },
})

export interface FunDogProps {
  style?: CSSProperties | CSSProperties[] | null | false
}

export function FunDog(props: FunDogProps) {
  const style = css(IMAGE, props.style)
  return (
    <SpinAnimation>
      <img draggable={false} src={dogImage} {...style} />
    </SpinAnimation>
  )
}
