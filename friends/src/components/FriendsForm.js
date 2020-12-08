import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class FriendsForm extends React.Component {
    constructor() {
        super();
        this.state = {
            friend: {
                name: '', 
                age: '',
                email: ''
            }
        }
    }

    componentDidMount() {
        this.addFriend()
      }

    addFriend = () => {

        axiosWithAuth().post("http://localhost:5000/api/friends", this.state.friend)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err.response);
        })
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }

    render () {
        console.log(this.state.friends)
        return(
            <div>
                <form onSubmit={this.addFriend}>
                <h2>Friends Form</h2>
                <label>
                    Name:
                    <input
                        name="name"
                        value={this.state.friend.name}
                        onChange={this.handleChanges}
                    />
                </label>
                <label>
                    Age:
                    <input
                        name="age"
                        value={this.state.friend.age}
                        onChange={this.handleChanges}
                    />
                </label>
                <label>
                    Email:
                    <input
                        name="email"
                        value={this.state.friend.email}
                        onChange={this.handleChanges}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            </div>
        )
    }
}

export default FriendsForm;