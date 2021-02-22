import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./my-navbar.styles.css";

const MyNavbar = () => {
  return (
    <div className="navbar">
      <Navbar >
        <div>
  
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              
              
              
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
