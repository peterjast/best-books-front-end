import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';
import '../assets/header.css';

class Header extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
          <Link to="/">Home</Link>
          <Link to="/profile" className="ml-3">Profile</Link>
          <div className='ml-auto'>
            { !this.props.auth0.isAuthenticated && <LoginButton /> }
            { this.props.auth0.isAuthenticated && <LogoutButton /> }
          </div>
      </Navbar>
    )
  }
}

export default withAuth0(Header);