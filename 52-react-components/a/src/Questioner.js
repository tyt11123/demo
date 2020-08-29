import React from "react";

export default class Questioner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            string: ""
        };
        this.prompt = this.prompt.bind(this);
    };
    prompt() {
        let answer = prompt(this.props.question);
        this.setState({
            string: answer
        });
    }
    render() {
        return (<div>
            <button onClick={this.prompt}>{this.props.question}</button>
            <p>{this.state.string}</p>
        </div>);
    };
};

// example usage: <Questioner question="what is your name" />