import classes from "./Modal.module.css";
import Backdrop from "./Backdrop";
import { useEffect, useState } from "react";

function Modal(props) {
  const [modalStyling, setModalStyling] = useState(classes.modal);

  useEffect(() => {
    setModalStyling(
      props.isClosing ? classes.animationPopOut : classes.animationPopIn
    );
  }, [props.isClosing]);

  return (
    <>
      <Backdrop onClose={props.onClose} isClosing={props.isClosing} />{" "}
      {/* prop drilling hype! */}
      <div className={classes.modal + " " + modalStyling}>
        <img className={classes.close} src="cross.png" onClick={props.onClose} />
        {props.children}
      </div>
    </>
  );
}

export default Modal;
