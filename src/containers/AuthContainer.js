import React from 'react'
import {connect} from 'react-redux'
import {Auth} from '../components'
import {handleAuthComplete} from '../actions/UserActions'
class AuthContainer extends React.Component {
    render() {
        return (
            <Auth handleAuthComplete={this.props.handleAuthComplete}/>
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
        handleAuthComplete: (query) => dispatch(handleAuthComplete(query)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthContainer)