import React, {Component} from 'react';
import './Auth.css';
import PropTypes from 'prop-types';

export class Auth extends Component {
  componentDidMount() {
    const {api, handleAuthComplete} = this.props;
    // Считываем GET-параметр code из URL
    const auth = api.getAuth();
    handleAuthComplete(auth);
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
  api: PropTypes.object.isRequired,
  handleAuthComplete: PropTypes.func.isRequired,
};
