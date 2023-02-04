import logo from '../logo.svg';
import './App.css';
import React, {Component} from "react";
import Title from "./Title/Title";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container mt-4">
                    <Title/>
                </div>
            </div>
        );
    }
}

export default App;
