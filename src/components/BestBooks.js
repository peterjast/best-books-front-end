import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import bgImg from '../assets/background.jpg';

class BestBooks extends React.Component {
  constructor(props){
      super(props);
      this.state={
          books: []
      }
  }  

  componentDidMount = () => {
    console.log(this.props.properties);
    const SERVER = 'http://localhost:3001';
    axios.get(`${SERVER}/books`, { params: {email: this.props.properties.auth0.user.email}})
        .then(books => {
            this.setState({ books: books.data });
            console.log('books', books, books.data);   
        })
        .catch(error => {console.log(error.message)})
  };

  render() {
    return(
      <>  
      {this.state.books.length > 0 &&
      <Carousel className="w-50 mx-auto">
      {this.state.books.map((book, i) => (    
        <Carousel.Item key={i}>
            <img
                className="d-block w-100"
                src={bgImg}
                alt={`${book.name} ${book.description}`}
                />
            <Carousel.Caption>
            <h3>{book.name}</h3>
            <p>{`Description: ${book.description} Status: ${book.status}`}</p>
            </Carousel.Caption>
        </Carousel.Item> 
      ))}
      </Carousel>
      }
      </>
    )
  }
}

export default BestBooks;