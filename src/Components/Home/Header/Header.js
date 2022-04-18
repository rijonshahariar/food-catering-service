import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init'
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Aahar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href="#menu">Food Items</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ? <button onClick={handleSignOut}>Sign out</button> :
                                    <>
                                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                        <Nav.Link as={Link} to="/register" type="button" class="btn btn-primary">Register</Nav.Link>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;