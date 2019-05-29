import posed from "react-pose"

export interface SpinAnimationProps {
  duration?: number
  revolutions?: number
}

const SpinAnimation = posed.div({
  pressable: true,
  init: {},
  press: { rotateX: 1 },
})

export { SpinAnimation }
