import { colors, typography } from './variables'

export default `
  *,
  *:after,
  *:before {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  html {
    font-family: ${typography.fontSecondary};
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-size: 0.875rem;
    width: 100%;
    color: ${colors.standardBlack};
  }

  html, button, input, select, textarea {
    font-family: ${typography.fontSecondary};
  }

  button {
    font-family:  ${typography.fontSecondary};
    &:focus: {
      outline: none;
    }

  }

  input, select, textarea {
    font-family:  ${typography.fontSecondary};
  }

  a {
    text-decoration: none;
    outline: none;
    cursor: pointer;
    color: ${colors.brandColor};
    &:hover: {
      outline: none;
    }
    &:focus: {
      outline: none;
    }
  }


  img {
    width: 100%;
  }
  video {
    width: 100%;
    height: auto !important;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${typography.fontPrimary};
    font-weight: bold;
  }

  main {
    display: block;
  }

  // RC Slider

  .rc-slider .rc-slider-rail {
    background: ${colors.brandColorLightest};
  }
  .rc-slider .rc-slider-track {
    background: ${colors.brandColor};
  }
`
