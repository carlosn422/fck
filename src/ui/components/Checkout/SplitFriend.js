"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const FormComponents_1 = require("components/FormComponents");
const react_emotion_1 = require("react-emotion");
const styles_1 = require("components/Checkout/styles");
const trashcan_svg_1 = require("../../svg-icons/trashcan.svg");
const utils_1 = require("cart/utils");
class SplitFriend extends React.Component {
    render() {
        const { friend, updateFriend, removeFriend, displayPrice, splitType, cartTotal } = this.props;
        const friendAmountComponent = splitType === 'custom' ? (React.createElement(FormComponents_1.SchemaFormFieldFormattedNumber, { name: "splitAmount", type: "text", value: {
                splitAmount: utils_1.formatPrice(friend.splitAmount)
            }, placeholder: "Amount", hasError: {}, onChangeEvent: (e, maskedValue, floatValue) => {
                if (cartTotal && floatValue <= cartTotal) {
                    updateFriend({
                        splitAmount: floatValue
                    });
                }
                else {
                    this.setState({ state: this.state });
                }
            }, className: FormComponents_1.formComponentStyles.formElement })) : (React.createElement("div", { className: `` }, displayPrice
            ? utils_1.formatPrice(displayPrice)
            : utils_1.formatPrice(friend.splitAmount)));
        const friendAmountContainerCss = splitType === 'custom'
            ? styles_1.splitPayStyles.friendAmount
            : react_emotion_1.css `
            margin-top: 1.5rem;
          ` +
                ' ' +
                styles_1.splitPayStyles.friendAmount;
        return (React.createElement("article", { className: styles_1.splitPayStyles.friend },
            React.createElement("section", { className: styles_1.splitPayStyles.friendInfo },
                React.createElement("div", { className: styles_1.splitPayStyles.avatar, style: {
                        background: `url(https://s3.amazonaws.com/fevo-fuc/assets-demo/images/avatar/profile1.png)
              no-repeat center`,
                        backgroundSize: 'cover'
                    } }),
                React.createElement("section", { className: styles_1.splitPayStyles.friendDetails },
                    React.createElement(FormComponents_1.SchemaFormField, { name: "name", type: "text", value: friend, placeholder: "Name", hasError: {}, onChange: e => updateFriend({ name: e.target.value }), className: FormComponents_1.formComponentStyles.formElement }),
                    React.createElement(FormComponents_1.SchemaFormField, { name: "phone", type: "text", value: friend, placeholder: "Phone (Optional)", hasError: {}, onChange: e => updateFriend({ phone: e.target.value }), className: FormComponents_1.formComponentStyles.formElement }),
                    React.createElement(FormComponents_1.SchemaFormField, { name: "email", type: "email", value: friend, placeholder: "Email", hasError: {}, onChange: e => updateFriend({ email: e.target.value }), className: FormComponents_1.formComponentStyles.formElement }))),
            React.createElement("section", { className: friendAmountContainerCss },
                friendAmountComponent,
                React.createElement("div", { className: styles_1.splitPayStyles.remove },
                    React.createElement(trashcan_svg_1.default, { className: styles_1.splitPayStyles.removeIcon, onClick: () => removeFriend(friend.id) })))));
    }
}
exports.default = SplitFriend;
