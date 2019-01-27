import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

export class SignOut extends React.Component {
    render() {
        return (
            <button
                className="btn btn-sign-out"
                onClick={this.props.handleSignOut}>
                <FontAwesomeIcon icon={faSignOutAlt}/>
                Выйти
            </button>
        )
    }
}

SignOut.propTypes = {
    handleSignOut: PropTypes.func.isRequired,
};