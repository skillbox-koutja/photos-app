import React, {Component} from 'react';
import './Auth.css';
import api from '../../api';
import PropTypes from 'prop-types';

export class Auth extends Component {
    componentDidMount() {
        // Считываем GET-параметр code из URL
        const auth = api.getAuth();
        this.props.handleAuthComplete(auth);
    };
    render() {
        return (
            <div className="auth">
                redirect...
            </div>
        );
    }
}
Auth.propTypes = {
    handleAuthComplete: PropTypes.func.isRequired,
};