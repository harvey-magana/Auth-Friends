import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/*
    1. It has the same interface as Route 
    2. It renders a <Route /> and passes props into it
    3. It checks if the user has authentication 
        token and if they do, it rendered the passed in component
    4. If the user does not have an authentication token, it redirects to /login
 */

 // in a real world scenrio, make sure that the token is generated from your back end and has as expiration. 
 
 const PrivateRoute = ({ component: Component, ...rest}) => {
     console.log("nice try...")
     return <Route {...rest} render={() => {
         // here, add logic for checking if there is an auth token
         if (localStorage.getItem('token')) {
             return <Component />
         }
         return <Redirect to="/login" />
     }} />
 }
 

 /*
 const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
  */

 export default PrivateRoute;