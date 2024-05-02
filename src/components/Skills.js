import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import classes from "./Skills.module.css";
import skillsFile from "../skills.json";
import IconText from "./IconText";
import React from "react";
import Card from "./ui/Card";

function Skills(props) {
  return (
    <Card textTop={props.textTop} textBot={props.textBot} region={props.region} propRef={props.skillsRef}>
      <div className={classes.content}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div>
        {skillsFile.map((skill, index) => {
          return (
            <IconText key={index} width="110px" content={skill}>
              {skill.logo ? (
                <img
                  src={process.env.PUBLIC_URL + skill.logo}
                  width={"30px"}
                  height={"30px"}
                />
              ) : (
                <CheckBadgeIcon
                  color="green"
                  style={{ margin: "auto" }}
                  width={"30px"}
                  height={"30px"}
                />
              )}
              <p>{" " + skill.title}</p>
            </IconText>
          );
        })}
      </div>
    </Card>
  );
}

export default Skills;
