import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import { Button } from 'react-bootstrap';

class Header extends React.Component {
// constructor(props){
// super(props);
// }

  render() {
    let navItem;
    let logout;
    if(this.props.user){
      navItem = <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>;
      
      logout = <Button className='logout' onClick={() => {this.props.onLogout()}}>Logout</Button>
    }
    console.log('nave',navItem)
    console.log('user', this.props.user);
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {navItem}
        {logout}
        {/* TODO: if the user is logged in, render the `LogoutButton` */}
      </Navbar>
    )
  }
}

export default Header;
