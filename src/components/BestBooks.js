import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import bgImg from '../assets/background.jpg';
import AddBook from './AddBook';
import BookFormModal from './BookFormModal';
import Delete from './Delete';

class BestBooks extends React.Component {
  constructor(props){
      super(props);
      this.state={
          books: [],
          show: false,
          bookName: '',
          bookDescription: '',
          bookStatus: ''
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

  handleAddBook = () => {
    this.setState({ show: true });
  }

  handleClose = () => {
    this.setState( {show:false });
  }

  updateBookName = (bookName) => {
    this.setState({ bookName });
  }

  updateBookDescription = (bookDescription) => {
    this.setState({ bookDescription });
  }

  updateBookStatus = (bookStatus) => {
    this.setState({ bookStatus });
  }

  addABook = async (e) => {
    e.preventDefault();
    try {
      const server = process.env.REACT_APP_SERVER;
      const books = await axios.post(`${server}/books`, {name:this.state.bookName, description:this.state.bookDescription, status:this.state.bookStatus, email: this.props.properties.auth0.user.email});
      this.setState({ books:books.data });
    } catch (err) {
      console.log(err.message);
    }
  }

  deleteBook = async (index) => {
    const server = process.env.REACT_APP_SERVER;
    const newBooks = await axios.delete(`${server}/books/${index}`, {params: {email: this.props.properties.auth0.user.email}});
    console.log(newBooks);
    const newBookArray = this.state.books.filter((book, i) => index !== i);
    console.log(newBookArray);
    this.setState({ books: newBookArray });
  } 

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
            <h3>{book.name} <Delete inline index={i} deleteBook={this.deleteBook}/></h3>
            <p>{`Description: ${book.description}`} <br /> {`Status: ${book.status}`}</p>
            </Carousel.Caption>
        </Carousel.Item> 
      ))}
      </Carousel>
      }
      <AddBook show={this.handleAddBook}/>
      <BookFormModal
        show={this.state.show}
        handleClose={this.handleClose}
        updateBookName={this.updateBookName}
        updateBookDescription={this.updateBookDescription}
        updateBookStatus={this.updateBookStatus}
        addABook={this.addABook}
      />
      </>
    )
  }
}

export default BestBooks;