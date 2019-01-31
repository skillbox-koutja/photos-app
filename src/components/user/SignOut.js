import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {Button} from 'reactstrap';

export class SignOut extends React.Component {
    render() {
        return (
            <Button
                color="primary"
                className="btn btn-sign-out"
                onClick={this.props.handleSignOut}>
                <FontAwesomeIcon icon={faSignOutAlt}/>
                Выйти
            </Button>
        )
    }
}

SignOut.propTypes = {
    handleSignOut: PropTypes.func.isRequired,
};