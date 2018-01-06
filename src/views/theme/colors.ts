// =--- theme colors ------>

// const mintScale = ['#385350', '#587370', '#A8C3C0', '#D8E3E0', '#F8FFFF']
// const purpleScale = ['#503853', '#705873', '#C0A8C3', '#E0D8E3', '#FFF8FF']
const blueScale = ["#2B3A45", "#56748A", "#9CD4FC", "#D2EBFD", "#EDF7FE"]
const beigeScale = ["#383330", "#585350", "#A8A3A0", "#D8D3D0", "#F8F3F0"]

// choose a primaries (frequent use) & secondaries (rare use)
const primaryScale = beigeScale
const secondaryScale = blueScale

// a healthy selection of grays
const grayScale = [
  "#1D1D1D",
  "#2D2D2D",
  "#333",
  "#666",
  "#888",
  "#AAA",
  "#DDD",
  "#E6E6E6",
  "#F0F0F0",
]

// black is 1st, white is last
const black = grayScale[0]
const white = grayScale[grayScale.length - 1]

// =--- colors with specific meaning ------>

const sentiment = {
  error: "cherry",
  success: "lime",
  warning: "orange",
  highlight: secondaryScale[2],
}

// =--- special-use window chrome ------>

const window = { background: "transparent" }
const scrollbar = {
  base: "transparent",
  track: "rgba(0, 0, 0, 0.04)",
  thumb: "rgba(0, 0, 0, 0.1)",
}

// =--- special-use window chrome ------>

const text = grayScale[0]
const line = primaryScale[1]
const nav = {
  line,
  background: primaryScale[2],
  inactive: primaryScale[3],
  active: primaryScale[1],
}

/**
 * These are the various roles that colour plays in the system.
 */
export const colors = {
  primaryScale,
  secondaryScale,
  black,
  white,
  window,
  scrollbar,
  nav,
  line,
  text,
  sentiment,
}
