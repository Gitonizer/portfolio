import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import classes from "./Skills.module.css";
import skillsFile from "../skills.json";
import IconText from "./IconText";
import React from "react";
import Card from "./ui/Card";

function Skills(props) {
  return (
    <Card textTop={props.textTop} textBot={props.textBot} region={props.region}>
      <div className={classes.content}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div>
        {skillsFile.map((skill) => {
          return (
            <IconText key={skill.id} width="100px">
              <CheckBadgeIcon color="green" style={{ margin: "auto" }} />
              <p>{skill.name}</p>
            </IconText>
          );
        })}
      </div>
    </Card>
  );
}

export default Skills;
