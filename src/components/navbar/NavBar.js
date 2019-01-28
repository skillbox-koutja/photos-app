import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import React from 'react';
import UserContainer from '../../containers/UserContainer';

class NavBar extends React.Component {
    render() {
        return (
            <header className="header">
                <UserContainer/>
            </header>
        )
    }
}

export default connect(
    null,
    {push}
)(NavBar);