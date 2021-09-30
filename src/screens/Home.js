import React from "react";
import { Container, Image, Col, Row } from "react-bootstrap";
import "../App.css";
import "./Home.css";
import headshotImage from "../images/headshot.png";

const Home = () => {
  return (
    <Container>
      <Container className="position">
        <Container className="image-container">
          <Image src={headshotImage} className="image" />
        </Container>
        <Container className="text-container">
          <Row>
            <Col md='auto' className='top-row'>
            Hello! I'm Jacob Highbridge, a recently graduated Software Engineer from Florida. If
            you'd like to learn more about me, click the About and Projects links.
            </Col>
          </Row>
          <Row style={{paddingTop: '25px', justifyContent: 'center'}}>
            <Col md={5} className='bottom-row'>
              If you’d like to get in contact, email me at:
              jake.highbridge@gmail.com
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
};

export default Home;
