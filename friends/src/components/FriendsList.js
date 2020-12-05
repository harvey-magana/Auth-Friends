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
                console.log(res.data)
                //localStorage.setItem('token', res.data)
                //this.props.history.push('/protected')
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    formatData = () => {

    }

    render () {

        return(
            <div>Friends List Component</div>
        )
    }
}

export default FriendsList;