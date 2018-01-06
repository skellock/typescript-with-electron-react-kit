import * as React from "react"
import { CSSProperties } from "react"
import { colors, spacing, fontSizes, styles, cssProps } from "../../theme"
import { EnterAnimation } from "../enter-animation"
import { Text } from "../text"
import { css, compose } from "glamor"

export interface TabProps {
  text: string
  active?: boolean
  style?: CSSProperties | CSSProperties[]
  onClick: () => void
}

const BASE = compose(
  styles.noWindowDrag,
  cssProps({
    cursor: "pointer",
    paddingTop: spacing.small,
    paddingBottom: spacing.small,
    paddingLeft: spacing.medium,
    paddingRight: spacing.medium,
  }),
)

const ACTIVE = cssProps({
  borderBottom: colors.nav.line,
  borderBottomWidth: 2,
  borderBottomStyle: "solid",
})

const BASE_TEXT = cssProps({ color: colors.nav.inactive, fontSize: fontSizes.mediumPlus })
const ACTIVE_TEXT = cssProps({ color: colors.nav.active })

/**
 * A tab component that you click on.  Not the tab panel.
 */
export function Tab(props: TabProps) {
  // work out the styles
  const styleProps = css(BASE, props.active && ACTIVE, props.style)
  const textStyle = css(BASE_TEXT, props.active && ACTIVE_TEXT)

  return (
    <EnterAnimation animation="grow" speed={100} delay={400}>
      <div {...styleProps} onClick={props.onClick}>
        <Text style={textStyle} text={props.text} />
      </div>
    </EnterAnimation>
  )
}
