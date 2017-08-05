import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './features'

ReactDOM.render(<App />, document.getElementById('root'))

// prevent drag & drop replacing the whole browser window
document.addEventListener('dragover', event => event.preventDefault())
document.addEventListener('drop', event => event.preventDefault())
