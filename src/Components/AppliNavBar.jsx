import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import './Styles.css';

function AppliNavBar() {
    const [expanded, setExpanded] = useState(false);

    const toggleNavbar = () => {
        setExpanded(!expanded);
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
            <Container>
                <Navbar.Brand to="/" className='text-primary'>Sports Showroom</Navbar.Brand>
                <Navbar.Toggle onClick={toggleNavbar} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/viewStock" onClick={toggleNavbar} className='text-light' id='stock'>Stock</Nav.Link>
                        <Nav.Link href="/viewPurchase" onClick={toggleNavbar} className='text-light' id='purchase'>Purchase</Nav.Link>
                    </Nav>
                    <Navbar.Text>
                        Signed in as: <a style={{ textDecoration: "none", color: "white" }} href="#login">Karthikeyan R K</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppliNavBar;
