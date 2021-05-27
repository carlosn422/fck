"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const esm_1 = require("date-fns/esm");
exports.dayHeaders = (selectedMonthsDate) => {
    const headers = esm_1.eachDayOfInterval({
        start: esm_1.startOfWeek(selectedMonthsDate),
        end: esm_1.endOfWeek(selectedMonthsDate)
    });
    return headers.map(day => (React.createElement("div", { key: day.toJSON(), className: styles_1.styles.dayOfWeek }, esm_1.format(day, 'dd'))));
};
