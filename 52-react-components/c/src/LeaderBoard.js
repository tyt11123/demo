import React from "react";
import RandomName from "node-random-name";
import Counter from "./Counter";

class LeaderBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counters: [
                {
                    name: RandomName({seed: Math.random()}),
                    count: 0
                },
                {
                    name: RandomName({seed: Math.random()}),
                    count: 2
                }
            ]
        };
    };
    increaseClick(i) {
        let newObj = {...this.state.counters[i], count: this.state.counters[i].count + 1};
        let newArray = [...this.state.counters]; // construct a new array instead of mutating this.state.counters (immutability !!!)
        newArray[i] = newObj;
        this.setState({counters: newArray});
    };
    decreaseClick(i) {
        let newObj = {...this.state.counters[i], count: this.state.counters[i].count - 1};
        let newArray = [...this.state.counters];
        newArray[i] = newObj;
        this.setState({counters: newArray});
    };
    addCounter = () => {
        let newObj = {name: RandomName({seed: Math.random()}), count: 0};
        let newArray = [...this.state.counters, newObj];
        this.setState({counters: newArray});
    }
    removeCounter(i) {
        let newArray = [...this.state.counters];
        newArray.splice(i, 1);
        this.setState({counters: newArray});
    }
    render() {
        return (<div>
            {
                this.state.counters.sort((a,b) => b.count - a.count)
                .map((counter, index) => 
                    <Counter
                    name={counter.name}
                    count={counter.count}
                    key={index}
                    onPlusButtonClicked={() => {this.increaseClick(index)}}
                    onMinusButtonClicked={() => {this.decreaseClick(index)}}
                    onRemoveButtonClicked={() => {this.removeCounter(index)}}
                    >
                    </Counter>
                )
            }
            <br></br>
            <button onClick={this.addCounter}>Add Counter</button>
        </div>);
    };
}

export default LeaderBoard;