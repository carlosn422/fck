import {
  PaneType,
  PaneMode,
  PanelTransitionState
} from './PanelTypes'

export const updateBodyForOpening = windowTop => {
  document.body.style.top = `${-1 * windowTop}px `
  const htmlElem = document.querySelector('html')
  if (htmlElem) {
    htmlElem.classList.add('fevo-panel-open')
  }
  document.body.classList.add('fevo-panel-open')
}

export const updateBodyAfterClosing = top => {
  const htmlElem = document.querySelector('html')
  if (htmlElem) {
    htmlElem.classList.remove('fevo-panel-open')
  }

  document.body.classList.remove('fevo-panel-open')
  window.scrollTo(0, top)
  document.body.style.top = ''
}

export const handleTransitionEnd = (
  paneType: PaneType,
  paneMode: PaneMode,
  panelTransitionState: PanelTransitionState,
  setPanelState: (newState: any) => void,
  scrollTop: any
) => {
  if (paneMode === 'single') {
    if (panelTransitionState === PanelTransitionState.OPENING) {
      setPanelState({
        primaryPaneState: PanelTransitionState.OPENED,
        panelTransitionState: PanelTransitionState.OPENED
      })
    }
    if (panelTransitionState === PanelTransitionState.CLOSING) {
      setPanelState({
        primaryPaneState: PanelTransitionState.CLOSED,
        panelTransitionState: PanelTransitionState.CLOSED
      })
      // Message to sdk to do this
      updateBodyAfterClosing(scrollTop)
    }
  } else {
    if (panelTransitionState === PanelTransitionState.OPENING) {
      if (paneType === 'primary') {
        setPanelState({
          primaryPaneState: PanelTransitionState.OPENED,
          secondaryPaneState: PanelTransitionState.OPENING
        })
      }
      if (paneType === 'secondary') {
        setPanelState({
          secondaryPaneState: PanelTransitionState.OPENED,
          panelTransitionState: PanelTransitionState.OPENED
        })
      }
    }
    if (panelTransitionState === PanelTransitionState.CLOSING) {
      if (paneType === 'primary') {
        setPanelState({
          primaryPaneState: PanelTransitionState.CLOSED,
          panelTransitionState: PanelTransitionState.CLOSED
        })
        updateBodyAfterClosing(scrollTop)
      }
      if (paneType === 'secondary') {
        setPanelState({
          secondaryPaneState: PanelTransitionState.CLOSED,
          primaryPaneState: PanelTransitionState.CLOSING
        })
      }
    }
  }
}

export const onClose = (
  paneMode: PaneMode,
  panelTransitionState: PanelTransitionState,
  setPanelState: (newState: any) => void
) => {
  if (panelTransitionState === PanelTransitionState.OPENED) {
    if (paneMode === 'single') {
      setPanelState({
        panelTransitionState: PanelTransitionState.CLOSING,
        primaryPaneState: PanelTransitionState.CLOSING
      })
    } else {
      setPanelState({
        panelTransitionState: PanelTransitionState.CLOSING,
        secondaryPaneState: PanelTransitionState.CLOSING
      })
    }
  }
}
