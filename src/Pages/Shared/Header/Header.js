import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './header.css'

const Header = () => {
    return (
        <>
            <Navbar className="nav-custom" collapseOnSelect expand="lg" variant="dark">
                <Container>
                <Navbar.Brand href="/home"><span><span>M</span>edical</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/doctors">Doctors</Nav.Link>
                        <Nav.Link as={HashLink} to="/about">About Us</Nav.Link>
                        <Nav.Link as={HashLink} to="/contact">Contacts</Nav.Link>
                        </Nav>
                        <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      </>
    );
};

export default Header;