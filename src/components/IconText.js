import classes from "./IconText.module.css";
import Modal from "./ui/Modal";
import { useState } from "react";
import MediaContent from "./MediaContent";

function IconText(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  function onOpenHandler() {
    setIsOpen(true);
  }

  function onCloseHandler() {
    if (isClosing) return;
    setIsClosing(true);

    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 200);
  }

  return (
    <>
      <div
        onClick={onOpenHandler}
        className={`${classes.gridImageLeft} ${classes.card} ${classes.scaleUp}`}
        style={{
          width: `${props.width}`,
          fontSize: 14
        }}
      >
        {props.children}
      </div>

      {isOpen && (
        <Modal onClose={onCloseHandler} isClosing={isClosing}>
          {props.content.title && !props.content.logo && (
            <h1>{props.content.title}</h1>
          )}
          {props.content.logo && (
            <img src={props.content.logo} alt="logo" width="50px" height="50px" />
          )}
          {props.content.media && <MediaContent media={props.content.media} />}
          {props.content.description && (
            <p>{props.content.description}</p>
          )}
        </Modal>
      )}
    </>
  );
}

export default IconText;
