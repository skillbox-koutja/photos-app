import React from 'react'
import {connect} from 'react-redux'
import {SignIn, SignOut, User} from '../components'
import {handleSignIn, handleSignOut} from '../actions/UserActions'
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';

class UserContainer extends React.Component {
    handleSignIn = (evt) => {
        const {handleSignIn} = this.props;
        const apiType = evt.currentTarget.getAttribute('api');
        handleSignIn(apiType);
    };

    renderAuthorizedTemplate() {
        const {profile} = this.props;
        return (
            <React.Fragment>
                <User
                    name={profile.name}
                />
                <SignOut
                    handleSignOut={this.handleSignOut}
                />
            </React.Fragment>
        );
    };

    renderUnknownUserTemplate() {
        const {api} = this.props;
        return (
            <SignIn
                api={api}
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

const mapStateToProps = state => {
    const {user} = state;
    return {
        user: user,
        api: user.api.type,
        profile: user.profile,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSignIn: (api) => dispatch(handleSignIn(api)),
        handleSignOut: successCallback => dispatch(handleSignOut(successCallback)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserContainer)