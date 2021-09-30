import {
  aws,
  cplus,
  css,
  docker,
  express,
  git,
  html5,
  javascript,
  matlab,
  node,
  php,
  python,
  react,
  sql,
} from "../images";
import Skill from "../models/skill.js";

const SkillData = [
  new Skill(html5, "HTML5"),
  new Skill(css, "CSS3"),
  new Skill(javascript, "JavaScript"),
  new Skill(php, "PHP"),
  new Skill(cplus, "C++"),
  new Skill(python, "Python"),
  new Skill(node, "Node.js"),
  new Skill(express, "Express.js"),
  new Skill(react, "React + Native"),
  new Skill(docker, "Docker"),
  new Skill(sql, "SQL"),
  new Skill(aws, "AWS RDS + EC2"),
  new Skill(git, "Git"),
  new Skill(matlab, "MATLAB"),
];

export default SkillData;
