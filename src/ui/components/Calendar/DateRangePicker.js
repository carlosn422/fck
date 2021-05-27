"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const lodash_1 = require("lodash");
const ClickOutsideWrapper_1 = require("components/Shared/ClickOutsideWrapper");
const esm_1 = require("date-fns/esm");
const utils_1 = require("components/Calendar/utils");
const checkIfDaySelected = (day, startDate, endDate) => {
    if (startDate && endDate) {
        return esm_1.isWithinInterval(day, { start: startDate, end: endDate });
    }
    else if (startDate) {
        return esm_1.isSameDay(startDate, day);
    }
    else if (endDate) {
        return esm_1.isSameDay(endDate, day);
    }
    else {
        return false;
    }
};
const dateRangePickerSummary = (startDate, endDate) => {
    if (!startDate && !endDate) {
        return 'Dates';
    }
    else {
        if (startDate === endDate) {
            return endDate ? esm_1.format(endDate, 'EEE MMM d') : '';
        }
        return ((startDate ? `${esm_1.format(startDate, 'EEE MMM d')} - ` : '') +
            (endDate ? esm_1.format(endDate, 'EEE MMM d') : ''));
    }
};
const days = (selectedMonthsDate, chooseStart, chooseEnd, toggleIsOpen, startDate, endDate, isRangeEnabled = true) => {
    const monthStartDate = lodash_1.flowRight(esm_1.startOfWeek, esm_1.startOfMonth)(selectedMonthsDate);
    const monthEndDate = lodash_1.flowRight(esm_1.endOfWeek, esm_1.endOfMonth)(selectedMonthsDate);
    const daysToShow = esm_1.eachDayOfInterval({
        start: monthStartDate,
        end: monthEndDate
    });
    return daysToShow.map(day => {
        const belongsToAsideMonth = !esm_1.isSameMonth(day, selectedMonthsDate);
        const isDaySelected = checkIfDaySelected(day, startDate, endDate);
        const now = new Date();
        // this might want to look at offerDate or some other criterion
        const isAvailable = esm_1.isAfter(day, now) || esm_1.isEqual(day, now);
        const classes = `${styles_1.styles.dayOfWeek} ${styles_1.styles.day} ${isAvailable ? styles_1.styles.availableDay : ''} ${belongsToAsideMonth ? styles_1.styles.dayAsideMonth : ''} ${isDaySelected ? styles_1.styles.selectedDay : ''}`;
        // `
        const onClick = () => {
            if (isAvailable) {
                if (!isRangeEnabled) {
                    chooseEnd(day);
                    chooseStart(day);
                    toggleIsOpen();
                }
                else if (startDate && !endDate) {
                    chooseEnd(day);
                    toggleIsOpen();
                }
                else {
                    chooseStart(day);
                }
            }
        };
        return (React.createElement("div", { key: day.toJSON(), className: classes, onClick: onClick }, esm_1.format(day, 'd')));
    });
};
const DateRangePicker = ({ startDate, endDate, chooseStart, chooseEnd, selectedMonthsDate, gotoPreviousMonth, gotoNextMonth, canGotoNextMonth, canGotoPreviousMonth, toggleIsOpen, isOpen, wrapperRef, isRangeEnabled = true }) => {
    const calendarArticle = (calendarSelectedMonthsDate, orientation) => (React.createElement("article", { className: styles_1.styles.datePickerCalendar },
        React.createElement("section", { className: styles_1.styles.header },
            orientation === 'left' && (React.createElement("button", { disabled: !canGotoPreviousMonth, className: `${styles_1.styles.navigate} ${styles_1.styles.navigatePrevious} icon-arrow-thick`, onClick: gotoPreviousMonth }, "prev")),
            React.createElement("div", { className: styles_1.styles.month }, esm_1.format(calendarSelectedMonthsDate, 'MMMM YYYY')),
            orientation === 'right' && (React.createElement("button", { disabled: !canGotoNextMonth, className: `${styles_1.styles.navigate} ${styles_1.styles.navigateNext} icon-arrow-thick`, onClick: gotoNextMonth }, "next"))),
        React.createElement("article", { className: "calendar__days-container" },
            React.createElement("header", { className: styles_1.styles.daysHeader }, utils_1.dayHeaders(calendarSelectedMonthsDate)),
            React.createElement("section", { className: styles_1.styles.daysContent }, days(calendarSelectedMonthsDate, chooseStart, chooseEnd, toggleIsOpen, startDate, endDate, isRangeEnabled)))));
    const summary = () => {
        return (React.createElement("div", { className: styles_1.styles.summary, onClick: toggleIsOpen }, dateRangePickerSummary(startDate, endDate)));
    };
    return (React.createElement("article", { className: styles_1.styles.dateRangePicker, ref: wrapperRef },
        summary(),
        isOpen && (React.createElement("div", { className: `${styles_1.styles.dateRangePickerCalendars}` },
            calendarArticle(selectedMonthsDate, 'left'),
            calendarArticle(esm_1.addMonths(selectedMonthsDate, 1), 'right')))));
};
exports.default = ClickOutsideWrapper_1.clickOutsideWrapper(DateRangePicker);
