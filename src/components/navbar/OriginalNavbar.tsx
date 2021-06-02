import React, {FC} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Home, Info, Phone} from "react-feather";


const OriginalNavbar: FC = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{width: '100%'}}>
            <Navbar.Brand href="#home">
                <b>MyLibrary</b>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="mr-auto" />
                <Nav>
                    <Nav.Link href="#home">
                        <Home className="mr-1"/><span>Home</span>
                    </Nav.Link>
                    <Nav.Link href="#about">
                        <Info className="mr-1 ml-2"/><span>About</span>
                    </Nav.Link>
                    <Nav.Link href="#contactus">
                        <Phone className="mr-1 ml-2"/><span>Contact Us</span>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default OriginalNavbar;