import React from 'react';
import FriendsForm from './FriendsForm';
import axiosWithAuth from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    constructor() {
        super() 
        this.state = {
            friends: []
        }
    }


    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axiosWithAuth().get("http://localhost:5000/api/friends")
            .then(res => {
                const friends = res.data;
                this.setState({ friends })
                console.log(localStorage)
                this.props.history.push('/protected')
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    render () {
        return(
            <div>
                <div>Friends List Component</div>
                {this.state.friends.map(friend => {
                    return <div key={friend.id}>
                        <ul>
                            <li>{friend.name} {friend.age} {friend.email}</li>
                        </ul>
                    </div>
                })}
                <FriendsForm />
            </div>
            
        )
    }
}

export default FriendsList;