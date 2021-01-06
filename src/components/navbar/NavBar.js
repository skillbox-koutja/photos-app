import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import React from 'react';
import UserContainer from '../../containers/UserContainer';
import {Nav, Navbar, NavItem} from 'reactstrap';

class NavBar extends React.Component {
  render() {
    return (
      <Navbar fixed="top" color="light" light expand="md">
        <Nav>
          <NavItem>
            <UserContainer />
          </NavItem>
          {this.props.children}
        </Nav>
      </Navbar>
    );
  }
}

export default connect(
  null,
  {push}
)(NavBar);
