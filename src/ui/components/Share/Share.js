"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const ClickOutsideWrapper_1 = require("components/Shared/ClickOutsideWrapper");
const styles_2 = require("components/Confirmation/styles");
const Share = ({ url, toggleIsOpen, isOpen, wrapperRef }) => {
    return (React.createElement("div", { ref: wrapperRef },
        React.createElement("button", { className: styles_2.confirmationStyles.ctaCss, onClick: toggleIsOpen }, "SHARE THE LINK"),
        isOpen && (React.createElement("article", { className: styles_1.shareStyles.container },
            React.createElement("div", { className: styles_1.shareStyles.title },
                "Share Links, Grow your group and",
                React.createElement("br", null),
                " Get Rewards"),
            React.createElement("section", { className: styles_1.shareStyles.inputContainer },
                React.createElement("input", { id: "share-input", className: styles_1.shareStyles.input, readOnly: true, value: url, style: { pointerEvents: `none` } }),
                React.createElement("button", { className: styles_1.shareStyles.button, onClick: e => {
                        e.preventDefault();
                        const copyText = document.getElementById('share-input');
                        if (copyText) {
                            // @ts-ignore
                            copyText.select();
                            document.execCommand('Copy');
                        }
                        toggleIsOpen(e);
                    } }, "COPY")),
            React.createElement("section", { className: styles_1.shareStyles.socialContainer },
                React.createElement("button", { className: styles_1.shareStyles.socialButton, style: {
                        background: `url(https://s3.amazonaws.com/fevo-fuc/assets-demo/images/social/fb%402x.png)
                no-repeat center`,
                        backgroundSize: 'cover'
                    } }),
                React.createElement("button", { className: styles_1.shareStyles.socialButtonTwitter, style: {
                        // tslint:disable-next-line:max-line-length
                        background: `url(https://s3.amazonaws.com/fevo-fuc/assets-demo/images/social/messenger%402x.png)
                no-repeat center`,
                        backgroundSize: 'cover'
                    } }),
                React.createElement("button", { className: styles_1.shareStyles.socialButton, style: {
                        // tslint:disable-next-line:max-line-length
                        background: `url(https://s3.amazonaws.com/fevo-fuc/assets-demo/images/social/tweet%402x.png) no-repeat center`,
                        backgroundSize: 'cover'
                    } })),
            React.createElement("section", null,
                React.createElement("div", { className: styles_1.shareStyles.sendInviteTitle },
                    ' ',
                    "Or send them invite",
                    ' '),
                React.createElement("section", { className: styles_1.shareStyles.inputContainer },
                    React.createElement("input", { className: styles_1.shareStyles.input, placeholder: "Enter emails, separated by commas" }),
                    React.createElement("button", { className: styles_1.shareStyles.button }, "SEND")))))));
};
exports.default = ClickOutsideWrapper_1.clickOutsideWrapper(Share);
