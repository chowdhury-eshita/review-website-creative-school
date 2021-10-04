import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home" className="me-5">
                        <img
                            alt=""
                            src="/logo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Creative School
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                        >
                            <Link className="nav nav-link" to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >Home</Link>
                            <Link className="nav nav-link" to="/courses"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >Courses</Link>
                            <Link className="nav nav-link" to="/enrolled"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >Enrolled Now</Link>
                            <Link className="nav nav-link" to="/about"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >About Us</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;