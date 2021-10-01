import React, { useState, useEffect } from "react";
import "./App.css";
import "./Navbar.css";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./screens/Home";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Skills from "./screens/Skills";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import homeImage from "./images/home.png";
import aboutImage from "./images/about_background.png";
import skillsImage from "./images/layered-waves-haikei.svg"
import myStyles from "./styles/myStyles";

function App() {
  const [isClicked, setIsClicked] = useState("Home");
  const [background, setBackground] = useState("url(" + homeImage + ")");
  const [fade, setFade] = useState(false);
  const [shadow, setShadow] = useState(true);
  const [items, setItems] = useState({
    id: "Home",
    content: <Home />,
    background: "url(" + homeImage + ")",
  });

  const isClickedHandler = (item) => {
    setIsClicked(item.id);
    setItems(item);
    setFade(true);
  };

  let imageLoad = true;

  useEffect(() => {
    //quick way to make images pre-load so there is no black screen
    //when switching components
    if (imageLoad) {
      const imagesPreload = [homeImage, aboutImage, skillsImage];
      imagesPreload.forEach((image) => {
        const newImage = new Image();
        newImage.src = image;
        window[image] = newImage;
    });
      imageLoad = false;
    }
    
    if (fade) {
      setTimeout(() => {
        if((items.id === "Home" || items.id === "About")) {
          setShadow(true);
        } else {
          setShadow(false);
        }
        setBackground(items.background);
        setFade(false);
      }, 400);
    }
  });

  const backgroundStyles = {
    background: background,
    height: "100%",
    maxWidth: "100%",
    overflowX: "hidden",
  };

  return (
    <div
      className={shadow && "background-shadow"}
      style={
        fade === true
          ? { ...backgroundStyles, ...myStyles.fadeOut }
          : { ...backgroundStyles, ...myStyles.fadeIn }
      }
    >
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
              isClickedHandler({
                id: "Home",
                content: <Home />,
                background: "url(" + homeImage + ")",
              });
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
              isClickedHandler({
                id: "About",
                content: <About />,
                background: "url(" + aboutImage + ")",
              });
            }}
          >
            About
          </Col>
          <Col
            xs
            lg="1"
            className={
              isClicked === "Skills"
                ? "navigation-text"
                : "navigation-text not-clicked"
            }
            id="Skills"
            onClick={() => {
              isClickedHandler({
                id: "Skills",
                content: <Skills />,
                background: "url(" + skillsImage + ")",
              });
            }}
          >
            Skills
          </Col>
          <Col
            xs
            lg="1"
            className={
              isClicked === "Projects"
                ? "navigation-text"
                : "navigation-text not-clicked"
            }
            id="Projects"
            onClick={() => {
              isClickedHandler({
                id: "Projects",
                content: <Projects />,
                background: null,
              });
            }}
          >
            Projects
          </Col>
        </Row>
      </Container>
      <div>
        <TransitionGroup>
          <CSSTransition key={items.id} timeout={1000} classNames="item">
            {items.content}
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default App;
