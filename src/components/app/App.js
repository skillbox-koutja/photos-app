import React, {Component} from 'react';
import './App.css';
import UserContainer from "../../containers/UserContainer";
// import api from '../../api';

// api.signIn();

export class App extends Component {
    render() {
        return (
            <div className="app">
                <header className="app__header">
                    <UserContainer/>
                </header>
                картинки
            </div>
        );
    }
}
