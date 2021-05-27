import fevo from './css/fevo'
import forms from './css/forms'
import reset from './css/reset'
import { injectGlobal } from 'emotion'
import * as React from 'react'
import { render as ReactDomRender } from 'react-dom'
import App from './App'

declare var module: any

declare namespace JSX {
  interface IntrinsicElements {
    [Element: string]: any;
  }
}
injectGlobal(reset, forms, fevo)

let root = document.getElementById('root')

const render = el => {
  ReactDomRender(<App />, root)
}

render(root)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(root)
  })
}
