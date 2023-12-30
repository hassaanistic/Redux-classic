import React, { useEffect } from 'react';
import { fetchUsers } from '../redux';
import { connect } from 'react-redux';

const UserContainer = ({ fetchUsers, userData }) => {
    useEffect(() => {
        fetchUsers();
        
    }, []);

    console.log('usersData', userData); // Log the users to check the data

    return <div>

        {userData && userData.users.map((user) => (
            <p key={user.id}>{user.name}</p>
        ))}
    </div>

};

const mapStateToProps = (state) => {
   
    return {
        // userData: state.users    
        userData: state.user // this is important s
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
