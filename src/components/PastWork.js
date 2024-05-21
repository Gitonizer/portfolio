import React from "react";
import projects from "../projects.json";
import classes from "./PastWork.module.css";
import Card from "./ui/Card";
import ProjectPreview from "./ProjectPreview";

function PastWork(props) {
  return (
    <Card textTop={props.textTop} textBot={props.textBot} region={props.region} propRef={props.pastWorkRef}>
      <div className={classes.content}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <ul className={classes.ul}>
        {projects.map((project, index) => {
          return (
            <li className={classes.li} key={index}>
              {project.media && <ProjectPreview project={project} />}
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default PastWork;
