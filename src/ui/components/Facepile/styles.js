"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = require("react-emotion");
exports.facepileStyles = {
    container: react_emotion_1.css `
    display: flex;
    margin: 0.3rem 0.5rem 0 0.2rem;
  `,
    avatar: react_emotion_1.css `
    margin-left: -0.5rem;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid white;
    background-position: center;
    background-size: cover;
  `
};
