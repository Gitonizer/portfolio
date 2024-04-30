import classes from "./Backdrop.module.css";
import { useState, useEffect } from "react";

function Backdrop(props) {
  const [modalStyling, setModalStyling] = useState(classes.backdrop);

  useEffect(() => {
    setModalStyling(
      props.isClosing ? classes.animationFadeOut : classes.animationFadeIn
    );
  }, [props.isClosing]);

  return <div className={classes.backdrop + " " + modalStyling} onClick={props.onClose} />;
}

export default Backdrop;
