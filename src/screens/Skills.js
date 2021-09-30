import React from "react";
import "./Skills.css";
import SkillData from "../data/skills";
import SkillCard from "../components/SkillCard";
import { Container } from "react-bootstrap";

const Skills = () => {
  return (
    <div className="skills-background">
      
      <div className="spacer skills-container">
        {SkillData.map((item) => (
          <div className="skill-card-container">
            <SkillCard icon={item.icon} name={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
