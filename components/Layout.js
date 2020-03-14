/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core';

import Header from './Header';

const reset = css`
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
  }
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    line-height: 1.4;
  }
`

const layout = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 560px;
  margin: 0 auto;
  padding: 20px;
  label: layout;
`

const Layout = props => {
  return (
    <div id="__layout">
      <Global styles={reset} />
      <div css={layout}>
        <Header />
        {props.children}
      </div>       
    </div>   
  );
};

export default Layout;