"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_emotion_1 = require("react-emotion");
const variables_1 = require("css/variables");
const eventItemAdjustCss = react_emotion_1.css `
  display: flex;
  padding: 0.25rem 0;

  user-select: none;
  align-items: center;
  justify-content: flex-end;
`;
const adjustButtonCss = react_emotion_1.css `
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  line-height: 1rem;
  font-size: 1.25rem;
  cursor: pointer;
  border: 0;
  outline: 0;
  background: ${variables_1.colors.brandColor};
  color: white;
  :disabled {
    background: ${variables_1.colors.disabledGray};
  }
`;
const selectedQuantityCss = react_emotion_1.css `
  margin: 0.25rem 0.25rem;
  min-width: 1.5rem;
  text-align: center;
`;
/**
 * @component
 */
exports.QuantityAdjust = ({ onAdd, onRemove, removeButtonDisabled, addButtonDisabled, quantity, className }) => (React.createElement("section", { className: `adjust-container ${className}` },
    React.createElement("div", { className: eventItemAdjustCss },
        React.createElement("button", { disabled: removeButtonDisabled, className: `${adjustButtonCss} event-item__decrease`, onClick: onRemove }, "-"),
        React.createElement("div", { className: selectedQuantityCss }, quantity),
        React.createElement("button", { className: `${adjustButtonCss} event-item__increase`, onClick: onAdd }, "+"))));
