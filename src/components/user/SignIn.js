import React from 'react';
import {Button} from 'reactstrap';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export class SignIn extends React.Component {
    render() {
        const {type, icon} = this.props;
        const id = `btn-sign-in btn-sign-in_api-${type}`;
        return (
            <Button
                color="primary"
                className={id}
                api={type}
                onClick={this.props.handleSignIn}
            >
                <FontAwesomeIcon icon={icon}/>
                Войти!
            </Button>
        )
    }
}

SignIn.propTypes = {
    type: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired,
    handleSignIn: PropTypes.func.isRequired,
};