import React from 'react';
import './Header.css'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/it_logo-removebg-preview (1).png'
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="white">
                <div className="container mx-auto">
                    <Link className="navbar-brand " to="/home"><img className="logo img-fluid" src={logo} alt="" /><span className="logo-text">TRAVEL</span></Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="nav-bar">
                            <Nav.Item>
                                <Nav.Link className="nav-text" eventKey="1" as={Link} to="/Home">
                                    <span className="nav-text">Home</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="nav-text" eventKey="2" as={Link} to="/mybookings">
                                    <span className="nav-text">My Bookings</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="nav-text" eventKey="3" as={Link} to="/managebooking">
                                    <span className="nav-text">Manage All Bookings</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="nav-text" eventKey="3" as={Link} to="/newplace">
                                    <span className="nav-text">Add New Place</span>
                                </Nav.Link>
                            </Nav.Item>
                            <span className="userName" style={{ color: 'black' }}> {user?.displayName} </span>
                            <Nav.Item>
                                {user.email ?
                                    <Nav.Link onClick={logout}> <span className="logout-btn">Log Out</span> </Nav.Link>
                                    :
                                    <Nav.Link eventKey="4" as={Link} to="/login">
                                        <span className="nav-text">Login</span>
                                    </Nav.Link>}
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            <div className="banner">
                <h1 style={{ color: '#F58220' }}>
                    Welcome Amigos <br />
                    <span>to our tour and travel planer site</span>
                </h1>
                <p>
                    Doctors Care Hospital is directed maintained by some specilized doctors . That's why we named it <br /> Doctors Care Hospital.It is situated at Banani, Dhaka.It started its journey back in 2009, <br /> it has grown-up as one of the largest Industrial  Commercial Icons.
                </p>
            </div>
        </>
    );
};

export default Header;