"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const Facepile = ({ images }) => {
    return (React.createElement("article", { className: styles_1.facepileStyles.container }, images.map((i, index) => (React.createElement("div", { key: index, className: styles_1.facepileStyles.avatar, style: { backgroundImage: `url(${i})` } })))));
};
exports.default = Facepile;
