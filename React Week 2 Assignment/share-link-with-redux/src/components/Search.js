import React from 'react';

export default class Search extends React.Component {
    render () {
        return (<>
        <input type='text' placeholder="Search" onChange={this.props.handleChange}/>
        </>);
    }
};