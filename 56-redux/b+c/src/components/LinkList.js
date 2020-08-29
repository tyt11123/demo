import React from 'react';
import { connect } from 'react-redux';
import {ADD_LINK_ACTION, CLEAR_LINK_ACTION, REMOVE_LINK_ACTION} from "../redux/constants";

const PureLinkList = (props) => {
    return (
        <div>
        <button onClick={props.addLinkMDP}>New Link</button>
        <button onClick={props.clearLinkMDP}>Clear</button>
        {props.linksMSP.map((l,i) => (
            <div key={i}>
              <span>{l.title} - {l.url}</span>
              &nbsp;
              <button onClick={props.removeLinkMDP}>Remove</button>
            </div>
        ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        linksMSP: state.linksReducer,
    }
}

// Add the `mapDispatchToProp`
const mapDispatchToProps = (dispatch) => {
    return {
      addLinkMDP: () => dispatch({
        type: ADD_LINK_ACTION,
        link: {
          title: 'Xccelerate',    
          url: 'https://www.xccelerate.co'
        }
      }),
      clearLinkMDP: () => dispatch({
        type: CLEAR_LINK_ACTION
      }),
      removeLinkMDP: () => dispatch({
        type: REMOVE_LINK_ACTION
      })
    }
  }

const LinkList = connect(mapStateToProps, mapDispatchToProps)(PureLinkList);

export default LinkList;