import classes from "./ProjectPreview.module.css";
import { useState } from "react";
import MediaContent from "./MediaContent";
import Modal from "./ui/Modal";

var intervalId;

function ProjectPreview(props) {
  var index = 0;
  var running = false;
  const [currentImage, setCurrentImage] = useState(
    props.project.slideShowImages[index]
  );
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

  function startSlideShow() {
    if (running) return;

    index = 1;

    intervalId = setInterval(function () {
      running = true;
      setCurrentImage(
        props.project.slideShowImages[
          index % props.project.slideShowImages.length
        ]
      );
      index++;
    }, 1600);
  }

  function stopSlideShow() {
    clearInterval(intervalId);
    running = false;
    setCurrentImage(props.project.slideShowImages[0]);
  }

  return (
    <>
      <img
        onClick={onOpenHandler}
        className={`${classes.fadeInOut} ${classes.scaleUp} ${classes.image}`}
        src={currentImage}
        onMouseOver={startSlideShow}
        onMouseOut={stopSlideShow}
        alt="project"
        width="100px"
        height="100px"
      />

      {isOpen && (
        <Modal onClose={onCloseHandler} isClosing={isClosing}>
          {props.project.title && !props.project.logo && (
            <h1>{props.project.title}</h1>
          )}
          {props.project.logo && (
            <img
              className={classes.image}
              src={props.project.logo}
              alt="logo"
              width="50px"
              height="50px"
            />
          )}
          {props.project.media && <MediaContent media={props.project.media} />}
          {props.project.description && (
            <p>
              {props.project.description}{" "}
              {props.project.link && (
                <a href={props.project.link}> Download here!</a>
              )}
            </p>
          )}
        </Modal>
      )}
    </>
  );
}

export default ProjectPreview;
