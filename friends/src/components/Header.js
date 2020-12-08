import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Headerr = styled.header`
 background-color: #fff;
 width: 100%;
 color: white;
`;

const Header = () => {
    const logout = () => {
        localStorage.removeItem('token');
      }
    return (
        <div className="header">
            <Headerr>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/login" onClick={logout}>Logout</NavLink>
                <NavLink to="/protected">Protected Page</NavLink>
            </Headerr>
        </div>
    )
}

export default Header;