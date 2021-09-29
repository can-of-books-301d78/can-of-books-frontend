import { Component } from 'react';
import { Button } from 'react-bootstrap';
import LoginForm from './LoginForm';

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = { showForm: false };
  }
  handleClick = () => {
    this.setState({
      showForm: true,
    });
  };

  render() {
    if (this.state.showForm) {
      return <LoginForm onLogin={this.props.onLogin} />;
    } else {
      return <Button onClick={this.handleClick}>Log In</Button>;
    }
  }
}
