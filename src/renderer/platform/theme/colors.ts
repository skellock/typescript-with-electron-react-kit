/**
 * Named colours.
 */
const palette = {
  blue: '#66d',
  cherry: '#d44',
  white: '#fff',
  offWhite: '#f0f0f0',
  neutral: '#999',
  offBlack: '#222',
  black: '#000',
}

/**
 * These are the various roles that colour plays in the system.
 */
export const colors = {
  /**
   * The color palette if you need it, but prefer to use the other
   * roles since it is easier to make sweeping chanegs.
   */
  palette,

  /** 
   * The default dackground color.
   */
  background: palette.white,

  /** 
   * The header background color.
   */
  headerBg: palette.white,

  /** 
   * The predominant colour.
   */
  primary: palette.blue,

  /**
   * When something goes wrong.
   */
  error: palette.cherry,
}
