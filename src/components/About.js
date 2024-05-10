import Card from "./ui/Card";
import classes from "./About.module.css";

function About(props) {
  return (
    <Card textTop={props.textTop} textBot={props.textBot} region={props.region} propRef={props.aboutRef}>
      <div className={classes.gridImageRight}>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>

        <div className={classes.image}>
          <img src={props.image} className={classes.fadeOut} alt={props.title} />
        </div>
      </div>
    </Card>
  );
}

export default About;
