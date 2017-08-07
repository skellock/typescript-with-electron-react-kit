import * as React from 'react'
import { WelcomeScreen } from '..'
import { styles, colors } from '../../platform'
import { compose } from 'glamor'

const ROOT = compose(styles.fullScreen, {
  background: colors.window.background,
  borderRadius: 0,
  '& ::-webkit-scrollbar': {
    backgroundColor: colors.scrollbar.base,
    width: 12,
    height: 12,
  },
  '& ::-webkit-scrollbar-track': { backgroundColor: colors.scrollbar.track },
  '& ::-webkit-scrollbar-thumb': { backgroundColor: colors.scrollbar.thumb, borderRadius: 4 },
})

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <div {...ROOT}>
        <WelcomeScreen />
      </div>
    )
  }
}
