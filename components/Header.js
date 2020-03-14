/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

const Logo = styled.img`
  width: 128px;
  label: logo;
`

const Title = styled.h1`
  margin-top: 30px;
  label: title;
`

const Header = () => {
  return (
    <>
      <a href='//www.bukwild.com'>
        <Logo src='https://www.bukwild.com/logo.png' alt='Bukwild'></Logo>
      </a>      
      <Title>Vue → React</Title>
    </>
  )
}

export default Header;