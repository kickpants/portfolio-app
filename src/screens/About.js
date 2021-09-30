import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import myResume from "../data/JacobHighbridge_Resume3.0.pdf";
import myTranscripts from "../data/Academic_Transcript.pdf";

const About = () => {
  return (
    <Container>
      <Container className="position">
        <Container className="text-box">
          <Row className="title-background-1">
            <Col className="title-text-1">
              Growing up, computers always seemed like magic.
            </Col>
          </Row>
          <Row>
            <Col className="box-text">
              As I got older, my curiosity evolved into game modding for fun and
              tinkering with electronics. Eventually, that path led to coding,
              and then to software engineering; which seemed to be the perfect
              culmination of my favorite hobbies.
            </Col>
          </Row>
          <Row>
            <Col className="box-text">
              To put it simply, I enjoy creating things and watching them work.
            </Col>
          </Row>
          <Row>
            <Col className="title-text-2">What do I know?</Col>
          </Row>
          <Row>
            <Col className="box-text">
              I graduated from FAU with a BS in Computer Science in August 2021,
              finishing with a GPA of 3.7. Throughout my journey there, I became
              familiar with important concepts such as OOP and the principles of
              software engineering.
            </Col>
          </Row>
          <Row>
            <Col className="box-text">
              In case you're interested...
              <br />
              <a
                href={myResume}
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume
              </a>
              <br />
              <a
                href={myTranscripts}
                target="_blank"
                rel="noopener noreferrer"
              >
                My Academic Transcripts
              </a>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
};

export default About;
