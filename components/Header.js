/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

const Logo = styled.a`width: 128px;`
const Title = styled.h1`margin-top: 30px;`

const Header = () => {
  return (
    <>
      <Logo href='//www.bukwild.com'>
        <img src='https://www.bukwild.com/logo.png' alt='Bukwild'></img>
      </Logo>      
      <Title>Vue → React</Title>
    </>
  )
}

export default Header;