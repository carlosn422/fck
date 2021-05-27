"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const react_emotion_1 = require("react-emotion");
const utils_1 = require("cart/utils");
const Trademark_1 = require("../Trademark/Trademark");
const summaryListCss = react_emotion_1.css `
  color: white;
  display: table;
  padding-left: 14rem;
  width: 82%;
  text-align: right;
  margin: auto;
`;
exports.CartSplitCheckFooter = ({ base, tax, total, isSony, isShouldShowTax }) => {
    return (React.createElement("article", { className: styles_1.cartItemStyles.cartSplitTotalCss },
        React.createElement(Trademark_1.default, { sonyDemo: isSony }),
        React.createElement("section", { className: summaryListCss },
            isShouldShowTax && (React.createElement(React.Fragment, null,
                React.createElement("section", { className: styles_1.cartItemStyles.cartTotalRowCss },
                    React.createElement("div", { className: styles_1.cartItemStyles.cartTotalCellCss }, "Subtotal"),
                    React.createElement("div", { className: styles_1.cartItemStyles.cartTotalCellCss }, utils_1.formatPrice(base))),
                React.createElement("section", { className: styles_1.cartItemStyles.cartTotalRowCss },
                    React.createElement("div", { className: styles_1.cartItemStyles.cartTotalCellCss }, isShouldShowTax ? `Taxes & Fees` : `Fees`),
                    React.createElement("div", { className: styles_1.cartItemStyles.cartTotalCellCss }, utils_1.formatPrice(tax))))),
            React.createElement("section", { className: styles_1.cartItemStyles.cartTotalRowCss },
                React.createElement("div", { className: `${styles_1.cartItemStyles.cartSplitTotalItemBoldCss} ${styles_1.cartItemStyles.cartTotalCellCss} ` }, "YOUR TOTAL"),
                React.createElement("div", { className: `${styles_1.cartItemStyles.cartSplitTotalItemBoldCss} ${styles_1.cartItemStyles.cartTotalCellCss} ` }, utils_1.formatPrice(total))))));
};
