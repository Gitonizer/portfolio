import classes from "./MediaContent.module.css";
import ReactPlayer from "react-player";

function MediaContent(props) {
  function isMediaUrl() {
    try {
      return Boolean(new URL(props.media));
    } catch (e) {
      return false;
    }
  }

  function isMediaImage() {
    return Boolean(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(props.media));
  }

  function isMediaVideo() {
    return Boolean(/\.(mp4|MP4)$/i.test(props.media));
  }

  return (
    <>
      {isMediaImage() && <img src={props.media} width="100px" height="100px" />}
      {(isMediaVideo() || isMediaUrl()) && !isMediaImage() && (
        <div className={classes.content}>
          <div className={classes.playerWrapper}>
            <ReactPlayer
              url={props.media}
              className="react-player"
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default MediaContent;
