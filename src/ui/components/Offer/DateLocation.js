"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const location_svg_1 = require("../../svg-icons/location.svg");
const calendar_svg_1 = require("../../svg-icons/calendar.svg");
const gamepad_svg_1 = require("../../svg-icons/gamepad.svg");
const styles_1 = require("components/Offer/styles");
const esm_1 = require("date-fns/esm");
const DateLocation = ({ offerPage }) => {
    return (React.createElement(React.Fragment, null,
        offerPage.isSony ? (React.createElement(React.Fragment, null,
            React.createElement("div", { className: styles_1.styles.iconAndLocationContainer },
                React.createElement(calendar_svg_1.default, { className: styles_1.styles.calendarIcon }),
                "Release date: Feb 22, 2019"),
            React.createElement("div", { className: styles_1.styles.iconAndLocationContainer },
                React.createElement(gamepad_svg_1.default, { className: styles_1.styles.locationIcon }),
                "Sony Interactive Entertainment"))) : (React.createElement("div", null)),
        offerPage.startDate &&
            offerPage.startDate.length > 0 &&
            offerPage.endDate &&
            offerPage.endDate && (React.createElement("div", { className: styles_1.styles.iconAndLocationContainer },
            React.createElement(calendar_svg_1.default, { className: styles_1.styles.calendarIcon }),
            offerPage.startDate !== offerPage.endDate
                ? `${esm_1.format(offerPage.startDate, 'mmm dd')} -
            ${esm_1.format(offerPage.endDate, 'mmm dd')}`
                : `${esm_1.format(offerPage.startDate, 'mmm dd')}`)),
        offerPage.location && offerPage.location.length > 0 && (React.createElement("div", { className: styles_1.styles.iconAndLocationContainer },
            React.createElement(location_svg_1.default, { className: styles_1.styles.locationIcon }),
            offerPage.location))));
};
exports.default = DateLocation;
