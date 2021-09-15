import React, { useState } from "react";
import "./Navbar.css";
import { Container, Row, Col } from "react-bootstrap";

const Navbar = (props) => {
  const [isClicked, setIsClicked] = useState("Home");

  return (
    <Container className="navigation-bar">
      <Row className="navigation-row">
        <Col
          xs
          lg="1"
          className={
            isClicked === "Home"
              ? "navigation-text"
              : "navigation-text not-clicked"
          }
          onClick={() => {
            setIsClicked("Home");
          }}
        >
          Home
        </Col>
        <Col
          xs
          lg="1"
          className={
            isClicked === "About"
              ? "navigation-text"
              : "navigation-text not-clicked"
          }
          onClick={() => {
            setIsClicked("About");
          }}
        >
          About
        </Col>
        <Col
          xs
          lg="1"
          className={
            isClicked === "Projects"
              ? "navigation-text"
              : "navigation-text not-clicked"
          }
          onClick={() => {
            setIsClicked("Projects");
          }}
        >
          Projects
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
