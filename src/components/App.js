import React, {Component} from 'react';
import './App.css';

const {UNSPLASH_ACCESS_KEY, UNSPLASH_SECRET, CALLBACK_URL} = process.env;

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {UNSPLASH_ACCESS_KEY} +
                    {UNSPLASH_SECRET} +
                    {CALLBACK_URL}
                </header>
            </div>
        );
    }
}

export default App;
