/** @jsx jsx */
import { css } from '@emotion/css'


  const  fevo =css `
  html.fevo-panel-open {
    overflow: hidden;
  }

  body.fevo-panel-open,
  .container-root.fevo-panel-open {
    position: fixed !important;
    height: 100% !important;
    width: 100% !important;
    overflow: initial !important;
    transition: none !important;
    min-width: 0 !important;
  }
  /* World beach games */
  .fuc-demo-container {
    height: 100vh;
    position: relative;
  }
`;

export default fevo