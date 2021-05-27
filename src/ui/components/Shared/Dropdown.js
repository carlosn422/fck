"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_emotion_1 = require("react-emotion");
const variables_1 = require("css/variables");
const ClickOutsideWrapper_1 = require("components/Shared/ClickOutsideWrapper");
const selectionContainerCss = react_emotion_1.css `
  display: inline-block;
  min-width: 5rem;
  position: relative;
  background: ${variables_1.colors.colorGrayStandard};
`;
const selectionLabelCss = react_emotion_1.css `
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
`;
const arrows = {
    arrowUp: react_emotion_1.css `
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    border-bottom: 5px solid black;
    position: absolute;
    right: 0.375rem;
  `,
    arrowDown: react_emotion_1.css `
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    border-top: 5px solid black;
    position: absolute;
    right: 0.375rem;
  `
};
const selectionCopyCss = react_emotion_1.css `
  margin: 0 auto;
`;
const selectionDropdown = react_emotion_1.css `
  position: absolute;
  width: 100%;
  z-index: 1;
  /* top: 2rem; */
`;
const selectionItemCss = react_emotion_1.css `
  padding: 0.5rem;
  background: ${variables_1.colors.colorGrayStandard};
  text-align: center;

  :hover {
    background: ${variables_1.colors.secondaryGray};
  }

  cursor: pointer;
  user-select: none;
`;
const selectionItems = (collection, onSelect) => (React.createElement("ul", { className: selectionDropdown }, collection.map((item) => (React.createElement("li", { className: selectionItemCss, key: item.value, onClick: () => onSelect(item) }, item.label)))));
const DropdownComponent = ({ collection, selectedItem, onSelect, className, isOpen, toggleIsOpen, wrapperRef }) => {
    const onSelection = item => {
        onSelect(item);
        toggleIsOpen();
    };
    const selectionItemsComponent = isOpen
        ? selectionItems(collection, onSelection)
        : undefined;
    return (React.createElement("section", { className: `${selectionContainerCss} ${className ? className : ''}`, ref: wrapperRef },
        React.createElement("div", { className: selectionLabelCss, onClick: toggleIsOpen },
            React.createElement("div", { className: selectionCopyCss }, selectedItem ? selectedItem.label : 'Select'),
            React.createElement("div", { className: isOpen ? arrows.arrowUp : arrows.arrowDown })),
        selectionItemsComponent));
};
exports.Dropdown = ClickOutsideWrapper_1.clickOutsideWrapper(DropdownComponent);
