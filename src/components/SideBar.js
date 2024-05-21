import classes from "./SideBar.module.css";
import {
  InformationCircleIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";
import { useState, useContext } from "react";
import SideBarContext from "../store/sidebar-context";
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/linkedin'
import 'react-social-icons/github';

function SideBar() {
  const [region, setRegion] = useState("#about");
  const sidebarCtx = useContext(SideBarContext);

  function handleClick(e, clickedRegion) {
    e.preventDefault();
    setRegion(clickedRegion);
    sidebarCtx.changeCurrentRegion(clickedRegion);
  }

  return (
    <div className={classes.sidebar}>
      <a
        href="about"
        className={region == "#about" ? classes.active : ""}
        onClick={(e) => {
          handleClick(e, "#about");
        }}
      >
        <div className={classes.container}>
          <InformationCircleIcon height="30px" />
          <div className={classes.text}>About Me</div>
        </div>
      </a>
      <a
        href="#skills"
        className={region == "#skills" ? classes.active : ""}
        onClick={(e) => {
          handleClick(e, "#skills");
        }}
      >
        <div className={classes.container}>
          <AcademicCapIcon height="30px" />
          <div className={classes.text}>My Skills</div>
        </div>
      </a>
      <a
        href="#pastWork"
        className={region == "#pastWork" ? classes.active : ""}
        onClick={(e) => {
          handleClick(e, "#pastWork");
        }}
      >
        <div className={classes.container}>
          <BriefcaseIcon height="30px" />
          <div className={classes.text}>Past Work</div>
        </div>
      </a>
      <div className={classes.socialIcons}>
        <SocialIcon url="https://github.com/Gitonizer" style={{margin:"auto", width: "33px", height: "33px"}}/>
        <SocialIcon url="https://www.linkedin.com/in/bruno-t-fatima/" style={{margin:"auto", width: "33px", height: "33px"}}/>
        <div />
      </div>
    </div>
  );
}

export default SideBar;
