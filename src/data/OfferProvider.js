"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const exampleData_1 = require("data/exampleData");
const RoutesProvider_1 = require("router/RoutesProvider");
class OfferProvider extends React.Component {
    render() {
        const { children } = this.props;
        return (React.createElement(RoutesProvider_1.default, null, ({ routes }) => {
            const offerPage = exampleData_1.offerPages[routes.params.offerPageUri];
            if (!offerPage) {
                throw new Error(`no offerPage found at: ${routes.params.offerPageUri}`);
            }
            return children({ offerPage });
        }));
    }
}
exports.default = OfferProvider;
