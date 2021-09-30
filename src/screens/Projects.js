import React, { useState } from "react";
import "./Projects.css";
import { Container, Row } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import ProjectData from "../data/data";
import ViewProject from "../components/ViewProject";
import { AnimatePresence } from "framer-motion";
import { IoLogoGithub } from "react-icons/io";

const Projects = () => {
  const [showProject, setShowProject] = useState(false);
  const [currentProject, setCurrentProject] = useState("");

  const close = () => setShowProject(false);
  const open = () => setShowProject(true);

  const clickHandler = (item) => {
    setCurrentProject(
      <ViewProject
        title={item.title}
        description={item.description}
        image={item.thumbnail}
        link={item.link}
        source={item.source}
        showProject={showProject}
        handleClose={close}
      />
    );
  };

  return (
    <Container>
      <Container className="position">
        <div className="divider" />
        {showProject && currentProject}
        <AnimatePresence
          exitBeforeEnter={true}
          initial={false}
          onExitComplete={() => null}
        >
          {showProject && currentProject}
        </AnimatePresence>
        <div className="remark">Some stuff I've worked on...</div>
        <Container style={{ textAlign: "center" }}>
          {ProjectData.map((item) => (
            <div
              onClick={() => {
                showProject ? close() : open();
                clickHandler(item);
              }}
            >
              <ProjectCard
                key={item.id}
                title={item.title}
                summary={item.summary}
                image={item.thumbnail}
              />
            </div>
          ))}
        </Container>
        <div class="footer">
          <a
            href="https://github.com/kickpants/portfolio-app"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub /> Github Page for This Site
          </a>
        </div>
      </Container>
    </Container>
  );
};

export default Projects;
