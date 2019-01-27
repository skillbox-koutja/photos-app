import React, {Component} from 'react';
import './Auth.css';
import api from '../../api'

class Auth extends Component {

    componentDidMount() {
        // Считываем GET-параметр code из URL
        const auth = api.getAuth();
        console.log(auth)
        // this.props.onAuthComplete(auth);
    };

    render() {
        return (
            <div className="auth">
                redirect...
            </div>
        );
    }
}

export default Auth;
