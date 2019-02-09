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
        const {profile, handleSignOut} = this.props;
        return (
            <React.Fragment>
                <User
                    name={profile.name}
                />
                <SignOut
                    handleSignOut={handleSignOut}
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
        const {authorizedUser} = this.props;
        return (
            <div className="user-info">
                {
                    authorizedUser ? this.renderAuthorizedTemplate() : this.renderUnknownUserTemplate()
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
        authorizedUser: user.authorizedUser,
        profile: user.profile,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSignIn: (api) => dispatch(handleSignIn(api)),
        handleSignOut: () => dispatch(handleSignOut()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserContainer)