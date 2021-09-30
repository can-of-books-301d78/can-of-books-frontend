import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

class BookFormModal extends Component {

  handleSubmit = event => {
    event.preventDefault();
    const newBookInfo = {
      title: event.target.formTitle.value,
      status: event.target.formStatus.value,
      description: event.target.formDescription.value,
    };
    this.props.onCreate(newBookInfo) 
  }
  render() {
    console.log(this.props);
    return (
      <>
      <Modal show={this.props.show}>
        < Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Book Title</Form.Label>
            <Form.Control type="text" placeholder="Cool Book Title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control type="text" placeholder="Read/Unread" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Book Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form >
        </Modal>
      </>
    )
  }
}

export default BookFormModal;