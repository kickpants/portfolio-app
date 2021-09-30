import React from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import "./ViewProject.css";
import { Image } from "react-bootstrap";
import { IoMdArrowBack, IoLogoYoutube, IoLogoGithub } from "react-icons/io";

const dropIn = {
  hidden: {
    x: "200vh",
    opactiy: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: "900ms",
      type: "spring",
      damping: 32,
      stiffness: 300,
    },
  },
  exit: {
    x: "-200vh",
    opacity: 0,
  },
};

const ViewProject = (props) => {
  return (
    <Backdrop onClick={props.handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="mymodal mymodal-background"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="header-row">
          <div className="back-button" onClick={props.handleClose}>
            <IoMdArrowBack />
          </div>
        </div>
        <Image src={props.image} className="thumb-class" />
        <div className="title-row">
          <div className="title">{props.title}</div>
        </div>
        <div className="body-text">
          {props.link != null ? (
            <div className="video-link">
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                <IoLogoYoutube /> Presentation Video
              </a>
            </div>
          ) : null}
          {props.source != null ? (
            <div className="video-link">
              <a href={props.source} target="_blank" rel="noopener noreferrer">
                <IoLogoGithub /> Source Code
              </a>
            </div>
          ) : null}
          <div className="description">{props.description}</div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default ViewProject;
