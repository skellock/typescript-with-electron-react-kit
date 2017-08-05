/**
 * Sane browser defaults.
 */
import 'glamor/reset'
import { css } from 'glamor'

/**
 * Sane electron defaults.
 */
css.global('html, body', {
  userSelect: 'none',
  cursor: 'default',
  WebkitFontSmoothing: 'subpixel-antialiased',
  textRendering: 'optimizeLegibility',
  font: 'caption',
})
