declare module 'popmotion' {
  export interface ActionProps {
    /** Fires every frame the value is updated. */
    onUpdate?(): void
    /** Fires when an action starts. */
    onStart?(): void
    /** Fires when an action is stopped. */
    onStop?(): void
    /** Fires when an action is completed. */
    onComplete?(): void
    /** If defined, get and onUpdate will pass the current value through this function before returning. */
    transform?(): void
  }

  export interface TweenProps {
    /** The amount of time for the tween to take, in milliseconds. (default: 300) */
    duration?: number
    /** Easing function */
    ease?: () => void
    /** The number to tween from. (default 0) */
    from?: number
    /** The number to tween to. (default: 1) */
    to?: number
    /** Number of times to flip tween on tween complete. (default: 0) */
    flip?: number
    /** Number of times to restart tween from beginning on tween complete. (default: 0) */
    loop?: number
    /** yoyo <Number>: Number of times to reverse tween on tween complete. (default: 0) */
    yoyo?: number
  }

  export function tween(options: TweenProps & ActionProps): any
  export const transform: any
}
