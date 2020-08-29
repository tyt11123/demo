import React from 'react';
import {connect} from 'react-redux';
import {getAstroMDP} from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        number: state.number,
        people: state.people
    }
}

export class Astro extends React.Component {
    constructor(props) {
        super(props);
    };
    componentDidMount() {
        this.props.getAstroMDP();
    };
    render() {
        return (<>
        <div>Number of astronauts in space: {this.props.number}</div>
        <div>
            {this.props.people.map((person, i) => (
                <p key={i}>{person.craft} - {person.name}</p>
            ))}
        </div>
        </>);
    }
}

export default connect(mapStateToProps, {getAstroMDP})(Astro);