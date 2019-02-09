import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import React from 'react';
import UserContainer from '../../containers/UserContainer';
import {Nav, NavItem} from 'reactstrap';

class NavBar extends React.Component {
    render() {
        return (
            <Nav>
                <NavItem>
                    <UserContainer/>
                </NavItem>
                {this.props.children}
            </Nav>
        )
    }
}

export default connect(
    null,
    {push}
)(NavBar);