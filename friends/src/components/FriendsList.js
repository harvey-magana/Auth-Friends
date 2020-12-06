import React from 'react';
//import FriendsForm from './FriendsForm';
import axiosWithAuth from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axiosWithAuth().get("http://localhost:5000/api/friends")
            .then(res => {
                const friends = res.data;
                this.setState({ friends })
                localStorage.setItem('token', res.data.payload)
                console.log(localStorage)
                this.props.history.push('/protected')
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    formatData = () => {

    }

    logout = () => {
        localStorage.clear('token');
        this.props.history.push('/')
      };

    render () {
        return(
            <div>
                <div>Friends List Component</div>
                {this.state.friends.map(friend => {
                    return <div key={friend.id}>{friend.name}</div>
                })}
                <button onClick={this.logout}>Logout</button>

            </div>
            
        )
    }
}

export default FriendsList;