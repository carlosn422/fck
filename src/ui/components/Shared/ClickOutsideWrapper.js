"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.clickOutsideWrapper = (UnwrappedComponent) => class ClickOutsideWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.setWrapperRef(this);
        this.state = { isOpen: false };
    }
    componentDidMount() {
        document.addEventListener('click', e => this.handleClickOutside(e));
    }
    componentWillUnmount() {
        document.removeEventListener('click', e => this.handleClickOutside(e));
    }
    setWrapperRef(node) {
        this.wrapperRef = node;
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ isOpen: false });
        }
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(UnwrappedComponent, Object.assign({}, this.props, { wrapperRef: node => this.setWrapperRef(node), isOpen: this.state.isOpen, toggleIsOpen: () => {
                    this.setState({ isOpen: !this.state.isOpen });
                } }))));
    }
};
