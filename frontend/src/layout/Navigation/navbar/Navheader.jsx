import React from 'react'
import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navheader = props => {
  let links;
  if(!props.isAuth){
    links=(
      <Nav>
      <Nav.Link href="login" id="sign-in">
        Sign In</Nav.Link>
      <Nav.Link  href="register" id="sign-up">
        Sign Up
      </Nav.Link>
    </Nav>
    )
  } else{
    links=(
      <Nav>
      <Nav.Link  href="profile" id="sign-up">
        Profile
      </Nav.Link>
    </Nav>)


  }



    return (
  <Navbar className={(props.loc==="/") ||(props.loc==="/courseDetails") ? "bg-white": "bg-green" } collapseOnSelect expand="lg" >
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
   {links}
  </Navbar.Collapse>
</Navbar>
    )
}

export default Navheader
