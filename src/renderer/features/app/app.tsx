import * as React from 'react'
import { WelcomeScreen } from '..'
import { styles, cssProps, colors } from '../../platform'
import { css, compose } from 'glamor'

const ROOT = compose(
  styles.fullScreen,
  cssProps({
    backgroundColor: colors.background,
  }),
)

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <div {...css(ROOT)}>
        <WelcomeScreen />
      </div>
    )
  }
}
