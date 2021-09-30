import React from "react";
import "./SkillCard.css";

const SkillCard = (props) => {
  return (
    <div className="card-box">
      <div className="skill-container">
        <img className="skill-image" src={props.icon} />
      </div>
      <div className='skill-text-container'>
        {props.name}
      </div>
    </div>
  );
};

export default SkillCard;
