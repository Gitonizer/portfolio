import classes from "./IconText.module.css";

function IconText(props) {
  return (
    <div
      className={classes.gridImageLeft + " " + classes.card}
      style={{
        width: `${props.width}`,
      }}
    >
      {props.children}
    </div>
  );
}

export default IconText;
