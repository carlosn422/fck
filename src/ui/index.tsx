//import fevo from './css/fevo'
import forms from './css/forms'
import reset from './css/reset'
import { css,injectGlobal } from '@emotion/css'
import * as React from 'react'
import { render as ReactDomRender } from 'react-dom'
import App from './App'

const fevo =css `
  html.fevo-panel-open {
    overflow: hidden;
  }

  body.fevo-panel-open,
  .container-root.fevo-panel-open {
    position: fixed !important;
    height: 100% !important;
    width: 100% !important;
    overflow: initial !important;
    transition: none !important;
    min-width: 0 !important;
  }
  /* World beach games */
  .fuc-demo-container {
    height: 100vh;
    position: relative;
  }
`;

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
