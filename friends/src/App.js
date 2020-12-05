import React from 'react';
import './App.css';

// Protected routes
// Login component (login page)
// create and save the login token to localStorage
// FriendsList component (FriendsList page)
// create a form to create new friends

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
    <div className="App">
      <header className="App-header">
        <p>I am a new project, I have great potential</p>
      </header>
    </div>
  );
}

export default App;
