import React from 'react'
import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
const Navheader = props => {
    return (
        <Navbar className="bg-white" collapseOnSelect expand="lg" >
  <Navbar.Brand href="/">
    <img src={props.imgsrc} alt="Logo"  className="d-inline-block align-top"/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="courses" id="links">Courses</Nav.Link>
      <Nav.Link href="#pricing"id="links">Discuss</Nav.Link>
      <Nav.Link href="blog"id="links">Blog</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets" id="sign-in">Sign In</Nav.Link>
      <Nav.Link  href="#memes" id="sign-up">
        Sign Up
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Navheader
