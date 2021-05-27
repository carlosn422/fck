"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fevo_1 = require("css/fevo");
const forms_1 = require("css/forms");
const reset_1 = require("css/reset");
const emotion_1 = require("emotion");
const React = require("react");
const react_dom_1 = require("react-dom");
const App_1 = require("./App");
emotion_1.injectGlobal(reset_1.default, forms_1.default, fevo_1.default);
let root = document.getElementById('root');
const render = el => {
    react_dom_1.render(React.createElement(App_1.default, null), root);
};
render(root);
// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', () => {
        render(root);
    });
}
