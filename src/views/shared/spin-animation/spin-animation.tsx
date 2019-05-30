import posed from "react-pose"

export interface SpinAnimationProps {
  duration?: number
  revolutions?: number
}

const SpinAnimation = posed.div({
  pressable: true,
  init: { rotate: 0 },
  press: { rotate: 360 },
})

export { SpinAnimation }
