import React from 'react'
import {connect} from 'react-redux'
import {SignIn, SignOut, User} from '../components'
import {handleSignIn, handleSignOut} from '../actions/UserActions'
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import api from '../api';

class UserContainer extends React.Component {
    handleSignIn = (evt) => {
        const {handleSignIn} = this.props;
        const type = evt.currentTarget.getAttribute('api');
        console.log({
            handleSignIn,
            currentTarget: evt.currentTarget
        });
        handleSignIn(type);
    };

    renderAuthorizedTemplate() {
        const {profile} = this.props;
        return (
            <React.Fragment>
                <User
                    name={profile.firstName + ' ' + profile.lastName}
                />
                <SignOut
                    handleSignOut={this.handleSignOut}
                />
            </React.Fragment>
        );
    };

    renderUnknownUserTemplate() {
        return (
            <SignIn
                type={api.defaultType}
                icon={faSignInAlt}
                handleSignIn={this.handleSignIn}
            />
        );
    };

    render() {
        const {profile} = this.props;
        return (
            <div className="user-info">
                {
                    profile && profile.username ? this.renderAuthorizedTemplate() : this.renderUnknownUserTemplate()
                }
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        user: store.user,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleSignIn: (api) => dispatch(handleSignIn(api)),
        handleSignOut: successCallback => dispatch(handleSignOut(successCallback)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserContainer)