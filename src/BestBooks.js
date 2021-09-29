import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

const SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: '',
    };
  }

  /* DONE: Make a GET request to your API to fetch books for the logged in user  */
  async componentDidMount() {
    let response = await axios.get(`${SERVER}/books`);
    console.log(response.data);
    // set response from axios to state
    try {
      this.setState({ books: response.data });
    } catch (error) {
      console.log(error);
    }
  }

  // add this.state.books to render return

  render() {
    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books ? (
          // render this.state.books here in a carosel
          // <p>Book Carousel coming soon</p>
          <Carousel>
            {this.state.books.map(book => {
              return (
                // <Carousel.Item>
                //   <Book
                //     title={book.title}
                //     description={book.description}
                //     status={book.status}
                //     email={book.email}
                //   ></Book>
                // </Carousel.Item>

                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src='./assets/book_image.jpeg'
                    alt='Second slide'
                  />
                  <Carousel.Caption>
                    <h3>{this.state.title}l</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}

            {/*<Carousel.Item>
              <img
                className='d-block w-100'
                src='holder.js/800x400?text=Third slide&bg=20232a'
                alt='Third slide'
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item> */}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
