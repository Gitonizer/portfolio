import classes from "./Header.module.css";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/linkedin";
import "react-social-icons/github";
import MediaQuery from "react-responsive";

function Header(props) {
  return (
    <header className={`${props.header} ${classes.header}`}>
      <div>
        <h2 className={classes.title}>Bruno Fátima | Software Developer</h2>
      </div>
      <div className={classes.socialIcons}>
        <MediaQuery query="(max-width: 1060px)">
          <SocialIcon
            url="https://github.com/Gitonizer"
            style={{ margin: "auto", width: "33px", height: "33px" }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/bruno-t-fatima/"
            style={{ margin: "auto", width: "33px", height: "33px" }}
          />
        </MediaQuery>
        <MediaQuery query="(min-width: 1060px)">
          <SocialIcon
            url="https://github.com/Gitonizer"
            style={{ margin: "auto", width: "45px", height: "45px" }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/bruno-t-fatima/"
            style={{ margin: "auto", width: "45px", height: "45px" }}
          />
        </MediaQuery>
      </div>
    </header>
  );
}

export default Header;
