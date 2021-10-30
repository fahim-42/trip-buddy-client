import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from './../../../Hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand as={Link} to="/home">TripBuddy</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>

                        {user.displayName &&
                        <Nav.Link as={HashLink} to="/my-orders">My Orders</Nav.Link>}
                        {user.displayName &&
                        <Nav.Link as={HashLink} to="/manage-orders">Manage Orders</Nav.Link>}
                        {user.displayName &&
                        <Nav.Link as={HashLink} to="/add-service">Add Service</Nav.Link>}

                        {user.displayName ?
                            <Nav.Link as={HashLink} onClick={logout} to="/login">Logout</Nav.Link> :
                            <Nav.Link as={HashLink} to="/login">Login</Nav.Link>}

                        {user.displayName &&
                            <Navbar.Text>
                                Hi, {user?.displayName}
                            </Navbar.Text>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;