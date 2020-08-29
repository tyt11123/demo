import React from 'react';

export default class Link extends React.Component {
    render() {
        return (<>
        <p hidden={this.props.hidden}>
        <a target="_blank" rel="noopener noreferrer" href={this.props.url}>{this.props.title}</a>&nbsp;
        {this.props.tags.map((tag, index) => (<span key={index}>{tag}&nbsp;</span>))}
        <button onClick={this.props.removeLink}>Remove</button>
        </p>
        </>);
    };
};

// example usage:
// <Link url="https://google.com" title="Google" tags={["search", "apps", "map", "news"]}
// removeLink={() => this.deleteLink(i)} />