import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Navbars = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>NEWS.NEWS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/dashboard/homepage">Home</Nav.Link>
            <Nav.Link href="/">Exit</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
