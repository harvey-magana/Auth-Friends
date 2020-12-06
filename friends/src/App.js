import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

// Protected routes
// create a form to create new friends, make it a form component 
// create a logout function 

// 1. in App, import axios 
// 2. in App, import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// 3. Create your Login and FriendList component files and code. 
// 4. In your componnents directory, create PrivateRoutes.js file 
// 5. In PrivateRoutes, import React 
// 6. In PrivateRoutes, import { Route } from 'react-router-dom';
// 7. In PrivateRoutes, create PrivateRoutes component and pass in props
// 8. In PrivateRoutes component, return <Route {}...props} /> (make sure to export default the component as well...)
// 9. In App, import PrivateRoute
// 10. In App, add your routes to your components, but make them PrivateRoutes
// <PrivateRoute exact path="/protected" component={FriendList} />
// <Route path="/login" component={Login} />
// <Route component={Login} />
// 6. In Login, import axios 
// 7. In Login, add state for your login form 
// 8. In Login, add your event handling methods for your login form
// 9. In Login, create your login form
// 10. In FriendsList, add your state for the api data 
// 11. In FriendList, create getFriends() function that gets the api data

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
