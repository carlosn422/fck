import { AnyComponent } from 'utils/types'
import * as React from 'react'

export enum PanelTransitionState {
  OPENED = 'OPENED',
  CLOSED = 'CLOSED',
  CLOSING = 'CLOSING',
  OPENING = 'OPENING'
}

export type PaneType = 'primary' | 'secondary' | 'slim'

export interface PaneProps extends React.HTMLProps<HTMLElement> {
  paneType: PaneType
  paneTransitionState: PanelTransitionState
  handlePaneTransitionEnd: () => void
}

export type PaneMode = 'single' | 'double'
export interface PanelStateType {
  panelTransitionState: PanelTransitionState
  scrollTop: number
  primaryPaneState: PanelTransitionState
  secondaryPaneState: PanelTransitionState
}

export interface PanelLayoutProps {
  Primary: () => React.ReactNode
  Secondary: () => React.ReactNode
  Slim?: () => React.ReactNode
  showConfetti?: () => boolean
}

export interface PanelPropsType extends PanelLayoutProps {
  panelState: PanelStateType
}
