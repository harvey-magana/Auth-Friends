import React from 'react';
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
                this.props.history.push('/protected')
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    formatData = () => {

    }

    logout = () => {
        console.log(this)
        localStorage.clear('token');
        this.props.history.push('/')
      };

    render () {
        console.log(this.state.friends)
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