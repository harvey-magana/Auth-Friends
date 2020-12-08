import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import {
    Container,
    Divider,
    Grid,
    Header,
    List,
    Menu,
    Segment,
  } from 'semantic-ui-react';

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    logout = () => {
        localStorage.removeItem('token');
      }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    /*
        1. Connect to server with u/p
        2. Store the token that gets passed on successful login
        3. Output an error when we have an unsuccessful login
     */

    login = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                console.log(localStorage)
                this.props.history.push('/protected')
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    render() {
        return (
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
            <Header as='h1'>Finds some friends and make some too!</Header>
            <form onSubmit={this.login}>
              <input
                type="text"
                name="username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
              />
              <input
                type="password"
                name="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
              />
              <button>Log in</button>
            </form>
            </Container>

            <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
            <Container textAlign='center'>
                <Grid divided inverted stackable>
                <Grid.Column width={3}>
                    <Header inverted as='h4' content='Group 1' />
                    <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Header inverted as='h4' content='Group 2' />
                    <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Header inverted as='h4' content='Group 3' />
                    <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column width={7}>
                    <Header inverted as='h4' content='Footer Header' />
                    <p>
                    Extra space for a call to action inside the footer that could help re-engage users.
                    </p>
                </Grid.Column>
                </Grid>

                <Divider inverted section />
                <List horizontal inverted divided link size='small'>
                <List.Item as='a' href='#'>
                    Site Map
                </List.Item>
                <List.Item as='a' href='#'>
                    Contact Us
                </List.Item>
                <List.Item as='a' href='#'>
                    Terms and Conditions
                </List.Item>
                <List.Item as='a' href='#'>
                    Privacy Policy
                </List.Item>
                </List>
            </Container>
            </Segment>
          </div>
        )
    }
}

export default Login;