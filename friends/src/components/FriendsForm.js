import React from 'react';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

class FriendsForm extends React.Component {
    state = {
        friends: [{
            name: '',
            age: '',
            email: ''
        }]
    }

    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    componentDidMount() {
        //this.getData()
        this.addFriend()
    }

    /*
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
    */

    addFriend = (newFriend) => {
        let friendData = newFriend;
        
        axiosWithAuth().post("http://localhost:5000/api/friends", friendData)
        .then(res => {
            //const friends = res.data;
            //this.setState({ friends })
            //console.log(friends)
            localStorage.getItem('token', res.data.payload)
        })
        .catch(err => {
            console.log(err.response);
        })
        
    }

    formatData = () => {

    }

    handleChanges = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state)
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.addFriend(this.state.friends);
        this.setState({
          name: '', 
          age: '', 
          email: ''
        })
    };

    render () {
        console.log(this.state.friends)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <h2>Friends Form</h2>
                <label>
                    Name:
                    <input
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChanges}
                    />
                </label>
                <label>
                    Age:
                    <input
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChanges}
                    />
                </label>
                <label>
                    Email:
                    <input
                        name="height"
                        value={this.state.email}
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