import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import "./nav.css";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex"></Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                to="about"
                href="#about"
                onClick={() => updateExpanded(false)}
              >
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                to="products"
                href="#products"
                onClick={() => updateExpanded(false)}
              >
                Products
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="approach" href="#approach">
                Approach
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="Team" href="#benefits">
                Benefits
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
