import React from 'react';
import { Navbar, NavItem, Row, Icon, SearchForm } from 'react-materialize';
import { LocalForm, Control } from 'react-redux-form';

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

const Form = styled(LocalForm)`
  height: 64px !important;
`;

const Header = (props) => (
  <Row>
    <NavbarBlue href="/timeline" brand={
        <Logo src={logo} alt='OneBitTwitter' className='responsive-img col m6 center logo'/>
      } right className='navbar'>
      <NavItem onClick={() => {return false;}}>
        <Form>
          <Control.text model=".search" 
            name="search"
            placeholder="Search"
            style={{ 
              'background-color': 'white', 
              'border-radius': '30px', 
              'text-align': 'center',
              'color': 'black'
            }}/>
        </Form>
      </NavItem>
      <NavItem onClick={() => props.logOut()}>
        Logout
      </NavItem>
      <NavItem href={`/user/${props.id}/edit`}>
        <IconUser>account_circle</IconUser>
      </NavItem>
    </NavbarBlue>
  </Row>
);

export default Header;