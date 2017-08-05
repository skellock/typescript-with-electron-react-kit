/**
 * Named colours.
 */
const palette = {
  bluez: ['#2B3A45', '#56748A', '#9CD4FC', '#D2EBFD', '#EDF7FE'],
  beige: ['#383330', '#585350', '#a8a3a0', '#d8d3d0', '#f8f3f0'],
  mint: ['#385350', '#587370', '#a8c3c0', '#d8e3e0', '#f8ffff'],
  purps: ['#503853', '#705873', '#c0a8c3', '#e0d8e3', '#fff8ff'],
  grayscale: ['#1d1d1d', '#2d2d2d', '#333', '#666', '#888', '#aaa', '#ddd', '#e6e6e6', '#f0f0f0'],
  cherry: '#d44',
}

/**
 * The dominant color scale.
 */
const dominant = palette.beige

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
  background: dominant[4],

  /**
   * The background color navigation.
   */
  navBackground: dominant[2],
  /** the line color of the nav */
  navLine: dominant[1],
  /** Navigation foreground when it isn't active. */
  navInactive: dominant[3],
  /** Navigation foreground when active. */
  navActive: dominant[1],

  /** Normal reading text. */
  text: palette.grayscale[2],

  /** When something goes wrong. */
  error: palette.cherry,

  /** Subtle lines like dividers. */
  line: dominant[1],
}
