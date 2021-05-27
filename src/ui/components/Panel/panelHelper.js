"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PanelTypes_1 = require("components/Panel/PanelTypes");
exports.updateBodyForOpening = windowTop => {
    document.body.style.top = `${-1 * windowTop}px `;
    const htmlElem = document.querySelector('html');
    if (htmlElem) {
        htmlElem.classList.add('fevo-panel-open');
    }
    document.body.classList.add('fevo-panel-open');
};
exports.updateBodyAfterClosing = top => {
    const htmlElem = document.querySelector('html');
    if (htmlElem) {
        htmlElem.classList.remove('fevo-panel-open');
    }
    document.body.classList.remove('fevo-panel-open');
    window.scrollTo(0, top);
    document.body.style.top = '';
};
exports.handleTransitionEnd = (paneType, paneMode, panelTransitionState, setPanelState, scrollTop) => {
    if (paneMode === 'single') {
        if (panelTransitionState === PanelTypes_1.PanelTransitionState.OPENING) {
            setPanelState({
                primaryPaneState: PanelTypes_1.PanelTransitionState.OPENED,
                panelTransitionState: PanelTypes_1.PanelTransitionState.OPENED
            });
        }
        if (panelTransitionState === PanelTypes_1.PanelTransitionState.CLOSING) {
            setPanelState({
                primaryPaneState: PanelTypes_1.PanelTransitionState.CLOSED,
                panelTransitionState: PanelTypes_1.PanelTransitionState.CLOSED
            });
            // Message to sdk to do this
            exports.updateBodyAfterClosing(scrollTop);
        }
    }
    else {
        if (panelTransitionState === PanelTypes_1.PanelTransitionState.OPENING) {
            if (paneType === 'primary') {
                setPanelState({
                    primaryPaneState: PanelTypes_1.PanelTransitionState.OPENED,
                    secondaryPaneState: PanelTypes_1.PanelTransitionState.OPENING
                });
            }
            if (paneType === 'secondary') {
                setPanelState({
                    secondaryPaneState: PanelTypes_1.PanelTransitionState.OPENED,
                    panelTransitionState: PanelTypes_1.PanelTransitionState.OPENED
                });
            }
        }
        if (panelTransitionState === PanelTypes_1.PanelTransitionState.CLOSING) {
            if (paneType === 'primary') {
                setPanelState({
                    primaryPaneState: PanelTypes_1.PanelTransitionState.CLOSED,
                    panelTransitionState: PanelTypes_1.PanelTransitionState.CLOSED
                });
                exports.updateBodyAfterClosing(scrollTop);
            }
            if (paneType === 'secondary') {
                setPanelState({
                    secondaryPaneState: PanelTypes_1.PanelTransitionState.CLOSED,
                    primaryPaneState: PanelTypes_1.PanelTransitionState.CLOSING
                });
            }
        }
    }
};
exports.onClose = (paneMode, panelTransitionState, setPanelState) => {
    if (panelTransitionState === PanelTypes_1.PanelTransitionState.OPENED) {
        if (paneMode === 'single') {
            setPanelState({
                panelTransitionState: PanelTypes_1.PanelTransitionState.CLOSING,
                primaryPaneState: PanelTypes_1.PanelTransitionState.CLOSING
            });
        }
        else {
            setPanelState({
                panelTransitionState: PanelTypes_1.PanelTransitionState.CLOSING,
                secondaryPaneState: PanelTypes_1.PanelTransitionState.CLOSING
            });
        }
    }
};
