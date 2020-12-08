import React from 'react';
import FriendsForm from './FriendsForm';
import axiosWithAuth from '../utils/axiosWithAuth';
import { NavLink } from 'react-router-dom';
import {
    Container,
    Divider,
    Grid,
    Header,
    List,
    Menu,
    Segment,
  } from 'semantic-ui-react'

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
                <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item header>
                    <NavLink to="/login">Login</NavLink>
                    </Menu.Item>
                    <Menu.Item><NavLink to="/login" onClick={this.logout}>Logout</NavLink></Menu.Item>
                    <Menu.Item><NavLink to="/protected">Protected Page</NavLink></Menu.Item>
                </Container>
                </Menu>
                <Container text style={{ marginTop: '7em', height: '20em' }}>
                <div>Friends List Component</div>
                {this.state.friends.map(friend => {
                    return <div key={friend.id}>
                        <ul>
                            <li>{friend.name} {friend.age} {friend.email}</li>
                        </ul>
                    </div>
                })}
                <FriendsForm />
                </Container>

            </div>
            
        )
    }
}

export default FriendsList;