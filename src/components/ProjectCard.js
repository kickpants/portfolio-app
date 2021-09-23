import React from "react";
import { Container, Row, Image } from "react-bootstrap";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <Container className="card-container">
      <Container style={{ width: "50%", textAlign: "left", paddingLeft: "0" }}>
        <Image src={props.image} className="image-class" />
      </Container>
      <Container style={{ width: "50%" }}>
        <Row className="title-row">{props.title}</Row>
        <Row className="summary-row">{props.summary}</Row>
      </Container>
    </Container>
  );
};

export default ProjectCard;
