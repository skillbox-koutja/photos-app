import React from 'react';
import {connect} from 'react-redux';
import {Auth} from '../components';
import {handleAuthComplete} from '../actions/UserActions';

class AuthContainer extends React.Component {
  render() {
    const {api, handleAuthComplete} = this.props;
    return (
      <Auth api={api} handleAuthComplete={handleAuthComplete} />
    );
  }
}

const mapStateToProps = state => {
  const {user} = state;
  return {
    api: user.api,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleAuthComplete: (query) => dispatch(handleAuthComplete(query)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);
