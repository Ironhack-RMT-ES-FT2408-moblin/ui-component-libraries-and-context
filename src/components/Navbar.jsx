import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';

// agregando un button de bootstrap, YAY!

function MyNavbar() {

  const { toggletheme, isDarkTheme } = useContext(ThemeContext)


  return (
    <Navbar expand="lg" data-bs-theme={isDarkTheme ? "dark" : "light"}>
      <Container>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/contact">Contacts</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/book/list">Book List</Nav.Link>
            <Nav.Link as={Link} to="/book/add">Add a Book</Nav.Link>
            <Button className={isDarkTheme ? "dark-theme-btn" : "light-theme-btn"} onClick={toggletheme}>☀️/🌑</Button>
          </Nav>
        </Navbar.Collapse>

      </Container>

    </Navbar>
  )
}

export default MyNavbar