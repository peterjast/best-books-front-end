import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import '../assets/myFavoriteBooks.css';
import BestBooks from './BestBooks';


class MyFavoriteBooks extends React.Component {
  render() {
    return(
      <>
        <Jumbotron className="mx-auto w-75 bg-dark text-light">
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
          <BestBooks properties={this.props.properties} />
        </Jumbotron>
      </>
    )
  }
}

export default MyFavoriteBooks;
