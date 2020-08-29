import React from 'react';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elapsedTime: 0
        };
        this.timerID = {};
    };
    componentDidMount() {
        this.setState({
            elapsedTime: 0
        });
        this.timerID = setInterval(() => {this.tick()}, 1000);
    };
    componentWillUnmount() {
        clearInterval(this.timerID);
    };
    tick() {
        let elapsedTime = new Date() - this.props.startTime;
        let newObj = {...this.state, elapsedTime: elapsedTime};
        this.setState(newObj);
    };
    render() {
        return (<>
        <h2>
            Time elapsed from {this.props.startTime.toLocaleString()}:&nbsp;
            {Math.floor( Number(this.state.elapsedTime.toString()) / 1000 )}&nbsp;s
            &nbsp;<button onClick={this.props.removeTimer}>Delete</button>
        </h2>
        </>);
    };
};

// example usage: <Timer startTime={new Date()} removeTimer={() => this.deleteTimer(index)}/>