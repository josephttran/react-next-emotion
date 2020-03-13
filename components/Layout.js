/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import Header from './Header';

const layout = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 560px;
  margin: 0 auto;
  padding: 20px;
`
const Layout = props => {
  return (
    <div css={layout}>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;