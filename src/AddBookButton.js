import React from 'react';
import Button from 'react-bootstrap/Button';
import { Component } from 'react';
import BookFormModal from './BookFormModal';

class AddBookButton extends Component {
  constructor(props) {
    super(props);
    this.state = { showForm: false };
  }

  // bring in function for onCreate as props and pass to bookformmodal
  handleClick = () => {
    this.setState({
      showForm: true,
    });
  };

  handleClose = () => {
    this.setState({
      showForm: false,
    });
  };

  render() {
    return (
      <>
        <Button onClick={this.handleClick}>Add a book!</Button>
        <BookFormModal
          close={this.handleClose}
          show={this.state.showForm}
          onCreate={this.props.onCreate}
        />
      </>
    );
  }
}

export default AddBookButton;
