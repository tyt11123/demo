import React from 'react';
import { connect } from 'react-redux';

export const UserList = (props) => {
    return (
        <div>
        {props.usersMSP.map(l => (
            <div>{l.username} - {l.description}</div>
        ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        usersMSP: state.Users,
    }
}

export default connect(mapStateToProps)(UserList);