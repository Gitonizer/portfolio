import classes from "./MainNavigation.module.css";

function MainNavigation(props) {
  return (
    <>
    <div>
      <h2 className={classes.title}>Software Engineer</h2>
    </div>
      { false && <div><header className={`${classes.header} ${classes.headerDesktop}` }>
        <div className={classes.logo}>{props.title}</div>
        <nav>
          <ul>
            <li>
              <a href="#aboutMe">{props.aboutMe} DESQUETOPE</a>
            </li>
            <li>
              <a href="#skills">{props.skills}</a>
            </li>
            <li>
              <a href="#pastwork">{props.pastWork}</a>
            </li>
          </ul>
        </nav>
      </header>

      <header className={`${classes.header} ${classes.headerMobile}` }>
        <div className={classes.logo}>{props.title}</div>
        <nav>
          <ul>
            <li>
              <a href="#aboutMe">{props.aboutMe} MOBILE</a>
            </li>
            <li>
              <a href="#skills">{props.skills}</a>
            </li>
            <li>
              <a href="#pastwork">{props.pastWork}</a>
            </li>
          </ul>
        </nav>
      </header></div> }
    </>
  );
}

export default MainNavigation;
