import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

export class User extends React.Component {
    render() {
        const {name} = this.props;
        return <div className="user d-inline p-2">
            <FontAwesomeIcon icon={faUser}/> {name}
        </div>
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
};