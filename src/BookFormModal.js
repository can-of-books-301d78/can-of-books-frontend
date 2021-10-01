import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
// import { render } from '@testing-library/react';

class BookFormModal extends Component {
  handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.formTitle);
    const newBookInfo = {
      title: event.target.formTitle.value,
      status: event.target.formStatus.value,
      description: event.target.formDescription.value,
    };
    this.props.onCreate(newBookInfo);
    this.props.close();
  };

  render() {
    // console.log(this.props);
    // console.log(this.handleSubmit);
    // console.log(this.handleClose);

    return (
      <>
        <Modal show={this.props.show} onHide={this.props.close}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className='mb-3' controlId='formTitle'>
              <Form.Label>Book Title</Form.Label>
              <Form.Control type='text' placeholder='Cool Book Title' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formStatus'>
              <Form.Label>Status</Form.Label>
              <Form.Control type='text' placeholder='Read/Unread' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formDescription'>
              <Form.Label>Book Description</Form.Label>
              <Form.Control as='textarea' rows={3} />
            </Form.Group>

            <Modal.Footer>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
              <Button variant='secondary' onClick={this.props.close}>
                Close
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
}

export default BookFormModal;
