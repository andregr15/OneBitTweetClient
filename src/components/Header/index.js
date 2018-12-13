import React from 'react';
import { Navbar, NavItem, Row, Icon } from 'react-materialize';


import logo from '../../images/logo.png';
import styled from 'styled-components';

const NavbarBlue = styled(Navbar)`
  background-color: #75d3f4;`
;

const Logo = styled.img`
  margin-top: 15px;`
;

const IconUser = styled(Icon)`
  font-size: 40px !important;`
;

const Header = () => (
  <Row>
    <NavbarBlue brand={
          <Logo src={logo} alt='OneBitTwitter' className='responsive-img col m6 center logo'/>
      } right className='navbar'>
      <NavItem href='/logout'>
        Logout
      </NavItem>
      <NavItem href='/user/x/edit'>
        <IconUser>account_circle</IconUser>
      </NavItem>
    </NavbarBlue>
  </Row>
);

export default Header;