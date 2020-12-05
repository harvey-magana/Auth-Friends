import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
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
        // add server logic here
        axios.post("http://localhost:5000/api/login", this.state.credentials)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data)
                //this.props.history.push('/protected')
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    render() {
        return (
            <div>
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
          </div>
        )
    }
}

export default Login;