import React, { useState, useEffect } from "react";
import "./App.css";
import "./Navbar.css";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./screens/Home";
import About from "./screens/About";
import Projects from "./screens/Projects";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import homeImage from "./images/home.png";
import aboutImage from "./images/about_background.png";
import myStyles from "./styles/myStyles";

function App() {
  const [isClicked, setIsClicked] = useState("Home");
  const [background, setBackground] = useState(homeImage);
  const [fade, setFade] = useState(false);
  const [items, setItems] = useState({
    id: "Home",
    content: <Home />,
    background: homeImage,
  });

  const isClickedHandler = (item) => {
    setIsClicked(item.id);
    setItems(item);
    setFade(true);
  };

  useEffect(() => {
    if (fade) {
      setTimeout(() => {
        setBackground(items.background);
        setFade(false);
      }, 400);
    }
  });

  const backgroundStyles = {
    backgroundImage: "url(" + background + ")",
    backgroundSize: "cover",
    height: "100%",
    maxWidth: "100%",
    overflowX: "hidden",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  return (
    <div
      style={
        fade === true
          ? { ...backgroundStyles, ...myStyles.fadeOut }
          : { ...backgroundStyles, ...myStyles.fadeIn }
      }
    >
      <div className="background-shadow">
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
                  background: homeImage,
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
                  background: aboutImage,
                });
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
              id="Projects"
              onClick={() => {
                isClickedHandler({ id: "Projects", content: <Projects /> });
              }}
            >
              Projects
            </Col>
          </Row>
        </Container>
        <Container>
          <TransitionGroup>
            <CSSTransition key={items.id} timeout={1000} classNames="item">
              {items.content}
            </CSSTransition>
          </TransitionGroup>
        </Container>
      </div>
    </div>
  );
}

export default App;
