import React, { Component } from "react";
import "./Title.css";

class Title extends Component {
    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-8">
                        <h1>This Is Title Of REACT DOM!</h1>
                    </div>
                </div>
            </div>
        );
    }
}
export default Title;