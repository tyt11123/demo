import React from 'react';
import { connect } from 'react-redux';

const PureLinkList = (props) => {
    return (
        <div>
        {props.linksMSP.map(l => (
            <div>{l.title} - {l.url}</div>
        ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        linksMSP: state.linksRootReducer,
    }
}

const LinkList = connect(mapStateToProps)(PureLinkList);

export default LinkList;