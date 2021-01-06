import React from 'react';
import {Button} from 'reactstrap';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export class SignIn extends React.Component {
  render() {
    const {api, icon} = this.props;
    const id = `btn-sign-in btn-sign-in_api-${api}`;
    return (
      <Button
        color="primary"
        className={id}
        api={api}
        onClick={this.props.handleSignIn}
      >
        <FontAwesomeIcon icon={icon} />
        Войти!
      </Button>
    );
  }
}

SignIn.propTypes = {
  api: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  handleSignIn: PropTypes.func.isRequired,
};
