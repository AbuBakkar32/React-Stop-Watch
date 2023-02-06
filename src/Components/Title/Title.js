import React, {Component} from "react";
import "./Title.css";

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "This Is Title Of REACT DOM",
            isInput: false,
        };
    }

    onClickHandler = () => {
        this.setState({
            ...this.state,
            isInput: true
        })
    };

    handleEmptyTitle = () => {
        if (this.state.title === '') {
            this.setState({
                ...this.state,
                title: 'You Forgot To Enter Title!',
                isInput: false,
            })
        }
    }

    onChangeHandler(event) {
        this.setState({
            ...this.state,
            title: event.target.value,
        })
    }

    enterHandler(event) {
        if (event.type === 'blur') {
            this.setState({
                ...this.state,
                isInput: false,
            })
        }
        this.handleEmptyTitle();
    }

    onKeyPressHandler(event) {
        if (event.key === 'Enter') {
            this.setState({
                ...this.state,
                isInput: false,
            })
            this.handleEmptyTitle();
        }
    }


    render() {
        let output = null;
        if (this.state.isInput) {
            output = (
                <div className="m-auto w-50">
                    <input
                        type="text"
                        className="form-control"
                        onChange={(event) => this.onChangeHandler(event)}
                        onKeyPress={(event) => this.onKeyPressHandler(event)}
                        onBlur={(event) => this.enterHandler(event)}
                        value={this.state.title}
                    />
                </div>
            )
        } else {
            output = (
                <div className="row hover animate__animated animate__backInLeft">
                    <div className="col-10">
                        <h1 className="display-6 title">{this.state.title}</h1>
                    </div>
                    <div className="col-2 icon">
                    <span>
                        <i className="fas fa-pencil-alt" onClick={() => this.onClickHandler()}/>
                    </span>
                    </div>
                </div>
            );
        }
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        {output}
                    </div>
                </div>
            </div>
        );
    }
}

export default Title;