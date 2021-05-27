import * as React from 'react'

export interface InjectedProps {
  isOpen: boolean
  toggleIsOpen: (e?: any) => any
  wrapperRef: any
}
interface State {
  isOpen: boolean
}

export const clickOutsideWrapper = <P extends {}>(
  UnwrappedComponent: React.SFC<P & InjectedProps>
) =>
  class ClickOutsideWrapper extends React.Component<P, State> {
    wrapperRef: any
    constructor(props: P) {
      super(props)
      this.setWrapperRef(this)
      this.state = { isOpen: false }
    }

    componentDidMount() {
      document.addEventListener('click', e => this.handleClickOutside(e))
    }

    componentWillUnmount() {
      document.removeEventListener('click', e => this.handleClickOutside(e))
    }

    setWrapperRef(node: any) {
      this.wrapperRef = node
    }

    handleClickOutside(event: MouseEvent) {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        this.setState({ isOpen: false })
      }
    }

    render() {
      return (
        <>
          <UnwrappedComponent
            {...this.props}
            wrapperRef={node => this.setWrapperRef(node)}
            isOpen={this.state.isOpen}
            toggleIsOpen={() => {
              this.setState({ isOpen: !this.state.isOpen })
            }}
          />
        </>
      )
    }
  }
