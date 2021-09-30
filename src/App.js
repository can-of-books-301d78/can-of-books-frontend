import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
const SERVER = process.env.REACT_APP_SERVER;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
    };
  }

  loginHandler = user => {
    this.setState({
      user: user,
    });
  };

  logoutHandler = async () => {
    await this.setState({
      user: undefined,
    });
  };

  render() {
    console.log(this.state.user)
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path='/'>
              {this.state.user ? (
                <BestBooks user={this.state.user} />
              ) : (
                <Login onLogin={this.loginHandler} />
              )}
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

// this comment is to test a bug - this can be deleted after it is merged

export default App;
