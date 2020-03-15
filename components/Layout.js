/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core';

import Header from './Header';

const red = '#f9352b';

const assetStyles = css`
  *, *:after, *:before {
    box-sizing: border-box;
    margin: 0;
  }

  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    -moz-osx-font-smoothing grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1.4;
  }

  a {
    color: grey;
    transition: color .2s;
    &:hover {
      color: ${red};
    }
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity .4s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
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
      <Global styles={assetStyles} />
      <div css={layout}>
        <Header />
        {props.children}
      </div>       
    </div>   
  );
};

export default Layout;