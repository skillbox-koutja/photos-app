import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import React from 'react';
import UserContainer from '../../containers/UserContainer';

class NavBar extends React.Component {
    render() {
        return (
            <header className="header">
                <div onClick={() => {
                    /** do something before redirection */
                    this.props.push('/');
                }}>home</div>
                <div onClick={() => {
                    /** do something before redirection */
                    this.props.push('/auth');
                }}>auth</div>
                <UserContainer/>
            </header>
        )
    }
}

export default connect(
    null,
    {push}
)(NavBar);