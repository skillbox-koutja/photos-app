import React, {Component} from 'react';
import './App.css';
import api from '../api';

const {REACT_APP_UNSPLASH_ACCESS_KEY, REACT_APP_UNSPLASH_SECRET, REACT_APP_CALLBACK_URL} = process.env;

api.login();

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {REACT_APP_UNSPLASH_ACCESS_KEY} +
                    {REACT_APP_UNSPLASH_SECRET} +
                    {REACT_APP_CALLBACK_URL}
                </header>
            </div>
        );
    }
}

export default App;
