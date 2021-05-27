"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const variables_1 = require("css/variables");
const React = require("react");
const react_emotion_1 = require("react-emotion");
const breadcrumb_svg_1 = require("../../svg-icons/breadcrumb.svg");
const breadcrumbsContainerCss = react_emotion_1.css `
  display: flex;
`;
const breadcrumbContainerCss = react_emotion_1.css `
  margin-right: 0.15rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:last-child {
    margin-right: 0;
  }
  display: inline-block;
`;
const breadcrumbCss = react_emotion_1.css `
  ${variables_1.fonts.nav};
`;
const breadcrumbSelectedCss = react_emotion_1.css `
  ${breadcrumbCss}
  color: ${variables_1.colors.primaryGray};
  font-weight: bold;
  cursor: initial;
`;
const breadcrumbImageCss = react_emotion_1.css `
  width: 1rem;
  height: 0.45rem;
  margin-left: 0.2rem;
  path {
    fill: ${variables_1.colors.standardBlack};
    stroke-width: 4px;
    stroke-dasharray: 2, 2;
    stroke-linejoin: round;
  }
`;
const Breadcrumbs = ({ current, parents }) => {
    const maxWidth = `${100 / (parents.length + 1) / 1.2}%`;
    const parentEls = parents.reverse().map((parent, i) => (React.createElement("div", { key: parent.title, style: { maxWidth }, className: breadcrumbContainerCss },
        React.createElement("a", { onClick: parent.onClick, className: breadcrumbCss }, parent.title),
        parents.length > 0 && (React.createElement(breadcrumb_svg_1.default, { className: breadcrumbImageCss })))));
    return (React.createElement("article", { className: breadcrumbsContainerCss },
        parentEls,
        React.createElement("div", { style: { maxWidth }, className: breadcrumbContainerCss },
            React.createElement("a", { onClick: current.onClick, key: current.title, className: breadcrumbSelectedCss }, current.title))));
};
exports.default = Breadcrumbs;
