/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core';

import Header from './Header';

const reset = css`
  body {
    margin: 0;
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