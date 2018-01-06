import * as React from "react"
import * as ReactDOM from "react-dom"
import { App } from "./features"
import { webFrame } from "electron"

ReactDOM.render(<App />, document.getElementById("root"))

// prevent pinch-to-zoom
webFrame.setVisualZoomLevelLimits(1, 1)
// if you want to set the zoom factor, delete this
webFrame.setLayoutZoomLevelLimits(0, 0)

// prevent drag & drop replacing the whole browser window
document.addEventListener("dragover", event => event.preventDefault())
document.addEventListener("drop", event => event.preventDefault())
