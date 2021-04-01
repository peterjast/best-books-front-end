import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import Login from './Login';
import Profile from './Profile';
import '../assets/App.css';
import Container from 'react-bootstrap/Container';
import MyFavoriteBooks from './MyFavoriteBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    console.log('app', this.props)
    return(
        <Router>
          <IsLoadingAndError>
            <Header />
            <Container>
              <Switch>
                <Route exact path="/">
                  { this.props.auth0.isAuthenticated && <MyFavoriteBooks properties={this.props}/> }
                  { !this.props.auth0.isAuthenticated && <Login/> }
                </Route>
                <Route exact path="/profile">
                  { this.props.auth0.isAuthenticated && <Profile /> }
                </Route>
              </Switch>
            </Container>
            <Footer />
          </IsLoadingAndError>
        </Router>
    )
  }
}

export default withAuth0(App);