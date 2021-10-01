import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import AddBookButton from './AddBookButton';

const SERVER = process.env.REACT_APP_SERVER;
console.log(SERVER);
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  /* DONE: Make a GET request to your API to fetch books for the logged in user  */
  async componentDidMount() {
    try {
      axios
        .get(`${SERVER}/books?email=${this.props.user.email}`, {
          headers: {
            'Content-Type': 'application/json',
            'access-control-allow-origin': '*',
          },
        })
        .then(response => {
          this.setState({ books: response.data });
        });

      /*
    let response = await axios.get(
      `${SERVER}/books?email=${this.props.user.email}`
    );
    console.log(response.data);
    */
    } catch (error) {
      console.log(error);
    }
  }
  
  // LOOK AT JB's code for hints
  // write function for onCreate that makes a POST request to /books with body as content from BOokFormModal form and email comming from user (login). User email should be attached as a query string
  handleCreate = async (bookInfo) => {
    const newBookResponse = await axios.post(SERVER, bookInfo);
    

    // this.getBooks();// DANGER: losing location
  };
  // pass onCreate function to AddBookButton

  
  
  
  render() {
    let books;
    if (this.state.books.length > 0) {
      books = this.state.books.map(book => (
        <Carousel.Item key={book._id}>
          <img
            className='d-block w-100'
            src='https://designshack.net/articles/software/placeholder-image/'
            alt={book.description}
          />
          <Carousel.Caption>
            <h3>{book.title}l</h3>
            <p>{book.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ));
    }
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <AddBookButton />
        {this.state.books.length > 0 ? (
          <Carousel className='w-50'>{books}</Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
