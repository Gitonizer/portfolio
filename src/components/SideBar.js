import classes from "./SideBar.module.css";
import { InformationCircleIcon, AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/solid";
import { useState, useContext } from "react";
import SideBarContext from "../store/sidebar-context";

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
        <InformationCircleIcon height="30px" />
        <div className={classes.text}>About Me</div>
      </a>
      <a
        href="#skills"
        className={region == "#skills" ? classes.active : ""}
        onClick={(e) => {
          handleClick(e, "#skills");
        }}
      >
        <AcademicCapIcon height="30px" />
        <div className={classes.text}>Skills</div>
      </a>
      <a
        href="#pastWork"
        className={region == "#pastWork" ? classes.active : ""}
        onClick={(e) => {
          handleClick(e, "#pastWork");
        }}
      >
        <BriefcaseIcon height="30px" />
        <div className={classes.text}>Past Work</div>
      </a>
    </div>
  );
}

export default SideBar;
