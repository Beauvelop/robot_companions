import React from 'react';
import styled from 'styled-components';

const HeaderLinks = styled.nav`
  text-align: right;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-columns: 1fr auto;
  &  a {
    text-decoration: none;
    grid-row: 2;
    color: #1BA3CC;
  }

  @media screen and (max-width: 375px) {                   // phone Query
    display: none;
}
`

const NavLinks = () => (
      <HeaderLinks className="header-links">
            <a href="#partnership">RC PARTNERSHIP</a>
            <a href="#profile">RC PROFILE</a>
      </HeaderLinks>
)
export default NavLinks;