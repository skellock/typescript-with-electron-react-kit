import * as React from 'react'

export interface VignetteProps {
  /** the intensity of the shadow from 0.0 to 1.0 */
  opacity?: number
  /** the size of the shadow (default '200px') */
  size?: number | string
}

/**
 * Draws a shadowed subtle border.
 */
export function Vignette(props: VignetteProps) {
  const opacity = props.opacity || 0.3
  const size = props.size || '200px'

  const vignetteStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    boxShadow: `0 0 ${size} rgba(0,0,0,${opacity}) inset`
  }

  return <div style={vignetteStyle} />
}
