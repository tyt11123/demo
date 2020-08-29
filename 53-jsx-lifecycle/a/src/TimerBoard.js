import React from 'react';
import Timer from './Timer';

export default class TimerBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timers: []
        }
    };
    addTimer() {
        let newArray = [...this.state.timers, new Date()];
        let newObj = {timers: newArray};
        this.setState(newObj);
    };
    deleteTimer(i) {
        let newArray = [...this.state.timers];
        newArray.splice(i,1);
        this.setState({timers: newArray});
    }
    render() {
        return (<>
        {this.state.timers.map((timer, i) => <Timer
        startTime={timer}
        removeTimer={() => this.deleteTimer(i)}
        key={i}/>)}
        <button onClick={() => this.addTimer()}>Add Timer</button>
        </>);
    };
};

// example usage: <TimerBoard/>