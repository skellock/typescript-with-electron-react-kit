import { keyframes } from "glamor"

/**
 * Keyframe animations.
 */
export const animations = {
  /**
   * Rotate 360 degrees clockwise.
   */
  spin360: keyframes("spin360", {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  }),
}
