//Navbar Component
import React from 'react'

//Import CSS
import './index.css';

//import Library
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
    return (
            <Navbar
                bg="light"
                className="flex justify-start items-center p-0"
            >
                <Container
                    className="px-2 flex flex-col sm:flex-row"
                >
                    <Navbar.Brand href="./index.html">
                        <img
                            src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Photos-512.png"
                            alt="logo-photosite"
                            width="30"
                            height="30"
                        />
                        Photosite
                    </Navbar.Brand>
                    <div className="my-2">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link
                                    className="nav-link-top"
                                    id="nav-home"
                                    aria-current="page"
                                    href="/"
                                >
                                Homepage
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    className="nav-link-top"
                                    id="nav-gallery"
                                    target="_self"
                            >
                                Gallery
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
    )
}

export default NavbarComponent;
