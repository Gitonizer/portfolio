import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import SideBar from "../SideBar";

function Layout(props) {
  return (
    <div>
      <SideBar />
      <MainNavigation
        title={props.title}
        aboutMe={props.aboutMe}
        skills={props.skills}
        pastWork={props.pastWork}
      />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
