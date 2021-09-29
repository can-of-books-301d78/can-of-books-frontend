import { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class LoginForm extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const userInfo = {
      email: event.target.formBasicEmail.value,
      username: event.target.formBasicUsername.value,
    };
    this.props.onLogin(userInfo);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicUsername'>
          <Form.Label>Username</Form.Label>
          <Form.Control type='text' placeholder='Username' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    );
  }
}

export default LoginForm;
